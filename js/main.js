var rowValue = 0;

function display() {
    var name1 = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    var table = document.getElementById("mytable");
    var tableLength = table.rows.length;
    if (name1 == "" || email == "" || pwd == "") {
        alert("fill form properly!")
    }
    else {
        table.insertRow(tableLength).innerHTML = "<td id='length'>" + tableLength + "<td id='name1'>" + name1 + "</td><td id='email1'>" + email + "</td><td id='pwd1'>" + pwd + "</td><td><button class='btn btn-primary update' onclick='UpdateData(this)'>UPDATE</button></td><td ><button class='btn btn-danger' onclick='deletB(this)'>DELETE</button></td>";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pwd").value = "";
    }
}

function UpdateData(item) {
    var x = document.getElementById("Update");
    x.style.display = "inline-block";
    var par = item.parentNode.parentNode;
    rowValue = par.rowIndex;
    console.log(par.rowIndex);
    var a = document.getElementById("uname");
    var B = document.getElementById("uemail");
    var c = document.getElementById("upwd");
    a.value = par.childNodes[1].innerHTML;
    B.value = par.childNodes[2].innerHTML;
    c.value = par.childNodes[3].innerHTML;
}

function closeB() {
    var x = document.getElementById("Update");
    x.style.display = "none";
}

function deletB(del) {
    var par = del.parentNode.parentNode;
    rowValue = par.rowIndex;
    console.log(rowValue);
    var table = document.getElementById("mytable");
    table.deleteRow(rowValue);
}

function updatepo() {
    var table = document.getElementById("mytable");
    var newRow = table.rows[rowValue];
    var x = document.getElementById("uname").value;
    var y = document.getElementById("uemail").value;
    var z = document.getElementById("upwd").value;
    newRow.childNodes[1].innerHTML = x;
    newRow.childNodes[2].innerHTML = y;
    newRow.childNodes[3].innerHTML = z;
    console.log();
}