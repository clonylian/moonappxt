<template>
  <div :class="yearnact == '0' ? 'yearn' : 'yearnbg'">
    <div class="yearny">
      <div class="yearntop flex jus">
        <h2>{{ $store.state.txt.earntit }}</h2>
        <div></div>
        <router-link to="/setting">
          <svg  t="1699264352989" class="iconx" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="19102" width="30" height="30">
            <path
              d="M991.078 575.465l-101.71 0c-10.154 57.873-33.486 111.084-66.409 157.07l72.873 72.873c12.488 12.488 12.488 32.725 0 45.212l-45.212 45.212c-12.488 12.488-32.725 12.488-45.212 0l-73.186-73.186c-46.069 32.52-98.801 56.3-156.757 66.076l0 102.356c0 17.654-14.316 31.97-31.97 31.97l-63.941 0c-17.654 0-31.97-14.316-31.97-31.97L447.584 888.722c-58.02-9.789-111.346-32.853-157.377-65.456l-72.566 72.566c-12.488 12.488-32.725 12.488-45.212 0l-45.212-45.212c-12.488-12.488-12.488-32.725 0-45.212l72.361-72.361c-32.859-46.031-56.082-99.434-65.897-157.581L31.97 575.466c-17.654 0-31.97-14.316-31.97-31.97l0-63.94c0-17.654 14.316-31.97 31.97-31.97l101.71 0c10.154-57.873 33.486-111.084 66.409-157.07l-72.873-72.873c-12.488-12.488-12.488-32.725 0-45.212l45.212-45.212c12.488-12.488 32.725-12.488 45.212 0l73.186 73.186c46.069-32.52 98.801-56.3 156.757-66.076L447.583 31.97C447.584 14.316 461.9 0 479.554 0l63.941 0c17.654 0 31.97 14.316 31.97 31.97l0 102.356c58.02 9.789 111.346 32.853 157.377 65.456l72.566-72.566c12.488-12.488 32.725-12.488 45.212 0l45.212 45.212c12.488 12.488 12.488 32.725 0 45.212l-72.362 72.361c32.859 46.031 56.082 99.434 65.897 157.581l101.71 0c17.654 0 31.97 14.316 31.97 31.97l0 63.94C1023.048 561.148 1008.732 575.465 991.078 575.465zM511.524 255.762c-141.251 0-255.762 114.511-255.762 255.762s114.511 255.762 255.762 255.762 255.762-114.511 255.762-255.762S652.775 255.762 511.524 255.762z"
              fill="#2c2c2c" p-id="19103"></path>
          </svg>
        </router-link>
      </div>
      <div class="yearntwo flex jus">
        <div @click="clickearn('0')" :class="yearnact == '0' ? 'yearnactive' : ''">
          {{ $store.state.txt.earntaby }}
        </div>
        <div @click="clickearn('1')" :class="yearnact == '1' ? 'yearnactive' : ''">
          MOON Drop
        </div>
      </div>
      <div :class="yearnact == '0' ? 'yearnshow' : 'yearnnone'">
        <div class="yearnbox">
          <span>{{ $store.state.txt.earntabytop }}</span>
          <h2><span>0</span> ETH</h2>
          <div>0 ETH - Lifetime</div>
          <div class="yearnlq flex">{{ $store.state.txt.earntabytopt }}</div>
        </div>
        <div class="yearncon flex jus">
          <div class="yearncony">
            <h2>20%</h2>
            <span>{{ $store.state.txt.earntabytxt }}</span>
          </div>
          <div class="yearncont">
            <h2>{{ $store.state.txt.earntabttxty }}</h2>
            <span>{{ $store.state.txt.earntabttxtt }}</span>
          </div>
          <div class="yearncony">
            <h2>0.5 ETH</h2>
            <span>{{ $store.state.txt.earntabthrtxty }}</span>
          </div>
        </div>
        <img class="yearnymoon" src="../assets/Moon-removebg-preview.png" alt="" />
        <div class="yearnfri">
          <button>{{ $store.state.txt.earntabythr }}</button>
          <div class="yearnfribox">
            <div class="yearnfriboxtop">
              {{ $store.state.txt.earnrabyfive }}
            </div>
            <div class="flex jus yearnfrisbox">
              <div>{{ $store.state.txt.earntabythr }}： <span>0</span></div>
              <button>{{ $store.state.txt.earnrabyfour }}</button>
            </div>
          </div>
        </div>
      </div>
      <div :class="yearnact == '1' ? 'yearnshow' : 'yearnnone'">
        <div class="yearnmdboxy flex jus">
          <div class="yearnmdboxyleft">
            <span>{{ $store.state.txt.earntabtyi }}</span>
            <div>0</div>
          </div>
          <div class="yearnmdboxyright">
            <h2>#25206</h2>
            <span>{{ $store.state.txt.earntabter }}</span>
          </div>
        </div>
        <div class="yearnmdboxt flex jus">
          <div class="yearnmdbcon flex jus">
            <div>{{ $store.state.txt.earntabtsan }}</div>
            <img src="../assets/moonx5.png" alt="" />
          </div>
          <a href="https://www.moonapp.io/" target="_blank" class="yearnmdcont">
            <div>☆</div>
            <span>{{ $store.state.txt.earntabtfour }}</span>
          </a>
        </div>
        <div class="yearnmdboxs flex">
          <span>{{ $store.state.txt.earntabtfive }}</span>
          <div>{{ $store.state.txt.tradet }}</div>
        </div>
        <div class="yearnmdboxf">
          <div class="yearnmdboxfy">
            <div class="yearnmdboxfycon flex">
              <span>{{ $store.state.txt.earntabtsix }}</span>
              <span>{{ $store.state.txt.earntabtjiu }}</span>
            </div>
            <div class="yearnmdboxfycon flex">
              <span>{{ $store.state.txt.earntabtqi }}</span>
              <span>{{ $store.state.txt.earntabtjiu }}</span>
            </div>
            <div class="yearnmdboxfycon flex">
              <span>{{ $store.state.txt.earntabtba }}</span>
              <span>x1</span>
            </div>
          </div>
          <div class="yearnmdboxft">
            <div class="yearnmdboxfty">{{ $store.state.txt.earntabtten }}</div>

            <div v-for="(item, index) in yearnpoints" :key="index" class="yearnmdboxftt flex jus">
              <span>{{ item.timestamp }}:</span>
              <span>{{ item.amount }} pts</span>
            </div>
            <div class="yearnmdboxfty" style="margin-top: 1rem">
              {{ $store.state.txt.earntabttenyi }}
            </div>
          </div>
        </div>
        <div class="yearnmdboxwu">
          <h3>{{ $store.state.txt.earntabttener }}</h3>
          <div class="yearnmdboxwcon">
            {{ $store.state.txt.earntabttensan }} <span>#25206</span>
            <span>(0)</span>
          </div>
          <div class="yearnphb">
            <div class="yearnphby flex jus">
              <div class="yearnphbleft">
                <span>#</span>
                <span style="margin-left: 1.5rem">{{
                  $store.state.txt.earntabttenfour
                }}</span>
              </div>
              <div class="yearnphbright">
                {{ $store.state.txt.earntabttenfive }}
              </div>
            </div>
            <div class="yearnphbt flex jus" v-for="(item, index) in yearnphb" :key="index">
              <div class="yearnphbtleft">
                <span>{{ index + 1 }}</span>
                <span style="margin-left: 1.5rem">{{ item.userName }}</span>
              </div>
              <div class="yearnphbtright">{{ item.points }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Foot from "../components/foot.vue";
import api from "../common/api";
let yearnact = ref("0");
let yearnphb = ref([
  { userName: "Akash", points: "251,600", walletAddressStar: "0x123***df3" },
  { userName: "mnrfqh", points: "242,580", walletAddressStar: "0x123***df3" },
  { userName: "w3bD4nny", points: "223,830", walletAddressStar: "0x123***df3" },
  { userName: "setya", points: "32,300", walletAddressStar: "0x123***df3" },
  { userName: "fitamoly", points: "23,300", walletAddressStar: "0x123***df3" },
  { userName: "avoi3ce", points: "21,100", walletAddressStar: "0x123***df3" },
  { userName: "yuechuzi", points: "17,490", walletAddressStar: "0x123***df3" },
  { userName: "nixon123", points: "8,420", walletAddressStar: "0x123***df3" },
  { userName: "foxhounz", points: "7,870", walletAddressStar: "0x123***df3" },
  { userName: "wwdsj", points: "6,220", walletAddressStar: "0x123***df3" },
]);
let yearnpoints = ref([
  { timestamp: "Trade", amount: 5 },
  { timestamp: "Refer a friend", amount: 10 },
  { timestamp: "Limit order", amount: 10 },
  { timestamp: "Sandwic", amount: 20 },
  { timestamp: "Snipe presale", amount: 10 },
  { timestamp: "Snipe liquidity", amount: 20 },
  { timestamp: "Follow Twitter", amount: 10 },
  { timestamp: "Jion Telegram", amount: 10 },
]);
onMounted(() => {
  api.ranking().then((res) => {
    yearnphb.value = res.data.ranking;
  });
  api.points().then((res) => {
    console.log(res, 111);
    yearnpoints.value = res.data.points;
  });
});
let clickearn = (str) => {
  yearnact.value = str;
};
</script>

<style scoped>
.yearnshow {
  display: block;
}

.yearnnone {
  display: none;
}

.yearn {
  width: 100%;
  height: 100%;
  position: relative;
  background: rgb(130, 137, 232);
  box-sizing: border-box;
}

.yearnbg {
  width: 100%;
  height: 100%;
  position: relative;
  background: rgb(2, 2, 2);
  box-sizing: border-box;
}

.yearny {
  height: 100%;
  padding: 3rem 1rem 10rem;
  box-sizing: border-box;
  width: 100%;
  overflow-y: scroll;
}

.yearny::-webkit-scrollbar {
  width: 0.625rem;
  height: 0.625rem;
}

.yearny::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px;
}

