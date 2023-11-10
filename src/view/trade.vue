<template>
  <div class="ytrade">
    <div :class="tradebtb == '0' ? 'ytradeone' : 'ytradeconnone'">
      <div class="ytradebtp">
        <div
          @click="choosetrade('0')"
          :class="tradesj == '0' ? 'activetr' : ''"
        >
          {{ $store.state.txt.tradey }}
        </div>
        <span></span>
        <div
          @click="choosetrade('1')"
          :class="tradesj == '1' ? 'activetr' : ''"
        >
          {{ $store.state.txt.tradet }}
        </div>
        <span></span>
        <div
          @click="choosetrade('2')"
          :class="tradesj == '2' ? 'activetr' : ''"
        >
          {{ $store.state.txt.tradethr }}
        </div>
        <span></span>
      </div>
      <div :class="tradesj == '0' ? 'ytradebox ytradeshow' : 'ytradenone'">
        <div class="ytradess flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
            ></path>
          </svg>
          <input
            type="text"
            @input="sousdaib()"
            v-model="tradethrinput"
            :placeholder="$store.state.txt.tradeplace"
          />
          <span>{{ $store.state.txt.tradeinptxt }}</span>
        </div>
        <div class="ytradecions">
          <div class="ytradecioney flex">
            <span>☆</span>
            <span>{{ $store.state.txt.tradetoptxt }}</span>
          </div>
          <div class="ytradecionx"></div>
          <div class="ytradecionss flex">
            <span>{{ $store.state.txt.tradeinptopy }}</span>
            <span class="ytradeclant">{{ $store.state.txt.tradeinptopt }}</span>
            <span @click="changetime('7days change')" class="ytradeclans">{{
              tradecl
            }}</span>
          </div>
          <div class="ytradecbs">
            <div
              @click="tradecontent('1')"
              class="ytradecby flex jus"
              v-for="item in scjosn"
              :key="item.name"
            >
              <div class="ytradecbyy flex">
                <img src="../assets/eth.png" alt="" />
                <div class="ytradecbyleft">
                  <h2>{{ item.name }}</h2>
                  <span>{{ item.namenumber }}</span>
                </div>
              </div>
              <div class="ytradecbyt">
                <h2>{{ item.price }}</h2>
                <span>{{ item.pricenumber }}</span>
              </div>
              <span>{{ item.percentage }}</span>
            </div>
          </div>
        </div>
        <router-link to="/earn" class="ytradebot flex">
          <h3>{{ $store.state.txt.givemoney }}</h3>
          <img src="../assets/tradejb.png" alt="" />
          <!-- <span @click="onmygb('1')">✕</span> -->
        </router-link>
      </div>
      <div :class="tradesj == '1' ? 'ytradeboxt ytradeshow' : 'ytradenone'">
        <div class="ytradeboxtbuy flex jus">
          <span
            @click="changetradeac('0')"
            :class="tradeactive == '0' ? 'ytradebtbuyactive' : ''"
            >{{ $store.state.txt.tradetabty }}</span
          >
          <span
            @click="changetradeac('1')"
            :class="tradeactive == '1' ? 'ytradebtbuyactive' : ''"
            >{{ $store.state.txt.tradeethbutt }}</span
          >
        </div>
        <div :class="tradeactive == '0' ? 'ytradeboxty' : 'ytradenone'">
          <div class="ytradeboxtytop flex jus">
            <span>{{ $store.state.txt.tradetabtwoy }}</span>
            <img @click="chooseset('1')" src="../assets/homeset.png" alt="" />
          </div>
          <div class="ytradeboxtytwo">
            <div class="ytradeboxytwotop flex jus">
              <input type="text" v-model="tradebyt" placeholder="0.0" />
              <div
                :class="
                  tradejyjhimg == '1'
                    ? 'ytradeeth ytradeimgqh flex'
                    : 'ytradeeth flex'
                "
                @click="choosedbs('1', 'exchange')"
              >
                <span>{{ tradejyjhy.name }}</span>
                <img src="../assets/eth.png" alt="" />
              </div>
            </div>
            <div class="ytradeboxytwobot flex jus">
              <div class="ytradeboxtytwofboty flex">
                ≈ $<span>{{ tradebyt }}</span>
                <span @click="tradeqc()">{{
                  $store.state.txt.tradetabtwoqc
                }}</span>
              </div>
              <div class="ytradebtbright flex">
                <span>{{ $store.state.txt.tradetabtwoye }}</span>
                <span>0</span>
                <div>{{ $store.state.txt.teadetabtwoxd }}</div>
              </div>
            </div>
          </div>
          <div class="ytradeboxtythr flex">
            <span>{{ $store.state.txt.tradetabtwosd }}</span>
            <img @click="jianhuany('1')" src="../assets/jyqh.png" alt="" />
          </div>
          <div class="ytradeboxtytwof">
            <div class="ytradeboxytwotop flex jus">
              <input type="text" placeholder="0.0" />
              <div
                :class="
                  tradejyjhimg == '1'
                    ? 'ytradeeth ytradeimgqht flex'
                    : 'ytradeeth flex'
                "
                @click="choosedbs('1', 'exchange')"
              >
                <span>{{ tradejyjht.name }}</span>
                <img src="../assets/usdt.png" alt="" />
              </div>
            </div>
            <div class="ytradeboxtytwofbot flex jus">
              <span class="ytradeboxtytwofboty"
                >≈ $<span>{{ tradebyt }}</span></span
              >
              <span class="ytradeboxtytwofbott"
                >{{ $store.state.txt.tradetabtwoye }} <span>0</span></span
              >
            </div>
          </div>
          <button class="ytradebutjh">
            🚀 {{ $store.state.txt.tradetabty }}
          </button>
        </div>
        <div :class="tradeactive == '1' ? 'ytradeboxtt' : 'ytradenone'">
          <div class="ytradebbuy flex jus">
            <span
              @click="changetradebuy('0')"
              :class="tradebuyactive == '0' ? 'ytradebbuyactive' : ''"
              >{{ $store.state.txt.tradetabtwoty }}</span
            >
            <span
              @click="changetradebuy('1')"
              :class="tradebuyactive == '1' ? 'ytradebbuyactivered' : ''"
              >{{ $store.state.txt.tradetabtwott }}</span
            >
          </div>
          <div :class="tradebuyactive == '0' ? '' : 'ytradebcontnone'">
            <div class="ytradebcont">
              <div class="ytradebcontop flex jus">
                <div
                  :class="
                    tradexjddimgt == '1'
                      ? 'ytradency ytradeenimgs flex'
                      : 'ytradency flex'
                  "
                >
                  <img src="../assets/weth.png" alt="" />
                  <div class="ytradecyt">
                    <span>{{ $store.state.txt.tradetabtwoty }}</span>
                    <div
                      @click="choosedbs('1', 'order')"
                      class="ytradecbiy flex"
                    >
                      <h2>{{ tradexjddty.name }}</h2>
                      <div>⬇</div>
                    </div>
                  </div>
                </div>
                <img
                  @click="jianhuanthr('1')"
                  style="cursor: pointer"
                  src="../assets/qh.png"
                  alt=""
                />
                <div
                  :class="
                    tradexjddimgt == '1'
                      ? 'ytradency ytradeenimgst flex'
                      : 'ytradency flex'
                  "
                >
                  <img src="../assets/usdt.png" alt="" />
                  <div class="ytradecyt">
                    <span>{{ $store.state.txt.tradetabtwozf }}</span>
                    <div
                      @click="choosedbs('1', 'order')"
                      class="ytradecbiy flex"
                    >
                      <h2>{{ tradexjddtt.name }}</h2>
                      <div>⬇</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ytradebconttxt flex jus">
                <span>{{ $store.state.txt.tradetabtwoinpy }}</span>
                <input type="text" placeholder="0.0" />
                <h2>{{ tradexjddtt.name }}</h2>
              </div>
              <div class="ytradebconthr">
                {{ $store.state.txt.tradetabtwopy }}
              </div>
              <div class="ytradebconttxt flex jus">
                <span
                  >{{ tradexjddty.name }}
                  {{ $store.state.txt.tradetabtwoinpt }}</span
                >
                <input style="width: 50%" type="text" placeholder="0.0" />
                <h2>{{ tradexjddty.name }}</h2>
              </div>
              <div class="ytradebconttxt ytradebczltxt flex jus">
                <span
                  >{{ tradexjddtt.name }}
                  {{ $store.state.txt.tradetabtwoinpthr }}</span
                >
                <input type="text" placeholder="0.0" />
                <h2>{{ tradexjddtt.name }}</h2>
              </div>
              <div class="ytradebconthr flex" @click="clickduot('1')">
                <div class="flex">
                  <div
                    :class="duot == '1' ? 'ytradebcthrshow' : 'ytradebcthrnone'"
                  ></div>
                </div>
                {{ $store.state.txt.tradetabtwopt }}
              </div>
              <div
                :class="
                  duot == '0'
                    ? 'ytradebconttxt ytradebcsytxt ytradebcsytxtnone flex jus'
                    : 'ytradebconttxt ytradebcsytxt  flex jus'
                "
              >
                <span>{{ $store.state.txt.tradetabtwoinpf }}</span>
                <input type="text" placeholder="0.0" />
                <h2>{{ tradexjddtt.name }}</h2>
              </div>
              <div
                :class="
                  duot == '0'
                    ? 'ytradebconttxt ytradebctxt ytradebctxtnone flex jus'
                    : 'ytradebconttxt ytradebctxt flex jus'
                "
              >
                <span>{{ $store.state.txt.tradetabtwoinpw }}</span>
                <input type="text" placeholder="0.0" />
                <h2>{{ tradexjddtt.name }}</h2>
              </div>
              <div class="ytradebconttxt flex jus">
                <span>{{ $store.state.txt.tradetabtwoinpsix }}</span>
                <h2>1 day</h2>
              </div>
            </div>
            <button class="ytradejxjy">
              {{ $store.state.txt.tradetabtwobut }}
            </button>
          </div>
          <div :class="tradebuyactive == '1' ? '' : 'ytradebcontnone'">
            <div class="ytradebcont">
              <div class="ytradebcontop flex jus">
                <div
                  :class="
                    tradexjddimgy == '1'
                      ? 'ytradency ytradeencyimg flex'
                      : 'ytradency flex'
                  "
                >
                  <img src="../assets/weth.png" alt="" />
                  <div class="ytradecyt">
                    <span>{{ $store.state.txt.tradetabtwosd }}</span>
                    <div
                      @click="choosedbs('1', 'order')"
                      class="ytradecbiy flex"
                    >
                      <h2>{{ tradexjddy.name }}</h2>
                      <div>⬇</div>
                    </div>
                  </div>
                </div>
                <img
                  @click="jianhuant('1')"
                  style="cursor: pointer"
                  src="../assets/qh.png"
                  alt=""
                />
                <div
                  :class="
                    tradexjddimgy == '1'
                      ? 'ytradency ytradeencyimgt flex'
                      : 'ytradency flex'
                  "
                >
                  <img src="../assets/usdt.png" alt="" />
                  <div class="ytradecyt">
                    <span>{{ $store.state.txt.tradetabtwott }}</span>
                    <div
                      @click="choosedbs('1', 'order')"
                      class="ytradecbiy flex"
                    >
                      <h2>{{ tradexjddt.name }}</h2>
                      <div>⬇</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ytradebconttxt flex jus">
                <span>{{ $store.state.txt.tradetabtwoinpy }}</span>
                <input type="text" placeholder="0.0" />
                <h2>{{ tradexjddt.name }}</h2>
              </div>
              <div class="ytradebconthr">
                {{ $store.state.txt.tradetabtwopy }}
              </div>
              <div class="ytradebconttxt flex jus">
                <span
                  >{{ tradexjddy.name }}
                  {{ $store.state.txt.tradetabtwoinpt }}</span
                >
                <input type="text" placeholder="0.0" />
                <h2>{{ tradexjddy.name }}</h2>
              </div>
              <div class="ytradebconttxt ytradebczltxt flex jus">
                <span
                  >{{ tradexjddt.name }}
                  {{ $store.state.txt.tradetabtwoinpthr }}</span
                >
                <input type="text" placeholder="0.0" />
                <h2>{{ tradexjddt.name }}</h2>
              </div>
              <div class="ytradebconthr flex" @click="clickduott('1')">
                <div class="flex">
                  <div
                    :class="
                      duott == '1' ? 'ytradebcthrshow' : 'ytradebcthrnone'
                    "
                  ></div>
                </div>
                {{ $store.state.txt.tradetabtwopt }}
              </div>
              <div
                :class="
                  duott == '0'
                    ? 'ytradebconttxt ytradebctxt ytradebctxtnone flex jus'
                    : 'ytradebconttxt ytradebctxt flex jus'
                "
              >
                <span>{{ $store.state.txt.tradetabtwoinpw }}</span>
                <input type="text" placeholder="0.0" />
                <h2>{{ tradexjddt.name }}</h2>
              </div>
              <div class="ytradebconttxt flex jus">
                <span>{{ $store.state.txt.tradetabtwoinpsix }}</span>
                <h2>1 day</h2>
              </div>
            </div>
            <button class="ytradejxjy">
              {{ $store.state.txt.tradetabtwobut }}
            </button>
          </div>
        </div>
      </div>
      <div
        :class="tradesj == '2' ? 'ytradeboxs flex ytradeshow' : 'ytradenone'"
      >
        <div class="ytradebcon">
          <img src="../assets/Moon.png" alt="" />
          <h2>{{ $store.state.txt.tradetabthrtxt }}</h2>
        </div>
      </div>
    </div>
    <div :class="tradebtb == '1' ? 'ytradetwo' : 'ytradeconnone'">
      <div class="ytradeteotop flex jus">
        <svg
          @click="tradecontent('0')"
          style="width: 25px; height: 25px"
          class="clone"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
          ></path>
        </svg>
        <h2>ETH</h2>
        <div>☆</div>
      </div>
      <div class="ytradecontent">
        <div class="ytradeconty flex jus">
          <div class="ytradeconleft flex">
            <img src="../assets/beth.png" alt="" />
            <h2>Ethereum</h2>
          </div>
          <div class="ytradeconright">
            <span>+1.81%</span>
            <div>$1831</div>
          </div>
        </div>
        <img src="../assets/bcanvas.png" alt="" />
        <div class="ytradecontt flex jus">
          <span
            @click="choosetratab('0')"
            :class="tradecontab == '0' ? 'ytradetabactive' : ''"
            >{{ $store.state.txt.hometaby }}</span
          >
          <span
            @click="choosetratab('1')"
            :class="tradecontab == '1' ? 'ytradetabactive' : ''"
            >1W</span
          >
          <span
            @click="choosetratab('2')"
            :class="tradecontab == '2' ? 'ytradetabactive' : ''"
            >1M</span
          >
          <span
            @click="choosetratab('3')"
            :class="tradecontab == '3' ? 'ytradetabactive' : ''"
            >3M</span
          >
          <span
            @click="choosetratab('4')"
            :class="tradecontab == '4' ? 'ytradetabactive' : ''"
            >{{ $store.state.txt.hometabw }}</span
          >
        </div>
        <div class="ytradecontti">
          <h2>Performance</h2>
          <div></div>
        </div>
        <div class="ytradecontbox flex">
          <div class="ytradecontboxy">
            <span>24h high</span>
            <div>$1839</div>
          </div>
          <div class="ytradecontboxy">
            <span>24h trading volume</span>
            <div>$122亿</div>
          </div>
          <div class="ytradecontboxy">
            <span>24h low</span>
            <div>$1782</div>
          </div>
          <div class="ytradecontboxy">
            <span> Market value</span>
            <div>$2203亿 <span>+40.4亿</span></div>
          </div>
        </div>
      </div>
      <div class="ytradeconbuts flex jus">
        <button class="ytradegojh" @click="gojh()">
          {{ $store.state.txt.tradeethbuty }}
        </button>
        <button class="ytradegoxjdd" @click="goxjdd()">
          {{ $store.state.txt.tradeethbutt }}
        </button>
      </div>
    </div>
    <div
      :class="
        tradethr == '0'
          ? 'ytradethree ytradethreenone'
          : ' ytradethree ytradethreeshow'
      "
    >
      <div class="ytradess flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
          ></path>
        </svg>
        <input
          type="text"
          @input="sousdaib()"
          v-model="tradethrinput"
          :placeholder="$store.state.txt.tradeplace"
        />
        <span>{{ $store.state.txt.tradeinptxt }}</span>
        <div @click="sousdaib('0')">✕</div>
      </div>
      <div class="ytradeblist">
        <div class="ytradeblisty flex jus" v-for="item in sousjson" :key="item">
          <div class="ytradeblileft">
            <div>{{ item.name }}</div>
            <span>{{ item.bname }}</span>
          </div>
          <div class="ytradebliright">{{ item.price }}</div>
        </div>
      </div>
    </div>
    <div
      :class="
        tradefour == '0'
          ? 'ytradethfour ytradethreenone'
          : ' ytradethfour ytradethreeshow'
      "
    >
      <div class="ytradefourboxy">
        <span class="ytradefourgb" @click="choosedbs('0')">✕</span>
        <h2>{{ $store.state.txt.tradetctit }}</h2>
        <div class="ytradefourssbox flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
            ></path>
          </svg>
          <input type="text" :placeholder="$store.state.txt.tradetctxty" />
        </div>
        <div class="ytradefourxian"></div>
        <div
          v-for="(item, index) in yorders"
          :key="index"
          class="yorderlist flex jus"
        >
          <span>{{ item.symbol }}</span>
          <span>${{ item.price }}</span>
        </div>
        <div class="ytradefourfont flex">
          <router-link to="">{{ $store.state.txt.tradetctxtt }}</router-link>
          <span>{{ $store.state.txt.tradetctxtthr }}</span>
        </div>
      </div>
    </div>
    <div
      :class="
        tradefive == '0'
          ? 'ytradefive ytradethreenone'
          : ' ytradefive ytradethreeshow'
      "
    >
      <div class="ytradefivebox">
        <div class="ytradefiveboxyi" @click="chooseset('0')">✕</div>
        <div class="ytradefiveboxt flex jus">
          <div>最大滑点</div>
          <span>汽车</span>
        </div>
        <div class="ytradefiveboxt flex jus">
          <div>气体选项</div>
          <span>常规的</span>
        </div>
        <div class="ytradefiveboxthr flex jus">
          <div>订单试销期为</div>
          <span>1天</span>
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script setup>
import api from "../common/api";
import { ref } from "vue";
import Foot from "../components/foot.vue";
let tradesj = ref("0");
let tradeactive = ref("1");
let tradebuyactive = ref("0");
let duot = ref("0");
let duott = ref("0");
// let onmygbval = ref("0");
let tradebtb = ref("0");
let tradecontab = ref("0");
let tradethr = ref("0");
let tradefour = ref("0");
let tradefive = ref("0");
let tradejyjhimg = ref("0");
let tradexjddimgy = ref("0");
let tradexjddimgt = ref("0");
let tradebyt = ref("");
let tradethrinput = ref("");
let tradethrarr = ref([]);
let tradejyjhy = ref({ name: "ETH" });
let tradejyjht = ref({ name: "USDT" });
let tradexjddy = ref({ name: "WETH" });
let tradexjddt = ref({ name: "USDT" });

