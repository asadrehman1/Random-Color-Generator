const btn = document.querySelector("button");
const text = document.querySelector("h1");
btn.addEventListener("click",function(){
    const newColor=makeRandColor();
    document.body.style.backgroundColor=newColor;
    text.innerText=newColor;
})
function makeRandColor(){
    const r = Math.floor(Math.random() *255);
    const g = Math.floor(Math.random() *255);
    const b = Math.floor(Math.random() *255);

    return `rgb(${r},${g},${b})`;
}

