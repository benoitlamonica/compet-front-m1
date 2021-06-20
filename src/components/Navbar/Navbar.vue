<template>
  <nav class="navbar">
    <div>
      <a href="https://persiletromarin.fr/">
        <img
          class="logo"
          src="@/assets/img/logo_couleur.png"
          alt="Persil et Romarin logo"
        />
      </a>
    </div>
    <!-- <div>
      <Button
        :isRouter="false"
        text="Commander mes repas"
        ariaLabel="Commander mes repas"
        link="https://persiletromarin.fr/inscription"
      />
    </div> -->
  </nav>
</template>

<script>
//import Button from "@/components/Button";

export default {
  name: "Navbar",
  //components: { Button },
};
</script>

<style lang="scss" scoped>
.navbar {
<<<<<<< HEAD
  padding: 0 120px;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
=======
  display: flex;
  align-items: center;
  justify-content: space-between;
>>>>>>> 3ec8e15 (Stepper + Lot of thing)
  padding-top: 24px;

  .logo {
    width: 150px;
  }
}

@media screen and (max-width: 768px) {
  .navbar {
    padding: 6px 14px 0 14px;
    .logo {
      width: 83px;
    }
  }
}
</style>
