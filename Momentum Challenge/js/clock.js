const clock = document.querySelector("h1#clock");

function getClock(){
    const date = new Date();
    //string으로 바꿔야 padStart 사용가능
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock,1000);  //1초마다 실행