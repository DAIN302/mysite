// 보그PJ 로그인 페이지 JS - login.js

$(()=>{
    /**************************************************************************
        로그인 페이지 유효성 검사
    **************************************************************************/  
   // 대상 : #mid, #mpw
   const mid = $("#mid");
   const mpw = $("#mpw");

   // 유효성 검사 기준 : 전송시 아이디, 비번 모두 빈값 없어야함

   // 공백데이터 처리
   const groSpace = val => val.replace(/\s/g, "");

   // 이벤트 대상 : #sbtn
   // 이벤트 종류 : click
   $("#sbtn").click(function(){
        // 기본기능막기(서브밋 기능차단)
        event.preventDefault();

        // 유효성 검사
        // 아이디, 비밀번호 중 하나라도 비어 있으면 불통과
        if(groSpace(mid.val())===""||groSpace(mpw.val())==="") {
            alert("아이디와 비밀번호 모두 입력해주세요.")
            // 초기화 + 아이디에 포커스
            mid.val("").focus();
            mpw.val("");
        }
        else{
            // 원래는 DB에서 조회된 결과를 받고 성공 메세지를 보이거나 첫페이지로 이동
            // alert("로그인에 성공했습니다.")

            // DB조회 페이지를 호출하여 결과를 받아서 처리
            // ajax의 post()메서드 사용 -> $.post(URL, data, callback)
            $.post(
                // 1. 전송할 페이지
                "./process/loginSet.php",
                // 2. 전송할 데이터
                {
                    "mid" : mid.val(), // 아이디
                    "mpw" : mpw.val() // 비번
                },
                // 3. 결과 처리 함수(콜백함수)
                function(res){ // res 결과값 전달 변수
                    console.log("결과값:", res)
                    // 3-1. 로그인 성공 시 : ok
                    if(res==="ok") {
                        alert("로그인에 성공했습니다.")
                        // 메인페이지로 이동
                        location.href = "index.php";
                    }
                    // 3-2. 비밀번호가 틀린 경우 : again
                    else if(res==="again") {
                        alert("비밀번호가 일치하지 않습니다.")
                        // 비밀번호 지우고 비번에 포커스
                        mpw.val("").focus();
                    }
                    // 3-3. 아이디가 없는 경우 : no
                    else {
                        alert("사용가능한 ID가 아닙니다.")
                        // 아이디 및 비밀번호 초기화, 아이디에 포커스
                        mid.val("").focus();
                        mpw.val("");
                    }
                } // 콜백 함수 /////////////
            ); ////// post ///////////////////

            /**************************************************************
                [ 로그인 성공 후 어떤 일이 일어나나? ]
                1. 로그인이 성공하면 서버에 사용자 로그인 정보를 기록
                   -> 이것이 세션이라고 불리우는 메모리 공간
                      세션 : 서버쪽에 생기는 메모리 공간
                2. 이 세션에 변수를 할당하여 필요한 사용자 정보를 로그인 시간동안
                   유지하여 사용 -> 세션 변수 
                   -> 이것때문에 로그인 상태가 유지되어 시스템을 편리하게 이용  
                3. 세션의 기본 유지 설정시간은 20분
                   만약 20분 동안 세션의 갱신이 없으면(웹요청이 없으면) 
                   이를 만료처리하여 세션을 지운다(자동 로그아웃)
            **************************************************************/

        }
   }); ///// click

}) ////////////// jQB
