<template>
  <div class="app">
    <header>
      <wrapper>
        <Navbar />
      </wrapper>
    </header>
    <main>
      <Hero />
      <StepsBloc />
      <Htwoandtext
        title="Un chef dans votre cuisine pour vos repas de la semaine"
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
<<<<<<< HEAD
import Htwoandtext from "@/components/Htwoandtext";
import Concept from "@/modules/ConceptBloc";
import Chief from "@/modules/Chief";

=======
import Wrapper from "../components/Wrapper/Wrapper.vue";
>>>>>>> 506c2cc (Added transition tyo routes)
export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Footer,
    StepsBloc,
    ReviewBloc,
<<<<<<< HEAD
    Htwoandtext,
    Concept,
    Chief,
=======
    Wrapper,
>>>>>>> 506c2cc (Added transition tyo routes)
  },
};
</script>

<style></style>
