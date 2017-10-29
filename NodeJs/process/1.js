



// console.log(global.process);
// console.log(process.env);

// setTimeout(function () {
//    process.exit();
// },3000);


//输入 输出 stdin输入 stdout输出

//console.log 内部运行原理

// function log(data) {
//     process.stdout.write(data);
// }
//
// log('hello world');



process.stdin.resume();//默认情况下输入流是关闭的。需要调用resume方法，手动打开
//用于监听用户输入的数据
process.stdin.on('data',function (chunk) {
   console.log('用户输入了:'+chunk);
});
