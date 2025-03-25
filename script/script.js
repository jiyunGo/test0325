$(document).ready(function(){
    /*모바일 시작*/
    function mobile(){
    $(".gnb>li").on("click",function(){
        $(this).children(".gnb_sub").slideToggle(500)
    })
    //모바일 햄버거버튼
    $(".ham_btn").on("click",function(){
        $(".gnb").on().slideToggle(500) 
    })

    let btn = true;
    $(".ham_btn").on("click",function(){
        btn = !btn;
        if(btn == false){
            $(".h_wrap").css("backgroundColor" , "#ffd200")
                $(".btn_line").css("backgroundColor", "#333")
                $(".h_wrap h1").css("color", "#444")
                $(".h_wrap h1").css("textShadow", "3px 3px 2px #888")
           
        }else{
            $(".h_wrap").css("backgroundColor" , "#222")
            $(".btn_line").css("backgroundColor", "#ffd200")
            $(".h_wrap h1").css("color", "#ffd200")
            $(".h_wrap h1").css("textShadow", "3px 3px 2px #333")
        
        }
    })
  

    //정도 버튼
    $(".jung_btn").on("click",function(){
     let i = $(this).index()
     console.log(i)
     $(".jung_img").children("li").eq(i).fadeIn(800).siblings().hide()
     $(".jung_txt").children(".jung_text").eq(i).fadeIn(800).siblings().hide()

    })
    //정도 텍스트 슬라이드
    let jt = 0;
    function jun(){
      let jtx = (jt+1) % 3;
      $(".jung_txt").children(".jung_text").eq(jtx-1).fadeOut(1000);
      $(".jung_txt").children(".jung_text").eq(jtx).fadeIn(1000);
      jt++
    }setInterval(jun, 3000)

    //정도 이미지 슬라이드 
    let ji = 0;
    function juns(){
      let ju = (ji+1) % 3;
      $(".jung_img").children(".jung_image").eq(ju-1).fadeOut(1000);
      $(".jung_img").children(".jung_image").eq(ju).fadeIn(1000);
      ji++
    }setInterval(juns, 3000)


    //뉴스슬라이드1
    let swiperTop = new Swiper(".slide1", {
      autoplay:{
        delay: 0
      },
      spaceBetween:0,
      slidesPerView:3,
      speed: 3000,
      loop:true,
    });

    //뉴스슬라이드2
    let swiperBottom = new Swiper(".slide2", {
      autoplay:{
        delay:0,
        reverseDirection:true,
      },
      spaceBetween:0,
      slidesPerView:3,
      speed: 3000,
      loop:true,
    });
    }/*모바일끝*/

/*태블릿 시작 */
function tablet(){
  $(".gnb>li").on("click",function(){
    $(this).children(".gnb_sub").slideToggle(500)
})



//정도 버튼
$(".jung_btn").on("click",function(){
 let i = $(this).index()
 console.log(i)
 $(".jung_img").children("li").eq(i).fadeIn(800).siblings().hide()
 $(".jung_txt").children(".jung_text").eq(i).fadeIn(800).siblings().hide()

})
//정도 텍스트 슬라이드
let jt = 0;
function jun(){
  let jtx = (jt+1) % 3;
  $(".jung_txt").children(".jung_text").eq(jtx-1).fadeOut(1000);
  $(".jung_txt").children(".jung_text").eq(jtx).fadeIn(1000);
  jt++
}setInterval(jun, 3000)

//정도 이미지 슬라이드 
let ji = 0;
function juns(){
  let ju = (ji+1) % 3;
  $(".jung_img").children(".jung_image").eq(ju-1).fadeOut(1000);
  $(".jung_img").children(".jung_image").eq(ju).fadeIn(1000);
  ji++
}setInterval(juns, 3000)


//뉴스슬라이드1
let swiperTop = new Swiper(".slide1", {
  autoplay:{
    delay: 0
  },
  spaceBetween:0,
  slidesPerView:4,
  speed: 3000,
  loop:true,
});

//뉴스슬라이드2
let swiperBottom = new Swiper(".slide2", {
  autoplay:{
    delay:0,
    reverseDirection:true,
  },
  loop:true,
  spaceBetween:0,
  slidesPerView:4,
  speed: 3000,
});
  }/*태블릿끝*/

/*pc시작*/
function pc(){
  $(".gnb>li").on("click",function(){
    $(this).children(".gnb_sub").slideToggle(500)
})


//정도 버튼
$(".jung_btn").on("click",function(){
 let i = $(this).index()
 console.log(i)
 $(".jung_img").children("li").eq(i).fadeIn(800).siblings().hide()
 $(".jung_txt").children(".jung_text").eq(i).fadeIn(800).siblings().hide()

})
//정도 텍스트 슬라이드
let jt = 0;
function jun(){
  let jtx = (jt+1) % 3;
  $(".jung_txt").children(".jung_text").eq(jtx-1).fadeOut(1000);
  $(".jung_txt").children(".jung_text").eq(jtx).fadeIn(1000);
  jt++
}setInterval(jun, 3000)

//정도 이미지 슬라이드 
let ji = 0;
function juns(){
  let ju = (ji+1) % 3;
  $(".jung_img").children(".jung_image").eq(ju-1).fadeOut(1000);
  $(".jung_img").children(".jung_image").eq(ju).fadeIn(1000);
  ji++
}setInterval(juns, 3000)


    //뉴스슬라이드1
    let swiperTop = new Swiper(".slide1", {
      autoplay:{
        delay: 0
      },
      spaceBetween:0,
      slidesPerView:5,
      speed: 3000,
      loop:true,
    });

    //뉴스슬라이드2
    let swiperBottom = new Swiper(".slide2", {
      autoplay:{
        delay:0,
        reverseDirection:true,
      },
      spaceBetween:0,
      slidesPerView:3,
      speed: 3000,
      loop:true,
    });
}/*pc끝*/

AOS.init()

  let winWidth = $(window).width();
  if(winWidth < 780){
    mobile()
  }else if(780 <= winWidth < 1440){
    tablet()
  }else{
    pc()
  }

$(window).resize(function(){
  document.location.reload();
})
})//document