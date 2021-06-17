<template>
  <div class="navbar">
    <div class="left">
      <a href="https://persiletromarin.fr/">
        <img class="logo" src="assets/img/logo.svg" alt="" />
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

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

.logo {
  height: 60px;
}
</style>
