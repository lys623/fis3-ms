**fis3-ms**
# 命令手册

## ms project
* `ms project -n xxx  -p`，在本地初始化一个jdf的标准项目，目录结构如下所示。`xxx`为项目名可省略。

<pre>
jdf_init
├── fis-conf.js      //ms配置文件与编译配置
├── css
│    └── i           //css中的背景图片
├── html             //html文件夹
│    └── index.html  //项目的默认首页
├── js
├── widget           //页面中用到的所有widget
</pre>


* ` -p`，生成pc模版
* `-m`,  生成mobile模版
* `-u`,上传css/js/widget/html到服务器
* `-uc`，上传css/js/widget/至www.miaoshou.com文件夹；
* `-uh`，上传html至page.miaoshou.com文件夹；

## ms widget
组件相关命令

* `-c  xxx`,create,在本地widget里生成xxx模块
* `-i xxx`,install,从服务器上下载xxx模块到本地
* `-l`,list,获取服务器widget列表
* `-a`,all,预览本地所有widget
* `-p xxx`,preview，预览本地xxx widget
* `-u xxx`,upload,上传xxx widget到服务器


---



## ms server start

开启一个用来调试代码，默认端口为`8080`





## ms server clean

清理ms server缓存文件，遇到比较反常的现象时，可尝试执行一下此命令

## ms project -h,ms project -m

获取相关帮助信息

## ms -v

获取ms的当前版本号

