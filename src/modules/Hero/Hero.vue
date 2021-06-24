<template>
  <div class="hero-container">
    <div class="plate-img">
      <img src="@/assets/img/hero_landing.png" alt="Bol de soupe" />
    </div>
    <div class="text-bloc">
      <h1 class="title">
        Cette semaine c’est nos chefs qui cuisinent chez vous !
      </h1>
      <p class="text">
        Trouvez les plats cuisinés par nos chefs cette semaine qui pourraient
        vous régaler vous et votre famille en seulement quelques clics.
      </p>
      <div class="button-group">
        <Button
          isRouter
          ariaLabel="Je trouve mes plats"
          link="/game"
          text="Je trouve mes plats"
          class="cta-button"
        />
        <Button
          :isRouter="false"
          ariaLabel="Commander mes repas"
          link="https://persiletromarin.fr"
          text="Commander mes repas"
          class="cta-button button-secondary"
        />
      </div>
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
    padding-top: 126px;
    max-width: calc(50vw - 120px);
    .title {
      color: $olive;
    }
    .text {
      padding-top: 16px;
      font-size: 20px;
      color: $dark-chocolate;
      font-weight: 300;
      line-height: 33px;
    }
    .cta-button {
      margin-top: 32px;
      margin-right: 6px;
    }
  }
  .plate-img {
    position: absolute;
    right: 0;
    top: -149px;
    z-index: -1;
  }
  .herbs-img {
    position: absolute;
    left: -120px;
    top: 158px;
    z-index: -1;
  }
}
@media screen and (max-width: 1280px) {
  .hero-container {
    .plate-img {
      img {
        height: 1000px;
      }
    }
  }
}
@media screen and (max-width: 1250px) {
  .hero-container {
    .plate-img {
      position: absolute;
      height: 15vh;
      img {
        position: absolute;
        height: 600px;
        width: auto;
        right: -14px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .hero-container {
    padding: 0 14px 70px 14px;
    .text-bloc {
      max-width: 100%;
      padding-top: 200px;
      .title {
        font-size: 32px;
        line-height: 36px;
        font-weight: 800;
      }
      .text {
        font-size: 18px;
        line-height: 33px;
      }
      .button-group {
        text-align: center;
        .cta-button {
          width: 66%;
        }
      }
    }
    .plate-img {
      position: relative;
      height: 15vh;
      img {
        position: absolute;
        height: 600px;
        width: auto;
        right: -14px;
      }
    }
    .herbs-img {
      left: -50px;
      top: 400px;
      img {
        height: 100vh;
      }
    }
  }
}
</style>
