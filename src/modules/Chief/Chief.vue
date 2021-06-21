<template>
  <div class="chief-container">
    <div class="chief-img">
      <img src="@/assets/img/chef_n1.png" alt="chef en cuisine" />
    </div>
    <div class="chief-text">
      <h4 class="chief-title">Sophie Ferrand</h4>
      <p class="chief-subtitle">Chef à domicile</p>
      <p class="chief-detail">
        Cuisinière de coeur, je suis né en Gironde, j’y ai grandi. Elle a fait
        de moi ce que je suis aujourd’hui et elle se ressent dans ma cuisine;
        simple, honnête, humble et gourmande... Au fur et à mesure des années
        passés auprès de chefs comme Edouard Loubet, Patrick Henrioux ou en
        Dordogne où j’ai connu ma première étoile avec mon équipe revenir en
        Gironde, était pour moi devenu une évidence. L’envie de m’installer
        comme chef à domicile ne m’a jamais quitté et aujourd’hui c’est un rêve
        qui se réalise !
      </p>
      <a class="chief-link" href="">Visiter son site</a>
    </div>
    <div class="herbs">
      <img src="@/assets/img/bottom_herb.png" alt="Persil et Romarin" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Chief",
};
</script>

<style lang="scss" scoped>
.chief-container {
  padding: 0 120px 156px 120px;
  display: flex;
  position: relative;
  .chief-img {
    height: 100%;
    max-width: 50vw;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .chief-text {
    width: 50vw;
    margin-left: 123px;
    .chief-title {
      color: $olive;
      margin-bottom: 6px;
    }
    .chief-subtitle {
      font-weight: 300;
      margin-bottom: 16px;
      color: $bistre;
    }
    .chief-detail {
      font-weight: 300;
      font-size: 18px;
      margin-bottom: 32px;
    }
    .chief-link {
      color: $bistre;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .herbs {
    position: absolute;
    right: -120px;
    -moz-border-top-colors: 0;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