.yearny::-webkit-scrollbar-thumb {
  background: rgba(117, 123, 208, 0.2);
  border-radius: 10px;
}

.yearny::-webkit-scrollbar-corner {
  background: transparent;
}

.yearny::-webkit-scrollbar-thumb:hover {
  background: rgb(65, 68, 116);
}

.yearntop {
  align-items: center;
  column-gap: 0.5rem;
  padding: 0 1rem;
  box-sizing: border-box;
}

.yearntop h2 {
  font-size: 1.5rem;
  color: white;
  font-weight: 550;
}

.yearntop div {
  width: 60%;
  height: 0.125rem;
  background: white;
}

.yearntop span {
  font-size: 1.25rem;
  color: white;
  font-weight: 550;
  cursor: pointer;
}

.yearntwo {
  width: 100%;
  margin: 1rem 0;
  background: rgb(21, 22, 26);
  padding: 0.5rem;
  border-radius: 1.5rem;
  box-sizing: border-box;
  color: white;
  border: 0.125rem solid rgb(21, 22, 26);
}

.yearnbg .yearntwo {
  border-color: white;
}

.yearntwo div {
  width: 48.5%;
  padding: 0.75rem;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}

.yearntwo .yearnactive {
  background: white;
  color: rgb(21, 22, 26);
  border-radius: 1rem;
}

