<template>
  <div class="concept-container">
    <div class="concept-text">
      <h2 class="concept-title">
        Vos repas pour la semaine préparés chez vous par nos Chefs
      </h2>
      <p class="concept-subtitle">
        1 heure, c’est le temps moyen que vous passez en cuisine
        quotidiennement.
      </p>
      <p class="concept-detail">
        Chez <span class="pandr">Persil et Romarin</span>, nous avons à coeur
        d’apporter la cuisine et le goût d’une nourriture saine et équilibrée
        chez vous ! Pour cela, nous mettons tout en oeuvre pour vous proposer
        des recettes de saison, des ingrédients labélisés et certifiés dans vos
        assiettes. La recette de Persil et Romarin ce sont des plats fait-maison
        et ultra-frais élaborées par des chefs. Notre concept est un réseau de
        producteurs partenaires, une cuisine de chefs professionnels, un
        objectif 0 déchet avec contenants en verre et sans emballage plastique,
        un large choix de recettes toutes les semaines et un crédit d’impôt de
        50%.
      </p>
      <a class="concept-link" href="">En savoir plus sur le concept</a>
    </div>
    <div class="concept-img">
      <img src="@/assets/img/last_section_chef.png" alt="chef en cuisine" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Concept",
};
</script>

<style lang="scss" scoped>
.concept-container {
  padding: 0 120px 156px 120px;
  display: flex;
  .concept-text {
    width: 50vw;
    margin-right: 72px;
    .concept-title {
      color: $olive;
      margin-bottom: 24px;
    }
    .concept-subtitle {
      font-weight: 600;
      margin-bottom: 16px;
    }
    .concept-detail {
      margin-bottom: 32px;
      .pandr {
        font-weight: bold;
      }
    }
    .concept-link {
      color: $bistre;
      font-size: 18px;
    }
    .concept-img {
      height: 100%;
      width: 100%;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
