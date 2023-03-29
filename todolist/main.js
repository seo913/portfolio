let sunMode = document.querySelector('.sunModeBtn'); //화이트모드
let darkMode = document.querySelector('.darkModeBtn') //다크모드
let view = document.querySelector('.content'); //투두리스트 박스 
let scrollQ = document.querySelector('.scrollQ'); //스크롤다운
let scrollB = document.querySelector('.scrollB'); //스크롤업
let time = document.querySelector('.time'); //시간
let inputBtn = document.querySelector('.inputBtn'); //투두리스트 버튼
let contentView = document.querySelector('.contentView'); //리스트 보이기
let todo = document.querySelector('.todo'); //리스트 쓰기
let weatherBtn = document.querySelector('.weatherBtn'); //날씨버튼
let weather = document.querySelector('.weather'); //날씨
const API_KEY="90b262ad0bbcf4114ef65b3e7d5ee20d";  //날씨 api 키
const weatherIcon = document.querySelector('.weatherIcon'); //날씨 아이콘
const weatherTemp = document.querySelector('.weatherTemp'); //현재날씨
const weatherhumidity = document.querySelector('.weatherhumidity'); //현재습도
const weatherspeed = document.querySelector('.weatherspeed'); //현재풍속



///////////////////////다크모드 화이트모드 구현
darkMode.addEventListener('click', function(){
    document.querySelector('body').classList.add('darkmode');
    
})
sunMode.addEventListener('click', function(){
    document.querySelector('body').classList.remove('darkmode');
})





///////////////////////시간 구현
function getTime(){
    const date = new Date();

    let Hours = String(date.getHours()).padStart(2, '0');
    let Minutes = String(date.getMinutes()).padStart(2, '0');
    let Seconds = String(date.getSeconds()).padStart(2, '0');

    time.innerText = `${Hours} : ${Minutes} : ${Seconds}`;
    }
    getTime();
    setInterval(getTime, 1000);




///////////////////////todolist 스크롤 구현
window.addEventListener('scroll',function(){
    if(window.scrollY > 10){
    view.style.display= 'block';
    scrollQ.style.display ='none';
    scrollB.style.display ='block';
    }else{
        view.style.display= 'none';
        scrollQ.style.display ='block';
        scrollB.style.display ='none';
    }

})



/////////////////////투두리스트 작동 
inputBtn.addEventListener('click',function(){
    let list = document.createElement('li'); //리스트생성
    if(todo.value == ""){
        alert('할 일을 입력해주세요!');
    }else{
    list.innerText = todo.value; //할일 입력
    contentView.appendChild(list); //리스트를 할일 자식 붙이기
    todo.value= "";   //텍스트초기화
    }
    
    list.addEventListener('click', function(){    
        list.style.textDecoration = "line-through"; // 완료한것 클릭  발생하면 줄 긋기
    })

    list.addEventListener('dblclick', function(){  
        contentView.removeChild(list); // 완료한것을 더블클릭하면 할 일 리스트창에서 지우기
    })

    })




///////////////////////날씨버튼기능
weatherBtn.addEventListener('click', function(){
    weather.style.display= 'block';
    weatherBtn.style.display='none';
})
weather.addEventListener('click', function(){
    weatherBtn.style.display= 'block';
    weather.style.display= 'none';
})




/////////////////////////날씨 api

navigator.geolocation.getCurrentPosition((position) => { 
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    // lat=${lat}&lon=${lon}  q=Seoul,kr
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        weatherTemp.innerText = "현재온도 : " + data.name + ", " + parseInt(data.main.temp) + "℃" ; 

        weatherhumidity.innerText = "현재습도 : " + data.name + ", " + parseInt(data.main.humidity) + "%";

        weatherspeed.innerText = "현재풍속 : " + data.name + ", " + parseInt(data.wind.speed) + "m/s";
        
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    });
}
);


// let chatTitle = document.querySelector('.chatTitle');
// let chatMain = document.querySelector('.chatMain');
// let close1 = document.querySelector('.close1');
// chatTitle.addEventListener('click', function(){
//     chatMain.classList.add('viewblock');
// }) 