.yearnshow {
  padding: 5rem 1rem 0;
  width: 100%;
  box-sizing: border-box;
}

.yearnbox {
  width: 100%;
  padding: 0.75rem;
  box-sizing: border-box;
  border-radius: 1rem;
  border: 0.0625rem solid black;
  background: rgb(154, 221, 111);
  text-align: center;
  position: relative;
}

.yearnbox>span {
  font-size: 0.85rem;
  font-weight: 400;
}

.yearnbox h2 {
  font-size: 2rem;
  font-weight: 550;
}

.yearnbox>div {
  font-size: 0.75rem;
  font-weight: 450;
}

.yearnlq {
  position: absolute;
  width: 4rem;
  height: 4rem;
  background: rgb(177, 177, 177);
  font-size: 1.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0.125rem solid black;
  top: 45%;
  transform: translateY(-50%);
  right: -0.5rem;
  cursor: pointer;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 1);
}

.yearnlq:hover {
  background: rgb(170, 170, 170);
}

.yearncon {
  align-items: center;
  column-gap: 3.3%;
  margin-top: 0.75rem;
  position: relative;
  z-index: 10;
}

.yearncon div {
  width: 30%;
  height: 5rem;
  text-align: center;
  padding: 0.5rem 0;
  border: 0.125rem solid black;
  box-sizing: border-box;
  background: white;
  border-radius: 1rem;
}

