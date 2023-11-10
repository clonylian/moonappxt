<template>
  <div class="yfoot flex">
    <router-link :class="{ homes: $route.path === '/home' ||$route.path === '/Portfolio' }" to="/home">
      <img src="../assets/home.png" alt="" />
      <img src="../assets/homes.png" alt="" />
      <span>Home</span>
    </router-link>
    <router-link :class="{ Trades: $route.path === '/trade' }" to="/trade">
      <img src="../assets/buy.png" alt="" />
      <img src="../assets/buys.png" alt="" />
      <span>Trade</span>
    </router-link>
    <router-link class="eth" @click="toggleOverlay" :class="{ active: $route.path === '/connectwellet'}"  to="/connectwellet">
      <svg t="1699259933448" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="14508" width="16" height="16">
        <path
          d="M199.36 572.768a31.904 31.904 0 0 0 22.624-9.376l294.144-294.144 285.728 285.728a31.968 31.968 0 1 0 45.248-45.248L538.752 201.376a32 32 0 0 0-45.28 0L176.704 518.144a31.968 31.968 0 0 0 22.656 54.624z m339.424-115.392a32 32 0 0 0-45.28 0L176.736 774.144a31.968 31.968 0 1 0 45.248 45.248l294.144-294.144 285.728 285.728a31.968 31.968 0 1 0 45.248-45.248l-308.32-308.352z"
          p-id="14509" fill="#ffffff"></path>
      </svg>
      <p class="eth_one">ETH</p>
      <p class="eth_two">My Wellat 1</p>
    </router-link >
    <router-link :class="{ Attacks: $route.path === '/attack' }" to="/attack">
      <img src="../assets/ddd.png" alt="" />
      <img src="../assets/ddds.png" alt="" />
      <span>Attack</span>
    </router-link>
    <router-link :class="{ Earns: $route.path === '/earn' }" to="/earn">
      <img src="../assets/jb.png" alt="" />
      <span>Earn</span>
    </router-link>
  </div>
</template>

<script setup>
import router from '../router';
import { ref } from 'vue';

const showOverlay = ref(false);

const toggleOverlay = () => {
  showOverlay.value = !showOverlay.value;

};
</script>

<style scoped>
.yfoot .eth.router-link-active svg{
  fill: black ;
}
.yfoot .eth.router-link-active>.eth_one{
  color: black;
}
.yfoot .eth.router-link-active>.eth_two{
  color: black;
}
.yfoot .eth.router-link-active {
  background-color: rgb(131, 186, 95);
  font-size: 12px;
}
.overlay {
  width: 100%;
  height: 100%;
  background-color: aqua;
}

.eth {
  width: 5rem !important; 
  border: 1px white solid;
  border-radius: 50px;
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.eth>svg {
  width: 30px;
  height: 30px;
}

.eth_one {
  color: rgb(131, 186, 95);
  font-size: 12px;
}

.eth_two {
  color: white;
  font-size: 10px;
}

.yfoot {
  position: fixed;
  width: 20%;
  background: rgb(21, 22, 26);
  padding: 0 1.5rem;
  box-sizing: border-box;
  bottom: 5vh;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  justify-content: space-between
}

.yfoot a {
  width: 16%;
  display: flex;
  padding: 1rem 0;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: white;
  box-sizing: border-box;
}

.yfoot a span {
  margin: 0.25rem 0 0;
}

.yfoot a:nth-child(5) {
  color: rgb(255, 230, 0);
}

.yfoot a>img {
  display: block;
  width: 2rem;
  margin: 0 auto;
}

.yfoot a>img:nth-child(2) {
  display: none;
}

.yfoot .homes>img:nth-child(2) {
  display: block;
}

.yfoot .homes span {
  color: rgb(131, 186, 95);
}

.yfoot .homes>img:nth-child(1) {
  display: none;
}

.yfoot .Trades span {
  color: rgb(131, 186, 95);
}

.yfoot .Trades>img:nth-child(2) {
  display: block;
}

.yfoot .Trades>img:nth-child(1) {
  display: none;
}

.yfoot .Attacks span {
  color: rgb(131, 186, 95);
}

.yfoot .Attacks>img:nth-child(2) {
  display: block;
}

.yfoot .Attacks>img:nth-child(1) {
  display: none;
}
</style>
