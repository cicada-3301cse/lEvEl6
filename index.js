function check() {
    //alert("checked")
var pass = "259";
console.log("hello")

function activate(){
    var paswd = document.getElementById("ans").value;
    if (paswd == pass) {
        console.log("hello");
        //alert("correct password");
        //window.location.replace('https://www.google.com')
        window.location.href = "https://cicada-3301cse.github.io/LeVeL7/";
    }
    else{
        console.log("hello")
        alert("wrogn password");
        
    }
}
}
