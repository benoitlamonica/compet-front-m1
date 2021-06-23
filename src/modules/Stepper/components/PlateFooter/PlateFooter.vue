<template>
  <div class="stepper-footer-plate">
    <div class="stepper-footer-svg">
      <img :src="require('@/assets/img/top_footer_herbes.png')" alt="Herbes" />
    </div>
    <div class="stp-promo">
      <h3>{{ hText }}</h3>
      <p>
        Nous vous offrons un <strong>code promotionnel</strong> de 10% pour les
        commander ou découvrir les 10 autres proposés par nos chefs cette
        semaine.
      </p>
    </div>
    <div class="stp-newsletter">
      <span class="code-promo">
        Recevez votre code promotionnel de 10% par mail
      </span>
      <div class="form-promo">
        <label for="mail">Votre adresse e-mail</label>
        <div class="flex-input">
          <input
            type="mail"
            name="mail"
            placeholder="Ex. jeveuxmoncode@persilromarin.fr"
          />
          <button>Envoyer</button>
        </div>
      </div>
    </div>
    <div v-if="windowSize > 600" class="stepper-footer-arrow-content">
      <div class="stepper-footer-arrow">
        venez découvrir votre cadeau !
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlateFooter",
  data() {
    return { windowSize: 0 };
  },
  props: {
    hText: {
      type: String,
      required: true,
    },
  },
  methods: {
    setWindowSize() {
      this.windowSize = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.setWindowSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setWindowSize);
  },
};
</script>

<style lang="scss" scoped>
$padding: 40px 70px;
$margin: 47px 0;
$radius: 8px;
.stepper-footer-arrow-content {
  position: absolute;
  text-align: center;
  width: 140px;
  top: -80px;
  right: 46px;
  font-family: $ff-butler;
  color: $olive;
  > div {
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 40px;
      left: 20px;
      background-image: url("../../../../assets/img/arrow_footer_plate.svg");
      line-height: 21px;
      width: 63px;
      height: 95px;
    }
  }
}
.stepper-footer-plate {
  position: relative;
  margin: 47px 0;
  display: flex;
  flex-wrap: wrap;
  border-radius: $radius;
  align-items: center;
  justify-content: space-between;
  background-color: $bistre-clair;
  padding: $padding;
  .stepper-footer-svg {
    position: absolute;
    top: 20px;
    left: 0;
    z-index: 0;
    img {
      width: 220px;
      height: auto;
    }
  }
  .stp-promo {
    z-index: 9;
    padding: 20px 0;
    max-width: 389px;
    line-height: 26px;
    h3 {
      font-family: $ff-butler;
      color: $olive;
    }
  }
  .stp-newsletter {
    .code-promo {
      display: block;
      font-size: 15px;
      line-height: 26px;
      text-transform: uppercase;
      color: $olive;
      margin-bottom: 10px;
    }
    .form-promo {
      label {
        line-height: 26px;
        font-size: 14px;
      }
      .flex-input {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        input {
          flex-grow: 1;
          min-width: 300px;
          appearance: none;
          font-size: 14px;
          font-family: $ff-kulim;
          outline: none;
          border: none;
          padding: 16px 20px;
        }
        @media (max-width: 664px) {
          input {
            min-width: 230px;
          }
        }
        button {
          color: white;
          border-radius: 0;
          font-family: $ff-kulim;
          font-weight: lighter;
          padding: 16px 40px;
          border-bottom-right-radius: 3px;
          border-top-right-radius: 3px;
          @media (max-width: 664px) {
            border-bottom-left-radius: 3px;
            border-top-left-radius: 3px;
          }
        }
      }
    }
  }
  @media (max-width: 664px) {
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    margin: 47px -10px 0;
    button {
      margin-left: auto;
      margin-top: 12px;
    }
  }
}
</style>
