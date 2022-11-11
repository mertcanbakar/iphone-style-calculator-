const numbers = document.querySelectorAll(".number");
const result = document.querySelector(".result span");
const signs = document.querySelectorAll(".sign");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const negative = document.querySelector(".negative");
const percent = document.querySelector(".percent")

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;
for (let i = 0; i < numbers.length; i++) {
    //tüm buttonların value bilgisini for döngüsüyle aldık
    numbers[i].addEventListener("click", function (e) {
        let atr = e.target.getAttribute('value');
        if (isFirstValue == false) {
            getFirstValue(atr)
            console.log("tıklandı")
        }
        if (isSecondValue == false) {
            getSecondValue(atr);
        }
    })
}
// birinci değerin fonksiyonu
function getFirstValue(value) {
    result.innerHTML = "";
    firstValue += value;
    result.innerHTML = firstValue;
    firstValue = +firstValue
}
// ikinci değerin fonksiyonu
function getSecondValue(value) {
    if (firstValue != "" && sign != "") {
        secondValue += value;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}
// matematik operatör buttonlarının işlemleri
function getSign(){
    for(let i = 0; i < signs.length ; i++){
        signs[i].addEventListener("click", function(e){
            sign = e.target.getAttribute("value");
            isFirstValue = true;
        })
    }
}
getSign();
// equals'ın işlevi
equals.addEventListener("click", function(){
    result.innerHTML = "";
    if(sign === "+"){
    resultValue = firstValue + secondValue;
    }else if(sign === "-"){
        resultValue = firstValue - secondValue;
    }else if(sign === "x"){
        resultValue = firstValue * secondValue;
    }else if(sign === "/"){
        resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    //eşittir her kullanıldığında value bilgisini güncelleyeceğiz
    firstValue = resultValue;
    secondValue = "";
});

// güncellediğimiz value bilgisini check edip oluşabilecek hataları gideriyoruz
function checkResultLength(){
    resultValue = JSON.stringify(resultValue);
    if(resultValue.length >= 8){
        resultValue.JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed
    }
}
// negative özellikli button'un işlevi
negative.addEventListener("click", function(){
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = -resultValue;
    }
    result.innerHTML = resultValue;
})
// yüzdelik özellikli button işlevi
percent.addEventListener("click", function(){
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = resultValue / 100;
    }
    result.innerHTML = resultValue;  
    
})
// clear(AC) button'un işlevi
clear.addEventListener("click", function(){
// tüm değerleri sıfırlıyoruz.
    result.innerHTML = 0;
    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
})