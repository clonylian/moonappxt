<template>
  <div class="yattack">
    <div class="yattacktop flex">
      <h2>{{ $store.state.txt.attacktit }}</h2>
      <div></div>
    </div>
    <div class="yattacktab flex jus">
      <div
        :class="attacktab == '0' ? 'attackactive' : ''"
        @click="changeack('0')"
      >
        {{ $store.state.txt.attacktaby }}
      </div>
      <div
        :class="attacktab == '1' ? 'attackactive' : ''"
        @click="changeack('1')"
      >
        {{ $store.state.txt.attacktabt }}
      </div>
    </div>
    <div :class="attacktab == '0' ? 'attackshow' : 'attacknone'">
      <div class="attackytop flex">
        <div
          @click="changetabcon('0')"
          :class="attacktabt == '0' ? 'attactive' : ''"
        >
          {{ $store.state.txt.attackonetaby }}
        </div>
        <span></span>
        <div
          @click="changetabcon('1')"
          :class="attacktabt == '1' ? 'attactive' : ''"
        >
          {{ $store.state.txt.attackonetabt }}
        </div>
        <span></span>
        <div
          @click="changetabcon('2')"
          :class="attacktabt == '2' ? 'attactive' : ''"
        >
          {{ $store.state.txt.attackonetabthr }}
        </div>
      </div>
      <div class="attackxian"></div>
      <div :class="attacktabt == '0' ? 'attacktabcon' : 'attacktabnone'">
        <img src="../assets/Moon-removebg-preview.png" alt="" />
        <div class="atttxt">{{ $store.state.txt.attackoneyabytxt }}</div>
      </div>
      <div :class="attacktabt == '1' ? 'attacktabcon' : 'attacktabnone'">
        <img src="../assets/Moon-removebg-preview.png" alt="" />
        <div class="atttxt">
          <div>{{ $store.state.txt.attackoneyabttxt }}</div>
          <div @click="changetabcon('0')">
            {{ $store.state.txt.attackoneyabtatxt }}
          </div>
        </div>
      </div>
      <div :class="attacktabt == '2' ? 'attacktabcon' : 'attacktabnone'">
        <img src="../assets/Moon-removebg-preview.png" alt="" />
        <div class="atttxt">
          <div>{{ $store.state.txt.attackoneyabthrtxt }}</div>
          <div @click="changetabcon('0')">
            {{ $store.state.txt.attackoneyabthratxt }}
          </div>
        </div>
      </div>
    </div>
    <div :class="attacktab == '1' ? 'attackshow' : 'attacknone'">
      <div class="attackytop flex">
        <div
          @click="changetabconf('0')"
          :class="attacktabf == '0' ? 'attactive' : ''"
        >
          {{ $store.state.txt.attacktwotaby }}
        </div>
        <span></span>
        <div
          @click="changetabconf('1')"
          :class="attacktabf == '1' ? 'attactive' : ''"
        >
          {{ $store.state.txt.attackonetabt }}
        </div>
        <span></span>
        <div
          @click="changetabconf('2')"
          :class="attacktabf == '2' ? 'attactive' : ''"
        >
          {{ $store.state.txt.attackonetabthr }}
        </div>
      </div>
      <div class="attackxian"></div>
      <div :class="attacktabf == '0' ? 'attacktabcon' : 'attacktabnone'">
        <div class="yattacktab yattacktabpadd flex jus">
          <div
            @click="changetabconfsix('0')"
            :class="attacktabsix == '0' ? 'attackactive' : ''"
          >
            {{ $store.state.txt.attacktwobuty }}
          </div>
          <div
            @click="changetabconfsix('1')"
            :class="attacktabsix == '1' ? 'attackactive' : ''"
          >
            {{ $store.state.txt.attacktwobutt }}
          </div>
        </div>
        <div :class="attacktabsix == '0' ? 'attacktabliu' : 'attacktabliunone'">
          <div class="attacktsss flex jus">
            <svg
              data-v-5252e6f7=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                data-v-5252e6f7=""
                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
              ></path>
            </svg>
            <input type="text" :placeholder="$store.state.txt.attavktwoinpy" />
            <span>{{ $store.state.txt.attavktwoinpt }}</span>
          </div>
        </div>
        <div :class="attacktabsix == '1' ? 'attacktabliu' : 'attacktabliunone'">
          <div class="yattacktly">
            <div class="yattacktlyinput flex jus">
              <div class="yattacktltopyi flex">
                <img src="../assets/eth.png" alt="" />
                <span>ETH</span>
              </div>
              <div class="yattacktltoptwo">
                <input type="text" placeholder="0" />
              </div>
            </div>
            <div class="yattacktlright flex jus">
              <div class="yattacktllefty flex">
                <span>{{ $store.state.txt.tradetabtwoye }}:</span>
                <span>0</span>
                <div>{{ $store.state.txt.teadetabtwoxd }}</div>
              </div>
              <div class="yattacktlrightt flex">
                <span>≈</span>
                <span>$ 0.00</span>
              </div>
            </div>
          </div>
          <div class="attackxian"></div>
          <div class="yattacktlt">
            <span>{{ $store.state.txt.attacktwoinpp }}</span>
            <div class="yattacktltwobox flex jus">
              <span>ETH</span>
              <input type="text" placeholder="0.0" />
            </div>
          </div>
          <div class="attackxian"></div>
          <div :class="attackinpthr == '0' ? 'attacktls' : 'attacktlsblack'">
            <div @click="changeackinps('1')" class="attacktlsy flex jus">
              <div>{{ $store.state.txt.attacktwoinpt }}</div>
              <div>{{ attackinps }}</div>
            </div>
            <div
              :class="
                attackinpthr == '1' ? 'attacktlst flex jus' : 'attacklstnone'
              "
            >
              <div
                @click="changetabs('1')"
                :class="attacktabs == '1' ? 'attacktabactive' : ''"
              >
                0
              </div>
              <div
                @click="changetabs('2')"
                :class="attacktabs == '2' ? 'attacktabactive' : ''"
              >
                1
              </div>
              <div
                @click="changetabs('3')"
                :class="attacktabs == '3' ? 'attacktabactive' : ''"
              >
                2
              </div>
              <div
                @click="changetabs('4')"
                :class="attacktabs == '4' ? 'attacktabactive' : ''"
              >
                car (3)
              </div>
              <input type="text" placeholder="风俗" />
            </div>
          </div>
          <div class="attackxian"></div>
          <div :class="attackclif == '1' ? 'attacktlfshow' : 'attacktlf'">
            <div @click="changeackinpf('1')" class="attacktlfy flex jus">
              <div>{{ $store.state.txt.attacktwoinpthr }}</div>
              <div>{{ attackinpf }}</div>
            </div>
            <div
              :class="attackclif == '1' ? 'attackinpfshow' : 'attackinpfnone'"
            >
              <div
                @click="changetabf('1')"
                :class="
                  attackfabs == '1'
                    ? 'attacktlftshow flex jus'
                    : 'attacktlft flex jus'
                "
              >
                <div>economy</div>
                <div>Execute within 2min</div>
              </div>
              <div
                @click="changetabf('2')"
                :class="
                  attackfabs == '2'
                    ? 'attacktlftshow flex jus'
                    : 'attacktlft flex jus'
                "
              >
                <div>regular</div>
                <div>Execute within 1min</div>
              </div>
              <div
                @click="changetabf('3')"
                :class="
                  attackfabs == '3'
                    ? 'attacktlftshow flex jus'
                    : 'attacktlft flex jus'
                "
              >
                <div>fast</div>
                <div>Execute within 30s</div>
              </div>
            </div>
          </div>
          <div class="attackxian"></div>
          <button class="yattackbut">
            {{ $store.state.txt.attackbotbut }}
          </button>
        </div>
      </div>
      <div :class="attacktabf == '1' ? 'attacktabcon' : 'attacktabnone'">
        <img src="../assets/Moon-removebg-preview.png" alt="" />
        <div class="atttxt">
          <div>{{ $store.state.txt.attacktwotabery }}</div>
          <div @click="changetabconf('0')">
            {{ $store.state.txt.attacktwotabert }}
          </div>
        </div>
      </div>
      <div :class="attacktabf == '2' ? 'attacktabcon' : 'attacktabnone'">
        <img src="../assets/Moon-removebg-preview.png" alt="" />
        <div class="atttxt">
          <div>{{ $store.state.txt.attacktwotabethry }}</div>
          <div @click="changetabconf('0')">
            {{ $store.state.txt.attacktwotabthrt }}
          </div>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Foot from "../components/foot.vue";
