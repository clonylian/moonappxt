<template>
  <div class="pass">
    <div class="pass_box">
      <div class="passone">
        <router-link to="/wallets">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
            ></path>
          </svg>
        </router-link>
        <p>{{ $store.state.txt.walletti }}</p>
        <span></span>
      </div>
      <p class="passtwo">
        {{ $store.state.txt.walletcon }}
      </p>
      <div class="tiqutwo">
        <p>
          <svg
            t="1699508330216"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="14240"
            width="16"
            height="16"
          >
            <path
              d="M861.090909 295.563636c13.963636 0 23.272727-9.309091 23.272727-23.272727V181.527273C884.363636 121.018182 835.490909 69.818182 772.654545 69.818182H251.345455C188.509091 69.818182 139.636364 121.018182 139.636364 181.527273v660.945454c0 60.509091 48.872727 111.709091 111.709091 111.709091h370.036363c6.981818 0 11.636364-2.327273 16.290909-6.981818l239.709091-242.036364c4.654545-4.654545 6.981818-9.309091 6.981818-16.290909V414.254545c0-13.963636-9.309091-23.272727-23.272727-23.272727s-23.272727 9.309091-23.272727 23.272727v251.345455h-216.436364c-13.963636 0-23.272727 9.309091-23.272727 23.272727V907.636364H251.345455C214.109091 907.636364 186.181818 877.381818 186.181818 842.472727V181.527273C186.181818 146.618182 214.109091 116.363636 251.345455 116.363636h523.636363C809.890909 116.363636 837.818182 146.618182 837.818182 181.527273v90.763636c0 13.963636 9.309091 23.272727 23.272727 23.272727z m-55.854545 416.581819l-160.581819 162.90909v-162.90909h160.581819z"
              fill=""
              p-id="14241"
            ></path>
            <path
              d="M756.363636 230.4H269.963636c-13.963636 0-23.272727 9.309091-23.272727 23.272727s9.309091 23.272727 23.272727 23.272728h486.4c13.963636 0 23.272727-9.309091 23.272728-23.272728s-11.636364-23.272727-23.272728-23.272727zM779.636364 386.327273c0-13.963636-9.309091-23.272727-23.272728-23.272728H269.963636c-13.963636 0-23.272727 9.309091-23.272727 23.272728s9.309091 23.272727 23.272727 23.272727h486.4c11.636364 0 23.272727-11.636364 23.272728-23.272727zM269.963636 493.381818c-13.963636 0-23.272727 9.309091-23.272727 23.272727s9.309091 23.272727 23.272727 23.272728h262.981819c13.963636 0 23.272727-9.309091 23.272727-23.272728s-9.309091-23.272727-23.272727-23.272727H269.963636z"
              fill=""
              p-id="14242"
            ></path>
          </svg>
          {{ $store.state.txt.tradeinptxt }}
        </p>
        <input :placeholder="$store.state.txt.walletplace" />
      </div>
      <div class="tiqu_four">
        <span @click="yinys" class="tiquthree">{{
          $store.state.txt.wallettxt
        }}</span>
      </div>
    </div>
    <div class="tiqu_five">{{ $store.state.txt.continue }}</div>
  </div>
  <div v-show="yinc" class="yincone">
    <div class=""></div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const yinc = ref(false);
function yinys() {
  yinc.value = true;
  console.log(111);
}
</script>
<style scoped>
.pass {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pass_box {
  width: 100%;
  height: 100%;
}

.passone {
  display: flex;
}

.passone svg {
  width: 25px;
  height: 25px;
}

.passone > p {
  width: 85%;
  text-align: center;
  font-size: 20px;
}

.passtwo {
  width: 70%;
  margin: 1.5rem auto;
  /* margin: 1rem auto; */
  font-size: 12px;
}

.tiqutwo {
  /* margin-top: 2rem; */
  margin: 1rem auto;
  width: 90%;
  height: 2rem;
  border: 1px black solid;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tiqutwo > p {
  font-size: 12px;
  color: rgb(153, 220, 113);
  display: flex;
}

.tiqutwo > p > svg {
  width: 16px;
  height: 16px;
}

.tiqutwo > input {
  width: 40%;
  border: none;
  outline: none;
}

.tiquthree {
  text-align: center;
  font-size: 12px;
  color: rgb(123, 139, 231);
  border-bottom: 1px rgb(123, 139, 231) solid;
}

.tiqu_four {
  width: 100%;
  display: flex;
  justify-content: center;
}

.tiqu_five {
  width: 80%;
  padding: 1rem;
  text-align: center;
  /* height: 3rem; */
  margin: 0 auto;
  border: 1px black solid;
  border-radius: 20px;
  margin-bottom: 2rem;
  background-color: rgb(177, 177, 177);
}
.yinc {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
