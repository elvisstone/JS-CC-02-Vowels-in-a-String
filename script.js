const body = document.querySelector("body");
const messageArea = document.querySelector("#messageBox");
const textInput = document.querySelector("#textArea");
const checkBtn = document.querySelector("#checkBtn");

const vowels = ["A","a","E","e","I","ı","İ","i","O","o","Ö","ö","u","Ü"];
let count = 0;

document.addEventListener("DOMContentLoaded",()=>{
    textInput.focus();
    checkBtn.addEventListener("click",() => {
        const words = textInput.value;
        for(let i in words){
            if(vowels.includes(words[i])){
                count++;
            }
        }
    
        const p = document.createElement("p");
        p.textContent = `There are ${count} vowels in`;
        messageArea.appendChild(p);
    
    
        const span = document.createElement("span");
        span.textContent = `${words}`;
        span.style.display = "block"
        span.style.color = "red";
        span.style.fontSize = "40px";
        span.style.fontWeight = "bold";
        messageArea.appendChild(span);
    
    
        setTimeout(() => {
            textInput.value = "";
            textInput.focus();
        }, 3000);
    
    
        setTimeout(() => {
            messageArea.removeChild(p);
            messageArea.removeChild(span);
        }, 3000);
    
    })
    
    
    textInput.addEventListener("keydown", (e) => {
        textInput.focus();
        if (e.key == "Enter") {
            checkBtn.click();
        }
    });
})


