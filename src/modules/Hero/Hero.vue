<template>
  <div class="hero-container">
    <div class="text-bloc">
      <h1 class="title">
        Cette semaine c’est nos chefs qui cuisinent chez vous !
      </h1>
      <p class="text">
        Trouvez les plats cuisinés par nos chefs cette semaine qui pourraient
        vous régaler vous et votre famille en seulement quelques clics.
      </p>
<<<<<<< HEAD
      <Button
        text="Je trouve mes plats"
        link="https://persiletromarin.fr/"
        ariaLabel="Trouver mon plat"
        class="cta-button"
      />
=======
      <Button link="/game" text="Je trouve mes plats" class="button" />
>>>>>>> 495d84a (Routes)
    </div>
    <div class="plate-img">
      <img src="@/assets/img/hero_landing.png" alt="Bol de soupe" />
    </div>
    <div class="herbs-img">
      <img src="@/assets/img/top_herbes.png" alt="Persil et romarin" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Navbar",
  components: { Button },
};
</script>

<style lang="scss" scoped>
.hero-container {
  padding: 0 120px;
  position: relative;
  .text-bloc {
    position: relative;
    padding-top: 185px;
    max-width: 45vw;
    .title {
      color: $olive;
    }
    .text {
      padding-top: 16px;
      font-size: 20px;
      color: $dark-chocolate;
    }
    .cta-button {
      margin-top: 32px;
    }
  }
  .plate-img {
    position: absolute;
    right: 0;
    top: -120px;
    z-index: -1;
  }
  .herbs-img {
    position: absolute;
    left: -120px;
    top: 158px;
    z-index: -1;
  }
}
</style>
