// 보그 PJ 메인페이지 JS - main.js

// 로딩구역
window.addEventListener("DOMContentLoaded", loadFn)

function loadFn() {
    /********************************************************************
         리턴함수 세팅구역     
     ********************************************************************/
    // 1. 요소선택함수 : querySelectorAll()함수
    const q = x => {
        // (1) 리턴할 요소 변수 : rv
        let rv = document.querySelectorAll(x);

        // (2) 요소개수체크
        let cnt = rv.length;
        cg(cnt+"개");

        // (3) 1개일 경우 첫번째만 선택해서 리턴
        if(cnt===1) rv = rv[0];

        // (4) 결과 리턴
        return rv;

    }; /////////// q함수

    // 2. 콘솔출력함수
    const cg = x => console.log(x);

    // 3. 등장액션 대상 위치값 리턴함수
    const retVal = ele => ele.getBoundingClientRect().top;

    /*********************************************
         스크롤 등장액션 기능 구현
     *********************************************/
    // 스크롤 등장 대상 .scAct
    const scAct = q(".scAct");

    // 상단메뉴 대상 : #top
    const topA = q("#top");
    // cg(topA);

    // 위로가기버튼 대상 : .tbtn
    const tbtn = q(".tbtn");

    // 화면높이값의 2/3구하기
    const hv = window.innerHeight/3*2;

    // 클래스 넣기 함수
    const showIt = x => { // x는 등장요소
        // 대상요소의 현재 스크롤 위치
        let xval = retVal(x)
        // 화면 높이값의 절반값에 왔을때 첫번째 박스 등장
        // hv변수 -> 화면 높이값의 절반값
        if(xval < hv && xval > 0) {
            x.classList.add("on");
        }
        // 되돌리기는 else문으로
        // else {
        //     x.classList.remove("on");
        // }
    };

    // 현재스크롤 위치변수
    let scTop;

    // 스크롤 이벤트 세팅 /////
    window.addEventListener("scroll", ()=>{
        // 현재 스크롤 위치
        scTop = window.scrollY;
        // cg(scTop);

        // 상단영역 슬림메뉴 적용하기 + !mobsts -> 0일때(DT일때)만 적용 //
        if (scTop >= 100 && !mobsts) topA.classList.add("on");
        else topA.classList.remove("on");

        // 위로이동버튼 보이기/숨기기 + !mobsts -> 0일때(DT일때)만 적용 //
        if (scTop >= 300 && !mobsts) tbtn.classList.add("on");
        else tbtn.classList.remove("on");

        // 값 확인
        // cg("박스1"+retVal(scAct[0]));

        // 함수호출
        // 스크롤 등장 요소 개수만큼 for문 돌리기
        for(let x of scAct) showIt(x);        
    }) ///////// 스크롤 이벤트 //////////

    // 상단이동버튼 (.tbtn) 클릭 시 상단 이동
    // 부드러운 스크롤 pos 스크롤 위치값도 업데이트 필요 

    tbtn.onclick = () =>{
        event.preventDefault();
        // 위치이동
        window.scrollTo(0,0);
        // 부드러운 스크롤 전역 스크롤값을 0으로 변경하여 최상단으로 이동
        
        pos=0;
        

    } // click


    


} //////// 로드구역