let tradexjddty = ref({ name: "WETH" });
let tradexjddtt = ref({ name: "USDT" });
let yorders = ref([]);
let sousjson = ref([
  { name: "Ethereum", bname: "ETH", price: "$1872" },
  {
    name: "aelf",
    bname: "ELF",
    price: "$0.00",
  },
]);
let scjosn = ref([
  {
    name: "ETH",
    namenumber: "$2163 亿",
    price: "$1799",
    pricenumber: "$146 亿",
    percentage: "-0.1%",
  },
  {
    name: "ETH",
    namenumber: "$2163 亿",
    price: "$1799",
    pricenumber: "$146 亿",
    percentage: "-0.1%",
  },
]);
let tradecl = ref("7days change");
let choosetrade = (str) => {
  tradesj.value = str;
};
let jianhuanthr = (str) => {
  let jharry = tradexjddtt.value;
  tradexjddtt.value = tradexjddty.value;
  tradexjddty.value = jharry;
  if (str == tradexjddimgt.value) {
    tradexjddimgt.value = "0";
  } else {
    tradexjddimgt.value = "1";
  }
};
let changetime = (str) => {
  if (str == tradecl.value) {
    tradecl.value = "24h change";
  } else {
    tradecl.value = "7days change";
  }
};
let jianhuant = (str) => {
  let jharry = tradexjddt.value;
  tradexjddt.value = tradexjddy.value;
  tradexjddy.value = jharry;
  if (str == tradexjddimgy.value) {
    tradexjddimgy.value = "0";
  } else {
    tradexjddimgy.value = "1";
  }
};
let jianhuany = (str) => {
  let jharry = tradejyjht.value;
  tradejyjht.value = tradejyjhy.value;
  tradejyjhy.value = jharry;
  console.log(tradejyjhy.value, tradejyjht.value);
  if (str == tradejyjhimg.value) {
    tradejyjhimg.value = "0";
  } else {
    tradejyjhimg.value = "1";
  }
};
let tradeqc = () => {
  tradebyt.value = "";
};
let sousdaib = (str) => {
  tradethr.value = str;
  if (str == "0") {
    tradethrinput.value = "";
    console.log(111);
  }
  // tradethrinput.value = tradethrinput.value.toUpperCase();
  // sousjson.value.map((res) => {
  //   if (res.bname.includes(tradethrinput.value)) {
  //     console.log(res);
  //     tradethrarr.value = [];
  //     tradethrarr.value.push(res);
  //     tradethrarr.value = [...new Set(tradethrarr.value)];
  //   }
  // });
};
let choosetratab = (str) => {
  tradecontab.value = str;
};
let choosedbs = (str, type) => {
  tradefour.value = str;
  if (str == "1" && type == "order") {
    api.limitorderslist().then((res) => {
      yorders.value = res.data.data.orders;
    });
  } else if (str == "1" && type == "exchange") {
    api.tradelist().then((res) => {
      yorders.value = res.data.data.trades;
    });
  }
};
let chooseset = (str) => {
  tradefive.value = str;
};
let tradecontent = (str) => {
  tradebtb.value = str;
};
let gojh = () => {
  tradebtb.value = "0";
  tradesj.value = "1";
  tradeactive.value = "0";
};
let goxjdd = () => {
  tradebtb.value = "0";
  tradesj.value = "1";
  tradeactive.value = "1";
};
// let onmygb = (str) => {
//   if (onmygbval.value == str) {
//     onmygbval.value = "0";
//   } else {
//     onmygbval.value = "1";
//   }
// };
let clickduot = (str) => {
  if (duot.value == str) {
    duot.value = "0";
  } else {
    duot.value = "1";
  }
};
let clickduott = (str) => {
  if (duott.value == str) {
    duott.value = "0";
  } else {
    duott.value = "1";
  }
};
let changetradeac = (str) => {
  tradeactive.value = str;
};
let changetradebuy = (str) => {
  tradebuyactive.value = str;
};
</script>

