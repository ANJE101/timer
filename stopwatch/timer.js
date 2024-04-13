var m = 0;
var s = 0;
var t;
function start(){
    t = setInterval(run, 1000);//argument
}
function run(){
    document.getElementById("sec").innerHTML = s;
    document.getElementById("min").innerHTML = m;
    if(s< 59){
        s = s + 1;
    }
    else{
        s = 0;
        m = m + 1;
    }
}
function stop(){
    clearInterval(t);
}


