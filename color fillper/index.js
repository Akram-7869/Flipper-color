const but=document.querySelector(".button");
const colors=["green","red","rgba(133,122,200)","#f15025","brown","grey","peech"];
const spa=document.querySelector(".span");

but.addEventListener('click',function(){
    console.log("i have clicked on this buttton");
    let num=getnum();
    document.body.style.backgroundColor =colors[num];
    spa.textContent=colors[num];

});
function getnum(){
    return Math.floor(Math.random()*colors.length);
}
    
console.log("hellpp");