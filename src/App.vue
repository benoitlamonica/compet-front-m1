<template>
  <wrapper>
    <router-view />
  </wrapper>
</template>

<script>
import Wrapper from "./components/Wrapper/Wrapper.vue";
export default {
  components: { Wrapper },
  name: "App",
};
</script>
