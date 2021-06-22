<template>
  <div class="footer">
    <a class="logo" href="https://persiletromarin.fr/">
      <img src="@/assets/img/logo_blanc.png" alt="Persil et Romarin Logo" />
    </a>
    <div class="centerContent">
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
    <div class="socials">
      <p>Suivez-nous</p>
      <div class="rs">
        <img
          src="@/assets/img/icon-instagram.png"
          alt="instagram redirection"
        />
        <img src="@/assets/img/icon-fb.png" alt="facebook redirection" />
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
  padding: 70px 120px 73px 120px;
  height: 203px;
  background-color: $dark-chocolate;
  .logo {
    margin-top: -35px;
    width: 165px;
    height: 102px;
    img {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }
  }
  .centerContent {
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
      font-family: "Kulim-regular";
    }
  }
  .socials {
    color: $albatre;
    p {
      padding-bottom: 10px;
    }
    .rs {
      display: flex;
      font-size: 14px;
      font-family: "Kulim-regular";
      img {
        height: 16px;
        width: 16px;
        object-fit: contain;
        margin-right: 12px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .footer {
    height: 375px;
    display: block;
    padding: 33px 14px;
    position: relative;
    .logo {
      img {
        object-fit: contain;
        width: 126px;
        height: auto;
        margin-left: -10px;
      }
    }
    .centerContent {
      .nav {
        ul {
          text-align: left;
          display: block;
          li {
            margin-top: 17px;
          }
        }
      }
    }
    .socials {
      position: absolute;
      top: 25%;
      left: 50%;
      transform-origin: center;
      transform: translate(50%, 50%);
    }
  }
}
</style>
