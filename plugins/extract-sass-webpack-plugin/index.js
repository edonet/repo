'use strict';

const
    fs = require('fs'),
    path = require('path'),
    Async = require('./async'),
    SingleEntryPlugin = require('webpack/lib/SingleEntryPlugin');


class ExtractSassWebpackPlugin {
    constructor(options = {}) {
        this.name = options.name || `index-${+ new Date()}`;
        this.entry = `./${this.name}.scss`;
        this.regexp = /\.(scss|css|sass)$/;
        this.loader = path.resolve(__dirname, 'loader.js');
        this.placeholder = path.resolve(__dirname, 'chunk.js');
        this.assets = {};
        this.dependencies = [];
    }

    // 执行插件内容
    apply(compiler) {
        let activeModules = {};
        const async = new Async();


        // 添加入口文件
        compiler.plugin('make', (compilation, callback) => {
            const
                dep = SingleEntryPlugin.createDependency(this.entry, this.name);

            compilation.addEntry(compiler.context, dep, this.name, callback);
        });

        // 处理【Sass】模块
        compiler.plugin('normal-module-factory', nmf => {

            // 模块解析前处理
            nmf.plugin('before-resolve', (data, callback) => {

                // 挂起【Sass】入口文件
                if (data.request === this.entry) {
                    return async.wait(() => {
                        activeModules = null;
                        this.entry = path.resolve(compiler.context, this.entry);
                        this.createEntry(() => callback(null, data));
                    });
                }

                // 继续下一步
                callback(null, data);
            });

            // 模块解析后处理
            nmf.plugin('after-resolve', (data, callback) => {

                // 处理依赖样式
                if (this.regexp.test(data.request) && activeModules) {
                    data.loaders = [this.loader];
                }

                // 缓存当前编译的模块
                if (activeModules && !(data.userRequest in activeModules)) {
                    async.mark();
                    activeModules[data.userRequest] = true;
                }

                // 继续下一步
                callback(null, data);
            });

        });

        // 处理模块编译事件
        compiler.plugin('compilation', compilation => {

            // 处理编译成功的模块
            compilation.plugin('succeed-module', module => {

                if (module.userRequest) {
                    this.addAssets(module.userRequest, module.dependencies);
                }

                if (activeModules) {
                    async.resolve();
                    activeModules[module.userRequest] = false;
                }
            });

            // 处理编译失败的模块
            compilation.plugin('failed-module', module => {
                if (activeModules) {
                    async.resolve();
                    activeModules[module.userRequest] = false;
                }
            });
        });
    }

    // 添加资源
    addAssets(request, dependencies) {
        var deps = [],
            dirname = path.dirname(request);

        // 提取依赖模块
        dependencies.forEach(dep => {
            if (!dep.request || dep.request[0] !== '.') {
                return false;
            }

            let filepath = path.resolve(dirname, dep.request);

            deps.push(filepath);

            if (/\/[^\.]+$/.test(filepath)) {
                deps.push(filepath + '.js', filepath + '.json', filepath + '/index.js');
            }

        });

        this.assets[request] = deps;
    }

    // 添加依赖模块
    addDependencies() {
        let deps = [],
            map = {},
            walk = arr => {
                arr.forEach(request => {
                    if (request in map || !(request in this.assets)) {
                        return false;
                    }

                    if (this.regexp.test(request)) {
                        deps.push(request.replace(this.regexp, ''));
                    }

                    map[request] = true;
                    walk(this.assets[request]);
                });
            };

        return walk(Object.keys(this.assets)) || deps;
    }

    // 更新输入源内容
    createEntry(callback) {
        fs.writeFile(this.entry, this.addDependencies().map(chunk => {
            return `@import "${ chunk }";`;
        }).join('\n'), callback);
    }
}



module.exports = ExtractSassWebpackPlugin;
