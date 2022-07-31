
 var main = document.querySelector("#main");
 var imgbox = document.querySelector("#imgbox");
var arr = [{color:"#22222a",textcolor:"#aa965a",img:"https://visuals.brybry.co/img/vis-snaps/opt/01.jpg"},
            {color:"#fd9879",textcolor:"#f9e8e3",img:"https://visuals.brybry.co/img/vis-snaps/opt/02.jpg"},
            {color:"#6a38f8",textcolor:"#f188fa",img:"https://visuals.brybry.co/img/vis-snaps/opt/03.jpg"},
            { color:"#78a19c",textcolor:"#f0ecde",img:"https://visuals.brybry.co/img/vis-snaps/opt/04.jpg"},
            { color:"#76bacb",textcolor:"#395474",img:"https://visuals.brybry.co/img/vis-snaps/opt/05.png"},
            { color:"#191f5d",textcolor:"#fd1158",img:"https://visuals.brybry.co/img/vis-snaps/opt/06.png"},
            { color:"#2bc3c9",textcolor:"#f8eb41",img:"https://visuals.brybry.co/img/vis-snaps/opt/07.jpg"},
            { color:"#fff800",textcolor:"#181818",img:"https://visuals.brybry.co/img/vis-snaps/opt/08.jpg"},
            { color:"#793d2b",textcolor:"#fabad9",img:"https://visuals.brybry.co/img/visuals/pieces/02.png"},
]
main.addEventListener("mousemove",function(){
        var num = Math.floor(Math.random()*9);
        main.style.backgroundColor = `${arr[num].color}`;
        main.style.color = `${arr[num].textcolor}`
        imgbox.style.backgroundImage = `url(${arr[num].img})`
    })


    var circle = document.querySelector("#main>img");
    window.addEventListener("mousemove",function(dets){
           circle.style.left = `${dets.x}px`;
           circle.style.top = `${dets.y}px`;

    })

