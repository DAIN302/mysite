<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="컬렉션부터 스타일, 쇼핑, 뷰티, 라이프스타일, 셀러브리티까지 지금 가장 핫한 트렌드 소개"
    />
    <title>| 2023 보그 코리아 (Vogue Korea)</title>
    <!-- 파비콘 넣기 -->
    <link rel="shortcut icon" href="./images/icon.jpg" type="image/x-icon" />
    <!-- 아이콘 CDN -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css"
    />
    <!-- 외부 CSS -->
    <link rel="stylesheet" href="./css/category.css" />
    <!-- 미디어쿼리 CSS -->
    <link rel="stylesheet" href="./css/media.css" />
    <!-- 제이쿼리 라이브러라+ui -->
    <script src="./js/jquery-3.6.1.min.js"></script>
    <script src="./js/jquery-ui.min.js"></script>
    <!-- 매뉴 dataJS -->
    <script src="./js/mdata.js"></script>
    <!-- 부드러운 스크롤 -->
    <script src="./js/smoothScroll20.js"></script>    
    <!-- 공통 JS -->
    <script src="./js/common.js"></script>
    <!-- 외부 JS -->
    <script src="./js/linksys.js"></script>
    <script src="./js/category.js"></script>
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
        <!-- 2-1. 카테고리 페이지 상단영역 -->
        <header class="ctop">
          <!-- 2-1-1.서브타이틀 -->
          <h2 class="stit"></h2>
          <!-- 2-1-2.서브메뉴(LNB : local navigation bar) -->
          <nav class="lnb"></nav>
        </header>
        <!-- 2-2. 카테고리 페이지 컨텐츠영역 -->
        <div class="icont">
          <section class="pt pt2">
            <div class="cbx bgi bg1-1">
              <h2></h2>
            </div>
            <div class="cbx bgi bg1-2">
              <h2></h2>
            </div>
            <div class="cbx bgi bg1-3">
              <h2></h2>
            </div>
          </section>
          <section class="pt pt2">
            <div class="cbx bgi bg2-1">
              <h2></h2>
            </div>
            <div class="cbx bgi bg2-2">
              <h2></h2>
            </div>
            <div class="cbx bgi bg2-3">
              <h2></h2>
            </div>
          </section>
        </div>
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
