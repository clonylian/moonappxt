<template>
  <view class="yforget">
    <div class="yforgettop">
      <div class="ychangeusertopyti flex">
        <svg
          @click="goForward()"
          style="width: 25px; height: 25px"
          class="clone"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
          ></path>
        </svg>
        <h2>{{ $store.state.txt.changepasstit }}</h2>
      </div>
      <span class="yforgetjs">{{
        settpass == "1" ? $store.state.txt.emailjc : $store.state.txt.forgetjs
      }}</span>
      <div :class="settpass == '1' ? 'none' : 'yforgetinp'">
        <input
          @input="enteremail()"
          v-model="email"
          type="text"
          :placeholder="$store.state.txt.enteremail"
        />
      </div>
    </div>
    <div :class="settpass == '1' ? 'butnone yforgetbot' : 'yforgetbot'">
      <button
        @click="setpass()"
        ref="settingpass"
        :class="enter == '1' ? 'yforgetl' : ''"
      >
        {{ $store.state.txt.setpass }}
      </button>
      <router-link :class="settpass == '1' ? '' : 'none'" to="">
        {{ $store.state.txt.setfh }}
      </router-link>
    </div>
  </view>
</template>

<script>
import api from "../common/api";
export default {
  data() {
    return {
      email: "",
      enter: "0",
      settpass: "0",
    };
  },
  methods: {
    enteremail() {
      console.log(this.email);
      const emailPattern = /\S+@\S+\.\S+/;
      const isValid = emailPattern.test(this.email);
      console.log(isValid);
      if (isValid) {
        this.enter = "1";
        api.sendverify({ email: this.email }).then((res) => {
          console.log(res);
        });
      } else {
        this.enter = "0";
      }
    },
    setpass() {
      if (this.enter == "0") {
        return;
      } else {
        this.settpass = "1";
        this.enter = "0";
      }
    },
    goForward() {
      this.$router.go(-1); // 向后导航一步
    },
  },
};
</script>

<style scoped>
.ychangeusertopyti {
  align-items: center;
  margin-bottom: 1rem;
}
.ychangeusertopyti svg {
  cursor: pointer;
}
.ychangeusertopyti h2 {
  font-weight: 400;
  width: 100%;
  text-align: center;
}
.butnone > button:nth-child(1) {
  display: none !important;
}
.none {
  display: none !important;
}
.yforget {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.yforgetjs {
  display: block;
  font-size: 0.9rem;
  font-weight: 400;
  word-wrap: break-word;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.yforgetinp {
  width: 90%;
  padding: 0.5rem;
  margin: 1.5rem auto 0;
  box-sizing: border-box;
  border-radius: 1.15rem;
  border: 2px solid black;
}
.yforgetinp > input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
}
.yforgetbot {
  width: 85%;
  margin: 0 auto;
}

.yforgetbot > button {
  display: block;
  text-align: center;
  width: 100%;
  padding: 1.25rem;
  background: rgb(177, 177, 177);
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
  margin: 0.75rem 0;
}
.yforgetbot > a {
  display: block;
  text-align: center;
  width: 100%;
  padding: 1.25rem;
  background: rgb(177, 177, 177);
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
  margin: 0.75rem 0;
}

.yforgetbot > button:nth-child(2) {
  background: white;
}
.yforgetl {
  background: rgb(154, 221, 111) !important;
  cursor: pointer;
}
</style>
