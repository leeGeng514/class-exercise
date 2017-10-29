function jsonp(obj) {

    var opt = {
        url: '',
        data: {},
        callback: 'callback',
        fnName: ('jquery' + new Date().getTime() + Math.random()).replace('.', ''),
        success: function () {
        },
        fail: function () {
        }
    };

    //将obj属性拷贝给opt
    Object.assign(opt, obj);

    //设置字段, callback字段是与后端约定好的,所以通过调用时传入的callback 来设置
    opt.data[opt.callback] = opt.fnName;

    //超时报错
    var timer = null;
    timer = setTimeout(function () {
        opt.fail();
    }, 5000);
    //在window下挂载 jsonp函数 因为它只能在全局下调用
    window[opt.fnName] = function (data) {
        clearTimeout(timer);
        opt.success(data);
    };

    //将传入的字段 拼接成一个字符串
    let arr = [];
    for (var attr in opt.data) {
        arr.push(attr + '=' + opt.data[attr]);
    }

    // 拼接好的字符串  name=123&age=123&sex=man&callback=jquery15091789547590041387035586101684
    let queryString = arr.join('&');

    let os = document.createElement('script');
    os.src = opt.url + '?' + queryString;
    document.getElementsByTagName('head')[0].appendChild(os);
    os.remove();
}