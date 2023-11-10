<template>
  <view class="yforget">
    <div class="yforgettop">
      <span class="yforgetti">{{ $store.state.txt.forget }}</span>
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
      <a @click="forget">{{ $store.state.txt.gologin }}</a>
    </div>
  </view>
</template>

<script>
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
    forget(){
      if(localStorage.getItem('TOKEN') !== null){
        this.$router.push("/setting");
      }else{
        this.$router.push("/login");
        
      }
    }
  },
};
</script>

<style scoped>
.butnone > button:nth-child(1) {
  display: none !important;
}
.none {
  display: none;
}
.yforget {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.yforgetti {
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  padding: 1rem 0;
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
.yforgetinp input {
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
  margin-bottom: 0.75rem;
}

.yforgetbot > button:nth-child(2) {
  background: white;
}
.yforgetbot > a {
  display: block;
  text-align: center;
  width: 100%;
  padding: 1.25rem;
  background: white;
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
}
.yforgetl {
  background: rgb(154, 221, 111) !important;
  cursor: pointer;
}
</style>
