<template>
  <div class="stepper-footer-plate">
    <div class="stp-promo">
      <h3>Tenté par ces plats ?</h3>
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
  </div>
</template>

<script>
export default {
  name: "PlateFooter",
};
</script>

<style lang="scss" scoped>
$padding: 40px;
$margin: 47px 0;
.stepper-footer-plate {
  margin: 47px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $bistre-clair;
  padding: $padding;
  .stp-promo {
    padding: 20px;
    max-width: 389px;
    line-height: 26px;
    h3 {
      font-family: $ff-butler;
      color: $olive;
    }
  }
  .stp-newsletter {
    .code-promo {
      font-size: 15px;
      text-transform: uppercase;
      color: $olive;
    }
    .form-promo {
      .flex-input {
        display: flex;
        input {
          appearance: none;
          font-size: 14px;
          font-family: $ff-kulim;
          outline: none;
          border: none;
          padding: 16px 20px;
        }
        button {
          color: white;
          border-radius: 0;
        }
      }
    }
  }
}
</style>
