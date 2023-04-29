

function sayHi(){
    //alert("Hello")
    alert(window.innerHeight)

}

//window.sayHi()
//sayHi();


function change(){ 
    document.body.style.background = "red";
    setTimeout(() => document.body.style.background = "",1000);
}

change();