.yearncon h2 {
  font-size: 1.15rem;
  font-weight: 550;
  margin-bottom: 0.25rem;
}

.yearncon span {
  display: block;
  font-size: 0.6rem;
  line-height: 1.3;
  color: black;
}

.yearncon .yearncont {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 1);
  background: rgb(177, 177, 177);
}

.yearnymoon {
  width: 70%;
  margin-top: -2rem;
  transform: translateX(10%);
}

.yearnfri {
  width: 100%;
}

.yearnfri>button {
  width: 100%;
  display: block;
  padding: 1.15rem;
  box-sizing: border-box;
  border-radius: 1rem;
  font-size: 1.25rem;
  background: rgb(255, 229, 0);
  box-shadow: 4px 4px 8px white;
}

.yearnfribox {
  width: 100%;
  height: 11.25rem;
  padding: 0.75rem 1rem;
  border: 0.125rem solid white;
  border-radius: 1rem;
  margin-top: 1.5rem;
  background: rgb(21, 22, 26);
  box-shadow: 2px 2px 4px white, -2px -2px 4px white, 2px -2px 4px white,
    -2px 2px 4px white;
  box-sizing: border-box;
}

.yearnfrisbox {
  box-sizing: border-box;
}

.yearnfriboxtop {
  text-align: center;
  font-size: 1.25rem;
  color: white;
  margin-bottom: 0.5rem;
}

.yearnfrisbox div {
  color: rgb(154, 221, 111);
}

.yearnfrisbox {
  align-items: center;
}

.yearnfrisbox div span {
  color: white;
}

.yearnfrisbox button {
  padding: 0.25rem 0.5rem;
  border: 0.0625rem solid rgb(154, 221, 111);
  background: transparent;
  color: rgb(154, 221, 111);
  border-radius: 1rem;
}

.yearnmdboxy {
  width: 100%;
  padding: 1rem 1.25rem;
  background: rgb(154, 221, 111);
  border: 0.125rem solid black;
  box-sizing: border-box;
  align-items: center;
  border-radius: 1.5rem;
}

.yearnmdboxyleft span {
  font-size: 0.9rem;
}

.yearnmdboxyleft div {
  font-size: 2.5rem;
  font-weight: 600;
}

.yearnmdboxyright {
  width: 8rem;
  padding: 0.5rem 1rem;
  border: 0.125rem solid black;
  background: rgb(255, 229, 0);
  box-sizing: border-box;
  border-radius: 1rem;
}

.yearnmdboxyright h2 {
  font-size: 1.5rem;
}

.yearnmdboxyright span {
  display: block;
  text-align: center;
  font-size: 0.75rem;
}

.yearnmdboxt {
  margin-top: 0.75rem;
  column-gap: 5%;
  margin-bottom: 8rem;
}

