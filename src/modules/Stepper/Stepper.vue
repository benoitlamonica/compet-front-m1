<template>
  <div class="stepper-content">
    <BreadCrumb :value="bcAdvance" />
    <div class="stepper-header">
      <h2>{{ titleAdvance }}</h2>
      <small>
        Aucun ingrédient ne vous convient ?
        <a @click="shuffleData()">En générer d’autres </a>
        <i class="fas fa-sync-alt"></i>
      </small>
    </div>
    <StepperBody
      :step="step"
      v-on:getIngChoosen="getIngFromChild"
      :data="dataIng"
    />
    <div class="stepper-footer">
      <div
        v-if="ingChoosenMain.length === 0 && step === 1"
        class="stepper-alert"
      >
        Vous devez choisir au minimun une protéine pour pouvoir continuer.
      </div>
      <div
        v-if="ingChoosenCond.length === 0 && step === 2"
        class="stepper-alert"
      >
        Vous devez choisir au minimun un condiment pour pouvoir continuer.
      </div>
      <Button
        :text="buttonText"
        :aria-label="buttonText"
        :isRouter="false"
        @click.native="stepAdvance()"
      />
    </div>
    <a v-if="step > 1" @click="stepBack()">Retour</a>
  </div>
</template>

<script>
import axios from "axios";
import BreadCrumb from "../BreadCrumb/BreadCrumb.vue";
import StepperBody from "./components/StepperBody/StepperBody.vue";
import Button from "../../components/Button/Button.vue";
export default {
  components: { BreadCrumb, StepperBody, Button },
  name: "Stepper",
  data() {
    return {
      dataIng: null,
      dataRaw: null,
      step: 1,
      ingChoosenMain: [],
      ingChoosenCond: [],
    };
  },
  methods: {
    async getDataMainIngredient() {
      let rtr = await axios
        .get("http://127.0.0.1:8000/ingredient/main")
        .then((rep) => {
          return rep.data;
        });
      return rtr;
    },
    async getDataCondIngredient() {
      let rtr = await axios
        .get("http://127.0.0.1:8000/ingredient/cond")
        .then((rep) => {
          return rep.data;
        });
      return rtr;
    },
    async getDataPlateByIngredient(ingArray) {
      let endPointStr = "";
      ingArray.forEach((id, i) => {
        endPointStr += i + 1 === ingArray.length ? `${i}=${id}` : `${i}=${id}&`;
      });

      let fullEndPoint =
        "http://127.0.0.1:8000/ingredient/plate?" + endPointStr;
      console.log(fullEndPoint);
      let rtr = await axios.get(fullEndPoint).then((rep) => {
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
    shuffleDataPlate() {
      let data = this.dataRaw;
      if (this.dataRaw.length > 5) {
        this.dataIng = data.slice(0, 5);
        return;
      }
      this.dataIng = this.dataRaw;
    },
    stepAdvance() {
      this.step++;
      if (this.step === 2) {
        this.getDataCondIngredient().then((data) => {
          this.dataRaw = data;
          this.shuffleData();
        });
      } else {
        this.step = 3;
        let allIngChoosen = [...this.ingChoosenMain, ...this.ingChoosenCond];
        console.log(allIngChoosen);
        this.getDataPlateByIngredient(allIngChoosen).then((data) => {
          console.log(data);
          this.dataRaw = data;
          this.shuffleDataPlate();
        });
      }
    },
    stepBack() {
      this.step--;
      if (this.step === 2) {
        this.getDataCondIngredient().then((data) => {
          this.dataRaw = data;
          this.shuffleData();
        });
      } else {
        this.step = 1;
        this.getDataMainIngredient().then((data) => {
          this.dataRaw = data;
          this.shuffleData();
        });
      }
    },
    addOrRemoveIdFromArray(array, id) {
      if (array.includes(id)) {
        array.splice(array.indexOf(id), 1);
        return;
      }
      array.push(id);
    },
    getIngFromChild(id) {
      if (this.step === 1) {
        this.addOrRemoveIdFromArray(this.ingChoosenMain, id);
      } else {
        this.addOrRemoveIdFromArray(this.ingChoosenCond, id);
      }
    },
  },
  computed: {
    bcAdvance() {
      let advance = 0;
      switch (this.step) {
        case 2:
          advance = 66;
          break;
        case 3:
          advance = 100;
          break;

        default:
          advance = 33;
          break;
      }
      return advance;
    },
    titleAdvance() {
      let title = "";
      switch (this.step) {
        case 2:
          title = "Quels accompagnements souhaitez-vous ajouter ?";
          break;
        case 3:
          title = "Nos plats de la semaine qui pourraient vous plaire";
          break;

        default:
          title = "Quelles protéines souhaitez-vous manger cette semaine ?";
          break;
      }

      return title;
    },
    buttonText() {
      let text =
        this.ingChoosenMain.length === 0 && this.step === 1
          ? "Je ne mange pas de viande"
          : "Continue";
      return text;
    },
    alertText() {
      let text = this.step === 1 ? "une protéine" : "un condiment";
      return text;
    },
  },
  mounted() {
    this.getDataMainIngredient().then((data) => {
      this.dataRaw = data;
      this.shuffleData();
    });
  },
};
</script>

<style lang="scss" scoped>
$radius: 3px;
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
  .stepper-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      margin: 30px 0 30px auto;
    }
    .stepper-alert {
      text-align: center;
      //border: 1px solid $olive;
      padding: 18px 0px;
      color: $olive;
      margin: 30px 0;
      border-radius: $radius;
      font-weight: 600;
    }
  }
}
</style>
