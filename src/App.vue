<template>
  <div class="app">
    <header>
      <Navbar />
    </header>
    <main>
      <Hero />
      <StepsBloc />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navbar from "./modules/Navbar";
import Hero from "./modules/Hero";
import Footer from "./modules/Footer";
import StepsBloc from "./modules/StepsBloc";

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    Footer,
    StepsBloc,
  },
};
</script>

<style>
</style>
