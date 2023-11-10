<template>
  <div style="height: 100%; background-color: black">
    <div class="box">
      <div class="heads">
        <svg
          @click="gologin"
          class="goup"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
          ></path>
        </svg>
        <p class="head_txt">
          <b>{{ $store.state.txt.recommendtit }}</b>
        </p>
        <p></p>
      </div>
      <div class="cenxd">
        <div class="cen_1">
          <input
            @click="rommend"
            class="cen_2"
            :placeholder="$store.state.txt.recommendplace"
          />
        </div>
        <p class="cen_3">{{ $store.state.txt.recommendcon }}</p>
      </div>
      <div class="but">
        <p>{{ $store.state.txt.recommendbutone }}</p>
        <p @click="golog">{{ $store.state.txt.recommendbuttwo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../common/api";
export default {
  data() {
    return {
      tjm: "您有推荐码吗?",
      tjianm: "获取推荐码并获得25美元的奖励以支付未来的费用",
      tjiao: "提交代码",
      tiaog: "跳过",
      list: [
        {
          id: "11",
          name: "钱包名称1",
          walletAddress: "0x1111111111111111111111111111",
        },
        {
          id: "12",
          name: "钱包名称2",
          walletAddress: "0x22222222222222278789789",
        },
      ],
    };
  },
  methods: {
    rommend() {
      this.list = api.recommendation().then((res) => {
        console.log(res);
      });
    },
    gologin() {
      this.$router.push("/username");
    },
    golog() {
      this.$router.push("/terms");
    },
  },
};
</script>

<style>
.box {
  width: 100%;
  height: 100%;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.heads {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  color: white;
}

.head_txt {
  width: auto;
  font-size: 20px;
}

.goup {
  padding: 0 0 0 0.5rem;
  width: 30px;
  height: 30px;
  fill: white;
}

.cenxd {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cen_1 {
  width: 90%;
  height: 3rem;
  display: flex;
  border-radius: 20px;
  background-color: white;
  justify-content: center;
  align-items: center;
}

.cen_2 {
  text-align: center;
  line-height: 2rem;
  border: none;
}

.cen_3 {
  margin-top: 1rem;
  width: 75%;
  font-size: 14px;
  text-align: center;
  color: white;
}

.but {
  width: 100%;
  display: flex;
  padding-bottom: 3rem;
  justify-content: space-around;
  color: white;
}

.but > p:nth-child(1) {
  width: 45%;
  padding: 1.25rem;
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  background-color: rgb(177, 177, 177);
  border: 0.125rem black solid;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}

.but > p:nth-child(2) {
  width: 30%;
  border: 0.125rem solid white;
  padding: 1.25rem;
  border-radius: 1rem;
  font-size: 0.95rem;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
</style>
