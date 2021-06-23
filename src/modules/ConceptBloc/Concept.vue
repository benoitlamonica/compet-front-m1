<template>
  <div class="concept-container">
    <div class="concept-img-mobile">
      <img src="@/assets/img/last_section_chef.png" alt="chef en cuisine" />
    </div>
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
        assiettes. La recette de <span class="pandr">Persil et Romarin</span> ce
        sont des
        <span class="pandr">
          plats fait-maison et ultra-frais élaborées par des chefs.</span
        >
        <br />
        <br />
        Notre concept est un réseau de
        <span class="pandr">producteurs partenaires</span>, une
        <span class="pandr">cuisine de chefs professionnels</span>, un
        <span class="pandr">objectif 0 déchet</span> avec
        <span class="pandr">contenants en verre</span> et
        <span class="pandr">sans emballage plastique</span>, un
        <span class="pandr">large choix de recettes</span> toutes les semaines
        et un <span class="pandr">crédit d’impôt de 50%.</span>
      </p>
      <div class="concept-link-container">
        <a class="concept-link" href="">En savoir plus sur le concept</a>
      </div>
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
    width: 60vw;
    margin-right: 71px;
    .concept-title {
      color: $olive;
      margin-bottom: 24px;
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
    }
    .concept-subtitle {
      font-weight: 600;
      margin-bottom: 16px;
      font-size: 18px;
      line-height: 28px;
    }
    .concept-detail {
      margin-bottom: 32px;
      font-size: 18px;
      line-height: 26px;
      font-weight: 300;
      .pandr {
        font-weight: 600;
        font-style: italic;
      }
    }
    .concept-link {
      text-transform: uppercase;
      letter-spacing: 3%;
      color: $bistre;
      font-size: 18px;
      font-weight: 600;
      line-height: 20px;
    }
  }
  .concept-img {
    border-radius: 5px;
    height: 100%;
    width: 40vw;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .concept-img-mobile {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .concept-container {
    padding: 0 15px;
    display: block;
    .concept-text {
      width: 100%;
      .concept-title {
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 12px;
      }
      .concept-subtitle {
        font-size: 18px;
        line-height: 28px;
        margin-bottom: 24px;
      }
      .concept-detail {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 24px;
        .pandr {
          font-weight: bold;
        }
      }
      .concept-link-container {
        text-align: center;
        .concept-link {
          font-size: 18px;
        }
      }
      margin-bottom: 80px;
    }
    .concept-img {
      display: none;
    }
    .concept-img-mobile {
      display: block;
      height: 375px;
      width: 100%;
      margin-bottom: 32px;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 5px;
        object-position: top;
      }
    }
  }
}
</style>
