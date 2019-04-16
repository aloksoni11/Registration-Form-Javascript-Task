//function display() {
//    var name = document.getElementById("name").value;
//    var email = document.getElementById("email").value;
//    var pwd = document.getElementById("pwd").value;
//    var table = document.getElementById("mytable");
// 
//    var tableLength=table.length;
//    
//    console.log(tableLength)
//    
//}
var x = document.getElementById("orange");
console.log(x);
var y = x.childNodes;
console.log(y[1]);

function red(item) {
    console.log(item.parentNode);
}