// function fun2(res){
//     console.log("woshoifun2")
//     res.write("你好，我是fun2")
// }
// module.exports = fun2;
module.exports = {
    fun2:function(res){
        console.log("woshoifun2")
        res.write("你好，我是fun2")
    },
    fun3:function(res){
        console.log("woshoifun3")
        res.write("你好，我是fun3")
    }
}