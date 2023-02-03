let colorOutput = document.querySelector("#myColor span");
let text = document.querySelector("#output-text");
let generateBtn = document.querySelector("#generateBtn");
let copyBtn = document.querySelector("#copyBtn");
let alertInfo = document.querySelector("#info")

let hex = "0123456789abcdef"

generateHexCode = () => {
    let hexCode = "#"
    for(let i = 0; i < 6; i++){
        hexCode += hex[Math.floor(Math.random() * hex.length)];
    }
    text.value = hexCode;
    colorOutput.classList.remove("myColor-disp")
    setTimeout( () => {
        colorOutput.classList.add("myColor-disp");
    }, 10);
    colorOutput.style.backgroundColor = hexCode;
    text.style.color = hexCode;
};

copyBtn.addEventListener('click', () => {
    text.select();
    document.execCommand("copy");
    alertInfo.style.transform = "translateX(0)"
    setTimeout( () => {
        alertInfo.style.transform = "translateX(calc(100% + 10px))"
    }, 2000);

});

window.onload = generateHexCode;
generateBtn.addEventListener('click', generateHexCode);