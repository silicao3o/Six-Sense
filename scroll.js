const wrap = document.getElementsByClassName('wrap')[0]; // 보이는 영역
const Scrollpage = document.getElementsByClassName('Scrollpage');
let page = 0;
const lastPage = Scrollpage.length - 1; // 마지막 페이지

window.addEventListener('wheel', (e) => {
    e.preventDefault();

    if (e.deltaY > 0) {  //휠을내릴때
        page++;        //페이지는 올라간다
    } else if (e.deltaY < 0) { //휠을 올리면
        page--;             //페이지는 내려간다
    }
    if (page < 0) {
        page = 0;
    } else if (page > lastPage) {
        page = lastPage;
    }
    console.log(e.deltaY)
    wrap.style.top = page * -100 + 'vh';
}, { passive: false }); // 스크롤 기능 제거

$(document).ready(function () {
    $('#topbtn').click(function () {
        firstPage = document.getElementsByClassName('Scrollpage')[0];
        wrap.style.top = firstPage.style.top
    })
})








// 기존에 오류가났던함수  비교해볼것
//         return false;
// $(document).ready(function () {
//     $('#topbtn').click(function () {
//         $('body,html').animate({scrollTop: 0 }, 500);
//         return false;
//     })
// })

