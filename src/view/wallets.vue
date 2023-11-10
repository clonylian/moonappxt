<template>
  <div class="wallet">
    <div class="wallet_box">
      <div class="walltex">
        <svg
          @click="gologin"
          class="wal_one"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
            fill="rgba(255,255,255,1)"
          ></path>
        </svg>
        <p class="wal_two">{{ $store.state.txt.walletstit }}</p>
      </div>
      <router-link to="/walletpass">
        <div class="wals">
          <div class="wals_one">
            <div class="wals_two">
              <svg
                t="1699506643734"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4364"
                width="16"
                height="16"
              >
                <path
                  d="M502.010485 765.939573c3.773953 3.719718 8.686846 5.573949 13.596669 5.573949 0.075725 0 0.151449-0.010233 0.227174-0.011256 0.329505 0.016373 0.654916 0.050142 0.988514 0.050142 0.706081 0 1.400906-0.042979 2.087545-0.116657 4.352121-0.366344 8.607028-2.190899 11.961426-5.496178l335.053985-330.166675c7.619538-7.509021 7.709589-19.773346 0.200568-27.393907s-19.774369-7.711636-27.39493-0.201591L536.193005 706.304358 536.193005 50.019207c0-10.698666-8.67252-19.371186-19.371186-19.371186s-19.371186 8.67252-19.371186 19.371186l0 657.032164-306.881342-302.44838c-7.618515-7.509021-19.883863-7.419993-27.393907 0.199545-7.509021 7.619538-7.419993 19.884886 0.199545 27.393907L502.010485 765.939573z"
                  fill="#ffffff"
                  p-id="4365"
                ></path>
                <path
                  d="M867.170139 711.020776c-10.698666 0-19.371186 8.67252-19.371186 19.371186l0 165.419494c0 13.054317-10.620895 23.675212-23.676236 23.675212L205.182103 919.486668c-13.054317 0-23.676236-10.620895-23.676236-23.675212L181.505867 730.391962c0-10.698666-8.67252-19.371186-19.371186-19.371186s-19.371186 8.67252-19.371186 19.371186l0 165.419494c0 34.416857 28.000728 62.416562 62.417585 62.416562l618.941638 0c34.417881 0 62.417585-27.999704 62.417585-62.416562L886.540302 730.391962C886.541325 719.693296 877.868805 711.020776 867.170139 711.020776z"
                  fill="#ffffff"
                  p-id="4366"
                ></path>
              </svg>
            </div>
            <div class="wals_three">
              <div class="wals_four">
                <p>{{ $store.state.txt.walletstxty }}</p>
                <span>{{ $store.state.txt.walletstxtt }}</span>
              </div>
              <div class="wals_five">
                {{ $store.state.txt.walletstxtthr }}
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPassword: false,
      inputValue: "",
      buttonColor: "#b1b1b1",
      disableButton: true,
    };
  },
  methods: {
    gopass() {
      if (this.inputValue == "") {
      } else {
        this.$router.push("/home");
      }
    },
    gologin() {
      this.$router.push("/Portfolio");
    },
    checkInput() {
      const expectedValue = /^[a-zA-Z0-9_]{4,16}$/;
      if (expectedValue.test(this.inputValue)) {
        this.buttonColor = "#9ad36f";
        this.disableButton = false;
      } else {
        this.buttonColor = "#b1b1b1";
        this.disableButton = true;
      }
    },
  },
};
</script>
<style scoped>
.wallet {
  width: 100%;
  height: 100%;
  background: rgb(128, 139, 231);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.wal_one {
  width: 25px;
  height: 25px;
  margin-top: 1rem;
  margin-left: 0.5rem;
}

.wal_two {
  margin: 1rem 0rem 0 3.5rem;
  width: 55%;
  text-align: center;
  color: white;
  font-size: 18px;
}

.walltex {
  width: 100%;
  display: flex;
}

.wal_three {
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 12px;
  width: 100%;
  color: white;
  text-align: center;
}

.wal_four {
  width: 80%;
  height: 2rem;
  border-radius: 15px;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px black solid;
  background-color: white;
}

.wal_four > input {
  text-align: center;
  border: none;
  outline: none;
}

.wal_five {
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: white;
}

.wal_six {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.wal_six > p {
  width: 80%;
  padding: 1rem;
  border: 1px black solid;
  border-radius: 15px;
  text-align: center;
  background-color: rgb(177, 177, 177);
}

.wals {
  width: 90%;
  margin: 0 auto;
  display: flex;
}

.wals_one {
  width: 100%;
  height: 3.5rem;
  background-color: white;
  border: 1.5px black solid;
  display: flex;
  border-radius: 15px;
  align-items: center;
  margin-top: 2rem;
}

.wals_two {
  width: 2.5rem;
  height: 2rem;
  background-color: black;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
}

.wals_three {
  width: 100%;
  margin-left: 0.5rem;
}

.wals_four {
  font-size: 12px;
  justify-content: space-between;
  display: flex;
  margin-right: 1rem;
}

.wals_four > span {
  color: rgb(131, 186, 95);
}

.wals_five {
  font-size: 10px;
  color: rgb(177, 177, 177);
}
</style>
