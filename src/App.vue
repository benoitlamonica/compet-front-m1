<template>
  <div class="app">
    <header>
      <Navbar />
    </header>
    <body>
      <Hero />
    </body>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navbar from "./modules/Navbar";
import Hero from "./modules/Hero";
import Footer from "./modules/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    Footer,
  },
};
</script>

<style>
</style>
