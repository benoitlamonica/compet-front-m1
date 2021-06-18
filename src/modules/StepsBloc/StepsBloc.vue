<template>
  <div class="container">
    <h2 class="title">Votre chef à portée de clic</h2>
    <div class="steps">
      <Steps
        number=".01"
        title="Vos plats de la semaine"
        text="Choisissez vos plats parmi 15 recettes différentes chaque semaine et sélectionnez le nombre de personnes et vos disponibilités."
      />
      <Steps
        number=".02"
        title="Les courses gérées par votre chef"
        text="Votre chef s'occupe de vos courses alimentaires auprès de nos fournisseurs partenaires sélectionnées pour la qualité de leurs produits."
      />
      <Steps
        number=".03"
        title="La préparation à domicile"
        text="Une fois par semaine, votre chef cuisine à votre domicile et range vos plats prêts à être dégustés dans votre frigo. En plus, il fait la vaisselle !"
      />
    </div>
    <Button text="Commander mes repas" />
  </div>
</template>

<script>
import Button from "@/components/Button";
import Steps from "@/modules/Steps";

export default {
  name: "StepsBloc",
  components: { Button, Steps },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 190px 120px 0 120px;
  text-align: center;
  .title {
    padding-bottom: 71px;
    color: $olive;
  }
  .steps {
    display: flex;
    padding-bottom: 50px;
  }
}
</style>
