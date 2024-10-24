// function check() {
//     alert("checked")
// console.log("hello")
// }


var pass = "259";


function activate(){
    var paswd = document.getElementById("ans").value;
    if (paswd == pass) {
        // console.log("hello");
        //alert("correct password");
        //window.location.replace('https://www.google.com')
        window.location.href = "https://cicada-3301cse.github.io/LeVeL7/";
    }
    else{
        alert("wrogn password");
        
    }
}

