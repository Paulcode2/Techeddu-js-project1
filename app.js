const count =  document.querySelector(".count");
const add =  document.querySelector(".add");
const sub =  document.querySelector(".sub");
const res = document.querySelector(".reset")

// First and easy method

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

const setColor = () =>{
    if (count.innerHTML > 0){
        count.style.color = "rgb(0, 255, 0)"
    }
    else if (count.innerHTML < 0){
        count.style.color = "red"
    }
    else {
        count.style.color = "white"
    }
}