let attacktab = ref("0");
let attacktabt = ref("0");
let attacktabf = ref("0");
let attacktabsix = ref("0");
let attackinpthr = ref("0");
let attackclif = ref("0");
let attacktabs = ref("4");
let attackfabs = ref("2");
let attackinps = ref("car (3)");
let attackinpf = ref("regular");
let changeack = (str) => {
  attacktab.value = str;
};
let changetabs = (str) => {
  attacktabs.value = str;
  if (str == "1") {
    attackinps.value = "0";
  } else if (str == "2") {
    attackinps.value = "1";
  } else if (str == "3") {
    attackinps.value = "2";
  } else {
    attackinps.value = "car (3)";
  }
};
let changetabf = (str) => {
  attackfabs.value = str;
  if (str == "1") {
    attackinpf.value = "economy";
  } else if (str == "2") {
    attackinpf.value = "regular";
  } else {
    attackinpf.value = "fast";
  }
};
let changeackinps = (str) => {
  if (attackinpthr.value == str) {
    attackinpthr.value = "0";
  } else {
    attackinpthr.value = "1";
  }
};
let changeackinpf = (str) => {
  if (attackclif.value == str) {
    attackclif.value = "0";
  } else {
    attackclif.value = "1";
  }
};
let changetabcon = (str) => {
  attacktabt.value = str;
};
let changetabconf = (str) => {
  attacktabf.value = str;
};
let changetabconfsix = (str) => {
  attacktabsix.value = str;
};
</script>

