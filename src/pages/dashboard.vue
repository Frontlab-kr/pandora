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
    <div class="pandora-dashboard-body">
      <div class="grid h-full">
        <div class="col-6">
          <div class="flex flex-column h-full">
            <div class="grid">
              <div class="col-6">
                <div class="pandora-dashboard-user">
                  <div class="pandora-dashboard-user__head">
                    <p>
                      <strong>admin님 안녕하세요 : )</strong>
                      2024-02-26 17:07
                    </p>
                    <a href="" class="pandora-dashboard-user__user"></a>
                  </div>
                  <div class="pandora-dashboard-user__alarm">
                    <ul>
                      <li>
                        <a href=""
                          >도착한 알림이 있습니다.도착한 알림이 있습니다.도착한
                          알림이 있습니다.</a
                        >
                      </li>
                      <li><a href="">도착한 알림이 있습니다.</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="pandora-dashboard-board">
                  <div class="pandora-dashboard-board__title">
                    최근 등록된 Q&A
                    <a href="">바로가기</a>
                  </div>
                  <ul>
                    <li>
                      <a href=""><p>홈페이지 버그 발견</p></a>
                    </li>
                    <li>
                      <a href=""><p>2023 1분기 동호회 활동</p></a>
                    </li>
                    <li>
                      <a href=""
                        ><p>
                          2022 제주 워크샵에서 있었던 일 2022 제주 워크샵202
                        </p></a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="grid h-full mt-0">
              <div class="col-6">
                <div class="pandora-dashboard-favorites">
                  <div class="pandora-dashboard-favorites__title">즐겨찾기</div>
                  <div class="pandora-dashboard-favorites__link">
                    <a href="">대시보드</a>
                    <a href="">회원관리</a>
                    <a href="">웹진관리</a>
                    <a href="">템플릿통합조회</a>
                    <a href="">메인팝업관리</a>
                    <a href="">동영상게시글등록</a>
                    <a href="">회원정보통합조회</a>
                    <a href="">대시보드</a>
                    <a href="">동영상게시글등록</a>
                    <a href="">템플릿통합조회</a>
                    <a href="">회원관리</a>
                    <a href="">회원정보통합조회</a>
                    <a href="">회원정보통합조회</a>
                    <a href="">메인팝업관리</a>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="flex flex-column h-full">
                  <div class="pandora-dashboard-board">
                    <div class="pandora-dashboard-board__title">
                      최근 등록된 새 글
                      <a href="">바로가기</a>
                    </div>
                    <ul>
                      <li>
                        <a href=""><p>홈페이지 버그 발견</p></a>
                      </li>
                      <li>
                        <a href=""><p>2023 1분기 동호회 활동</p></a>
                      </li>
                      <li>
                        <a href=""
                          ><p>
                            2022 제주 워크샵에서 있었던 일 2022 제주 워크샵202
                          </p></a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="pandora-dashboard-board mt-4">
                    <div class="pandora-dashboard-board__title">
                      공지사항
                      <a href="">바로가기</a>
                    </div>
                    <ul>
                      <li>
                        <a href=""
                          ><p>홈페이지 버그 발견</p>
                          <span>2024.02.26</span></a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><p>2023 1분기 동호회 활동</p>
                          <span>2024.02.26</span></a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><p>
                            2022 제주 워크샵에서 있었던 일 2022 제주 워크샵202
                          </p>
                          <span>2024.02.26</span></a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><p>본사 확장 이전</p>
                          <span>2024.02.26</span></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="flex flex-column h-full pb-2">
            <div class="pandora-dashboard-chart mb-4">
              <div class="pandora-dashboard-chart__title">방문자</div>
              <Bar :options="chartOptions" :data="chartData" />
            </div>
            <div class="pandora-dashboard-chart mb-4">
              <div class="pandora-dashboard-chart__title">페이지뷰</div>
              <Bar :options="chartOptions" :data="chartData" />
            </div>
            <div class="pandora-dashboard-menu">
              <a href=""><i class="ico-manage"></i>회원설정관리</a>
              <a href=""><i class="ico-book"></i>회원설정관리</a>
              <a href=""><i class="ico-download"></i>회원설정관리</a>
              <a href=""><i class="ico-chart"></i>회원설정관리</a>
              <a href=""><i class="ico-move"></i>회원설정관리</a>
              <a href=""><i class="ico-note"></i>회원설정관리</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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

//chart
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

const chartData = {
  labels: ['일', '월', '화', '수', '목', '금', '토'],
  datasets: [
    {
      label: '지난주',
      data: [74, 82, 115, 99, 101, 111, 105],
      backgroundColor: '#6990DE',
    },
    {
      label: '이번주',
      data: [96, 53, 0, 0, 0, 0, 0],
      backgroundColor: '#60CDD3',
    },
  ],
};

const maxDataValue = Math.max(...chartData.datasets[0].data); // 데이터의 최대값 계산
const maxValueToShow = maxDataValue + 30; // 최대값에 100을 더한 값을 설정

const chartOptions = {
  responsive: true,
  aspectRatio: 3.7,
  plugins: {
    legend: {
      position: 'left',

      labels: {
        usePointStyle: true,
        pointStyle: 'circle', // 레전드 라벨 포인트 스타일을 원(circle)으로 설정
        padding: 10,
        font: {
          size: 12,
          family: 'Pretendard',
        },
      },
    },
    datalabels: {
      display: true,
      anchor: 'end',
      align: 'end',
      color: '#999',
      font: {
        size: 12,
      },
    },
  },
  scales: {
    y: {
      suggestedMax: maxValueToShow, // Y 축의 최대값 설정
    },
  },
};
</script>

<script>
export default {
  components: { Bar },
  props: {
    chartData: Object,
    chartOptions: Object,
  },
};
</script>
