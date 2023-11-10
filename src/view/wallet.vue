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
        <p class="wal_two">{{ $store.state.txt.walletttit }}</p>
      </div>
      <p class="wal_three">{{ $store.state.txt.walletttxty }}</p>
      <div class="wal_four">
        <input
          v-model="inputValue"
          @input="checkInput"
          :placeholder="$store.state.txt.walletttxtt"
        />
      </div>
      <div class="wal_five">
        <p>{{ $store.state.txt.walletttxtthr }}</p>
        <p>{{ this.walletadd }}</p>
      </div>
    </div>
    <div class="wal_six">
      <p
        :style="{ backgroundColor: buttonColor }"
        @click="gopass"
        :disabled="disableButton"
      >
        {{ $store.state.txt.walletttxtf }}
      </p>
    </div>
  </div>
</template>
<script>
import api from "../common/api";
export default {
  data() {
    return {
      showPassword: false,
      inputValue: "",
      buttonColor: "#b1b1b1",
      disableButton: true,
      userid: "",
      token: "",
      walletadd: "",
    };
  },
  mounted() {
    // let useroken = localStorage.getItem("usertoken");
    // this.userid = useroken.userid;
    // this.token = useroken.token;
    api
      .create({
        // userId: this.userid,
        // token: this.token,
        userId: "123456",
        token: "abcdef123456",
      })
      .then((res) => {
        this.walletadd =
          res.data.walletAddress.substring(0, 6) +
          "..." +
          res.data.walletAddress.substring(res.data.walletAddress.length - 4);
          localStorage.setItem('wallet', this.walletadd)
      });
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
<style>
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
  width: 50%;
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
</style>
