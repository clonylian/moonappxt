<template>
  <view>
    <div :class="showuser == '0' ? 'ychangeuser' : 'uchangeusernone'">
      <div class="ychangeusertopy">
        <div class="ychangeusertopyti flex">
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
          <h2>{{ $store.state.txt.changeusertity }}</h2>
        </div>
        <div class="ychangeuserbox">
          <input
            class="uchangeyserinp"
            v-model="changeuserpasstxt"
            :type="changeuser == '0' ? 'password' : 'text'"
            @input="yzemail()"
            :placeholder="$store.state.txt.changeuserplacey"
          />
          <span
            :class="changeuser == '1' ? 'ychangeunnone' : 'ychangeunshow'"
            @click="changeusername('1')"
            >{{ $store.state.txt.passwordshow }}</span
          >
          <span
            :class="changeuser == '1' ? 'ychangeunshow' : 'ychangeunnone'"
            @click="changeusername('0')"
            >{{ $store.state.txt.passwordnone }}</span
          >
        </div>
      </div>
      <div class="ychangeuserbot">
        <button
          :class="changean ? 'changeusershow changeuserl' : 'changeusernone'"
          @click="changeusershow()"
        >
          {{ $store.state.txt.continue }}
        </button>
        <button :class="changean ? 'changeusernone' : ''">
          {{ $store.state.txt.continue }}
        </button>
      </div>
    </div>
    <div
      :class="showuser == '1' ? 'ychangeusery ychangeusershow' : 'ychangeusery'"
    >
      <div class="ychangeusertop">
        <div class="ychangeusertopyti flex">
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
          <h2>{{ $store.state.txt.changeusertity }}</h2>
        </div>
        <div class="ychangeuserbox">
          <input
            class="newinput"
            v-model="newuser"
            @input="ynewuser()"
            style="width: 100%"
            :type="changeuser == '0' ? 'text' : 'text'"
            :placeholder="$store.state.txt.changeuserplacet"
          />
        </div>
        <span>{{ $store.state.txt.changeusercon }}</span>
      </div>

      <div class="ynewuserbut">
        <router-link
          to=""
          :class="dibubut == '1' ? 'ynewuserbutl' : 'changeusernone'"
        >
          {{ $store.state.txt.continue }}
        </router-link>
        <button :class="dibubut == '1' ? 'changeusernone' : ''">
          {{ $store.state.txt.continue }}
        </button>
      </div>
    </div>
  </view>
</template>

<script>
export default {
  data() {
    return {
      changeuser: "0",
      changean: false,
      changeuserpasstxt: "",
      newuser: "",
      isnewyser: false,
      dibubut: "0",
      showuser: "0",
    };
  },
  methods: {
    changeusername(str) {
      this.changeuser = str;
    },
    yzemail() {
      if (this.changeuserpasstxt != "") {
        this.changean = true;
      } else {
        this.changean = false;
      }
    },
    ynewuser() {
      const stringPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,22}$/;
      this.isnewyser = stringPattern.test(this.newuser);
      console.log(this.isnewyser);
      if (this.isnewyser) {
        this.dibubut = "1";
      }
    },
    changeusershow() {
      this.showuser = "1";
    },
    goForward() {
      this.$router.go(-1); // 向后导航一步
    },
  },
};
</script>

<style scoped>
.ychangeusertopyti {
  align-items: center;
  margin-bottom: 1rem;
}
.ychangeusertopyti svg {
  cursor: pointer;
}
.ychangeusertopyti h2 {
  font-weight: 400;
  width: 100%;
  text-align: center;
}
.ychangeusershow {
  display: flex !important;
}
.uchangeusernone {
  display: none;
}
.ychangeusertop > span {
  display: block;
  width: 87%;
  line-height: 1.5;
  margin: 0 auto 0.75rem;
  font-size: 0.85rem;
  text-align: center;
}

.changeuserl {
  background: rgb(154, 221, 111) !important;
  cursor: pointer;
}

.changeusershow {
  display: block;
}

.changeusernone {
  display: none !important;
}

.ychangeunshow {
  display: block;
}

.ychangeunnone {
  display: none;
}

.ychangeuser {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.ychangeusery {
  width: 100%;
  height: 100%;
  display: none;
  justify-content: space-between;
  flex-direction: column;
}
.changeuserl {
  background: rgb(154, 221, 111) !important;
  cursor: pointer;
}

.ychangeuserbox {
  width: 90%;
  display: flex;
  border: 0.0625rem solid black;
  padding: 0.65rem;
  box-sizing: border-box;
  border-radius: 1rem;
  margin: 1rem auto;
}

.uchangeyserinp {
  width: 87.7%;
  border: none;
  outline: none;
  font-size: 1rem;
}

.newinput {
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
}

.ychangeuserbox > span {
  color: rgb(154, 221, 111);
  cursor: pointer;
}

.ychangeuserbot button {
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
.ynewuserbut a {
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
.ynewuserbut button {
  width: 100%;
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

.ynewuserbut .ynewuserbutl {
  background: rgb(154, 221, 111) !important;
  cursor: pointer;
}
</style>
