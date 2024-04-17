// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";


// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyB-0MHVYLC-drUsDZDbWhW2H5HHg_q5BiA",
//     authDomain: "sparta-7375a.firebaseapp.com",
//     projectId: "sparta-7375a",
//     storageBucket: "sparta-7375a.appspot.com",
//     messagingSenderId: "365594122469",
//     appId: "1:365594122469:web:7e6a7ffd1f82d5b895dc0c",
//     measurementId: "G-4PKDH8CS5F"
// };


// // Firebase 인스턴스 초기화
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


// //김우진 데이터베이스
// $("#commentBtn").click(async function () {
//     let name = $('#userName').val();
//     let comment = $('#commentDetail').val();

//     let doc = {
//         'name': name,
//         'comment': comment
//     };
//     await addDoc(collection(db, "comment"), doc);
//     alert('저장 완료!');
//     window.location.reload();
// })

// let docs = await getDocs(collection(db, "comment"));
// docs.forEach((doc) => {
//     let row = doc.data();
//     console.log(row);

//     let name = row['name'];
//     let comment = row['comment'];
//     console.log(name, comment);

//     let temp_html = `
//             <div class="commentMargin">
//                             <span class="commentNameBold">
//                                 ${name}
//                             </span>
//                             ${comment}
//                         </div>
//             `;
//     $('#commentText').append(temp_html);
// });

// $("#comment_btn1").click(function () {
//     $("#commentContinerBox").css('display', 'flex').hide().fadeIn();
// });

// $("#closeBtn1").click(function () {
//     $("#commentContinerBox").fadeOut();
// });



// // 김가은 데이터베이스
// $("#commentBtn2").click(async function () {
//     let name2 = $('#userName2').val();
//     let comment2 = $('#commentDetail2').val();

//     let doc2 = {
//         'name': name2,
//         'comment': comment2
//     };
//     await addDoc(collection(db, "comment2"), doc2);
//     alert('저장 완료!');
//     window.location.reload();
// })

// let docs2 = await getDocs(collection(db, "comment2"));
// docs2.forEach((doc2) => {
//     let row2 = doc2.data();
//     console.log(row2);

//     let name2 = row2['name'];
//     let comment2 = row2['comment'];
//     console.log(name2, comment2);

//     let temp_html2 = `
//             <div class="commentMargin">
//                             <span class="commentNameBold">
//                                 ${name2}
//                             </span>
//                             ${comment2}
//                         </div>
//             `;
//     $('#commentText2').append(temp_html2);
// });

// $("#comment_btn2").click(function () {
//     $("#commentContinerBox2").css('display', 'flex').hide().fadeIn();
// });

// $("#closeBtn2").click(function () {
//     $("#commentContinerBox2").fadeOut();
// });


// // 이시영 데이터베이스
// $("#commentBtn3").click(async function () {
//     let name3 = $('#userName3').val();
//     let comment3 = $('#commentDetail3').val();

//     let doc3 = {
//         'name': name3,
//         'comment': comment3
//     };
//     await addDoc(collection(db, "comment3"), doc3);
//     alert('저장 완료!');
//     window.location.reload();
// })

// let docs3 = await getDocs(collection(db, "comment3"));
// docs3.forEach((doc3) => {
//     let row3 = doc3.data();
//     console.log(row3);

//     let name3 = row3['name'];
//     let comment3 = row3['comment'];
//     console.log(name3, comment3);

//     let temp_html3 = `
//             <div class="commentMargin">
//                             <span class="commentNameBold">
//                                 ${name3}
//                             </span>
//                             ${comment3}
//                         </div>
//             `;
//     $('#commentText3').append(temp_html3);
// });

// $("#comment_btn3").click(function () {
//     $("#commentContinerBox3").css('display', 'flex').hide().fadeIn();
// });

// $("#closeBtn3").click(function () {
//     $("#commentContinerBox3").fadeOut();
// });

// // 이상헌 데이터베이스
// $("#commentBtn4").click(async function () {
//     let name4 = $('#userName4').val();
//     let comment4 = $('#commentDetail4').val();

//     let doc4 = {
//         'name': name4,
//         'comment': comment4
//     };
//     await addDoc(collection(db, "comment4"), doc4);
//     alert('저장 완료!');
//     window.location.reload();
// })

// let docs4 = await getDocs(collection(db, "comment4"));
// docs4.forEach((doc4) => {
//     let row4 = doc4.data();
//     console.log(row4);

//     let name4 = row4['name'];
//     let comment4 = row4['comment'];
//     console.log(name4, comment4);

//     let temp_html4 = `
//             <div class="commentMargin">
//                             <span class="commentNameBold">
//                                 ${name4}
//                             </span>
//                             ${comment4}
//                         </div>
//             `;
//     $('#commentText4').append(temp_html4);
// });

// $("#comment_btn4").click(function () {
//     $("#commentContinerBox4").css('display', 'flex').hide().fadeIn();
// });

// $("#closeBtn4").click(function () {
//     $("#commentContinerBox4").fadeOut();
// });

// // 김우석 데이터베이스
// $("#commentBtn5").click(async function () {
//     let name5 = $('#userName5').val();
//     let comment5 = $('#commentDetail5').val();

//     let doc5 = {
//         'name': name5,
//         'comment': comment5
//     };
//     await addDoc(collection(db, "comment5"), doc5);
//     alert('저장 완료!');
//     window.location.reload();
// })

// let docs5 = await getDocs(collection(db, "comment5"));
// docs5.forEach((doc5) => {
//     let row5 = doc5.data();
//     console.log(row5);

//     let name5 = row5['name'];
//     let comment5 = row5['comment'];
//     console.log(name5, comment5);

//     let temp_html5 = `
//             <div class="commentMargin">
//                             <span class="commentNameBold">
//                                 ${name5}
//                             </span>
//                             ${comment5}
//                         </div>
//             `;
//     $('#commentText5').append(temp_html5);
// });

// $("#comment_btn5").click(function () {
//     $("#commentContinerBox5").css('display', 'flex').hide().fadeIn();
// });

// $("#closeBtn5").click(function () {
//     $("#commentContinerBox5").fadeOut();
// });

//토글
$(document).ready(function () {
    $('.triangle-button').click(function () {
        var index = $(this).index('.triangle-button');
        $('.infocontent').not(':eq(' + index + ')').slideUp();
        $('.infocontent').eq(index).slideToggle();
    });
});

const wrap = document.getElementsByClassName('wrap')[0]; // 보이는 영역
const Scrollpage = document.getElementsByClassName('Scrollpage');
let page = 0;
const lastPage = Scrollpage.length// 마지막 페이지

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
    wrap.style.top = page * -95 + 'vh';
}, { passive: false }); // 스크롤 기능 제거

    $('#topbtn').click(function () {
        firstPage = document.getElementsByClassName('Scrollpage')[0];
        wrap.style.top = firstPage.style.top
    })



// 기존에 오류가났던함수  비교해볼것
//         return false;
// $(document).ready(function () {
//     $('#topbtn').click(function () {
//         $('body,html').animate({scrollTop: 0 }, 500);
//         return false;
//     })
// })

