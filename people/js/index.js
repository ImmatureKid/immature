$(function(){
    $(".newscon .hd ul li").hover(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var index = $(this).index();
        $(".newscon .bd ul").eq(index).show().siblings().hide();
    })
    var num = 0; 
    var timer = null;

    play();
    $(".banner .hd a").click(function(){
        num = $(this).index();
        show(num);
    })
    function show(num){
        $(".tempwarp .bd").css("left",(-num*640)+"px");
        $(".banner .hd a").eq(num).addClass("on").siblings().removeClass("on");
    }
   
    $(".banner .tempwarp").mouseover(function(){
        clearInterval(timer);
    })
    $(".banner .tempwarp").mouseleave(function(){
        play()
    })

    function play(){
        timer = setInterval(function(){
            num++
            if(num>4){
                num = 0;
            }  
           
            show(num);

        },3000);
    }
    $(".y-box>div").hide().eq(0).show();

    $(".yx_tab li").mouseover(function(){
        var index = $(this).index()+1;
        this.parentNode.className=("yx_tab nav"+index);
        $(this).addClass("on").siblings().removeClass("on");
        $(".y-box>div").eq(index-1).show().siblings().hide();
    })
    $(".yx-in>div>img").hover(function(){
        $(this).parent().addClass("jn_show").siblings().removeClass("jn_show");
    })
    var num1 = 3;
    var timer1=null;
    var styleArr =[
        {transform:"translateZ(-25px) translateX(100px)",
        zIndex:888},
        {transform:"translateZ(-50px) translateX(-200px)",
        zIndex:777},
        {transform:"translateZ(-25px) translateX(-100px)",
        zIndex:888},
        {transform:"none",
        zIndex:999},
        {transform:"translateZ(-25px) translateX(100px)",
        zIndex:888},
        {transform:"translateZ(-50px) translateX(-200px)",
        zIndex:777},
        {transform:"translateZ(-25px) translateX(-100px)",
        zIndex:888}
    ]
    zhedie(num1);
    $(".swrip-btn .swip-prev").click(function(){
        num1++
        if(num1>3){
            num1=0
        }
        zhedie(num1);

    })
    $(".swip-next").click(function(){
        num1--
        if(num1<0){
            num1=3
        } 
        zhedie(num1);

    })
    $(".swipernum span").each(function(index){
        $(this).click(function(){
         
            var num =index;
            num1 =3-num;
            console.log(num1);
            zhedie(num1);

        })
        
    })
    function zhedie(num){
        var arr = styleArr.slice(num,num+4)
        $(".swiper-wapper div").each(
            function(index){
                $(this).css({
                    "transform":arr[index].transform,
                    "z-index":arr[index].zIndex
                })  
                $(".swipernum span").eq(index).removeClass("on");

            }
        )   
        $(".swipernum span").eq(3-num).addClass("on");

    }
    paly1();
    $(".swiper-wapper").mouseover(function(){
        clearInterval(timer1);
    })
    $(".swiper-wapper").mouseleave(function(){
        paly1();
    })
    function paly1(){
        timer1 =setInterval(function(){
            $(".swip-next").click()
        },2000)
    }
    $(window).mousewheel(function(delta){
        return;
    })
})