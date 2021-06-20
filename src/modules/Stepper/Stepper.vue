<template>
  <div class="stepper-content">
    <BreadCrumb />
    <div class="stepper-header">
      <h2>Quelles protéines souhaitez-vous manger cette semaine ?</h2>
      <small>
        Aucun ingrédient ne vous convient ?
        <a @click="shuffleData()">En générer d’autres </a>
        <i class="fas fa-sync-alt"></i>
      </small>
    </div>
    <StepperBody :data="dataIng" />
  </div>
</template>

<script>
import axios from "axios";
import BreadCrumb from "../BreadCrumb/BreadCrumb.vue";
import StepperBody from "./components/StepperBody/StepperBody.vue";
export default {
  components: { BreadCrumb, StepperBody },
  name: "Stepper",
  data() {
    return {
      dataIng: null,
      dataRaw: null,
    };
  },
  methods: {
    async getData() {
      let rtr = await axios
        .get("http://127.0.0.1:8000/ingredient/main")
        .then((rep) => {
          return rep.data;
        });
      return rtr;
    },
    shuffleData() {
      let data = this.dataRaw;
      var currentIndex = data.length,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [data[currentIndex], data[randomIndex]] = [
          data[randomIndex],
          data[currentIndex],
        ];
      }

      this.dataIng = data.slice(0, 6);
    },
  },
  mounted() {
    this.getData().then((data) => {
      this.dataRaw = data;
      this.shuffleData();
    });
  },
};
</script>

<style lang="scss" scoped>
.stepper-content {
  a {
    text-decoration: underline;
    cursor: pointer;
  }
  .stepper-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      display: block;
      flex-basis: 50%;
      color: $olive;
    }
    small {
      color: $bistre;
      font-size: 14px;
    }
  }
}
</style>
