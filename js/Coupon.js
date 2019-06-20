window.addEventListener("load",function(){
    let Switch = document.querySelectorAll(".nav > li");
    let uls = document.querySelectorAll("section > ul")
    console.log(Switch);
    let prev = 0;
    for (let i = 0; i < Switch.length; i++){
        Switch[i].onclick = function(){
            Switch[prev].classList.remove("hot");
            Switch[i].classList.add("hot");
            uls[prev].style.display = "none";
            uls[i].style.display = "block";
            prev = i;
        }
    }
})