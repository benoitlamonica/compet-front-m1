<template>
  <div class="reviews-container">
    <h2 class="title">500 repas par semaine et autant de clients ravis</h2>
    <div class="reviews">
      <Review
        filename="male-icon-2.png"
        name="Jean M"
        text="Le service de qualité, le plaisir d'échanger avec le cuisinier, les plats prêts pour la semaine, la propreté de la cuisine après le départ du chef, le large choix de plats, les tupperwares bien remplis"
        date="12/06/2021"
        alt="avis 1"
      />
      <Review
        filename="male-icon-1.png"
        class="middle-review"
        name="Fabrice J"
        text="Le service de qualité, le plaisir d'échanger avec le cuisinier, les plats prêts pour la semaine, la propreté de la cuisine après le départ du chef, le large choix de plats, les tupperwares bien remplis"
        date="27/11/2020"
        alt="avis 2"
      />
      <Review
        filename="female-icon.png"
        name="Marie F"
        text="Le service de qualité, le plaisir d'échanger avec le cuisinier, les plats prêts pour la semaine, la propreté de la cuisine après le départ du chef, le large choix de plats, les tupperwares bien remplis"
        date="13/11/2021"
        alt="avis 3"
      />
    </div>
  </div>
</template>

<script>
import Review from "@/modules/ReviewComponent";

export default {
  name: "ReviewBloc",
  components: { Review },
};
</script>

<style lang="scss" scoped>
.reviews-container {
  padding: 80px 120px;
  text-align: center;
  background-color: $olive;
  .title {
    padding-bottom: 32px;
    color: $albatre;
  }
  .reviews {
    display: flex;
    .middle-review {
      margin: 0 21px;
    }
  }
}
@media screen and (max-width: 768px) {
  .reviews-container {
    padding: 56px 0 0 14px;
    .title {
      text-align: left;
      font-size: 24px;
      line-height: 28px;
      padding-bottom: 32px;
      padding-right: 14px;
    }
    .reviews {
      overflow: scroll;
      display: flex;
      .middle-review {
        margin: 0 21px;
      }
    }
  }
}
</style>
