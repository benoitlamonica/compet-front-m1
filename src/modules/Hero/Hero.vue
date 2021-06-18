<template>
  <div class="container">
    <div class="left">
      <h1 class="title">
        Cette semaine c’est nos chefs qui cuisinent chez vous !
      </h1>
      <p>
        Trouvez les plats cuisinés par nos chefs cette semaine qui pourraient
        vous régaler vous et votre famille en seulement quelques clics.
      </p>
      <Button class="button" />
    </div>
    <div class="right">
      <img src="@/assets/img/hero_landing.png" alt="Bol de soupe" />
    </div>
    <div class="herbs">
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
.container {
  position: relative;
  .left {
    position: relative;
    padding-top: 185px;
    max-width: 45vw;
    .title {
      color: $olive;
    }
    p {
      padding-top: 16px;
      font-size: 20px;
      color: $dark-chocolate;
    }
    .button {
      margin-top: 32px;
    }
  }
  .right {
    position: absolute;
    right: -120px;
    top: -120px;
  }
  .herbs {
    position: absolute;
    left: -120px;
    top: 158px;
  }
}
</style>
