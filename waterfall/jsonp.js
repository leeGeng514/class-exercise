function jsonp(obj) {
    //默认项
    var opt={
        url:'',
        data:{},
        callback:'callback',
        fnName:('jquery'+new Date().getTime()+Math.random()).replace('.',''),
        success:function () {},
        fail:function () {}
    };

    //有配置走配置，没配置走默认
    for(var attr in obj){
        opt[attr]=obj[attr];
    }
    //因为callback不是写死的,是调用时传入的。这时给 对象opt的data属性下添加一个
    opt.data[opt.callback]=opt.fnName;

    //拼字段
    var arr=[];
    for(var attr in opt.data){
        arr.push(attr+'='+opt.data[attr]);
    }
    //将拼好的字段转回字符串
    var queryString=arr.join('&');

    //判断是否请求超时
    var timer=null;
    timer=setTimeout(function () {
        opt.fail();
    },5000);
    // 当script标签插入head内时,jsonp函数会在全局作用域下调用,如果全局作用域下没有jsonp函数,会报错
    window[opt.fnName]=function (obj) {
        clearTimeout(timer);
        opt.success(obj);
    };
    //添加script标签
    var os=document.createElement('script');
    //添加url加上传入的字段
    os.scr= opt.url+'?'+queryString;
    document.getElementsByTagName('head')[0].appendChild(os);
    os.remove();
}