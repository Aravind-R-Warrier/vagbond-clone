var initialpath=`M 10 100 Q 500 100 990 100`

var finalpath=`M 10 100 Q 500 100 990 100`

var string=document.querySelector("#string")

string.addEventListener("mousemove",function(dets){
    path=`M 10 100 Q 500 ${dets.y} 990 100`
    gsap.to("svg path",{
        attr:{
            d:path,
        }
    })
})