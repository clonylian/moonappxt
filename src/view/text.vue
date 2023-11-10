<template>
    <button @click="twitterlog()">代理</button>
</template>
<script setup>
import hello from "hellojs/dist/hello.all";
let twitterlog = () => {
  hello.init(
    {
      twitter: "2O8n0K7TiVKf7tBjPVxL82PcJ",
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