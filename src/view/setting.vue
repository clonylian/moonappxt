<template>
  <div class="yset">
    <div class="ysetti flex">
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
      <h2>{{ $store.state.txt.settitle }}</h2>
    </div>
    <img src="../assets/Moon.png" alt="" />
    <div class="ysetemail">
      <span>{{ $store.state.txt.setemali }}</span>
      <span style="color: rgb(130, 137, 232); font-weight: 550"
        >douglas_jamesnek3@outlook.com</span
      >
    </div>
    <div class="ysetename">
      <span>{{ $store.state.txt.setusername }}</span>
      <span style="color: rgb(130, 137, 232); font-weight: 550">usergod</span>
    </div>
    <div class="ysetbuts">
      <router-link to="/Changeemail">{{
        $store.state.txt.changeemail
      }}</router-link>
      <router-link to="/Changeuser">
        {{ $store.state.txt.changeusername }}
      </router-link>
      <router-link to="/Changepassword">{{
        $store.state.txt.changepassword
      }}</router-link>
      <router-link to="/">
        {{ $store.state.txt.setyy }} <span>(ZH)</span>
      </router-link>
      <router-link to="/terms">{{ $store.state.txt.setterms }}</router-link>
      <router-link to="/policy">{{ $store.state.txt.setpolicy }}</router-link>
    </div>
    <a @click="outuser" class="ysetbutbot">
      {{ $store.state.txt.logout }}
    </a>
    <router-link to="/removeuser" class="ysetremove">{{
      $store.state.txt.removename
    }}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goForward() {
      this.$router.push("/home"); // 向后导航一步
    },
    outuser(){
      localStorage.clear()
      this.$router.push("/"); // 向后导航一步
    }
  },
};
</script>

<style scoped>
.ysetti {
  align-items: center;
  margin-bottom: 1rem;
}
.ysetti svg {
  cursor: pointer;
}
.ysetti h2 {
  font-weight: 400;
  width: 100%;
  text-align: center;
}
.yset {
  width: 100%;
  height: 100%;
}
.yset > img {
  display: block;
  width: 75%;
  margin: 1.5rem auto;
}

.ysetemail {
  text-align: center;
}

.ysetemail span {
  display: block;
  margin: 0.75rem auto;
}

.ysetename {
  text-align: center;
}

.ysetename span {
  display: block;
  margin: 0.75rem auto;
}

.ysetbuts {
  display: flex;
  padding: 2rem 2.75rem 1rem;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: space-between;
}

.ysetbuts a {
  width: 47.5%;
  text-align: center;
  margin: 0.5rem 0;
  padding: 0.9rem 1rem;
  background: white;
  border-radius: 1rem;
  font-size: 0.85rem;
  color: black;
  border: 0.125px solid black;
  box-sizing: border-box;
}

.ysetbuts button span {
  color: rgb(130, 137, 232);
  font-size: 0.95rem;
  margin-left: 0.25rem;
}

.ysetbuts button:hover {
  background: rgb(245, 245, 245);
}

.ysetbutbot {
  display: block;
  text-align: center;
  width: 80%;
  padding: 1.25rem;
  background: white;
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.0625rem solid black;
  box-sizing: border-box;
  margin: 0 auto 1.75rem;
}

.ysetremove {
  font-size: 0.9rem;
  text-decoration: underline;
  color: red;
  display: block;
  text-align: center;
  padding-bottom: 0.5rem;
}
</style>
