<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="컬렉션부터 스타일, 쇼핑, 뷰티, 라이프스타일, 셀러브리티까지 지금 가장 핫한 트렌드 소개"
    />
    <title>회원가입 | 2023 보그 코리아 (Vogue Korea)</title>
    <!-- 파비콘 넣기 -->
    <link rel="shortcut icon" href="./images/icon.jpg" type="image/x-icon" />
    <!-- 아이콘 CDN -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css"
    />
    <!-- 외부 CSS -->
    <link rel="stylesheet" href="./css/member.css" />
    <!-- 미디어쿼리 CSS -->
    <link rel="stylesheet" href="./css/media.css" />    
    <!-- 제이쿼리 라이브러라+ui -->
    <script src="./js/jquery-3.6.1.min.js"></script>
    <script src="./js/jquery-ui.min.js"></script>
    <!-- 외부 JS -->
    <script src="./js/linksys.js"></script>
    <!-- 부드러운 스크롤 -->
    <script src="./js/smoothScroll20.js"></script>
    <!-- 공통 JS -->
    <script src="./js/common.js"></script>
    <script src="./js/member.js"></script>
  </head>
  <body>
    <!-- 1. 상단영역 -->
    <!-- #top.on인 경우 슬림상단 디자인 적용 -->
    <div id="top">
      <?php include "./inc/top.inc" ?>
    </div>
    <!-- 2. 메인영역 -->
    <div id="cont" class="bgc">
      <main class="ibx cont">

              <!-- 2-1. 카테고리 페이지 탑영역 -->
              <header class="ctop">
                <!-- 2-1-1. 서브타이틀 -->
                <h2 class="stit">Member</h2>
              </header>
              <!-- 2-2. 갤러리 페이지 컨텐츠 박스 -->
              <section class="scont">
                  <form action="./process/ins.php" method="post" class="logF">
                      <ul>
                          <!-- 아이디 -->
                          <li>
                              <label for="mid" class="itit">아이디</label>
                              <input
                                  type="text"
                                  name="mid"
                                  id="mid"
                                  maxlength="20"
                                  placeholder="영문자로 시작하는 6~20글자 영문자/숫자"
                              />
                              <span class="msg"></span>
                          </li>
                          <!-- 비밀번호 -->
                          <li>
                              <label for="mpw" class="itit">비밀번호</label>
                              <input
                                  type="password"
                                  name="mpw"
                                  id="mpw"
                                  maxlength="15"
                                  placeholder="특수문자,문자,숫자포함 형태의 5~15자리"
                              />
                              <span class="msg"></span>
                          </li>
                          <!-- 비밀번호확인 -->
                          <li>
                              <label for="mpw2" class="itit"
                                  >비밀번호확인</label
                              >
                              <input
                                  type="password"
                                  name="mpw2"
                                  id="mpw2"
                                  maxlength="15"
                                  placeholder="비밀번호확인을 입력해 주세요!"
                              />
                              <span class="msg"></span>
                          </li>
                          <!-- 이름 -->
                          <li>
                              <label for="mnm" class="itit">이름</label>
                              <input
                                  type="text"
                                  name="mnm"
                                  id="mnm"
                                  maxlength="20"
                                  placeholder="이름을 입력해 주세요!"
                              />
                              <span class="msg"></span>
                          </li>
                          <!-- 성별 -->
                          <li>
                              <span class="itit">성별</span>
                              <label for="gen1">남성</label>
                              <input type="radio" name="gen" id="gen1" value="m"/>
                              <label for="gen2">여성</label>
                              <input
                                  type="radio"
                                  name="gen"
                                  id="gen2"
                                  value="w"
                                  checked
                              />
                              <!-- 라디오버튼의 name 속성을
                          같은 이름으로 쓰면 그룹핑되어
                          하나만 선택된다! 
                          value값을 넣어야 submit할때 선택값이 넘어감

                          checked 속성 - 기본체크설정 -->
                          </li>
                          <!-- 이메일 -->
                          <li>
                              <label for="email1" class="itit">이메일</label>
                              <input
                                  type="text"
                                  id="email1"
                                  name="email1"
                                  placeholder="이메일앞주소"
                              />
                              <span class="gol">@</span>
                              <select name="seleml" id="seleml">
                                  <option value="init">선택해주세요</option>
                                  <option value="naver.com">naver.com</option>
                                  <option value="daum.net">daum.net</option>
                                  <option value="hotmail.com">
                                      hotmail.com
                                  </option>
                                  <option value="hanmail.net">
                                      hanmail.net
                                  </option>
                                  <option value="gmail.com">gmail.com</option>
                                  <option value="free">직접입력</option>
                              </select>
                              <span class="msg"></span>
                          </li>
                          <!-- 이메일 뒷주소 직접입력 -->
                          <li>
                              <label for="email2"></label>
                              <input
                                  type="text"
                                  name="email2"
                                  id="email2"
                                  placeholder="이메일뒷주소"
                              />
                          </li>
                          <!-- 서브밋버튼 -->
                          <li>
                              <input
                                  type="submit"
                                  value="가입하기"
                                  id="btnj"
                              />
                          </li>
                      </ul>
                  </form>
              </section>
                  
      </main>
    </div>
    <!-- 3. 하단영역 -->
    <div id="info" class="bgc">
      <?php include "./inc/info.inc" ?>
    </div>
    <!-- 위로가기버튼 -->
    <a href="#" class="tbtn fi fi-angle-up">
      <span class="ir">위로가기버튼</span>
    </a>
  </body>
</html>
