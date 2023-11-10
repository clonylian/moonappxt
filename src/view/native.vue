<template>
  <div class="box">
    <div class="head">
      <p>{{ $store.state.txt.nativetitle }}</p>
      <div class="head_2">
        <img class="head_1" src="../assets/Moon-removebg-preview.png" />
      </div>
    </div>
    <div class="cen">
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=io.moonapp"
        class="cen1"
      >
        <img class="cen_2" src="../assets/two.png" />
        <p>Google Play</p>
      </a>
      <a
        target="_blank"
        href="https://apps.apple.com/am/app/moon-app-wallet/id6459883134"
        class="cen1"
      >
        <img class="cen_2" src="../assets/three.png" />
        <p>App Store</p>
      </a>
      <div class="cen4" @click="gorig()">
        <svg
          class="cen_3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M2.04932 13.0001H7.52725C7.70624 16.2689 8.7574 19.3054 10.452 21.881C5.98761 21.1872 2.5001 17.5403 2.04932 13.0001ZM2.04932 11.0001C2.5001 6.4598 5.98761 2.81288 10.452 2.11914C8.7574 4.69468 7.70624 7.73123 7.52725 11.0001H2.04932ZM21.9506 11.0001H16.4726C16.2936 7.73123 15.2425 4.69468 13.5479 2.11914C18.0123 2.81288 21.4998 6.4598 21.9506 11.0001ZM21.9506 13.0001C21.4998 17.5403 18.0123 21.1872 13.5479 21.881C15.2425 19.3054 16.2936 16.2689 16.4726 13.0001H21.9506ZM9.53068 13.0001H14.4692C14.2976 15.7829 13.4146 18.3733 11.9999 20.5916C10.5852 18.3733 9.70229 15.7829 9.53068 13.0001ZM9.53068 11.0001C9.70229 8.21722 10.5852 5.62684 11.9999 3.40853C13.4146 5.62684 14.2976 8.21722 14.4692 11.0001H9.53068Z"
            fill="rgba(255,255,255,1)"
          ></path>
        </svg>
        <p>{{ $store.state.txt.nativecon }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "获取原生App",
    };
  },
  methods: {
    gorig() {
        if(localStorage.getItem('TOKEN') !== null){
          this.$router.push("/home");
        }else{
          this.$router.push('./Register')
        }
     
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: black;
  color: black !important;
}

.head {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.head > p {
  margin: 3rem 0 2rem 0;
  font-size: 20px;
  font-weight: 700;
  color: white;
}

.head_1 {
  width: 320px;
  height: 320px;
}

.cen {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cen1 {
  width: 80%;
  height: 3.5rem;
  margin-top: 1rem;
  border-radius: 20px;
  border: 1px white solid;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 22px;
}

.cen1 > p {
  width: 11rem;
  color: white;
}

.cen_2 {
  width: 30px;
  height: 40px;
}

.cen_3 {
  width: 30px;
  height: auto;
  margin-right: 1rem;
}

.cen4 {
  width: 80%;
  height: 3.5rem;
  margin-top: 1rem;
  border-radius: 20px;
  border: 1px white solid;
  display: flex;
  align-items: center;
  color: white;
  font-size: 20px;
  justify-content: center;
}
</style>
