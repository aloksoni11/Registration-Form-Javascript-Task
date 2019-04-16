function display() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;
    var table = document.getElementById("mytable");
    console.log(table);
    var row = table.insertRow(1);
    var num = row.insertCell(0);
    num.innerHTML = "1";
    var nameCell = row.insertCell(1);
    nameCell.innerHTML = name;
    var emailCell = row.insertCell(2);
    emailCell.innerHTML = email;
    var pwdCell = row.insertCell(3);
    pwdCell.innerHTML = pwd;
    var update = row.insertCell(4);
    update.innerHTML = "UPDATE";
    var Delete = row.insertCell(5);
    Delete.innerHTML = "DELETE";
}