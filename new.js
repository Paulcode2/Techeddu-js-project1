// Get elements
const count = document.getElementById("count");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const res = document.getElementById("reset");

add.addEventListener("click", ()=>{
    count.innerHTML++;
    setColor()
})
sub.addEventListener("click", ()=>{
    count.innerHTML--;
    setColor()
})
res.addEventListener("click", ()=>{
    count.innerHTML = 0;
    setColor()
})


const setColor = ()=>{
    if (count.innerHTML > 0){
        count.style.color = "rgb(0, 255, 0)"
    } else if (count.innerHTML < 0){
        count.style.color = "red"
    } else{
        count.style.color = "white"
    }
}