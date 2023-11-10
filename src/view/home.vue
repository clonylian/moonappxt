<template>
  <div class="yhome">
    <div class="yhometop flex jus">
      <h2 @click="caxios">{{ $store.state.txt.hometit }}</h2>
      <div></div>
      <svg class="yhtwo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"
          fill="rgba(128,131,231,1)"
        ></path>
      </svg>
      <router-link to="/setting">
        <svg  t="1699264352989" class="iconx" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="19102" width="30" height="30">
            <path
              d="M991.078 575.465l-101.71 0c-10.154 57.873-33.486 111.084-66.409 157.07l72.873 72.873c12.488 12.488 12.488 32.725 0 45.212l-45.212 45.212c-12.488 12.488-32.725 12.488-45.212 0l-73.186-73.186c-46.069 32.52-98.801 56.3-156.757 66.076l0 102.356c0 17.654-14.316 31.97-31.97 31.97l-63.941 0c-17.654 0-31.97-14.316-31.97-31.97L447.584 888.722c-58.02-9.789-111.346-32.853-157.377-65.456l-72.566 72.566c-12.488 12.488-32.725 12.488-45.212 0l-45.212-45.212c-12.488-12.488-12.488-32.725 0-45.212l72.361-72.361c-32.859-46.031-56.082-99.434-65.897-157.581L31.97 575.466c-17.654 0-31.97-14.316-31.97-31.97l0-63.94c0-17.654 14.316-31.97 31.97-31.97l101.71 0c10.154-57.873 33.486-111.084 66.409-157.07l-72.873-72.873c-12.488-12.488-12.488-32.725 0-45.212l45.212-45.212c12.488-12.488 32.725-12.488 45.212 0l73.186 73.186c46.069-32.52 98.801-56.3 156.757-66.076L447.583 31.97C447.584 14.316 461.9 0 479.554 0l63.941 0c17.654 0 31.97 14.316 31.97 31.97l0 102.356c58.02 9.789 111.346 32.853 157.377 65.456l72.566-72.566c12.488-12.488 32.725-12.488 45.212 0l45.212 45.212c12.488 12.488 12.488 32.725 0 45.212l-72.362 72.361c32.859 46.031 56.082 99.434 65.897 157.581l101.71 0c17.654 0 31.97 14.316 31.97 31.97l0 63.94C1023.048 561.148 1008.732 575.465 991.078 575.465zM511.524 255.762c-141.251 0-255.762 114.511-255.762 255.762s114.511 255.762 255.762 255.762 255.762-114.511 255.762-255.762S652.775 255.762 511.524 255.762z"
              fill="#2c2c2c" p-id="19103"></path>
          </svg>
      </router-link>
    </div>
    <div class="cen_one">
      <div class="cen_two">
        <div class="cen_four">
          <p class="cen_three">{{ $store.state.txt.hometit }}</p>
          <div class="cen_five">
            <svg
              style="width: 20px; height: 20px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                fill="rgba(255,255,255,1)"
              ></path>
            </svg>
            <router-link
              :to="{ path: '/home', hash: '#butcode' }"
              style="color: white; font-size: 12px"
              >{{ $store.state.txt.homeck }}</router-link
            >
          </div>
        </div>
        <h2 class="cen_six">$0.00</h2>
        <p class="cen_seve">
          <span>$0.00(-)</span>{{ $store.state.txt.hometime }}
        </p>
        <div class="qhk">
          <div v-show="activeTab === 'tab1'">
            <div class="qhkone"></div>
          </div>
          <div v-show="activeTab === 'tab2'">
            <div class="qhkone"></div>
          </div>
          <div v-show="activeTab === 'tab3'">
            <div class="qhkone"></div>
          </div>
          <div v-show="activeTab === 'tab4'">
            <div class="qhkone"></div>
          </div>
          <div v-show="activeTab === 'tab5'">
            <div class="qhkone"></div>
          </div>
          <div v-show="activeTab === 'tab'">
            <div class="qhkone"></div>
          </div>
          <div class="qhktwo">
            <div
              @click="changeTab('tab1')"
              :class="{ active: activeTab === 'tab1' }"
            >
              {{ $store.state.txt.hometaby }}
            </div>
            <div
              @click="changeTab('tab2')"
              :class="{ active: activeTab === 'tab2' }"
            >
              1W
            </div>
            <div
              @click="changeTab('tab3')"
              :class="{ active: activeTab === 'tab3' }"
            >
              1M
            </div>
            <div
              @click="changeTab('tab4')"
              :class="{ active: activeTab === 'tab4' }"
            >
              3M
            </div>
            <div
              @click="changeTab('tab5')"
              :class="{ active: activeTab === 'tab5' }"
            >
              {{ $store.state.txt.hometabw }}
            </div>
          </div>
          <div class="qhkthree"></div>
          <div class="qhkfour">
            <p>{{ $store.state.txt.homepower }}</p>
            <router-link to="/trade" style="color: white">
              <p class="qhkfive">
                ￥0.00
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              </p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="kais" id="one">
        <p>{{ $store.state.txt.welcomebuttwo }}</p>
        <div class="kais_one">
          <router-link to="/trade" style="color: black">
            <div
              @click="one"
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 1rem;
              "
            >
              <div class="kais_two">
                <img src="../assets/2.png" />
              </div>
              <p style="margin-top: 0.5rem">{{ $store.state.txt.homefory }}</p>
            </div>
          </router-link>
          <router-link to="/attack" style="color: black">
            <div
              style="display: flex; flex-direction: column; align-items: center"
            >
              <div class="kais_two">
                <img src="../assets/1.png" />
              </div>
              <p style="margin-top: 0.5rem">{{ $store.state.txt.homefort }}</p>
            </div>
          </router-link>
          <router-link to="/earn" style="color: black">
            <div
              style="display: flex; flex-direction: column; align-items: center"
            >
              <div class="kais_two">
                <img src="../assets/4.png" />
              </div>
              <p style="margin-top: 0.5rem">
                {{ $store.state.txt.homeforthr }}
              </p>
            </div>
          </router-link>
          <router-link to="" style="color: black">
            <div
              style="display: flex; flex-direction: column; align-items: center"
            >
              <div class="kais_two">
                <img src="../assets/5.png" />
              </div>
              <p style="margin-top: 0.5rem">{{ $store.state.txt.homeforf }}</p>
            </div>
          </router-link>
          <router-link to="" style="color: black">
            <div
              style="display: flex; flex-direction: column; align-items: center"
            >
              <div class="kais_two">
                <img src="../assets/6.png" />
              </div>
              <p style="margin-top: 0.5rem">{{ $store.state.txt.homeforw }}</p>
            </div>
          </router-link>
          <router-link to="/connectwellet" style="color: black">
            <div
              style="display: flex; flex-direction: column; align-items: center"
            >
              <div class="kais_two">
                <img src="../assets/3.png" />
              </div>
              <p style="margin-top: 0.5rem">
                {{ $store.state.txt.homeforsix }}
              </p>
            </div>
          </router-link>
        </div>
        <div id="butcode" class="butcode">
          <p>{{ $store.state.txt.homethrti }}</p>
          <div class="buts">
            <div @click="clickbuts('1')" class="but_1">
              <p>{{ $store.state.txt.homethrtype }}</p>
              <svg
                style="width: 16px; height: 16px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                ></path>
              </svg>
            </div>
            <div :class="flsclick == '1' ? 'butsbox' : 'butsnone'">
              <div
                @click="clickbuts('1')"
                class="butt"
                style="padding: 0 0 0.25rem"
              >
                {{ $store.state.txt.homethrtypey }}
              </div>
              <div @click="clickbuts('1')" class="butt">
                {{ $store.state.txt.homethrtypet }}
              </div>
              <div @click="clickbuts('1')" class="butt">
                {{ $store.state.txt.homethrtypethr }}
              </div>
              <div @click="clickbuts('1')" style="padding: 0.25rem 0 0">
                {{ $store.state.txt.homethrtypef }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script setup>
import Foot from "../components/foot.vue";
import { ref } from "vue";
import api from "../common/api";
let flsclick = ref("0");
const activeTab = ref("tab1");

const changeTab = (tab) => {
  activeTab.value = tab;
};
let caxios = () => {
  api.list().then((res) => {
    console.log(res);
  });
};
let clickbuts = (str) => {
  if (str == flsclick.value) {
    flsclick.value = "0";
  } else {
    flsclick.value = "1";
  }
};
</script>

<style scoped>
.active {
  color: black;
  background-color: rgb(147, 211, 109);
}
.butsnone {
  display: none;
}
.yhome {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: scroll;
}

.yhome::-webkit-scrollbar {
  width: 0.625rem;
  height: 0.625rem;
}

.yhome::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px;
}

