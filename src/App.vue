<template>
  <div class="app">
    <header>
      <Navbar />
    </header>
    <body>
      <Hero />
    </body>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from "./modules/Navbar";
import Hero from "./modules/Hero";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
  },
};
</script>

<style>
.app {
  padding: 0 120px;
}
</style>
