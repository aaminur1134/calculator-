const numBtn = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");


for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", function(){
        let number = numBtn[i].getAttribute("data-num");
        screen.value += number;
    });

}

equalBtn.addEventListener("click",function(){
    let value = eval(screen.value);
    screen.value = value;
});

clearBtn.addEventListener("click",function(){
    screen.value = ' ';
});
