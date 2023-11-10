<template>
  <div
    class="carousel"
    ref="carousel"
    @mousedown="startDrag"
    @mouseup="endDrag"
  >
    <div
      v-for="(slide, index) in slides"
      :key="index"
      v-show="currentIndexClamped === index"
      class="carousel-item"
    >
      <img :src="slide.src" :alt="'slide' + (index + 1)" />
    </div>
    <div class="carousel-dots">
      <span
        v-for="(dot, index) in slideCount"
        :key="index"
        :class="{ active: currentIndexClamped === index }"
        @click="changeSlide(index)"
      ></span>
    </div>
    <div class="annu">
      <p @click="login">{{ $store.state.txt.welcomebutone }}</p>
      <p class="annu1" @click="home">{{ $store.state.txt.welcomebuttwo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txt: "登录",
      txts: "开始使用",
      currentIndex: 0,
      slideCount: 3,
      slides: [
        {
          src: "https://tse4-mm.cn.bing.net/th/id/OIP-C.d95XU9rPpliLu_FNqV9hHQHaFN?w=230&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        },
        {
          src: "https://ts2.cn.mm.bing.net/th?id=ORMS.ab7587dd762afd2d1cea1ee5c6cf4adc&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0",
        },
        {
          src: "https://ts2.cn.mm.bing.net/th?id=ORMS.1b638bc8ba5bb60071ad54dc5e9b55a1&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0",
        },
      ],
      dragging: false,
    };
  },
  methods: {
    changeSlide(index) {
      this.currentIndex = index;
    },
    login() {
      this.$router.push("/login");
    },
    // 导航到 Native 页面
    home() {
      this.$router.push("/native");
    },
    startDrag() {
      this.dragging = true;
    },
    endDrag() {
      this.dragging = false;
    },
  },
  computed: {
    currentIndexClamped() {
      if (this.dragging) {
        return Math.max(0, Math.min(this.currentIndex, this.slideCount - 1));
      } else {
        return this.currentIndex;
      }
    },
  },
  mounted() {
    const carouselElement = this.$refs.carousel;
    carouselElement.addEventListener("mousemove", (event) => {
      if (this.dragging) {
        const carouselWidth = carouselElement.offsetWidth;
        const offsetX = event.offsetX;
        const newIndex = Math.floor(
          (offsetX / carouselWidth) * this.slideCount
        );
        this.currentIndex = newIndex;
      }
    });
  },
};
</script>
<style scoped>
.carousel {
  margin: 0 auto;
  width: 100%;
  height: 90vh;
  position: relative;
}

.carousel-dots {
  position: absolute;
  bottom: 30%;
  left: 55%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}

.carousel-dots span {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.3s;
}

.carousel-dots span.active {
  background-color: #333;
}

.carousel-slide-enter-active,
.carousel-slide-leave-active {
  transition: opacity 1s;
}

.carousel-slide-enter,
.carousel-slide-leave-to {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.carousel-item {
  height: 100%;
  height: 80%;
  overflow: hidden;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.annu {
  width: 85%;
  display: flex;
  justify-content: space-around;
  margin: 4rem auto 0;
}

.annu > p {
  display: block;
  text-align: center;
  width: 40%;
  padding: 1.25rem;
  background: rgb(255, 255, 255);
  border-radius: 1rem;
  font-size: 0.95rem;
  color: black;
  border: 0.125rem solid black;
  box-sizing: border-box;
  cursor: pointer;
}

.annu > p:nth-child(1):hover {
  background: rgb(245, 245, 245);
}

.annu .annu1 {
  width: 55%;
  background-color: rgb(154, 211, 111);
}

.annu .annu1:hover {
  background: rgb(148, 211, 109);
}
</style>
