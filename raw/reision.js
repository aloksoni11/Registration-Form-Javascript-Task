
    var h1=document.createElement("h1");
    
    var h1ttitl = document.createTextNode("HELLO");
    var h1ttitl1 = document.createTextNode("HELLOsfsdfds");
    
    h1.appendChild(h1ttitl);
    h1.appendChild(h1ttitl1);
    console.log(h1);
    
    
    h1.insertAdjacentHTML("afterBegin","<p>fsdf</p>")
    
    h1.innerHTML="<b>NEW DOCTOR</b>";