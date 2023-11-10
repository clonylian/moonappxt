<template>
  <div class="yreg">
    <div class="headx">
      <svg
        @click="gologin"
        class="clone"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
        ></path>
      </svg>
      <p class="head_one">{{ $store.state.txt.registerti }}</p>
      <p class="head_two">&nbsp &nbsp &nbsp &nbsp</p>
    </div>
    <p class="head_two">{{ $store.state.txt.registercont }}</p>
    <div class="reginput">
      <div class="regtwo">
        <div class="regp">
          <input
            type="text"
            v-model="inputValue"
            @input="checkInput"
            :placeholder="$store.state.txt.registeremailadd"
          />
        </div>
        <p class="regpone">
          {{ $store.state.txt.registeremailtxt }}<b> Moon App</b>
        </p>
      </div>
      <div
        :style="{ backgroundColor: buttonColor }"
        @click="jxutiao"
        :disabled="disableButton"
        class="regthree"
      >
        {{ $store.state.txt.continue }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reg: "让我们开始吧",
      regs: "你的电子邮件地址是什么？",
      moon: "该邮箱将用于登录",
      jixu: "继续",
      inputValue: "",
      showPassword: false,
      inputValue: "",
      buttonColor: "#b1b1b1",
      disableButton: true,
    };
  },
  methods: {
    gologin() {
      this.$router.push("/login");
    },
    jxutiao() {
      if (this.inputValue == "") {
      } else {
        localStorage.setItem('Rigister', JSON.stringify(this.inputValue));
            this.$router.push("/password");
      }
    },
    checkInput() {
      const expectedValue = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
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
.yreg {
  width: 100%;
  height: 100%;
}
.clone {
  width: 25px;
  height: 25px;
  margin: 0rem 0 0 1rem;
}

.headx {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.head_one {
  width: 11rem;
  font-size: 20px;
  text-align: center;
}

.head_two {
  text-align: center;
  font-size: 18px;
  padding: 0.5rem 0 1rem 0;
}

.reginput {
  width: 100%;
  display: flex;
  height: 75vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.regp {
  display: flex;
  width: 100%;
  border: 0.0625rem solid black;
  padding: 0.65rem;
  box-sizing: border-box;
  border-radius: 1rem;
}

.regp > input {
  font-size: 1rem;
  width: 100%;
  outline: none;
  border: none;
}

.regpone {
  margin-top: 1rem;
  font-size: 14px;
}
.regtwo {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.regthree {
  display: block;
  text-align: center;
  width: 90%;
  padding: 1.25rem;
  background: #b1b1b1;
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
