<template>
  <div class="app">
    <header>
      <Navbar />
    </header>
    <main>
      <Hero />
      <StepsBloc />
      <Htwoandtext
        title="Un chef dans votre cuisine pour vos repas de la semaine"
        text="Les chefs qui composent le réseau Persil & Romarin sont l’âme du service. C’est parce qu’ils sont tous professionnels et talentueux que les plats qu’ils préparent sont aussi bons & gourmands."
      />
      <Chief />
      <Concept />
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
import Htwoandtext from "@/components/Htwoandtext";
import Concept from "@/modules/ConceptBloc";
import Chief from "@/modules/Chief";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Footer,
    StepsBloc,
    ReviewBloc,
    Htwoandtext,
    Concept,
    Chief,
  },
};
</script>

<style></style>
