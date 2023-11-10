<template>
  <div class="yremoveuser">
    <div class="yremoveutop">
      <div class="yremoveuti flex">
        <span @click="navigateBack()">✕</span>
        <h2>{{ $store.state.txt.removeusertit }}</h2>
      </div>
      <img src="../assets/redx.png" alt="" />
      <a @click="outuser" class="yremoveuay" to="/language">{{
        $store.state.txt.removeuserbutyi
      }}</a>
      <router-link class="yremoveuat" to="/setting">{{
        $store.state.txt.removeuserbutt
      }}</router-link>
    </div>
    <img src="../assets/Moontop.png" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    navigateBack() {
      this.$router.go(-1); // 向后导航一步
    },
    outuser(){
      localStorage.clear()
      this.$router.push("/"); // 向后导航一步
    }
  },
};
</script>

<style scoped>
.yremoveuser {
  width: 100%;
  height: 100%;
  background: rgb(15, 15, 15);
}
.yremoveutop {
  width: 100%;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
}
.yremoveuti {
  width: 100%;
  box-sizing: border-box;
  align-items: center;
}
.yremoveuti span {
  font-size: 1.35rem;
  font-weight: 500;
  color: white;
  cursor: pointer;
}
.yremoveuti h2 {
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  color: white;
  width: 100%;
}
.yremoveutop > img {
  display: block;
  width: 50%;
  margin: 7rem auto 5rem;
}
.yremoveuay {
  display: block;
  text-align: center;
  width: 95%;
  padding: 1.25rem;
  background: white;
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.0625rem solid black;
  box-sizing: border-box;
  margin: 0 auto 0.85rem;
}
.yremoveuay:hover {
  background: rgb(245, 245, 245);
}
.yremoveuat {
  display: block;
  text-align: center;
  width: 95%;
  padding: 1.25rem;
  background: rgb(154, 221, 111);
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.0625rem solid black;
  box-sizing: border-box;
  margin: 0 auto 1.75rem;
}
.yremoveuat:hover {
  background: rgb(148, 212, 107);
}
.yremoveuser > img {
  display: block;
  width: 95%;
  margin: 1rem auto 0;
}
</style>
