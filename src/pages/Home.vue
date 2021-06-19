<template>
  <div class="app">
    <header>
      <Navbar />
    </header>
    <main>
      <Hero />
      <StepsBloc />
      <ReviewBloc />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Hero from "@/modules/Hero";
import Footer from "@/modules/Footer";
import StepsBloc from "@/modules/StepsBloc";
import ReviewBloc from "@/modules/ReviewBloc";
export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Footer,
    StepsBloc,
    ReviewBloc,
  },
};
</script>

<style></style>
