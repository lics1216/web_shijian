var index = async (ctx, next) => {
    ctx.response.redirect('back', '/test.html');
};

var content_sort = async (ctx, next) => {
    ctx.response.type = 'json';
    let data = [
        { mount: 3, sort: "日志" },
        { mount: 5, sort: '分类' },
        { mount: 3, sort: '标签' }
    ];
    ctx.response.body = JSON.stringify(data);
};


module.exports = {
    'GET /': index,
    'GET /content_sort': content_sort
};