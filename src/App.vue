<template>
  <div class="ymian flex">
    <div class="ycontent">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup></script>
<style>
.ymian {
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.ycontent {
  width: 20%;
  height: 90vh;
  position: relative;
}
@media (max-width: 1250px) {
  .ycontent {
    width: 100%;
    height: 100%;
  }
  .ypolicy {
    overflow-y: scroll;
  }
  .yfoot {
    width: 100% !important;
    bottom: 0 !important;
  }
  .ytradebot {
    width: 95% !important;
  }
  .ytradeboxt {
    width: 100%;
    height: 100%;

    overflow-y: scroll;
  }
  .ytradeboxtt {
    padding-bottom: 10rem;
  }
  .ytradess > input {
    width: 77.5% !important;
  }
  .yset {
    overflow-y: scroll;
  }
  .ychangeyx {
    overflow-y: scroll;
  }
  .ypassword {
    overflow-y: scroll;
  }
  .ytradethree {
    width: 100% !important;
    height: 100%;
    overflow-y: scroll;
  }
  .ytradethree input {
    width: 70% !important;
  }
  .ytradetwo {
    overflow-y: scroll;
    padding-bottom: 10rem;
  }
  .ytradethfour {
    width: 100% !important;
    height: 100% !important;
    overflow-y: scroll;
  }
  .ytradeconbuts {
    padding-bottom: 8rem;
  }
  .ytradefive {
    width: 100% !important;
    height: 100% !important;
    overflow-y: scroll;
  }
  .ytradefivebox {
    height: 55% !important;
  }
  .ytradeboxtytwof input {
    width: 70% !important;
  }
}
</style>
