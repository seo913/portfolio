let textTitle = document.querySelector('.textTitle'); //제목
let textBox = document.querySelector('.textBox'); //텍스트박스
let backBtn = document.querySelector('.backBtn'); //뒤로가기버튼
let okBtn = document.querySelector('.okBtn'); //저장하기
let viewContent = document.querySelector('.viewContent'); //메인로비
let createNoteBtn = document.querySelector('.createNoteBtn'); //작성하기버튼
let view1 = document.querySelector('.view1'); //보여주는곳
let titleview = document.querySelector('.titleview'); //제목보여주기
let contentdiv = document.querySelector('.contentdiv'); //
backBtn.addEventListener('click', function () {
  //뒤로가기
  viewContent.style.display = 'inline-block';
  document.querySelector('main').style.display = 'none';
});

createNoteBtn.addEventListener('click', function () {
  //작성하기
  viewContent.style.display = 'none';
  document.querySelector('main').style.display = 'inline-block';
});

okBtn.addEventListener('click', function () {
  viewContent.style.display = 'inline-block';
  document.querySelector('main').style.display = 'none';

  var T = document.createElement('div');

  var V = document.createElement('div');
  T.innerText = '내용 : ' + textBox.value; // <div>제목</div>
  titleview.appendChild(V); //
  V.innerText = '제목 : ' + textTitle.value;
  contentdiv.appendChild(T); //<div>내용</div>
  textTitle.value = '';
  textBox.value = '';
});