.yearnmdbcon {
  width: 65%;
  border: 0.125rem solid rgb(255, 229, 0);
  padding: 0.5rem 1.75rem;
  box-sizing: border-box;
  background: rgb(21, 22, 26);
  border-radius: 1rem;
  box-shadow: 4px 4px 8px rgb(255, 229, 0);
  align-items: center;
}

.yearnmdbcon img {
  width: 2.25rem;
}

.yearnmdbcon div {
  color: white;
}

.yearnmdcont {
  width: 30%;
  border: 0.125rem solid rgb(130, 137, 232);
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  color: rgb(130, 137, 232);
  border-radius: 1rem;
}

.yearnmdcont div {
  width: 2.25rem;
  height: 2.25rem;
  box-sizing: border-box;
  line-height: 0.8;
  font-size: 1.25rem;
  border-radius: 50%;
  padding: 0.5rem;
  text-align: center;
  border: 0.125rem solid rgb(130, 137, 232);
  margin: 0 auto;
}

.yearnmdcont span {
  display: block;
  text-align: center;
  font-size: 0.8rem;
  margin-top: 0.25rem;
  word-wrap: break-word;
}

.yearnmdboxs {
  width: 100%;
  padding: 1.25rem 1rem;
  background: rgb(255, 229, 0);
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: 4px 4px 8px white;
  justify-content: space-between;
}

.yearnmdboxs:hover {
  background: rgb(245, 220, 0);
}

.yearnmdboxs span {
  width: 65%;
  font-size: 0.8rem;
  padding: 0 0.5rem;
  border-right: 0.125rem solid black;
  text-align: right;
  box-sizing: border-box;
}

.yearnmdboxs div {
  width: 35%;
  text-align: center;
  font-size: 2rem;
}

.yearnmdboxf {
  margin: 1rem 0 3rem;
  width: 100%;
  height: auto;
}

.yearnmdboxfy {
  width: 100%;
  padding: 1rem 0 1.25rem;
  box-sizing: border-box;
  background: rgb(154, 221, 111);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}

.yearnmdboxfycon {
  justify-content: center;
  font-size: 0.9rem;
  padding: 0.05rem 0;
}

.yearnmdboxfycon span:nth-child(2) {
  color: rgb(130, 137, 232);
}

.yearnmdboxft {
  width: 100%;
  padding: 2.25rem 1rem;
  border: 0.125rem solid white;
  border-top: 0;
  box-sizing: border-box;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}

.yearnmdboxfty {
  font-size: 1.25rem;
  color: white;
  text-align: center;
}

.yearnmdboxftt span {
  font-size: 0.9rem;
  padding: 0.5rem 0;
  color: white;
  font-weight: 550;
}

.yearnmdboxftt span:nth-child(1) {
  color: rgb(154, 221, 111);
  text-decoration: underline;
}

.yearnmdboxwu {
  width: 100%;
  padding: 1.5rem 1rem;
  box-sizing: border-box;
  border: 0.125rem solid white;
  border-radius: 1.5rem;
}

.yearnmdboxwu h3 {
  font-size: 1.25rem;
  color: white;
  font-weight: 400;
  text-align: center;
}

.yearnmdboxwcon {
  font-size: 0.8rem;
  color: white;
  text-align: center;
}

.yearnmdboxwcon span:nth-child(1) {
  color: rgb(130, 137, 232);
}

.yearnmdboxwcon span:nth-child(2) {
  color: rgb(154, 221, 111);
}

.yearnphb {
  width: 100%;
  margin: 0.5rem 0;
}

.yearnphbleft {
  font-size: 0.7rem;
  color: rgb(177, 177, 177);
}

.yearnphbright {
  font-size: 0.7rem;
  color: rgb(177, 177, 177);
}

.yearnphbt {
  width: 100%;
  padding: 0.25rem 0;
  font-weight: 550;
  font-size: 0.9rem;
  color: white;
}
</style>
