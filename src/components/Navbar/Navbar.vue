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
    <div>
      <Button
        :isRouter="false"
        text="Commander mes repas"
        ariaLabel="Commander mes repas"
        link="https://persiletromarin.fr/inscription"
        className="nav-button"
        classA="nav-a"
      />
    </div>
  </nav>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Navbar",
  components: { Button },
};
</script>

<style lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  .nav-button {
    background-color: transparent;
    border: 1px solid $olive;
    .nav-a {
      color: $olive;
    }
  }
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
