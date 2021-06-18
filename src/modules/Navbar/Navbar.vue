<template>
  <div class="navbar">
    <div class="left">
      <a href="https://persiletromarin.fr/">
        <img class="logo" src="@/assets/img/logo_couleur.png" alt="" />
      </a>
    </div>
    <div class="right">
      <Button />
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
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
}

.logo {
  width: 150px;
  height: 100%;
}
</style>
