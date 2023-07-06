function mouseover(e){
        let ul=e.parentNode.childNodes[3];//找到ul
        let a=e.parentNode.childNodes[1];
        a.style.backgroundColor=" #359381";
        a.style.color="white";
        console.log(ul);
        let bigin=ul.offsetHeight;//记录ul的初始高度
        ul.style.height="63px";//bug/虽然很智障但是不能
         ul.style.display="block";
        let end=ul.offsetHeight;//记录结尾高度
        ul.style.height=bigin+"px";//回到展开前
        move(ul,bigin,end,10)
    }
function mouseout(e){
        let ul=e.childNodes[3];
        let a=e.childNodes[1];
        a.style.backgroundColor="";
        a.style.color=" #359381";
        console.log(ul)
        let bigin=ul.offsetHeight;//记录ul的初始高度
        ul.style.height="0px";
        ul.style.display="none";
        let end=ul.offsetHeight;//记录结尾高度
        ul.style.height=bigin+"px";//回到展开前
        move(ul,bigin,end,1)
    }
var key;    
function move(obj,bigin,end,speed){//移动动画
    let temp=0;
    clearInterval(key);
    if(bigin>end){
        speed=-speed;
    }
    key=setInterval(function(){
        temp=bigin+speed;
        obj.style.height=temp+"px";
        bigin+=speed;
        if((speed>0&&temp>=end)||(speed<0&&temp<=end)){//动画完就关闭
            clearInterval(key);
        }
    },10)
}
var key_ter;
var key_out;
let le=document.getElementById("img_ul").getElementsByTagName("li").length;
var start=new Array(le);
var end=new Array(le);
window.onload=()=>{
    console.log(document.getElementById("img_ul").getElementsByTagName("li").length);
    for(let i=0;i<length;i++){
        start[i]=i+1;
    }
    console.log(document.getElementById("img_ul").getElementsByTagName("li").length);
    let temp=1;
    e=start;
    var ul=document.getElementById("img_ul");
    var length=ul.getElementsByClassName("li").length;
    active(ul,0,end[temp++]*1400,10)
    setInterval(()=>{
        active(ul,end[temp]*1400,end[temp++]*1400,10)
    },1800)
}
function active(ul,start,end,speed){
    clearInterval(key_ter)
    let value;
    key_ter=setInterval(()=>{
        value=-(start+speed);
        ul.style.left=value+"px";
        temp++;
        if((speed>0&&-value>end)||(speed<0&&start<end)){
            clearInterval(key_ter)  
        }
        key_out=setTimeout(()=>{
            clearInterval(key_ter)
        },1425)
    },10)
}