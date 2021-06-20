<template>
  <wrapper>
    <Navbar />
    <Stepper />
    <i class="fas fa-long-arrow-alt-left"></i>
    <router-link to="/">
      Retour
    </router-link>
  </wrapper>
</template>

<script>
import Navbar from "../components/Navbar/Navbar.vue";
import Wrapper from "../components/Wrapper/Wrapper.vue";
import Stepper from "../modules/Stepper/Stepper.vue";
export default {
  components: { Stepper, Navbar, Wrapper },
  name: "Game",
  data() {
    return {
      allMainIng: null,
    };
  },
};
</script>

<style></style>
