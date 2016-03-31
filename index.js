hexo.extend.generator.register(function(site) { // 注册插件
    var cfg = hexo.config.plugin_json || {}; // 配置

    var posts = []; // 所有文章
    var tags = {}; // 所有标签

    site.posts.sort('-date').forEach(function(page) { // 按日期排序后遍历文章
        var dt = new Date(page.date);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset()); // 修正时区偏移
        var date = dt.toISOString().slice(0, -5).replace(/[T]/g, ' ');

        posts.push({
            title: page.title, // 标题
            keywords: cfg.keywords ? page.keywords : undefined, // 自定义关键词字段
            date: cfg.date ? date : undefined, // 日期
            link: page.permalink // 链接
        });

        page.tags && page.tags.forEach(function(tag) { // 标签
            tags[tag.name] = tag.permalink;
        });
    });

    var data = JSON.stringify({
        posts: posts,
        tags: tags
    });

    if (cfg.callback) { // jsonp
        data = cfg.callback + '(' + data + ')';
    }

    return {
        path: cfg.path || 'search.json',
        data: data
    };
});