.yhome::-webkit-scrollbar-thumb {
  background: rgba(117, 123, 208, 0.2);
  border-radius: 10px;
}

.yhome::-webkit-scrollbar-corner {
  background: transparent;
}

.yhome::-webkit-scrollbar-thumb:hover {
  background: rgb(65, 68, 116);
}

.yhometop {
  width: 100%;
  box-sizing: border-box;
  padding: 1.25rem 1rem;
  align-items: center;
}

.yhometop h2 {
  font-size: 1.5rem;
  font-weight: 500;
}

.yhometop div {
  width: 50%;
  height: 0.125rem;
  background: rgb(109, 110, 112);
}

.yhometop img {
  width: 25px;
  height: 25px;
  cursor: pointer;
}

.yhtwo {
  width: 25px;
  height: 25px;
}

.cen_one {
  width: 100%;
  /* height: 14rem; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.cen_two {
  width: 90%;
  border-radius: 20px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  /* display: none; */
}

.cen_three {
  color: rgb(170, 170, 170);
  padding-top: 1rem;
  padding-left: 1rem;
}

.cen_four {
  width: 100%;
  /* height: 4rem; */
  justify-content: space-between;
  display: flex;
  align-items: center;
}

.cen_five {
  width: auto;
  /* height: 2rem; */
  display: flex;
  margin-top: 1rem;
  margin-right: 1rem;
  padding: 0.2rem;
  color: white;
  border-radius: 20px;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(128, 131, 231, 1);
}

