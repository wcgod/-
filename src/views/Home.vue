<template>
  <div>
      <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators">
              <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
              <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <div class="container">
                      <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img class="img-fluid" src="img/profile_01.jpg" alt="">
                          </div>
                          <div class="col-lg-6 mb-0 d-flex align-items-center">
                              <div class="text-align-left align-self-center">
                                  <h1 class="h1 text-success"><b>도전하는 개발자</b></h1>
                                  <h3 class="h2">어느 곳을 가든 지금 있는 그곳에서부터 길이 시작된다.</h3>
                                  <p>
                                      다양한 업무,신기술,새로운 서비스를 두려워하지 않고 도전.</br>
                                      자신의 길은 자기가 만들듯이, 새로운 도전을 통한 앞으로의 자신을 만들어간다.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="carousel-item">
                  <div class="container">
                      <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img class="img-fluid" src="img/profile_02.jpg" alt="">
                          </div>
                          <div class="col-lg-6 mb-0 d-flex align-items-center">
                              <div class="text-align-left">
                                  <h1 class="h1 text-success"><b>활동으로 배우는 삶</b></h1>
                                  <h3 class="h2">인생은 경험의 연속이다.</h3>
                                  <p>
                                      아르바이트, 대외활동, 봉사활동, 취미 등 다양한 활동 경험.</br>
                                      활동을 통해 지식과 지혜를 배우고, 자기 자신을 만들어가는 과정.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="carousel-item">
                  <div class="container">
                      <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img class="img-fluid" src="img/profile_03.jpg" alt="">
                          </div>
                          <div class="col-lg-6 mb-0 d-flex align-items-center">
                              <div class="text-align-left">
                                  <h1 class="h1 text-success"><b>효율적인 시간 사용</b></h1>
                                  <h3 class="h2">행운은 계획에서 비롯된다.</h3>
                                  <p>
                                      우선순위를 가지고 계획된 업무 처리.</br>
                                      꾸준한 계획을 통해 공부하고 성장하는 자기계발.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
              <i class="fas fa-chevron-left"></i>
          </a>
          <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
              <i class="fas fa-chevron-right"></i>
          </a>
      </div>

      <section class="bg-light">
          <div class="container py-5">
              <div class="row text-center py-3">
                  <div class="col-lg-8 m-auto">
                      <h1 class="h1">PROJECT</h1>
                      <p>
                          2020.02~2021.07  현대아이티앤이</br>
                          [웹 개발 및 운영 : 현대백화점 온라인식품관 투홈 상품 담당]</br>
                          2017.02~2020.02  GSITM</br>
                          [웹 개발 및 운영 : GSSHOP 전시 매장 담당]</br>
                          [프로젝트 참여 : 한국야구르트 Y멤버스사이트 개발]</br>
                          [웹 개발 및 운영 : LFMALL 주문 및 이벤트 담당]
                      </p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-12 col-md-6 mb-6">
                      <div class="card h-100">
                          <router-link v-bind:to="`company`">
                              <img src="img/company_logo_01.jpg" class="card-img-top" alt="...">
                          </router-link>
                          <div class="card-body">
                              <a href="shop-single.html" class="h2 text-decoration-none text-dark">GSITM</a>
                              <p class="card-text">
                              2017.02~2020.02 (3년 1개월)
                              </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-md-6 mb-6">
                      <div class="card h-100">
                          <a href="shop-single.html">
                              <img src="img/company_logo_02.jpg" class="card-img-top" alt="...">
                          </a>
                          <div class="card-body">
                              <a href="shop-single.html" class="h2 text-decoration-none text-dark">현대아이티앤이</a>
                              <p class="card-text">
                              2020.02~2021.07 (1년 6개월)
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
