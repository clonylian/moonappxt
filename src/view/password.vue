<template>
  <div class="ypassword">
    <div class="ypasswordbox">
      <div class="ypasswordtop">
        <div class="ypasswordti flex">
          <svg
            @click="returnfh()"
            style="width: 25px; height: 25px"
            class="clone"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
            ></path>
          </svg>
          <h2>创建您的月球密码</h2>
        </div>
        <span>{{ store.state.txt.cjpassword }}</span>
        <div class="ypasswordinp">
          <input
            class="ypasswinput"
            v-model="password"
            @input="checkpassword()"
            :type="inptypey == '0' ? 'password' : 'text'"
            :placeholder="store.state.txt.inppassword"
          />
          <span
            :class="inptypey == '0' ? 'ypasswordshow' : 'ypasswordnone'"
            @click="inpchangey('1')"
            >{{ store.state.txt.passwordshow }}</span
          >
          <span
            :class="inptypey == '1' ? 'ypasswordshow' : 'ypasswordnone'"
            @click="inpchangey('0')"
            >{{ store.state.txt.passwordnone }}</span
          >
        </div>
        <div class="ypasswordinp">
          <input
            class="ypasswinput"
            v-model="passwordy"
            @input="yjxpass()"
            :type="inptype == '0' ? 'password' : 'text'"
            :placeholder="store.state.txt.cfinppassword"
          />
          <span
            :class="inptype == '0' ? 'ypasswordshow' : 'ypasswordnone'"
            @click="inpchange('1')"
            >{{ store.state.txt.passwordshow }}</span
          >
          <span
            :class="inptype == '1' ? 'ypasswordshow' : 'ypasswordnone'"
            @click="inpchange('0')"
            >{{ store.state.txt.passwordnone }}</span
          >
        </div>
        <div class="ypasswordlist">
          <span :class="listf == '1' ? 'ypasslisty' : ''"
            ><span>√</span>{{ store.state.txt.passlist[0] }}</span
          >
          <span :class="listy == '1' ? 'ypasslisty' : ''"
            ><span>√</span>{{ store.state.txt.passlist[1] }}</span
          >
          <span :class="listthr == '1' ? 'ypasslisty' : ''"
            ><span>√</span>{{ store.state.txt.passlist[2] }}</span
          >
          <span :class="listt == '1' ? 'ypasslisty' : ''"
            ><span>√</span>{{ store.state.txt.passlist[3] }}</span
          >
        </div>
      </div>
      <router-link
        to="/username"
        :class="listbut == '1' ? 'ypasswordjx yhoverjx' : 'ypasswordjx none'"
      >
        {{ store.state.txt.continue }}
      </router-link>
      <router-link
        to=""
        :class="listbut == '0' ? 'ypasswordjx' : 'ypasswordjx none'"
      >
        {{ store.state.txt.continue }}
      </router-link>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
let inptype = ref("0");
let inptypey = ref("0");
let listy = ref("0");
let listt = ref("0");
let listthr = ref("0");
let listf = ref("0");
let listbut = ref("0");
let password = ref("");
let passwordy = ref("");
let inpchange = (str) => {
  inptype.value = str;
};
let inpchangey = (str) => {
  inptypey.value = str;
};
let checkpassword = () => {
  const containsUpperCase = /[A-Z]/.test(password.value);
  const containsLowerCase = /[a-z]/.test(password.value);
  const containsNumber = /\d/.test(password.value);
  const hasValidLength = password.value.length >= 8;



  if (containsUpperCase) {
    listy.value = "1";
  } else {
    listy.value = "0";
  }
  if (containsLowerCase) {
    listt.value = "1";
  } else {
    listt.value = "0";
  }
  if (containsNumber) {
    listthr.value = "1";
  } else {
    listthr.value = "0";
  }
  if (hasValidLength) {
    listf.value = "1";
  } else {
    listf.value = "0";
  }
};
let yjxpass = () => {
  let ypassbut;
  if (
    listy.value == "1" &&
    listt.value == "1" &&
    listthr.value == "1" &&
    listf.value == "1"
  ) {
    ypassbut = true;
    console.log(ypassbut);
  } else {
    ypassbut = false;
  }
  if (password.value == passwordy.value && ypassbut) {
    listbut.value = "1";
    localStorage.setItem('moonpassword', JSON.stringify(passwordy.value));
    // console.log(passwordy.value) 
   
    // console.log(listbut.value);
  } else {
    listbut.value = "0";
  }
};
let returnfh = () => {
  router.push("/Register");
};
</script>

<style scoped>
.ypasswordti {
  align-items: center;
  margin-bottom: 1rem;
}
.ypasswordti span {
  height: 2.5rem;
  width: 2.5rem;
  line-height: 1.75;
  font-size: 1.5rem;
  cursor: pointer;
}
.ypasswordti h2 {
  font-weight: 400;
  margin-left: 13%;
}
.none {
  display: none !important;
}
.ypassword {
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  box-sizing: border-box;
}

.ypasswordtop {
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
}

.ypasswordtop > span {
  display: block;
  color: rgb(179, 179, 179);
  text-align: center;
}

.ypasswordinp {
  display: flex;
  width: 100%;
  border: 0.0625rem solid black;
  padding: 0.65rem;
  box-sizing: border-box;
  border-radius: 1rem;
  margin: 1rem 0;
}

.ypasswinput {
  width: 88.7%;
  border: none;
  outline: none;
  font-size: 1rem;
}

.ypasswordshow {
  display: block;
}

.ypasswordnone {
  display: none;
}

.ypasswordinp > span {
  color: rgb(154, 221, 111);
  cursor: pointer;
}

.ypasswordbox {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.ypasswordlist {
  width: 97.5%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.ypasswordlist > span {
  width: 24.5%;
  display: flex;
  justify-content: center;
  column-gap: 0.25rem;
  font-size: 0.65rem;
  text-align: center;
  padding: 0.3rem 0;
  background: rgb(244, 244, 244);
  color: rgb(177, 177, 177);
  border-radius: 1rem;
}

.ypasswordjx {
  display: block;
  text-align: center;
  width: 90%;
  padding: 1.25rem;
  background: rgb(177, 177, 177);
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
}

.ypasswordlist > .ypasslisty {
  background: rgb(154, 221, 111);
  color: black;
}

.yhoverjx {
  background: rgb(154, 221, 111);
  cursor: pointer;
}

.yhoverjx:hover {
  background: rgb(148, 212, 107);
}
</style>
