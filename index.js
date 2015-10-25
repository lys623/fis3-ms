//vi foo/index.js
var fis = module.exports = require('fis3');
fis.require.prefixes.unshift('ms');
fis.cli.name = 'ms';
fis.cli.info = require('./package.json');
fis.cli.version = require('./version.js');

fis.match('build/**',{
    release:false
}).match('README.md',{
    release:false
})
fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less-2.x', {

    })
})
fis.match('*.html', {
    parser: fis.plugin('translate-widget'),
    useCache:false
})

fis.match('*.es6', {
    rExt: '.js',
    isJsLike:true,
    //query: '?t=' + Date.now(),
    parser: fis.plugin('babel')
});

fis.config.set('settings',{
    connect : {
        host:'***',
        user:'***',
        password:'***'
    },
    "baseDir": "", //静态文件名称
    "cssDir": "css", //css文件夹名称
    "imgDir": "css/i", //css/i文件夹名称
    "imagesDir": "images", //images文件夹名称
    "jsDir": "js", //js文件夹名称
    "htmlDir": "html", //html文件夹名称
    "widgetDir": "widget", //widget文件夹名称
    "cdn":"http://www.miaoshoucdn.com",
    "devcdn": "http://192.168.97.150:89", //newcdn
    "serverDir": "/wwwroot/www.miaoshoucdn.com/", //上传至远端服务器文件夹的名称
    "previewServerDir": "/wwwroot/page.miaoshou.com/", //html文件夹上传至服务器所在的文件夹名称
    "widgetServerDir": "/wwwroot/widget.miaoshou.com/", //widget服务器所在的文件夹名称
    "build":{
        "jsPlace": "insertBody", //调试时js文件位置 insertHead|insertBody
        "widgetIncludeComment":true,//widget引用带注释
        "livereload":false, //是否开启liveload
        "sass":true,//是否开启sass编译
        "less":true,//是否开启less编译
        "csslint":false,//是否开启csslint
        "weinre": false, //是否开启移动设备调试
        "weinreUrl": "http://123.56.105.44:8080"//调试移动设备的服务器地址
    },
    "output":{
        "vm": true, //是否开启vm编译
        "jsPlace": "insertBody", //编译后js文件位置 insertHead|insertBody
        "encoding": "utf-8"//指定项目的编码格式：utf-8，gbk
    },
    "widgetDir":"widget",
    "widget":{
        //widget预览所依赖的js
        "js": [
            "http://www.miaoshoucdn.com/static/js/wap/zepto.min.js",
            "http://www.miaoshoucdn.com/static/js/wap/fastclick.js"
        ],
        //widget预览所依赖的css
        "css": [
            "http://www.miaoshoucdn.com/static/css/wap/common.css",
            "http://www.miaoshoucdn.com/static/css/wap/public.css"
        ],

        //新建widget文件夹的文件类型
        "createFiles": ["vm"]
    }
})