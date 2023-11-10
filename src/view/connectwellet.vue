<template>
  <div class="wallet_box">
    <div class="wallets">
      <div class="wallet_one">
        <router-link to="/home">
          <svg t="1699263679341" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="16724" width="16" height="16">
            <path
              d="M806.4 263.2l-45.6-45.6L512 467.2 263.2 217.6l-45.6 45.6L467.2 512 217.6 760.8l45.6 45.6L512 557.6l248.8 248.8 45.6-45.6L557.6 512z"
              p-id="16725" fill="#2c2c2c"></path>
          </svg>
        </router-link>
        <div class="wallet_two">
          <router-link to="/Portfolio">
            <p class="wal_two">+</p>
          </router-link>
          <router-link to="/setting">
            <svg t="1699264352989" class="iconx" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="19102" width="16" height="16">
              <path
                d="M991.078 575.465l-101.71 0c-10.154 57.873-33.486 111.084-66.409 157.07l72.873 72.873c12.488 12.488 12.488 32.725 0 45.212l-45.212 45.212c-12.488 12.488-32.725 12.488-45.212 0l-73.186-73.186c-46.069 32.52-98.801 56.3-156.757 66.076l0 102.356c0 17.654-14.316 31.97-31.97 31.97l-63.941 0c-17.654 0-31.97-14.316-31.97-31.97L447.584 888.722c-58.02-9.789-111.346-32.853-157.377-65.456l-72.566 72.566c-12.488 12.488-32.725 12.488-45.212 0l-45.212-45.212c-12.488-12.488-12.488-32.725 0-45.212l72.361-72.361c-32.859-46.031-56.082-99.434-65.897-157.581L31.97 575.466c-17.654 0-31.97-14.316-31.97-31.97l0-63.94c0-17.654 14.316-31.97 31.97-31.97l101.71 0c10.154-57.873 33.486-111.084 66.409-157.07l-72.873-72.873c-12.488-12.488-12.488-32.725 0-45.212l45.212-45.212c12.488-12.488 32.725-12.488 45.212 0l73.186 73.186c46.069-32.52 98.801-56.3 156.757-66.076L447.583 31.97C447.584 14.316 461.9 0 479.554 0l63.941 0c17.654 0 31.97 14.316 31.97 31.97l0 102.356c58.02 9.789 111.346 32.853 157.377 65.456l72.566-72.566c12.488-12.488 32.725-12.488 45.212 0l45.212 45.212c12.488 12.488 12.488 32.725 0 45.212l-72.362 72.361c32.859 46.031 56.082 99.434 65.897 157.581l101.71 0c17.654 0 31.97 14.316 31.97 31.97l0 63.94C1023.048 561.148 1008.732 575.465 991.078 575.465zM511.524 255.762c-141.251 0-255.762 114.511-255.762 255.762s114.511 255.762 255.762 255.762 255.762-114.511 255.762-255.762S652.775 255.762 511.524 255.762z"
                fill="#2c2c2c" p-id="19103"></path>
            </svg>
          </router-link>
        </div>
      </div>


      <div class="carousel">
        <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(item, index) in wallets" :key="index" class="slide">
            <p class="walltes"><b>{{ item.name }}</b></p>
            <div class="code-wrapper">
              <div class="code">
                {{ item.walletAddress.substr(0, 6) + "...." + item.walletAddress.substr(-6) }}
                <svg style="width: 20px; height: 20px" @click="copyCode" t="1699326134810" class="icont"
                  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4979" width="16"
                  height="16">
                  <path
                    d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326z m1.8 562H232V136h302v216c0 23.2 18.8 42 42 42h216v494z"
                    p-id="4980"></path>
                </svg>
              </div>
            </div>
            <div class="slid">
              <img
                src="https://s1.aigei.com/src/img/png/60/6011fe010efd413d8b7d4767ee0eb25c.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:n3Er5tSo8tBOCPU5ga3QPRGhOUk="
                alt="" />
            </div>
            <p>{{ index + 1 }}/{{ walletnum }}</p>
          </div>
        </div>
        <div class="lbt">
          <button @click="prevSlide">
            <svg style="width: 25px; height: 25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z">
              </path>
            </svg>
          </button>
          <button @click="nextSlide">
            <svg style="width: 25px; height: 25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
              </path>
            </svg>
          </button>
        </div>
        <div class="nr_box">
          <div class="nr_box1">
            <p>{{ $store.state.txt.tradetabtwoye }}</p>
            <p>$0.00</p>
          </div>
          <div class="nr_box1">
            <p style="display: flex">
              {{ $store.state.txt.ethree }}
              <svg t="1699328113636" class="ico" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="5979" width="16" height="16">
                <path
                  d="M512 992C246.912 992 32 777.088 32 512 32 246.912 246.912 32 512 32c265.088 0 480 214.912 480 480 0 265.088-214.912 480-480 480zM480 256v352a32 32 0 0 0 64 0V256a32 32 0 0 0-64 0z m-16 528a48 48 0 1 0 96 0 48 48 0 0 0-96 0z"
                  p-id="5980" fill="#2c2c2c"></path>
              </svg>
            </p>
            <p>0 &nbsp;ETH</p>
          </div>
        </div>
        <div class="eths">
          <div class="ethx">
            <p @click="changeTab('tab1')">{{ $store.state.txt.hometit }}</p>
            <span>|</span>
            <p @click="changeTab('tab2')">
              {{ $store.state.txt.connectlistt }}
            </p>
          </div>
          <svg class="iconset" @click="showOverlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M6.17071 18C6.58254 16.8348 7.69378 16 9 16C10.3062 16 11.4175 16.8348 11.8293 18H22V20H11.8293C11.4175 21.1652 10.3062 22 9 22C7.69378 22 6.58254 21.1652 6.17071 20H2V18H6.17071ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H22V13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H2V11H12.1707ZM6.17071 4C6.58254 2.83481 7.69378 2 9 2C10.3062 2 11.4175 2.83481 11.8293 4H22V6H11.8293C11.4175 7.16519 10.3062 8 9 8C7.69378 8 6.58254 7.16519 6.17071 6H2V4H6.17071Z">
            </path>
          </svg>
        </div>
        <div class="ether_box">
          <div class="ether">
            <div v-show="activeTab === 'tab1'">
              <div class="qhkone" @click="toggleContent">
                <div class="qhkone_box">
                  <div class="qhktwo">
                    <img src="../assets/eth.png" />
                    <p class="qhkthree">
                      <b>ETH</b>
                      <span>Ethereum</span>
                    </p>
                  </div>
                  <div class="qhkfour">
                    <b>0</b>
                    <span>$0.00</span>
                  </div>
                </div>
                <div class="qhkfive" v-if="isContentVisible">
                  <router-link to="/trade" style="color: black">
                    <div class="qhksix">{{ $store.state.txt.homefory }}</div>
                  </router-link>
                  <div @click="tiqus" class="qhkseve">
                    {{ $store.state.txt.connectba }}
                  </div>
                </div>
              </div>
            </div>
            <div v-show="activeTab === 'tab2'">
              <div style="text-align: center; font-size: 16px">
                {{ $store.state.txt.connectqi }}
              </div>
            </div>
            <div v-show="activeTab === 'tab3'">
              <div class="qhkone" @click="toggleContent">
                <div class="qhkone_box">
                  <div class="qhktwo">
                    <img style="width: 40px; height: 40px" src="../assets/9.png" />
                    <p class="qhkthree">
                      <b>ETH</b>
                      <span>Ethereum</span>
                    </p>
                  </div>
                  <div class="qhkfour">
                    <b>0</b>
                    <span>$0.00</span>
                  </div>
                </div>
                <div class="qhkfive" v-if="isContentVisible">
                  <router-link to="/trade" style="color: black">
                    <div class="qhksix">{{ $store.state.txt.homefory }}</div>
                  </router-link>
                  <div @click="tiqusx" class="qhkseve">
                    {{ $store.state.txt.connectba }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="botton">
            <div>
              <div @click="changeTab('tab1')" class="botton1">
                <img src="../assets/beth.png" />
              </div>
              <p></p>
            </div>
            <div>
              <div @click="changeTab('tab3')" class="botton2">
                <img src="../assets/9.png" />
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isOverlayVisible" class="overlay">
        <div class="zzcdiv">
          <div class="zzcdivx">
            <p>{{ $store.state.txt.connecttc }}</p>
            <svg @click="hideOverlay" clip-path="" t="1699429390741" class="icont" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="4359" id="mx_n_1699429390742" width="16" height="16">
              <path
                d="M547.2 512l416-416c9.6-9.6 9.6-25.6 0-35.2s-25.6-9.6-35.2 0l-416 416-416-416c-9.6-9.6-25.6-9.6-35.2 0s-9.6 25.6 0 35.2l416 416-416 416c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l416-416 416 416c9.6 9.6 25.6 9.6 35.2 0s9.6-25.6 0-35.2L547.2 512z"
                p-id="4360" fill="#2c2c2c"></path>
            </svg>
          </div>
          <div class="zzcdivt">
            <p>{{ $store.state.txt.homethrtype }}</p>
            <div class="zzcdx">
              <div class="zzcdone">{{ $store.state.txt.connecttcly.one }}</div>
              <div class="zzcdone">{{ $store.state.txt.connecttcly.two }}</div>
              <div class="zzcdone">
                {{ $store.state.txt.connecttcly.three }}
              </div>
              <div class="zzcdone">{{ $store.state.txt.connecttcly.four }}</div>
            </div>
          </div>
          <div class="zzcdivt">
            <p>{{ $store.state.txt.homethrtype }}</p>
            <div class="zzcdxt">
              <div class="zzcdone">{{ $store.state.txt.connecttclt.one }}</div>
              <div class="zzcdone">{{ $store.state.txt.connecttclt.two }}</div>
              <div class="zzcdone">
                {{ $store.state.txt.connecttclt.three }}
              </div>
              <div class="zzcdone">{{ $store.state.txt.connecttclt.four }}</div>
              <div class="zzcdone">{{ $store.state.txt.connecttclt.five }}</div>
              <div class="zzcdone">{{ $store.state.txt.connecttclt.six }}</div>
            </div>
          </div>
          <div class="zzcdivt">
            <p>{{ $store.state.txt.connectthr }}</p>
            <div class="zzc_rli">
              <input src="" placeholder="DD/MM/YYY" />
            </div>
            <div class="zzc_rlix">
              <svg t="1699431819529" class="iconxs" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="4199" width="16" height="16">
                <path
                  d="M197.7088 478.72l39.68-39.168a19.2 19.2 0 1 1 26.9824 27.2896l-73.344 72.448a19.2 19.2 0 0 1-26.9824 0l-75.136-74.24A19.2 19.2 0 1 1 115.8912 437.76l43.0592 42.5472C175.616 300.6464 326.7328 160 510.72 160c195.1232 0 353.28 158.1568 353.28 353.28 0 195.1232-158.1568 353.28-353.28 353.28a352.0512 352.0512 0 0 1-242.0224-95.9232 19.2 19.2 0 1 1 26.2912-27.9808 313.6768 313.6768 0 0 0 215.7312 85.504c173.9008 0 314.88-140.9792 314.88-314.88 0-173.9008-140.9792-314.88-314.88-314.88-162.2272 0-295.808 122.6752-313.0112 280.32z"
                  fill="#3F3739" p-id="4200"></path>
              </svg>
              {{ $store.state.txt.connectfour }}
            </div>
            <div @click="hideOverlay" class="zzc_rlixt">
              {{ $store.state.txt.connectfive }}
            </div>
          </div>
        </div>
      </div>
      <div v-if="tiqu" class="overlay">
        <div class="tiquzzc">
          <div class="tiquone">
            <p></p>
            <p style="font-size: 20px">{{ $store.state.txt.connectsix }}</p>
            <svg @click="tiqust" clip-path="" t="1699429390741" class="icont" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="4359" id="mx_n_1699429390742" width="16" height="16">
              <path
                d="M547.2 512l416-416c9.6-9.6 9.6-25.6 0-35.2s-25.6-9.6-35.2 0l-416 416-416-416c-9.6-9.6-25.6-9.6-35.2 0s-9.6 25.6 0 35.2l416 416-416 416c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l416-416 416 416c9.6 9.6 25.6 9.6 35.2 0s9.6-25.6 0-35.2L547.2 512z"
                p-id="4360" fill="#2c2c2c"></path>
            </svg>
          </div>
          <div class="tiqutwo">
            <p>{{ $store.state.txt.tradeinptxt }}</p>
            <input src="" :placeholder="$store.state.txt.connectjiu" />
          </div>
          <div class="tiquthree">
            <div class="tiqutour">
              <input value="0.00" />
              <div class="tiqufive">
                <p>ETH</p>
                <img src="../assets/eth.png" />
              </div>
            </div>
            <p class="tiqusix">
              {{ $store.state.txt.tradetabtwoye }} 0
              <span>{{ $store.state.txt.teadetabtwoxd }}</span>
            </p>
          </div>
          <div class="tiqueven">
            <p>{{ $store.state.txt.connectsix }}</p>
            <p @click="tiqust">{{ $store.state.txt.removeuserbutt }}</p>
          </div>
        </div>
      </div>
      <div v-if="tiqux" class="overlay">
        <div class="tiquzzc">
          <div class="tiquone">
            <p></p>
            <p style="font-size: 20px">{{ $store.state.txt.connectsix }}</p>
            <svg @click="tiqustx" clip-path="" t="1699429390741" class="icont" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="4359" id="mx_n_1699429390742" width="16" height="16">
              <path
                d="M547.2 512l416-416c9.6-9.6 9.6-25.6 0-35.2s-25.6-9.6-35.2 0l-416 416-416-416c-9.6-9.6-25.6-9.6-35.2 0s-9.6 25.6 0 35.2l416 416-416 416c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l416-416 416 416c9.6 9.6 25.6 9.6 35.2 0s9.6-25.6 0-35.2L547.2 512z"
                p-id="4360" fill="#2c2c2c"></path>
            </svg>
          </div>
          <div class="tiqutwo">
            <p>{{ $store.state.txt.tradeinptxt }}</p>
            <input src="" :placeholder="$store.state.txt.connectjiu" />
          </div>
          <div class="tiquthree">
            <div class="tiqutour">
              <input value="0.00" />
              <div class="tiqufive">
                <p>NAN</p>
                <img style="width: 40px; height: 40px" src="../assets/9.png" />
              </div>
            </div>
            <p class="tiqusix">
              {{ $store.state.txt.tradetabtwoye }} 0
              <span>{{ $store.state.txt.teadetabtwoxd }}</span>
            </p>
          </div>
          <div class="tiqueven">
            <p>{{ $store.state.txt.connectsix }}</p>
            <p @click="tiqustx">{{ $store.state.txt.removeuserbutt }}</p>
          </div>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>
<script setup>
import Foot from "../components/foot.vue";
import { ref, onMounted } from "vue";
import api from '../common/api'
let wallets = ref([])
let walletnum = ref(0)

onMounted(() => {
  api.list().then(res => {
    wallets.value = res.data.wallets;
    walletnum.value = wallets.value.length
  });
});
const isOverlayVisible = ref(false);

function showOverlay() {
  isOverlayVisible.value = true;
}
function hideOverlay() {
  isOverlayVisible.value = false;
}
const tiqu = ref(false);
function tiqus() {
  tiqu.value = true;
}
function tiqust() {
  tiqu.value = false;
}
const tiqux = ref(false);
function tiqusx() {
  tiqux.value = true;
}
function tiqustx() {
  tiqux.value = false;
}
const isContentVisible = ref(false);

const toggleContent = () => {
  isContentVisible.value = !isContentVisible.value;
};
const activeTab = ref("tab1");

const changeTab = (tab) => {
  activeTab.value = tab;
  console.log(111);
};

const originalCode = "0xc578f400388dd0b7188c7add2d1e35f8aa9714de";
const shortenedCode = ref(
  originalCode.substr(0, 6) + "...." + originalCode.substr(-6)
);

const copyCode = () => {
  const el = document.createElement("textarea");
  el.value = originalCode;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  alert("已复制到剪贴板");
};

const items = [
  {
    imageUrl:
      "https://s1.aigei.com/src/img/png/60/6011fe010efd413d8b7d4767ee0eb25c.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:n3Er5tSo8tBOCPU5ga3QPRGhOUk=",
    title: "1/3",
  },
  {
    imageUrl:
      "https://s1.aigei.com/src/img/png/60/6011fe010efd413d8b7d4767ee0eb25c.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:n3Er5tSo8tBOCPU5ga3QPRGhOUk=",
    title: "2/3",
  },
  {
    imageUrl:
      "https://s1.aigei.com/src/img/png/60/6011fe010efd413d8b7d4767ee0eb25c.png?imageMogr2/auto-orient/thumbnail/!282x282r/gravity/Center/crop/282x282/quality/85/&e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:n3Er5tSo8tBOCPU5ga3QPRGhOUk=",
    title: "3/3",
  },
];

const currentIndex = ref(0);

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = wallets.value.length - 1;
  }
};

