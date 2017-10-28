function jsonp(obj) {

    var opt={
        url:'',
        data:{},
        success:function () {},
        fail:function () {}
    };

    Object.assign(opt,obj);

    console.log(opt);
}