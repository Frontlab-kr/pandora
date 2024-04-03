<template>
  <div class="pandora-dashboard" :class="{ 'pandora-dashboard--menu': isMenu }">
    <header class="pandora-dashboard-header">
      <div class="pandora-dashboard-header__head">
        <div class="pandora-dashboard-header__logo">
          <RouterLink to="/login">PANDORA3 PACKAGE</RouterLink>
        </div>
        <div class="pandora-dashboard-header__button">
          <div
            class="pandora-dashboard-header__menu"
            @click="toggleClass"
          ></div>
          <a href="" class="pandora-dashboard-header__search"></a>
          <a href="" class="pandora-dashboard-header__user"></a>
          <router-link to="/">
            <Button label="LOGIN" class="p-button-sm" />
          </router-link>
        </div>
      </div>
      <div class="pandora-dashboard-header-menu">
        <div class="pandora-dashboard-header-menu__form">
          <InputText type="text" class="w-full" />
          <Button label="search" class="w-full" />
        </div>
        <div class="pandora-dashboard-header-menu-gnb">
          <div class="pandora-dashboard-header-menu-gnb__item">
            <h4>회원관리</h4>
            <dl>
              <dt>회원정보관리</dt>
              <dd>
                <ul>
                  <li><a href="">회원정보통합조회</a></li>
                  <li><a href="">회원추가</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>회원설정관리</dt>
              <dd>
                <ul>
                  <li><a href="">가입약관관리</a></li>
                  <li><a href="">금칙어관리</a></li>
                  <li><a href="">로그인설정</a></li>
                </ul>
              </dd>
            </dl>
          </div>
          <div class="pandora-dashboard-header-menu-gnb__item">
            <h4>전시관리</h4>
            <dl>
              <dt>템플릿관리</dt>
              <dd>
                <ul>
                  <li><a href="">템플릿통합조회</a></li>
                  <li><a href="">템플릿추가</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>메뉴관리</dt>
              <dd>
                <ul>
                  <li><a href="">메뉴전시관리</a></li>
                  <li><a href="">사이트관리</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>팝업관리</dt>
              <dd>
                <ul>
                  <li><a href="">메인팝업관리</a></li>
                  <li><a href="">메인팝업등록</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>메인관리</dt>
              <dd>
                <ul>
                  <li><a href="">메인전시관리</a></li>
                  <li><a href="">메인전시등록</a></li>
                </ul>
              </dd>
            </dl>
          </div>
          <div class="pandora-dashboard-header-menu-gnb__item">
            <h4>웹진관리</h4>
            <dl>
              <dt>웹진컨텐츠관리</dt>
              <dd>
                <ul>
                  <li><a href="">웹진통합조회</a></li>
                  <li><a href="">웹진컨텐츠등록</a></li>
                </ul>
              </dd>
            </dl>
          </div>
          <div class="pandora-dashboard-header-menu-gnb__item">
            <h4>컨텐츠관리</h4>
            <dl>
              <dt>통합게시판관리</dt>
              <dd>
                <ul>
                  <li><a href="">통합게시판관리</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>게시글관리</dt>
              <dd>
                <ul>
                  <li><a href="">통합게시글조회</a></li>
                  <li><a href="">일반게시글등록</a></li>
                  <li><a href="">동영상게시글등록</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>WORK관리</dt>
              <dd>
                <ul>
                  <li><a href="">WORK관리</a></li>
                  <li><a href="">WORK등록</a></li>
                </ul>
              </dd>
            </dl>
            <dl>
              <dt>채용공고관리</dt>
              <dd>
                <ul>
                  <li><a href="">채용공고관리</a></li>
                  <li><a href="">채용공고등록</a></li>
                </ul>
              </dd>
            </dl>
          </div>
          <div class="pandora-dashboard-header-menu-gnb__item">
            <h4>시스템관리</h4>
            <div class="pandora-dashboard-header-menu-gnb__grid">
              <div class="pandora-dashboard-header-menu-gnb__col">
                <dl>
                  <dt>통계관리</dt>
                  <dd>
                    <ul>
                      <li><a href="">대시보드</a></li>
                      <li><a href="">집입통계목록</a></li>
                    </ul>
                  </dd>
                </dl>
                <dl>
                  <dt>시스템메뉴관리</dt>
                  <dd>
                    <ul>
                      <li><a href="">메뉴권한관리</a></li>
                      <li><a href="">메뉴관리</a></li>
                      <li><a href="">프로그램관리</a></li>
                    </ul>
                  </dd>
                </dl>
                <dl>
                  <dt>코드관리</dt>
                  <dd>
                    <ul>
                      <li><a href="">코드관리</a></li>
                    </ul>
                  </dd>
                </dl>
                <dl>
                  <dt>시스템권한관리</dt>
                  <dd>
                    <ul>
                      <li><a href="">시스템권한목록</a></li>
                    </ul>
                  </dd>
                </dl>
                <dl>
                  <dt>시스템사용자관리</dt>
                  <dd>
                    <ul>
                      <li><a href="">시스템사용자관리</a></li>
                      <li><a href="">시스템사용자관한관리</a></li>
                      <li><a href="">시스템사용자추가</a></li>
                      <li><a href="">시스템사용자가입약관관리</a></li>
                      <li><a href="">시스템사용자로그인설정</a></li>
                    </ul>
                  </dd>
                </dl>
              </div>
              <div class="pandora-dashboard-header-menu-gnb__col">
                <dl>
                  <dt>시스템팝업관리</dt>
                  <dd>
                    <ul>
                      <li><a href="">시스템팝업관리</a></li>
                      <li><a href="">시스템팝업등록</a></li>
                    </ul>
                  </dd>
                </dl>
                <dl>
                  <dt>샘플</dt>
                  <dd>
                    <ul>
                      <li><a href="">동적그리드샘플</a></li>
                    </ul>
                  </dd>
                </dl>
                <dl>
                  <dt>접속기록관리</dt>
                  <dd>
                    <ul>
                      <li><a href="">로그인이력</a></li>
                      <li><a href="">메뉴별접속이력</a></li>
                      <li><a href="">약관이력</a></li>
                    </ul>
                  </dd>
                </dl>
                <dl>
                  <dt>도움말관리</dt>
                  <dd>
                    <ul>
                      <li><a href="">도움말관리</a></li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="pandora-dashboard-header-menu-gnb__item">
            <h4>버그게시글관리</h4>
            <dl>
              <dt>버그게시글관리</dt>
              <dd>
                <ul>
                  <li><a href="">버그게시글관리</a></li>
                  <li><a href="">버그게시글등록</a></li>
                </ul>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </header>
    <div class="pandora-detail">
      <div class="pandora-detail-menu">
        <Button
          v-for="(button, index) in buttons"
          :key="index"
          rounded
          outlined
          :class="{ active: button.isActive }"
          @click="toggleActive(index)"
        >
          <p>{{ button.text }}</p>
          <div class="pandora-detail-menu__close"></div>
        </Button>
      </div>
      <div class="pandora-detail__body">
        <iframe src="https://www.naver.com/" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

//tab
const toggleActive = (index) => {
  buttons.value.forEach((button, i) => {
    button.isActive = i === index;
  });
};

const buttons = ref([
  { text: '대시보드', isActive: false },
  { text: '템플릿통합조회', isActive: true },
  { text: '메인팝업관리', isActive: false },
  { text: '회원관리', isActive: false },
  { text: '회원정보통합조회', isActive: false },
  { text: '메인팝업관리', isActive: false },
  { text: '회원관리', isActive: false },
  { text: '회원정보통합조회', isActive: false },
]);

//menu
const isMenu = ref(false);

const toggleClass = () => {
  isMenu.value = !isMenu.value;
};

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    isMenu.value = false;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>