<style scoped>
.attacklstnone {
  display: none;
}
.attackinpfnone {
  display: none;
}
.attackinpfshow {
  display: block;
}
.yattack {
  width: 100%;
  height: 100%;
  position: relative;
}
.yattacktop {
  width: 100%;
  column-gap: 1rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}
.yattacktop h2 {
  font-size: 1.5rem;
  font-weight: 500;
}
.yattacktop div {
  width: 58%;
  height: 1.5px;
  background: black;
}
.yattacktab {
  width: 100%;
  padding: 0.5rem;
  border: 0.125rem solid black;
  border-radius: 1.5rem;
  box-sizing: border-box;
  column-gap: 0.5rem;
  margin: 0.5rem 0 1rem;
  background: black;
}
.yattacktab > div {
  padding: 0.75rem;
  width: 48.5%;
  color: white;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.yattacktab > .attackactive {
  background: white;
  border-radius: 1rem;
  color: rgb(21, 22, 26);
}
.attackshow {
  width: 90%;
  height: 78%;
  margin: 0 auto;
  overflow: auto;
  padding-top: 2rem;
}
.attackshow::-webkit-scrollbar {
  width: 0.625rem;
  height: 0.625rem;
}

.attackshow::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px;
}

.attackshow::-webkit-scrollbar-thumb {
  background: rgba(117, 123, 208, 0.2);
  border-radius: 10px;
}

.attackshow::-webkit-scrollbar-corner {
  background: transparent;
}

.attackshow::-webkit-scrollbar-thumb:hover {
  background: rgb(65, 68, 116);
}

.attackytop {
  font-size: 1.25rem;
  column-gap: 0.25rem;
  color: rgb(177, 177, 177);
  align-items: center;
  cursor: pointer;
}
.attackytop span {
  height: 2rem;
  border-right: 0.125rem solid black;
}
.attackytop div {
  padding: 0.25rem 0.75rem;
  box-sizing: border-box;
}
.attackytop div:hover {
  background: rgb(245, 245, 245);
  border-radius: 0.25rem;
}
.attackytop .attactive {
  color: black;
}
.attackxian {
  width: 100%;
  border-top: 0.125rem solid black;
  margin: 0.75rem 0;
}
.attacktabnone {
  display: none;
}
.attacknone {
  display: none;
}
.attacktabliunone {
  display: none;
}
.attacktabcon {
  width: 100%;
  height: auto;
  display: block;
  overflow-y: scroll;
  padding-bottom: 5rem;
}
.attacktabcon::-webkit-scrollbar {
  width: 0.625rem;
  height: 0.625rem;
}

.attacktabcon::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px;
}

.attacktabcon::-webkit-scrollbar-thumb {
  background: rgba(117, 123, 208, 0.2);
  border-radius: 10px;
}

.attacktabcon::-webkit-scrollbar-corner {
  background: transparent;
}

