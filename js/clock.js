var girilenIsım = document.querySelector("#myName");
girilenIsım.innerHTML = prompt("Adınız Nedir");

function showTime() {

    let tarih = new Date();
    
    var gunler = 
    ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML =`
    ${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()}
    ${gunler[tarih.getDay()]}
    ` ;
    }
    setInterval(showTime,1000)