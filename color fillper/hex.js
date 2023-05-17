const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.querySelector(".button");
const color=document.querySelector(".span");
btn .addEventListener('click',function(){
    let idx='#';
    for(let i=0;i<6;i++){
           idx+=hex[getnum()];

    }
    
    document.body.style.background=idx;
    color.textContent=idx;
})
function getnum(){
    return Math.floor(Math.random()*hex.length);
}