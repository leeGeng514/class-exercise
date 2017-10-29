/*
*
*
*   一个文件就是一个module,每个module都有自己的作用域
*
*   使用var来申明的变量，并不是global的，而是属于当前module下的
*
*    script下的顶层对象是window
*
*    node.js下的顶层对象是global
*
* */

/*
var a=100;  //这个a是module下的

global.a=200; //这个a是全局的

console.log(a);
console.log(global.a);

*/

//__filename  文件被解析过后的绝对路径 ！注意:__filename 属性也是属于当前module下的
// console.log(__filename);


//加载模块的方法 require(module);
/*
*   注意:require(./2.js)与require(2.js)的区别
*   !!~~同目录下的模块路径必须加 ./  否则nodeJs会加载核心模块,或者是node_modules下的文件
*
*   查找机制:文件名-> 文件名.js -> 文件名.json -> 文件名.node ->
*
*
*
* */
require('./2.js');

//因为module内的变量是局部的，但是在这个module又想用到加载module的变量，
// 就可以通过 module.exports属性 值是一个对象，
// 将变量挂载在 对象内
// 通过require方法引入的module，会有一个返回值，返回值就是被引入的module.exports

console.log(exports===module.exports);