.cen_five > p {
  font-size: 12px;
}

.cen_six {
  color: white;
  /* margin-top: 1rem; */
  margin-left: 1rem;
}

.cen_seve {
  /* width: 100%; */
  margin-top: 0.5rem;
  margin-left: 1rem;
  color: white;
  font-size: 12px;
  font-weight: 600;
}

.cen_seve > span {
  display: inline-block;
  font-size: 14px;
  color: rgb(147, 211, 109);
  padding-right: 0.5rem;
}

.qhk {
  margin-top: 8rem;
  color: rgb(170, 170, 170);
}

.qhkone {
  width: 90%;
  margin: 0 auto;
  height: 2rem;
  border-top: 3px rgb(147, 211, 109) solid;
}

.qhktwo {
  width: 95%;
  display: flex;
  border: 0.125rem solid rgb(154, 221, 111);
  box-sizing: border-box;
  border-radius: 1.5rem;
  margin: 0 auto 1rem;
  justify-content: space-between;
}

.qhktwo > div {
  width: 3rem;
  text-align: center;
  font-size: 12px;
  padding: 0.3rem;
  border-radius: 15px;
  cursor: pointer;
}

.qhkthree {
  width: 90%;
  margin: 0 auto;
  height: 1rem;
  border-top: 1px rgb(170, 170, 170) solid;
}

.qhkfour {
  width: 90%;
  margin: 0 auto;
  display: flex;
  color: white;
  font-size: 14px;
  padding-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
}

.qhkfive {
  display: flex;
  align-items: center;
  font-size: 10px;
}

.qhkfive > svg {
  width: 30px;
  height: 20px;
}

.kais {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.kais > p {
  width: 85%;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px black solid;
}

.kais_one {
  width: 85%;
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  column-gap: 0.25rem;
}

.kais_one a {
  width: 32%;
  font-size: 0.85rem;
  text-align: center;
}

.kais_two {
  width: 85%;
  height: auto;
  border: 1px black solid;
  border-radius: 20px;
  display: flex;
}

.kais_two:hover {
  background-color: rgb(234, 234, 234);
}

.kais_two > img {
  width: 100%;
  height: auto;
  border-radius: 20px;
}

.butcode {
  width: 90%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px black solid;
  padding-bottom: 1rem;
  margin-bottom: 14rem;
}

.butcode > p {
  font-size: 18px;
}

.but_1 {
  width: 100%;
  text-align: center;
  padding: 0.3rem 0;
  border-radius: 20px;
  border: 1px black solid;
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.buts {
  width: 5rem;
  position: relative;
}
.butsbox {
  position: absolute;
  padding: 0.75rem;
  box-sizing: border-box;
  border-radius: 1rem;
  background: black;
  left: -0.5rem;
}
.butsbox > div {
  width: 4.5rem;
  padding: 0.25rem 0;
  box-sizing: border-box;
  color: white;
  font-size: 0.875rem;
  text-align: center;
  cursor: pointer;
}
.butsbox > .butt {
  border-bottom: 0.125rem solid white;
}
</style>
