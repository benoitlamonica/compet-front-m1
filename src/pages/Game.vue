<template>
  <div>
    <div v-if="allMainIng != null" class="ing-list">
      <div v-for="ing in allMainIng" :key="ing.id" class="ing-single">
        <p>{{ ing.name }}</p>
      </div>
    </div>
    <router-link to="/">Retour</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Game",
  data() {
    return {
      allMainIng: null,
    };
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/ingredient/main").then((rep) => {
      this.allMainIng = rep.data;
    });
  },
};
</script>

<style></style>
