<template>
  <div class="stepper-content">
    <BreadCrumb :value="bcAdvance" />
    <div class="stepper-header">
      <h2>{{ titleAdvance }}</h2>
      <small v-if="step < 3">
        Aucun ingrédient ne vous convient ?
        <div class="generate-button">
          <a @click="shuffleData()">En générer d’autres </a>
          <i class="fas fa-sync-alt"></i>
        </div>
      </small>
    </div>
    <StepperBody
      :step="step"
      v-on:getIngChoosen="getIngFromChild"
      v-on:stepReload="initialiseStepper"
      :data="dataIng"
    />
    <div class="stepper-footer">
      <a v-if="step === 2" @click="stepBack()" class="stepper-back"
        ><i class="fas fa-chevron-left"></i> Précédent</a
      >
      <Button
        :text="buttonText"
        :aria-label="buttonText"
        :isRouter="false"
        :className="
          step === 2 ? (ingChoosenCond.length !== 0 ? '' : 'not-clickable') : ''
        "
        v-if="step < 3"
        @click.native="stepAdvance()"
      />
    </div>
    <div v-if="ingChoosenMain.length === 0 && step === 1" class="stepper-alert">
      Vous devez choisir au minimun une protéine pour pouvoir continuer.
    </div>
    <div v-if="ingChoosenCond.length === 0 && step === 2" class="stepper-alert">
      Vous devez choisir au minimun un condiment pour pouvoir continuer.
    </div>
    <div v-if="step !== 3" class="bg-game">
      <img src="@/assets/img/top_herbes.png" alt="Herbe" />
    </div>
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
      step: 0,
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
      if (this.step === 1) {
        this.getDataCondIngredient().then((data) => {
          this.dataRaw = data;
          this.shuffleData();
          this.step++;
        });
      } else {
        let allIngChoosen = [...this.ingChoosenMain, ...this.ingChoosenCond];
        console.log(allIngChoosen);
        this.getDataPlateByIngredient(allIngChoosen).then((data) => {
          console.log(data);
          this.dataRaw = data;
          this.shuffleDataPlate();
          this.step = 3;
        });
      }
    },
    stepBack() {
      if (this.step === 3) {
        this.getDataCondIngredient().then((data) => {
          this.dataRaw = data;
          this.shuffleData();
          this.step--;
        });
      } else {
        this.getDataMainIngredient().then((data) => {
          this.dataRaw = data;
          this.shuffleData();
          this.step = 1;
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
    initialiseStepper() {
      this.step = 1;
      this.ingChoosenCond = [];
      this.ingChoosenMain = [];
      this.getDataMainIngredient().then((data) => {
        this.dataRaw = data;
        this.shuffleData();
      });
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
          : "Continuer";
      return text;
    },
    alertText() {
      let text = this.step === 1 ? "une protéine" : "un condiment";
      return text;
    },
  },
  mounted() {
    this.initialiseStepper();
  },
};
</script>

<style lang="scss" scoped>
$radius: 3px;
.stepper-content {
  a {
    cursor: pointer;
  }
  .stepper-back {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 16px;
    i {
      margin-right: 0.5em;
      text-decoration: unset;
    }
  }
  .stepper-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .generate-button {
      display: inline;
    }
    h2 {
      display: block;
      flex-basis: 50%;
      min-width: 300px;
      max-width: 600px;
      flex-grow: 1;
      color: $olive;
    }
    small {
      color: $bistre;
      font-size: 14px;
      a {
        text-decoration: underline;
      }
    }
    @media (max-width: 800px) {
      h2 {
        max-width: 350px;
      }
      .generate-button {
        display: block;
      }
      small {
        padding: 30px 70px 0px;
      }
      margin-bottom: 30px;
    }
  }
  .stepper-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      margin: 30px 0 30px auto;
    }
  }
  .stepper-alert {
    text-align: center;
    @media (max-width: 600px) {
      max-width: 300px;
    }
    //border: 1px solid $olive;
    color: $olive;
    margin: 10px auto 20px;
    border-radius: $radius;
    font-weight: 600;
  }
  .bg-game {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    img {
      object-fit: contain;
      object-position: 0 400px;
    }
  }
}
</style>