<style scoped>
.yorderlist {
  width: 80%;
  align-items: center;
  margin: 1rem auto;
}
.yorderlist > span:nth-child(1) {
  font-size: 1rem;
  font-weight: 550;
}
.yorderlist > span:nth-child(2) {
  font-size: 0.85rem;
  font-weight: 400;
}
.ytradeenimgs img {
  content: url("../assets/usdt.png");
}
.ytradeenimgst img {
  content: url("../assets/weth.png");
}
.ytradeencyimg img {
  content: url("../assets/usdt.png");
}
.ytradeencyimgt img {
  content: url("../assets/weth.png");
}
.ytradeimgqht img {
  content: url("../assets/eth.png");
}
.ytradeimgqh img {
  content: url("../assets/usdt.png");
}
.ytradeconnone {
  display: none;
}
.ytradebmynone {
  display: none;
}
.ytradecbs {
  width: 100%;
}
.ytradeone {
  width: 100%;
  height: 100%;
}
.ytradetwo {
  width: 100%;
  height: 100%;
}
.ytradecby {
  margin: 1.25rem 0;
  width: 100%;
  cursor: pointer;
}
.ytradecbyy {
  column-gap: 1rem;
}
.ytradecbyy img {
  width: 2rem;
}
.ytradecbyleft h2 {
  font-size: 1rem;
  font-weight: 500;
}
.ytradecbyleft span {
  display: block;
  font-size: 0.8rem;
  color: rgb(177, 177, 177);
  margin-top: 0.5rem;
}
.ytradecbyt {
  margin-left: 20%;
}
.ytradecbyt h2 {
  font-size: 1rem;
  font-weight: 500;
}
.ytradecbyt span {
  display: block;
  font-size: 0.8rem;
  color: rgb(177, 177, 177);
  margin-top: 0.5rem;
}
.ytradecby {
  align-items: center;
}
.ytradecby > span {
  color: red;
  font-size: 1rem;
  font-weight: 500;
}
.ytrade {
  width: 100%;
  height: 100%;
  position: relative;
}
.ytradenone {
  display: none !important;
}
.activetr {
  color: black !important;
}
.ytradebot {
  width: 18%;
  height: 4.6rem;
  position: fixed;
  color: black;
  margin: 0 auto;
  border: 0.125rem solid black;
  background: rgb(154, 221, 111);
  align-items: center;
  padding: 0.5rem 1.75rem;
  border-radius: 1.5rem;
  box-sizing: border-box;
  bottom: 15vh;
  left: 50%;
  transform: translate(-50%);
}
.ytradebot > h3 {
  font-size: 1rem;
  font-weight: 600;
}
.ytradebot > img {
  width: 4.625rem;
  position: absolute;
  bottom: 0;
  left: 67.5%;
}
/* .ytradebot span {
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  font-weight: 600;
  color: black;
  cursor: pointer;
} */
.ytradebtp {
  display: flex;
  column-gap: 0.5rem;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  align-items: center;
}
.ytradebtp div {
  color: rgb(177, 177, 177);
  padding: 0.25rem 0.75rem;
  box-sizing: border-box;
  cursor: pointer;
}
.ytradebtp div:hover {
  background: rgb(245, 245, 245);
  border-radius: 0.25rem;
}
.ytradebtp span {
  display: block;
  width: 0;
  height: 1.75rem;
  border-left: 0.125rem solid rgb(21, 22, 26);
}
.ytradess {
  width: 100%;
  padding: 0.5rem;
  border: 0.125rem solid black;
  border-radius: 2.5rem;
  box-sizing: border-box;
  column-gap: 0.5rem;
  margin: 0.5rem 0 1rem;
}
.ytradess > svg {
  width: 1.5rem;
  height: 1.5rem;
}
.ytradess > input {
  width: 77.5%;
  border: none;
  outline: none;
  font-size: 1rem;
}
.ytradess span {
  color: rgb(154, 221, 111);
}
.ytradecions {
  width: 90%;
  margin: 0 auto;
}
.ytradecioney {
  column-gap: 1rem;
  align-items: center;
  padding: 0.75rem 0 0.5rem;
}
.ytradecioney span:nth-child(1) {
  padding: 0 0.625rem;
  font-size: 1.25rem;
  color: rgb(154, 221, 111);
}
.ytradecioney span:nth-child(2) {
  font-size: 1rem;
  color: rgb(177, 177, 177);
}
.ytradecionx {
  width: 100%;
  height: 0.09375rem;
  background: black;
}
.ytradecionss {
  padding: 0.5rem 0;
  font-size: 0.75rem;
  justify-content: space-between;
  color: rgb(177, 177, 177);
}
.ytradeclant {
  margin-left: 5rem;
}
.ytradeclans {
  width: 5.25rem;
  display: block;
  color: rgb(130, 137, 232);
  text-decoration: underline;
  cursor: pointer;
  text-align: right;
}
.ytradeboxs {
  width: 100%;
  height: calc(90vh - 3.5rem);
  justify-content: center;
  align-items: center;
}
.ytradebcon img {
  width: 65%;
  display: block;
  margin: 2rem auto;
}
.ytradebcon h2 {
  text-align: center;
  font-weight: 400;
}
.ytradeboxtbuy {
  width: 100%;
  padding: 0.5rem;
  border: 0.125rem solid black;
  border-radius: 1.5rem;
  box-sizing: border-box;
  column-gap: 0.5rem;
  margin: 0.5rem 0 1rem;
  background: black;
}
.ytradeboxtbuy > span {
  padding: 0.75rem;
  width: 48.5%;
  color: white;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.ytradeboxtbuy > .ytradebtbuyactive {
  background: white;
  border-radius: 1rem;
  color: rgb(21, 22, 26);
}
.ytradebbuy {
  width: 100%;
  padding: 0.25rem;
  border-radius: 1.5rem;
  background: black;
  box-sizing: border-box;
}
.ytradebbuy span {
  color: white;
  width: 48.5%;
  text-align: center;
  padding: 0.25rem;
  box-sizing: border-box;
  cursor: pointer;
}
.ytradebbuyactive {
  background: rgb(154, 221, 111);
  border-radius: 1rem;
}
.ytradebbuyactivered {
  background: rgb(245, 0, 0);
  border-radius: 1rem;
}
.ytradebcontnone {
  display: none;
}
.ytradebcontop {
  align-items: center;
}
.ytradebcont {
  width: 100%;
  padding: 0.75rem 0.75rem 1rem;
  margin: 0.75rem 0 1.5rem;
  box-sizing: border-box;
  background: rgb(244, 244, 244);
  border-radius: 1rem;
}
.ytradency {
  width: 37%;
  padding: 0.3rem 1rem;
  box-sizing: border-box;
  background: white;
  border: 0.125rem solid black;
  border-radius: 1.25rem;
  column-gap: 0.5rem;
  align-items: center;
  cursor: pointer;
}
.ytradency img {
  width: 2rem;
  height: 2rem;
}
.ytradecyt > span {
  font-size: 0.85rem;
  color: rgb(177, 177, 177);
}
.ytradecbiy {
  column-gap: 0.5rem;
}
.ytradecbiy h2 {
  font-size: 1rem;
  font-weight: 500;
}
.ytradecbiy div {
  font-size: 1rem;
  color: rgb(177, 177, 177);
}
.ytradebcontop > img {
  width: 2.25rem;
  height: 2.25rem;
}
.ytradebconttxt {
  width: 100%;
  padding: 0.75rem;
  border: 0.125rem solid black;
  border-radius: 1.35rem;
  background: white;
  margin: 1rem 0;
  column-gap: 0.05rem;
  box-sizing: border-box;
  align-items: center;
}
.ytradebconttxt > span {
  font-size: 0.95rem;
  color: rgb(177, 177, 177);
}
.ytradebconttxt > input {
  border: none;
  outline: none;
  font-size: 0.95rem;
  color: black;
  text-align: right;
  font-weight: 600;
  width: 45% !important;
}
.ytradebconttxt > input::placeholder {
  color: rgb(177, 177, 177);
  font-weight: 600;
}
.ytradebconttxt h2 {
  font-size: 0.95rem;
  font-weight: 550;
}
.ytradebconthr {
  font-size: 0.95rem;
  color: rgb(130, 137, 232);
  text-align: center;
  margin-bottom: 1rem;
  justify-content: center;
  column-gap: 0.25rem;
  align-items: center;
  cursor: pointer;
}
.ytradebctxt input {
  width: 75%;
}
.ytradebcsytxt input {
  width: 66%;
}
.ytradebczltxt input {
  width: 61%;
}
.ytradebconthr div {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: 1px solid rgb(130, 137, 232);
  justify-content: center;
  align-items: center;
}
.ytradebconthr div div {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: rgb(130, 137, 232);
}
.ytradebcthrnone {
  display: none;
}
.ytradebcthrshow {
  display: block;
}
.ytradebcsytxtnone {
  display: none;
}
.ytradebctxtnone {
  display: none;
}
.ytradejxjy {
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
}
.ytradeboxtytop {
  width: 90%;
  margin: 0 auto;
  padding-top: 0.5rem;
  align-items: center;
}
.ytradeboxtytop span {
  font-size: 0.85rem;
  color: rgb(177, 177, 177);
}
.ytradeboxtytop img {
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
}
.ytradeboxtytwo {
  width: 100%;
  margin-top: 0.5rem;
  padding: 1rem;
  box-sizing: border-box;
  border: 0.125rem solid black;
  border-radius: 1rem;
}
.ytradeboxytwotop input {
  width: 72.5%;
  border: none;
  outline: none;
  font-size: 1.5rem;
  font-weight: 550;
  color: red;
}
.ytradeboxtytwof input {
  color: black;
}
.ytradeboxytwotop input::placeholder {
  color: rgb(177, 177, 177);
}
.ytradeboxytwobot {
  width: 100%;
  padding-top: 1rem;
}
.ytradeeth {
  align-items: center;
  column-gap: 0.75rem;
  cursor: pointer;
}
.ytradeboxtytwofboty span:nth-child(2) {
  font-size: 0.9rem;
  font-weight: 400;
  color: rgb(130, 137, 232);
  cursor: pointer;
}
.ytradebtbright {
  column-gap: 0.25rem;

  align-items: center;
}
.ytradebtbright span {
  font-size: 0.85rem;
  font-weight: 550;
  color: rgb(177, 177, 177);
}
.ytradebtbright div {
  font-size: 0.9rem;
  color: rgb(130, 137, 232);
}
.ytradeboxtythr {
  width: 90%;
  margin: 0 auto;
  align-items: center;
}
.ytradeboxtythr span {
  font-size: 0.85rem;
  color: rgb(177, 177, 177);
}
.ytradeboxtythr img {
  margin-left: 35%;
  cursor: pointer;
}
.ytradeboxtytwof {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  border: 0.125rem solid black;
  border-radius: 1rem;
}
.ytradeboxtytwofbot {
  padding-top: 1rem;
}
.ytradeboxtytwofboty {
  align-items: center;
  font-size: 0.85rem;
  font-weight: 550;
  color: rgb(177, 177, 177);
}
.ytradeboxtytwofbott {
  font-size: 0.9rem;
  font-weight: 550;
  color: rgb(177, 177, 177);
}
.ytradebutjh {
  width: 80%;
  display: block;
  text-align: center;
  padding: 1.25rem;
  background: rgb(177, 177, 177);
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
  margin: 1rem auto 0;
}
.ytradeteotop {
  width: 95%;
  padding: 1.5rem 0;
  box-sizing: border-box;
  margin: 0 auto;
}
.ytradeteotop {
  align-items: center;
}
.ytradeteotop svg {
  cursor: pointer;
}
.ytradeteotop h2 {
  font-weight: 400;
}
.ytradeteotop div {
  line-height: 1.25;
  font-size: 1.5rem;
  cursor: pointer;
}
.ytradecontent {
  width: 100%;
  padding: 1.25rem 0.75rem;
  box-sizing: border-box;
  background: rgb(21, 22, 26);
  border-radius: 1rem;
}
.ytradeconty {
  align-items: center;
}
.ytradeconleft {
  align-items: center;
  column-gap: 1rem;
}
.ytradeconleft img {
  width: 3.125rem;
}
.ytradeconleft h2 {
  font-size: 1.1rem;
  font-weight: 400;
  color: white;
}
.ytradeconright span {
  display: block;
  font-size: 0.9rem;
  font-weight: 550;
  color: rgb(154, 221, 111);
}
.ytradeconright div {
  display: block;
  font-size: 1.1rem;
  font-weight: 550;
  color: white;
}
.ytradecontent > img {
  width: 100%;
}
.ytradecontt {
  width: 100%;
  border: 0.125rem solid rgb(154, 221, 111);
  box-sizing: border-box;
  border-radius: 1.5rem;
}
.ytradecontt span {
  width: 20%;
  padding: 0.5rem 0.75rem;
  border-radius: 1.5rem;
  color: rgb(177, 177, 177);
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.ytradecontt .ytradetabactive {
  background: rgb(154, 221, 111);
  color: black;
}
.ytradecontti h2 {
  font-size: 1.5rem;
  font-weight: 350;
  color: white;
  padding: 0.75rem 0 0.5rem;
}
.ytradecontti div {
  width: 100%;
  height: 0.0625rem;
  background: white;
}
.ytradecontbox {
  width: 100%;
}
.ytradecontboxy {
  width: 50%;
  text-align: left;
  padding: 1rem 0;
  box-sizing: border-box;
}
.ytradecontboxy > span {
  font-size: 0.9rem;
  font-weight: 400;
  color: rgb(177, 177, 177);
}
.ytradecontboxy > div {
  font-size: 1rem;
  font-weight: 525;
  color: white;
  padding-top: 0.25rem;
}
.ytradecontboxy > div span {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgb(154, 221, 111);
}
.ytradeconbuts {
  width: 100%;
  margin-top: 1rem;
}
.ytradegojh {
  display: block;
  text-align: center;
  width: 48.5%;
  padding: 1.25rem;
  background: rgb(154, 221, 111);
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
  cursor: pointer;
}
.ytradegoxjdd {
  display: block;
  text-align: center;
  width: 48.5%;
  padding: 1.25rem;
  background: rgb(154, 221, 111);
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
  cursor: pointer;
}
.ytradethree {
  width: 20%;
  height: 90vh;
  position: fixed;
  background: rgba(91, 91, 94, 0.9);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 1rem;
  box-sizing: border-box;
}
.ytradethreeshow {
  display: block;
}
.ytradethreenone {
  display: none;
}
.ytradethree .ytradess {
  background: white;
  align-items: center;
}
.ytradethree .ytradess input {
  width: 70%;
}
.ytradess > div {
  font-size: 1.25rem;
  font-weight: 550;
  cursor: pointer;
}
.ytradeblist {
  width: 100%;
  padding: 1.25rem;
  box-sizing: border-box;
  border-radius: 1rem;
  background: white;
  border: 0.125rem solid black;
}
.ytradeblisty {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  align-items: center;
}
.ytradeblileft div {
  font-size: 0.9rem;
  font-weight: 550;
  color: black;
}
.ytradeblileft span {
  font-size: 0.8rem;
  font-weight: 400;
  color: rgb(177, 177, 177);
}
.ytradebliright {
  font-size: 0.9rem;
  font-weight: 550;
  color: black;
}
.ytradethfour {
  width: 20%;
  height: 90vh;
  position: fixed;
  background: rgba(91, 91, 94, 0.9);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
}
.ytradefive {
  width: 20%;
  height: 90vh;
  position: fixed;
  background: rgba(91, 91, 94, 0.9);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
}
.ytradefivebox {
  width: 100%;
  height: 40.5%;
  background: white;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 1.5rem;
  padding: 1.25rem;
  box-sizing: border-box;
}
.ytradefiveboxyi {
  width: 100%;
  text-align: right;
  font-size: 1.25rem;
  font-weight: 550;
  cursor: pointer;
}
.ytradefourboxy {
  width: 100%;
  height: 85%;
  background: white;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 1.5rem;
}
.ytradefiveboxt {
  width: 100%;
  padding: 0.75rem;
  box-sizing: border-box;
  border-radius: 1.25rem;
  border: 0.125rem solid black;
  margin: 0.75rem 0;
  font-size: 1rem;
}
.ytradefiveboxthr {
  width: 100%;
  padding: 0.75rem;
  box-sizing: border-box;
  border-radius: 1.25rem;
  border: 0.125rem solid black;
  margin: 0.75rem 0;
  font-size: 0.9rem;
}
.ytradefiveboxthr div {
  color: rgb(177, 177, 177);
}
.ytradefiveboxthr span {
  color: #000;
}
.ytradefiveboxt div {
  color: black;
}
.ytradefiveboxt span {
  color: rgb(154, 221, 111);
}
.ytradefourgb {
  font-size: 1.25rem;
  font-weight: 550;
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  cursor: pointer;
}
.ytradefourboxy h2 {
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  padding: 2rem 0 1.5rem;
}
.ytradefourssbox {
  width: 90%;
  border: 0.125rem solid black;
  padding: 0.5rem;
  border-radius: 1.5rem;
  box-sizing: border-box;
  margin: 0 auto;
}
.ytradefourssbox svg {
  width: 1.5rem;
  height: 1.5rem;
}
.ytradefourssbox input {
  width: 85%;
  margin-left: 0.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
}
.ytradefourxian {
  width: 80%;
  height: 0.09375rem;
  background: black;
  margin: 1rem auto;
}
.ytradefourfont {
  font-size: 0.9rem;
  color: black;
  justify-content: center;
  column-gap: 0.5rem;
}
.ytradefourfont a {
  text-decoration: underline;
  color: black;
}
</style>
