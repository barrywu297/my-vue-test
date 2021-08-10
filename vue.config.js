const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/cart/' : '/',

    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [path.resolve(__dirname, './src/styles/imports.scss')]
        }
    },
    devServer: {
        before(app) {
            //app是express实例
            app.get('/api/courses', (req, res) => {
                setTimeout(() => {
                    res.json([{ name: '测试1', price: 1288 }, { name: '测试2', price: 1288 }]);
                }, 2000);
            });
        },
        proxy: 'http://localhost:3000'
    }
}

// function addStyleResource(rule) {
//     rule.use('style-resource').loader('style-resources-loader').options({
//         patterns: [path.resolve(__dirname, './src/styles/imports.scss'), ],
//     });
// }

// module.exports = {
//     chainWebpack: config => {
//         const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
//         types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)));
//     },

//     pluginOptions: {
//       'style-resources-loader': {
//         preProcessor: 'scss',
//         patterns: []
//       }
//     }
// }