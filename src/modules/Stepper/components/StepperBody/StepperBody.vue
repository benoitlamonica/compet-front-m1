<template>
  <div class="stepper-body-ing" v-if="step !== 3">
    <div v-if="data !== null" class="stepper-ingbox">
      <IngBox
        v-for="(ing, key) in data"
        :key="key"
        :label="ing.name"
        :url_img="ing.ing_img"
        :disabled="ingChoosen.includes(ing.id)"
        @click.native="setIngChoosen(ing.id)"
      />
    </div>
    <div v-else class="stepper-ingbox">
      <IngBox v-for="i in 6" :key="i" loadMode />
    </div>
  </div>
  <div v-else class="stepper-body-plate">
    <div class="stepper-platebox">
      <PlateBox
        v-for="(plate, key) in data"
        :key="key"
        :label="plate.name"
        :urlImg="plate.ImgUrl"
      />
    </div>
    <PlateFooter />
  </div>
</template>

<script>
import IngBox from "../IngBox/IngBox.vue";
import PlateBox from "../PlateBox/PlateBox.vue";
import PlateFooter from "../PlateFooter/PlateFooter.vue";
export default {
  name: "StepperBody",
  components: { IngBox, PlateBox, PlateFooter },
  data() {
    return {
      ingChoosen: [],
    };
  },
  props: {
    data: {
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
  },
  methods: {
    setIngChoosen(id) {
      if (this.ingChoosen.includes(id)) {
        this.ingChoosen.splice(this.ingChoosen.indexOf(id), 1);
      } else {
        this.ingChoosen.push(id);
      }
      this.$emit("getIngChoosen", id);
    },
  },
};
</script>

<style lang="scss" scoped>
$padding-ingbox: 0 100px;
.stepper-body-ing {
  .stepper-ingbox {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 70px;
    padding: $padding-ingbox;
  }
}
.stepper-body-plate {
  .stepper-platebox {
    display: grid;
    gap: 0 70px;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding: $padding-ingbox;
  }
}
</style>
