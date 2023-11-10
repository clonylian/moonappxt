<template>
  <div class="ylanguagebg">
    <div class="ylanguage">language</div>
    <div class="ylanguagebox">
      <div class="ylanguagebcon">
        <div>{{ store.state.txt.language }}</div>
        <div class="ylanguagebxl">
          <button class="yclanguage" @click="chooselang()">
            {{ store.state.txt.Choose }}
          </button>
          <div
            :class="
              choose == '0' ? 'yclanguagebox' : 'yclanguagebox yclangshow'
            "
          >
            <div @click="changelang('ch')">汉语</div>
            <div @click="changelang('en')">English</div>

          </div>
        </div>
      </div>
    </div>
    <router-link class="ylanguagejx" to="/welcome">{{
      store.state.txt.continue
    }}</router-link>
    <!-- <button class="ylanguagejx" @click="twitterlog()">推特登录</button> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import hello from "hellojs/dist/hello.all";
let choose = ref("0");
const store = useStore();
let changelang = (str) => {
  store.commit("changeyy", str);
  choose.value = "0";
};
let chooselang = () => {
  choose.value = "1";
};

let twitterlog = () => {
  console.log(hello)
  hello.init(
    {
      twitter: "sqveEWxbjci9yGlGswHxShsxH",
    },
    {
      redirect_uri: "https://moonapp-zeta.vercel.app/",
    }
  );
  hello("twitter")
    .login()
    .then(
      function (res) {
        console.log(res, "登录成功");
      },
      function (err) {
        console.log("err", err);
      }
    );
  hello.on("auth.login", (result) => {
    hello(result.network)
      .api("/me")
      .then(
        function (p) {
          console.log(result, "result");
        },
        function (err) {
          console.log("err", err);
        }
      );
  });
};
</script>

<style scoped>
.ylanguagebg {
  width: 100%;
  height: 100%;
  padding: 2rem 2rem 1rem;
  background: rgb(21, 22, 26);
  box-sizing: border-box;
}
.ylanguage {
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
}
.ylanguagebox {
  display: flex;
  height: 77.5%;
  justify-content: center;
  align-items: center;
}
.ylanguagebcon {
  width: 100%;
  height: 44.8%;
  text-align: center;
  background: rgb(18, 19, 22);
}
.ylanguagebcon > div:nth-child(1) {
  color: rgb(154, 221, 111);
  font-size: 2.25rem;
}
.ylanguagebxl {
  width: 100%;
}
.yclanguage {
  display: block;
  width: 75%;
  padding: 0.75rem;
  font-size: 0.75rem;
  margin: 0.5rem auto;
  border-radius: 0.75rem;
}
.yclanguagebox {
  width: 40%;
  color: #fff;
  margin: 0.75rem auto 0;
  height: 7.1rem;
  padding: 0.5rem 0;
  background: black;
  border-radius: 1rem;
  display: none;
  overflow-y: scroll;
}
.yclangshow {
  display: block;
}
.yclanguagebox > div {
  padding: 0.25rem 0;
  cursor: pointer;
}
.yclanguagebox::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.yclanguagebox::-webkit-scrollbar-track {
  background: black;
  border-radius: 2px;
}
.yclanguagebox::-webkit-scrollbar-thumb {
  background: rgb(154, 221, 111);
  border-radius: 10px;
}
.yclanguagebox::-webkit-scrollbar-corner {
  background: #204754;
}
.yclanguagebox > div:hover {
  background: rgba(255, 255, 255, 0.25);
}
.ylanguagejx {
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
}
.ylanguagejx:hover {
  background: rgb(148, 212, 107);
}
</style>
