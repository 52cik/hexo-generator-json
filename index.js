hexo.extend.generator.register(function(site) { // 注册插件
    var cfg = hexo.config.plugin_json || {}; // 配置

    var posts = []; // 所有文章
    var tags = {}; // 所有标签

    site.posts.sort('-date').forEach(function(page, idx) { // 按日期排序后遍历文章
        posts.push({
            title: page.title, // 标题
            date: cfg.date ? page.date.format('YYYY-MM-DD HH:mm:ss') : undefined, // 日期
            url: cfg.is_full_url ? page.permalink : page.path // 链接
        });

        page.tags && page.tags.forEach(function(tag) { // 标签
            (tags[tag.name] || (tags[tag.name] = [])).push(idx);
        });
    });

    var data = JSON.stringify({
        posts: posts,
        tags: tags
    });

    if (cfg.is_jsonp) { // jsonp 模式
        data = (cfg.callback || 'callback') + '(' + data + ')';
    }

    return {
        path: cfg.path || 'search.json',
        data: data
    };
});
