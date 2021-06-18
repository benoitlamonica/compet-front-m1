<template>
  <div class="footer">
    <div class="left">
      <a href="https://persiletromarin.fr/">
        <img
          class="logo"
          src="@/assets/img/logo_blanc.png"
          alt="Persil et Romarin Logo"
        />
      </a>
    </div>
    <div class="center">
      <div class="nav">
        <ul>
          <li><a href="https://persiletromarin.fr/">Accueil</a></li>
          <li><a href="https://persiletromarin.fr/">Concept</a></li>
          <li><a href="https://persiletromarin.fr/">À propos</a></li>
          <li>
            <a href="https://persiletromarin.fr/contact">Nous contacter</a>
          </li>
          <li>
            <a href="https://persiletromarin.fr/inscription">
              Commander mes repas
            </a>
          </li>
        </ul>
      </div>
      <div class="copyright">Copyright © 2021 | Persil et Romarin</div>
    </div>
    <div class="right">
      <p>Suivez-nous</p>
      <div class="rs">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  justify-content: space-between;
  display: flex;
  padding: 28px 120px 73px 120px;
  height: 203px;
  background-color: $dark-chocolate;
  .left {
    .logo {
      width: 165px;
      height: 102px;
    }
  }
  .center {
    .nav {
      padding-bottom: 43px;
      ul {
        text-align: center;
        list-style: none;
        display: flex;
        li {
          padding-right: 20px;
          a {
            color: $albatre;
            text-decoration: none;
            font-size: 16px;
            font-family: "Kulim-regular";
          }
        }
      }
    }
    .copyright {
      color: $albatre;
      text-align: center;
      font-size: 14px;
    }
  }
  .right {
    color: $albatre;
    .rs {
      display: flex;
    }
  }
}
</style>
