<template>
  <div class="breadcrumb-items">
    <div class="breadcrumb-bar">
      <div class="breadcrumb-inner" :style="`width : ${innerWidth}%`">
        <div v-if="innerWidth >= 10" class="breadcrumb-abs">
          {{ innerWidth + "%" }}
        </div>
      </div>
    </div>
    <div class="breadcrumb-anotation">
      <div :class="innerWidth >= 33 ? 'complete' : ''">
        1/3 - Les protéines
      </div>
      <div :class="innerWidth >= 66 ? 'complete' : ''">
        2/3 - Les accompagnements
      </div>
      <div :class="innerWidth === 100 ? 'complete' : ''">
        3/3 - Nos suggestions
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  data() {
    return {
      innerWidth: 0,
      valueChoosen: 0,
      intervalId: null,
    };
  },
  watch: {
    valueChoosen: function(val) {
      if (this.intervalId != null) {
        clearInterval(this.intervalId);
      }
      let sign = Math.sign(val - this.innerWidth);
      let animProgress = setInterval(() => {
        if (sign === 1) {
          this.innerWidth++;
        } else if (sign === 0) {
          clearInterval(this.intervalId);
        } else {
          this.innerWidth--;
        }
        if (this.innerWidth == val) {
          clearInterval(animProgress);
        }
<<<<<<< HEAD
      }, 20);
      this.intervalId = animProgress;
    },
  },
  mounted() {
    this.valueChoosen = 33;
  },
=======
      }, 10);
      this.intervalId = animProgress;
    },
  },
>>>>>>> 5f0b991 (Stepper + Lot of thing)
};
</script>

<style lang="scss" scoped>
$border-radius: 20px;
$height: 26px;
.breadcrumb-items {
  .breadcrumb-bar {
    width: 100%;
    height: $height;
    background-color: rgba($bistre, 0.3);
    border-radius: $border-radius;
    margin: 38px 0 10px;
    .breadcrumb-inner {
      position: relative;
      background-color: $olive;
      height: $height;
      width: 10%;
      border-radius: $border-radius;
      .breadcrumb-abs {
        display: flex;
        align-items: center;
        justify-content: center;
        color: $albatre;
        font-weight: 600;
        position: absolute;
        background-color: $olive-les;
        right: 0;
        width: 60px;
        height: $height;
        border-radius: $border-radius;
      }
    }
  }
  .breadcrumb-anotation {
    display: flex;
    width: 100%;
    margin-bottom: 43px;
    font-size: 14px;
    color: $bistre;
    > div {
      width: calc(100% / 3);
      text-align: center;
    }
    .complete {
      color: $olive;
      font-weight: 600;
    }
  }
}
</style>
