<template>
  <div class="carousel">
    <div class="carousel-view">
      <transition-group class="carousel" tag="div">
        <div v-for="slide in slidesData" class="slide" :key="slide.id">
          <img :src="require(`@/assets/img/${slide.src}`)" :alt="slide.alt" />
        </div>
      </transition-group>
      <div class="carousel-controls">
        <button class="carousel-controls__button" @click="previous">
          <svg
            width="13"
            height="21"
            viewBox="0 0 13 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.6044 20L0.816527 10.5L12.6044 1" stroke="#F7F5EE" />
          </svg>
        </button>
        <button class="carousel-controls__button" @click="next">
          <svg
            width="14"
            height="21"
            viewBox="0 0 14 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.01605 1L12.8039 10.5L1.01605 20" stroke="#F7F5EE" />
          </svg>
        </button>
      </div>
    </div>
    <div class="text-view">
      <transition-group class="card" tag="div">
        <div v-for="slide in slidesData" :key="slide.id" class="carousel-text">
          <div class="chief-text">
            <h4 class="chief-title">{{ slide.title }}</h4>
            <p class="chief-subtitle">{{ slide.subtitle }}</p>
            <p class="chief-detail">
              {{ slide.text }}
            </p>
            <a class="chief-link" :href="slide.href">Visiter son site</a>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return { slidesData: this.slides };
  },
  props: {
    slides: { type: Array, required: true },
  },

  methods: {
    next() {
      const first = this.slidesData.shift();
      this.slidesData = this.slidesData.concat(first);
    },
    previous() {
      const last = this.slidesData.pop();
      this.slidesData = [last].concat(this.slidesData);
    },
  },
  watch: {
    slides: function (val) {
      this.slideData = val;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  overflow: hidden;
  margin-top: 56px;
  margin-bottom: 125px;
  display: flex;
  .carousel-view {
    padding-left: 120px;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .carousel {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      width: 50vw;
      min-height: 505px;
    }
    .slide {
      flex: 0 0 50vw;
      height: 20em;
      margin: 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s ease-in-out;
    }
    .slide:first-of-type {
      opacity: 0;
    }
    .slide:last-of-type {
      opacity: 0;
    }
    .carousel-controls {
      position: absolute;
      transform-origin: center;
      transform: translate(50%);
      top: 50%;
      right: 8px;
      .carousel-controls__button {
        margin-right: 12px;
        padding: 12px 24px;
      }
    }
  }
  ///end carousel

  .text-view {
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      width: 50vw;
      min-height: 25em;
    }

    .carousel-text {
      padding: 0 120px;
      flex: 0 0 100%;
      height: 20em;
      margin: 1em;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s ease-in-out;
    }

    .card-enter,
    .card-leave-to {
      opacity: 0;
      transform: scale(0);
    }
    .card-enter-to {
      opacity: 1;
      transform: scale(1);
    }
    .card-move {
      opacity: 1;
      transition: all 0.5s;
    }

    .chief-img {
      height: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .chief-text {
      .chief-title {
        color: $olive;
        margin-bottom: 6px;
      }
      .chief-subtitle {
        font-weight: 300;
        margin-bottom: 16px;
        color: $bistre;
      }
      .chief-detail {
        font-weight: 300;
        font-size: 18px;
        margin-bottom: 32px;
      }
      .chief-link {
        color: $bistre;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
}
</style>
