// 보그 PJ 카테고리 페이지 JS =  category.js

// 넘어온 url 받기
let pm = location.href
// location.href 이 이퀄 오른쪽에 있으면 url 주소 읽어옴
// 문자열 잘라서 값 읽어오기
// 우선 할당한 다음에 값을 담아서 잘라야함
// ?로 잘라서 두번째값, =로 잘라서 두번째값
pm = pm.split("?")[1].split("=")[1];
// pm값 특수문자 복원
pm = decodeURIComponent(pm);
//console.log(pm);

// 로딩구역
window.addEventListener("DOMContentLoaded", loadFn);

function loadFn(){
    // console.log("로딩완");
    // 1. 변경대상선정
    // (1) 서브타이틀
    const stit = document.querySelector(".stit");
    // (2) 서브메뉴
    const lnb = document.querySelector(".lnb");
    // (3) 내용 타이틀
    const contit = document.querySelectorAll(".icont h2");
    // (4) 컨텐츠 상위박스(카테고리 클래스 넣기)
    const cont = document.querySelector(".cont");
    // (5) title 요소(타이틀 내용에 카테고리명 앞에 추가)
    const titag = document.querySelector("title");

    // 2. 메뉴데이터 (sinfo변수) 객체에서 카테고리값 선택
    const mdata = sinfo[pm]

    // console.log(mdata);

    // 3. 대상에 변경 적용
    // (1) 카테고리 페이지 타이틀 넣기
    // 대상 : stit
    stit.innerText = mdata["제목"];

    // (2) LNB 메뉴 넣기
    // 코드넣기 <ul><li><a href="#"></a></li></ul>
    // 메뉴값 담기
    let mvalue = mdata["메뉴"];
    if(mvalue==="없음") {
        // lnb박스 삭제
        lnb.remove();
    }
    else {
        let temp = "<ul>";

        // 메뉴 배열만큼 돌아서 코드 생성
        mvalue.forEach((val)=>{ // val 배열값
            temp += `
                <li>
                    <a href="#">${val}</a>
                </li>    
            `;
        }) /// forEach //////
        temp += "</ul>";

        // LNB 박스에 html넣기
        lnb.innerHTML = temp;
    }

    // (3) 내용 타이틀 넣기 : h2 개수만큼 순번대로 mdata["타이틀"][순번]
    // forEach 메서드 사용
    // forEach((요소,순번,값)=>{})
    contit.forEach((ele, idx) => {
        ele.innerHTML = mdata["타이틀"][idx];
    })

    // (4) 컨텐츠 박스에 pm과 같은 이름의 클래스 넣기
    // cont.classList.add(pm.replace(" & ", "-"));
    cont.classList.add(mdata["경로"]);

    // (5) 탭메뉴 출력 title 요소 데이터 넣기
    // 기존값을 앞에 "제목"속성값을 넣는다
    // 넣을대상 titag
    titag.innerText = mdata["제목"] + titag.innerText;

} // 로드함수