const nextSlide = () => {
  if (currentIndex.value < wallets.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};
</script>
<style scoped>
.wallet_box {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
}

.code-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

.code {
  color: white;
  position: relative;
  display: flex;
  margin-bottom: 3rem;
}

.code>p {
  position: absolute;
  top: 0;
  right: -50px;
  /* 调整按钮距离代码的位置 */
}

.code>svg {
  fill: white;
}

.lbt {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.lbt>button {
  width: 3rem;
  height: 3rem;
  border-radius: 30px;
  background-color: black;
  color: rgb(131, 186, 95);
}

.lbt>button>svg {
  fill: rgb(131, 186, 95);
}

.carousel {
  flex: 1;
  width: 100%;
  position: relative;
  overflow: hidden;
  top: 5%;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
}

.slides {
  display: flex;
  transition: transform 0.5s ease;
}

.slide img {
  width: 30px;
  height: 30px;
}

.slide>p {
  font-size: 12px;
  margin-top: 0.5rem;
}

.slid {
  width: 3.5rem;
  height: 3.5rem;
  border: 1px black solid;
  background-color: rgb(150, 220, 113);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide {
  display: flex;
  flex: 0 0 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.wallets {
  width: 90%;
  height: 85%;
  border-radius: 25px;
  margin: 2rem auto;
  background-color: rgb(128, 139, 231);
}

.icon {
  width: 25px;
  height: 25px;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}

.wallet_one {
  width: 100%;
  display: flex;
  align-items: center;
  /* padding-top: 1rem; */
  justify-content: space-between;
}

.wallet_two {
  display: flex;
  align-items: center;
}

.wal_two {
  margin-top: 0.5rem;
  width: 25px;
  height: 25px;
  line-height: 23px;
  background-color: black;
  color: white;
  border-radius: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  font-size: 16px;
}

.iconx {
  width: 25px;
  height: 25px;
  margin-top: 0.8rem;
  margin-right: 1rem;
  margin-left: 1.5rem;
}

.walltes {
  margin-top: 1rem;
  text-align: center;
}

.nr_box {
  width: 100%;
}

.nr_box1 {
  width: 90%;
  font-size: 14px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 0.5rem;
  align-items: center;
}

.ico {
  width: 16px;
  height: 16px;
  margin-left: 0.3rem;
}

.eths {
  width: 90%;
  display: flex;
  margin: 0 auto;
  font-size: 18px;
  border-bottom: 1px black solid;
  justify-content: space-between;
  /* padding-bottom: 1rem; */
}

.eths p {
  font-size: 18px;
  padding: 2rem 1rem 1rem 0rem;
}

/* .eths>p:hover {
    font-size: 20px;
    transform: translatex(-10px);
} */
.ethx {
  display: flex;
}

.eths span {
  padding: 2rem 1rem 0 0rem;
}

.ether {
  width: 90%;
  /* height: 10rem; */
  margin: 1rem auto;
}

.qhkone {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px black solid;
  background-color: white;
  border-radius: 15px;
  margin: 0 auto;
}

.qhkone_box {
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: 4.5rem;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: white;

  /* display: flex; */
  align-items: center;
  justify-content: space-between;
}

.qhkone img {
  margin-left: 1rem;
}

.qhktwo {
  display: flex;
}

.qhkthree {
  margin-left: 1rem;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.qhkfour {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 1rem;
}

.qhkfive {
  width: 90%;
  margin: 1rem auto;
  height: 3.5rem;
  background-color: white;
  display: flex;
  justify-content: space-around;
}

.qhksix {
  width: 4rem;
  display: flex;
  padding: 1rem 2rem;
  background-color: rgb(150, 220, 113);
  border: 2px black solid;
  border-radius: 15px;
  text-align: center;
  justify-content: center;
  opacity: 0.9;
}

.qhksix:hover {
  opacity: 1;
}

.qhkseve {
  width: 4rem;
  display: flex;
  padding: 1rem 2rem;
  background-color: white;
  border: 2px black solid;
  border-radius: 15px;
  justify-content: center;
  opacity: 0.8;
}

.qhkseve:hover {
  opacity: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* .zzc {} */

.zzcdiv {
  width: 80%;
  height: 30rem;
  background: white;
  border-radius: 15px;
  display: flex;
  padding: 0.5rem 1rem;
  flex-direction: column;
}

.icont {
  width: 16px;
  height: 16px;
}

.zzcdivx {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.zzcdivt {
  width: 100%;
  margin: 0 auto;
  padding-top: 1.5rem;
}

.zzcdivt>p {
  /* display: flex; */
  padding-bottom: 0.5rem;
}

.zzcdx {
  display: flex;
}

.zzcdone {
  /* width: 2.5rem; */
  text-align: center;
  border-radius: 15px;
  padding: 0.2rem;
  font-size: 14px;
  padding: 0.3rem 0.5rem;
  border: 1px black solid;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  color: black;
}

.zzcdone:active {
  background-color: black;
  color: white;
}

.zzcdone:hover {
  background-color: black;
  color: white;
}

.zzcdxt {
  display: flex;
  flex-wrap: wrap;
}

.zzc_rli {
  width: 100%;
  height: 2rem;
  border: 1px black solid;
  display: flex;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.zzc_rli>input {
  margin-left: 1rem;
  border: none;
  outline: none;
}

.zzc_rlix {
  width: 100%;
  height: 2rem;
  border: 1px black solid;
  border-radius: 15px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.zzc_rlix:hover {
  background-color: rgb(220, 220, 220);
}

.zzc_rlixt {
  width: 100%;
  height: 2rem;
  border: 1px black solid;
  border-radius: 15px;
  cursor: pointer;
  /* margin-bottom: 2rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  background-color: rgb(153, 220, 113);
}

.zzc_rlixt:hover {
  opacity: 1;
}

.tiquzzc {
  width: 80%;
  height: 22rem;
  background: white;
  padding: 1rem;
  border-radius: 15px;
}

.tiquone {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tiqutwo {
  width: 90%;
  height: 2.5rem;
  border: 1px black solid;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
}

.tiqutwo>p {
  color: rgb(153, 220, 113);
}

.tiqutwo>input {
  border: none;
  outline: none;
  text-align: center;
}

.tiquthree {
  width: 90%;
  padding: 1rem 0;
  border: 1px black solid;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  margin: 1rem auto;
  flex-direction: column;
  align-items: flex-end;
}

.tiqutour {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.tiqutour>input {
  width: 40%;
  font-size: 20px;
  border: none;
  outline: none;
  margin-left: 1rem;
}

.tiqufive {
  display: flex;
  margin-right: 1rem;
  align-items: center;
}

.tiqufive>img {
  width: 20px;
  height: 30px;
  margin-left: 1rem;
}

.tiqusix {
  margin: 0.5rem 1rem;
  font-size: 14px;
  color: rgb(177, 177, 177);
}

.tiqusix>span {
  font-size: 16px;
  color: rgb(183, 189, 255);
}

.tiqueven {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.tiqueven>p:nth-child(1) {
  width: 55%;
  padding: 1.5rem 0;
  text-align: center;
  background-color: rgb(177, 177, 177);
  border: 1px black solid;
  border-radius: 15px;
}

.tiqueven>p:nth-child(2) {
  width: 40%;
  text-align: center;
  padding: 1.5rem 0;
  border: 1px black solid;
  border-radius: 15px;
  /* background-color: rgb(177, 177, 177); */
}

.botton {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;
  border-top: 1px black solid;
  justify-content: center;
}

.botton1 {
  width: 3rem;
  height: 3rem;
  background: black;
  display: flex;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
}

.ether_box {
  width: 100%;
  display: flex;
  height: 14rem;
  flex-direction: column;
  justify-content: space-between;
}

.botton1>img {
  width: 20px;
  height: auto;
}

.botton2 {
  width: 3rem;
  height: 3rem;
  background: black;
  display: flex;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
}

.botton2>img {
  width: 25px;
}

.iconset {
  width: 25px;
  height: 25px;
  padding: 2rem 1rem 1rem 0rem;
  cursor: pointer;
}

@media (max-width: 1280px) {
  .eths p {
    padding: 1rem 1rem 1rem 0rem;
  }

  .eths span {
    padding: 1rem 1rem 1rem 0rem;
  }

  .iconset {
    padding: 1rem 1rem 1rem 0rem;
  }

  .qhkone_box {
    height: 3.5rem;
  }

  .wallets {
    margin: 1rem auto;
  }

  .ether_box {
    height: auto;
  }

  .qhkthree {
    margin-left: 0.5rem;
  }
}</style>
