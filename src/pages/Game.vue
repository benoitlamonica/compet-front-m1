<template>
  <div>
    <Navbar />
    <Stepper />
    <i class="fas fa-long-arrow-alt-left"></i>
    <router-link to="/">
      Retour
    </router-link>
  </div>
</template>

<script>
import Navbar from "../modules/Navbar";
import Stepper from "../modules/Stepper/Stepper.vue";
export default {
  components: { Navbar, Stepper },
  name: "Game",
  data() {
    return {
      allMainIng: null,
    };
  },
};
</script>

<style></style>
