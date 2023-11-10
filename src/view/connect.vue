<template>
  <view class="yconnect">
    <div class="yconnecttop">
      <svg @click="goForward()" style="width: 25px; height: 25px; padding-top: 1rem; padding-left: 1rem;" class="clone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z">
                </path>
            </svg>
      <img src="../assets/connect.png" alt="" />
      <span class="yconnecttopy">{{ $store.state.txt.connectti }}</span>
      <span class="yconnecttopt">{{ $store.state.txt.connectjs }}</span>
    </div>
    <div class="yconnectbot">
      <button class="yconnectboty">{{ $store.state.txt.connectbuty }}</button>
      <router-link to="/home" class="yconnectbott">
        {{ $store.state.txt.connectbutt }}
      </router-link>
    </div>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goForward() {
      this.$router.go(-1); // 向后导航一步
    },
  },
};
</script>

<style scoped>
.yconnect {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.yconnecttop > span:nth-child(1) {
  position: absolute;
  height: 2.5rem;
  width: 2.5rem;
  line-height: 1.75;
  font-size: 1.5rem;
  cursor: pointer;
  top: 0;
  left: 0;
}
.yconnecttop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
}

.yconnecttop > img {
  width: 40%;
  margin: 1rem auto 0;
}

.yconnecttopy {
  font-size: 1.25rem;
  font-weight: 450;
  text-align: center;
  margin: 0.75rem 0;
  word-wrap: break-word;
}

.yconnecttopt {
  word-wrap: break-word;
  width: 90%;
  margin: 0 auto;
  font-size: 0.85rem;
  font-weight: 450;
  text-align: center;
}

.yconnectboty {
  display: block;
  text-align: center;
  width: 100%;
  padding: 1.25rem;
  background: rgb(154, 221, 111);
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
  margin-bottom: 0.75rem;
}
.yconnectbott {
  display: block;
  text-align: center;
  width: 100%;
  padding: 1.25rem;
  background: transparent;
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: none;
  outline: none;
  box-sizing: border-box;
}
.yconnectbott::after {
  border: none;
}
</style>
