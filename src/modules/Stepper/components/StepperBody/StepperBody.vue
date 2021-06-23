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
    <div class="stepper-platebox" v-if="data.length > 0">
      <PlateBox
        v-for="(plate, key) in data"
        :key="key"
        :label="plate.name"
        :urlImg="plate.ImgUrl"
      />
    </div>
    <div v-else class="stepper-platebox-nr">
      <PlateBox label="Rougaille Saucisse" urlImg="rougail.jpg" />
      <div class="stepper-platebox-disclaimer">
        <h3>Aucune recette cette semaine ne correspond à vos critères</h3>
        <p>
          Mais vous pouvez vous laisser tenter par notre recette coup de coeur
          de la semaine.
        </p>
        <div class="ing-form">
          <input
            type="mail"
            name="mail"
            placeholder="Ex. jeveuxmoncode@persilromarin.fr"
          />
          <button>Envoyer</button>
        </div>
        <button @click="stepReload">Recommencer</button>
      </div>
    </div>
    <PlateFooter
      :hText="
        data.length === 0 ? 'Une prochaine fois !' : 'Tenté par ces plats ? '
      "
    />
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
    stepReload() {
      this.ingChoosen = [];
      this.$emit("stepReload");
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
    @media (max-width: 1160px) {
      padding: 0;
    }
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      gap: 0 10px;
    }
  }
}
.stepper-body-plate {
  .stepper-platebox {
    display: grid;
    gap: 0 20px;
    grid-template-columns: 2fr 1fr 1fr;
    @media (max-width: 1160px) {
      padding: 0;
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 900px) {
    }
    @media (max-width: 600px) {
      gap: 0 10px;
    }
  }
  .stepper-platebox-nr {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    > div:nth-child(1) {
      height: 400px;
    }
    .stepper-platebox-disclaimer {
      @media (max-width: 1160px) {
        max-width: 80%;
      }
      @media (max-width: 900px) {
      }
      @media (max-width: 600px) {
        max-width: none;
      }
      margin: auto;
      max-width: 389px;
      h3 {
        font-family: $ff-butler;
        color: $olive;
        margin: 13px 0;
        line-height: 28px;
      }
      p {
        margin: 13px 0;
        line-height: 26px;
        font-size: 16px;
      }
      .ing-form {
        display: flex;
        width: 100%;
        margin: 40px 0;
        input {
          flex-grow: 1;
          appearance: none;
          font-size: 14px;
          font-family: $ff-kulim;
          background-color: transparent;
          border-bottom: 1px solid black;
          border-top: none;
          border-left: none;
          border-right: none;

          outline: none;
          padding: 16px 0px;
          margin-right: 20px;
        }
        button {
          color: white;
          border-radius: 0;
          font-family: $ff-kulim;
          font-weight: lighter;
          background-color: $bistre;
          padding: 16px 40px;
        }
      }
      button {
        cursor: pointer;
        background-color: transparent;
        border: 1px solid $olive;
        font-size: 16px;
        color: $olive;
        font-family: $ff-kulim;
      }
    }
  }
}
</style>
