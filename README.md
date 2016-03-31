# hexo-generator-json

> hexo 文章生成 json 数据供 js 调用。 (目前仅支持 title link date tags 字段)


## 安装

``` sh
$ npm install --save 52cik/hexo-generator-json
```


## 使用

安装后无需任何操作，即可使用，当你执行 `hexo generate` 或 `hexo g` 时，自动生成 `search.json` 文件。


## 配置参数

如果你像默认生成 `search.json` 文件，可以通过修改 `_config.yml` 配置来指定名字。
打开 `_config.yml` 文件，在任意你喜欢的位置加上如下配置:

``` yml
plugin_json:
  path: my_search.json
```

如果你想使用 jsonp 格式，配置如下：

``` yml
plugin_json:
  callback: callback # 回调函数名
```

下面是完整默认配置：

``` yml
plugin_json:
  path: search.json
  keywords: true # 是否提取关键词字段
  date: true # 是否提取日期
  callback: false # jsonp 回调函数名 false 是 json 模式
```

好啦，尽情享受吧。