.attacktabcon::-webkit-scrollbar-thumb:hover {
  background: rgb(65, 68, 116);
}
.attacktabcon > img {
  display: block;
  width: 45%;
  margin: 0 auto;
  padding: 2rem 0;
}
.atttxt {
  width: 75%;
  margin: 0 auto;
  font-size: 1.15rem;
  text-align: center;
}
.atttxt div:nth-child(2) {
  line-height: 1.25;
  color: rgb(130, 137, 232);
  cursor: pointer;
}
.attacktsss {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 0.125rem solid black;
  border-radius: 2.5rem;
  box-sizing: border-box;
  column-gap: 0.5rem;
  margin: 0.5rem 0 1rem;
}
.attacktsss > svg {
  width: 1.5rem;
  height: 1.5rem;
}
.attacktsss > input {
  width: 75.5%;
  border: none;
  outline: none;
  font-size: 0.9rem;
}
.attacktsss > span {
  color: rgb(154, 221, 111);
  font-size: 1rem;
}
.yattacktabpadd {
  padding: 0.25rem 0.25rem;
  border-radius: 1.25rem;
}
.yattacktlt span {
  font-size: 0.85rem;
  padding: 0.5rem 0;
}
.yattackbut {
  display: block;
  text-align: center;
  width: 100%;
  padding: 1.25rem;
  background: rgb(177, 177, 177);
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.0625rem solid black;
  box-sizing: border-box;
  margin: 2.5rem auto 0;
}
.yattacktly {
  width: 100%;
  border: 0.125rem solid black;
  border-radius: 1.25rem;
  box-sizing: border-box;
}
.yattacktlright {
  width: 100%;
  padding: 0.75rem 1rem;
  align-items: center;
  box-sizing: border-box;
}
.yattacktllefty {
  align-items: center;
  column-gap: 0.25rem;
}
.yattacktlrightt {
  align-items: center;
  column-gap: 0.25rem;
}
.yattacktllefty span {
  font-size: 0.85rem;
  font-weight: 550;
  color: rgb(177, 177, 177);
}
.yattacktllefty div {
  font-size: 0.95rem;
  color: rgb(130, 137, 232);
}
.yattacktlrightt span {
  font-size: 0.85rem;
  font-weight: 550;
  color: rgb(177, 177, 177);
}
.yattacktlyinput {
  width: 100%;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  border-radius: 1.1rem;
  align-items: center;
}
.yattacktlyinput:hover {
  background: rgb(245, 245, 245);
}
.yattacktltopyi {
  align-items: center;
  column-gap: 1rem;
}
.yattacktltopyi > img {
  width: 1.5rem;
}
.yattacktltoptwo {
  width: 70%;
}
.yattacktltoptwo > input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.5rem;
  text-align: right;
  font-weight: 550;
}
.yattacktltwobox {
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.25rem 0.75rem;
  margin: 1rem 0;
  border: 0.125rem solid black;
  box-sizing: border-box;
  border-radius: 1.5rem;
}
.yattacktltwobox:hover {
  background: rgb(245, 245, 245);
}
.yattacktltwobox input {
  width: 70%;
  border: none;
  outline: none;
  background: transparent;
  font-size: 1.15rem;
  text-align: right;
  font-weight: 550;
}
.attacktls {
  width: 100%;
  padding: 0.75rem;
  margin: 1rem 0;
  border: 0.125rem solid black;
  box-sizing: border-box;
  border-radius: 1.25rem;
  font-size: 1rem;
}
.attacktlsblack {
  background: black;
  color: white;
  box-sizing: border-box;
  border-radius: 1.25rem;
  font-size: 1rem;
  width: 100%;
  padding: 0.75rem;
  margin: 0.75rem 0;
}
.attacktls:hover {
  background: rgb(245, 245, 245);
}
.attacktlsy {
  cursor: pointer;
}
.attacktlsy div:nth-child(2) {
  color: rgb(154, 221, 111);
}
.attacktlst {
  padding-top: 1rem;
  align-items: center;
}
.attacktlst > div {
  padding: 0.5rem 0.75rem;
  border: 0.125rem solid white;
  border-radius: 1.25rem;
  color: white;
  cursor: pointer;
}
.attacktlst > .attacktabactive {
  border-color: black;
  background: rgb(154, 221, 111);
  color: black;
}
.attacktlst > input {
  width: 30%;
  border: 0.125rem solid white;
  padding: 0.5rem 0.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  border-radius: 1.25rem;
  background: transparent;
}
.attacktlf {
  width: 100%;
  padding: 0.75rem;
  margin: 1rem 0;
  border: 0.125rem solid black;
  box-sizing: border-box;
  border-radius: 1.25rem;
  font-size: 1rem;
}
.attacktlfshow {
  width: 100%;
  padding: 0.75rem;
  margin: 0.75rem 0;
  border: 0.125rem solid black;
  box-sizing: border-box;
  border-radius: 1.25rem;
  font-size: 1rem;
  color: white;
  background: black;
}
.attacktlf:hover {
  background: rgb(245, 245, 245);
}
.attacktlfy {
  cursor: pointer;
}
.attacktlfy div:nth-child(2) {
  color: rgb(154, 221, 111);
}
.attacktlft {
  padding: 0.75rem;
  border: 0.125rem solid rgb(154, 221, 111);
  border-radius: 1rem;
  margin: 1rem 0;
  align-items: center;
  cursor: pointer;
}
.attacktlftshow {
  padding: 0.75rem;
  border: 0.125rem solid rgb(154, 221, 111);
  border-radius: 1rem;
  margin: 1rem 0;
  align-items: center;
  background: rgb(154, 221, 111);
}
.attacktlftshow > div {
  color: black;
}
.attacktlft > div:nth-child(1) {
  font-size: 1rem;
  color: white;
}
.attacktlft > div:nth-child(2) {
  font-size: 0.85rem;
  color: rgb(177, 177, 177);
}
</style>
