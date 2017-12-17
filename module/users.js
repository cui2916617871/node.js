function user(id,name,age){
    this.id =id;
    this.name =name;
    this.age=age;
    this.enger=function(){
        console.log(this.name+"进去图书馆")
    }
}
module.exports = user;