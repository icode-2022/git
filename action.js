   var hill1=document.getElementById("hill1");
   var hill4=document.getElementById("hill4");
   var hill5=document.getElementById("hill5");
   var leaf=document.getElementById("leaf");
   var test=document.getElementById("test");
   var header=document.getElementById("head");
    //设置动态画面
    window.addEventListener('scroll', () => {
    var num=window.scrollY;
    if(num<=540){
    hill1.style.top=num+"px";
    hill4.style.left=-num+"px";
    hill5.style.left=num+"px";
    leaf.style.right=-num+"px";
    leaf.style.top=-num+"px";
    test.style.marginTop=num+"px";
    header.style.marginTop=num+"px";
    }
    }
    )