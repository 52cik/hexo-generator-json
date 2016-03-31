hexo.extend.generator.register(function(site) { // 注册插件
    var posts = [];
    var tags = {};

    site.posts.sort('-date').forEach(function (page) {
        var dt = new Date(page.date);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset()); // 修正时区偏移
        var date = dt.toISOString().slice(0, -5).replace(/[T]/g, ' ');

        posts.push({
            title: page.title,
            keywords: page.keywords,
            // page.description || page.excerpt,
            date: date,
            link: page.permalink
        });

        page.tags && page.tags.forEach(function(tag) {
            tags[tag.name] = tag.permalink;
        });
    });

    return {
        path: 'search.json',
        data: JSON.stringify({posts: posts, tags: tags})
    };
});
