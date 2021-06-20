<template>
  <div class="stepper-body">
    <div v-if="data !== null" class="stepper-ingbox">
      <IngBox
        v-for="(ing, key) in data"
        :key="key"
        :label="ing.name"
        @click.native="setIngChoosen(ing.id)"
      />
    </div>
    <div v-else class="stepper-ingbox">
      <IngBox v-for="i in 6" :key="i" loadMode />
    </div>
  </div>
</template>

<script>
import IngBox from "../IngBox/IngBox.vue";
export default {
  name: "StepperBody",
  components: { IngBox },
  data() {
    return {
      ingChoosen: [],
    };
  },
  props: {
    data: {
      required: true,
    },
  },
  methods: {
    setIngChoosen(id) {
      console.log("Click", id);
      this.ingChoosen.push(id);
    },
  },
};
</script>

<style lang="scss" scoped>
$padding-ingbox: 0 100px;
.stepper-body {
  .stepper-ingbox {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 70px;
    padding: $padding-ingbox;
  }
}
</style>
