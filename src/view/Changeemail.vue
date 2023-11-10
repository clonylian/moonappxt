<template>
  <div class="ychangeyx">
    <div class="ychangeyxtop">
      <div class="ychangeyxtopti flex">
        <svg @click="goForward()" style="width: 25px; height: 25px" class="clone" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path
            d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z">
          </path>
        </svg>
        <h2>{{ $store.state.txt.changeemail }}</h2>
      </div>
      <span>{{ $store.state.txt.changeemailcon }}</span>
      <div class="ychangeyxbox">
        <input class="ychangebinp" v-model="changeyx" :type="ychangepass == '0' ? 'text' : 'text'"
          :placeholder="$store.state.txt.changeemailplacey" />
      </div>

      <div class="ychangeyxbox">
        <input class="ypasswinput" v-model="changepass" @input="sxinput()"
          :type="ychangepass == '1' ? 'text' : 'password'" :placeholder="$store.state.txt.changeemailplacet" />
        <span :class="ychangepass == '1' ? 'ychangeyxnone' : 'ychangeyxshow'" @click="changepassword('1')">{{
          $store.state.txt.passwordshow }}</span>
        <span :class="ychangepass == '1' ? 'ychangeyxshow' : 'ychangeyxnone'" @click="changepassword('0')">{{
          $store.state.txt.passwordnone }}</span>
      </div>
    </div>
    <div class="ychangeyxbot">
      <button :class="changebg == '1' ? 'ychangebutbg' : ''">
        {{ $store.state.txt.continue }}
      </button>
      <router-link to="/forget" @click="forgetpass()">{{
        $store.state.txt.forgetpass
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeyx: "",
      changepass: "",
      ychangepass: "0",
      changebg: "0",
    };
  },
  methods: {
    changepassword(str) {
      this.ychangepass = str;
    },
    sxinput() {
      if (this.changeyx != "" && this.changepass != "") {
        console.log("1111");
        this.changebg = "1";
      }
    },
    goForward() {
      this.$router.go(-1); // 向后导航一步
    },
  },
};
</script>

<style scoped>
.ychangeyxtopti {
  align-items: center;
  margin-bottom: 1rem;
}

.ychangeyxtopti svg {
  cursor: pointer;
}

.ychangeyxtopti h2 {
  font-weight: 400;
  width: 100%;
  text-align: center;
}

.ychangeyxshow {
  display: block;
}

.ychangeyxnone {
  display: none;
}

.ychangeyx {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.ychangeyxtop {
  width: 100%;
  text-align: center;
}

.ychangeyxtop>span {
  display: block;
  width: 69%;
  line-height: 1.5;
  margin: 0 auto 0.75rem;
  font-size: 0.85rem;
}

.ychangeyxbox {
  width: 90%;
  display: flex;
  border: 0.0625rem solid black;
  padding: 0.65rem;
  box-sizing: border-box;
  border-radius: 1rem;
  margin: 1rem auto;
}

.ypasswinput {
  width: 87.7%;
  border: none;
  outline: none;
  font-size: 1rem;
}

.ychangebinp {
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
}

.ychangeyxbox>span {
  color: rgb(154, 221, 111);
  cursor: pointer;
}

.ychangeyxbot {
  width: 80%;
  margin: 0 auto;
}

.ychangeyxbot>button {
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

.ychangeyxbot>a {
  font-size: 0.9rem;
  text-decoration: underline;
  color: rgb(130, 137, 232);
  display: block;
  text-align: center;
  padding: 1rem 0 0.25rem;
}

.ychangebutbg {
  background: rgb(154, 221, 111) !important;
  cursor: pointer;
}
</style>
