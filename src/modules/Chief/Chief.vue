<template>
  <div class="chief-container">
    <Carousel :slides="slides" />
    <div class="herbs">
      <img src="@/assets/img/bottom_herb.png" alt="Persil et Romarin" />
    </div>
  </div>
</template>

<script>
import Carousel from "@/modules/Carousel";

export default {
  name: "Chief",
  components: {
    Carousel,
  },

  data() {
    return {
      slides: [
        {
          src: "chef_n1.png",
          alt: "chef",
          title: "Jeanne F",
          subtitle: "cheffe à domicile",
          href: "#",
          text: `Cuisinière de coeur, je suis né en Gironde, j’y ai grandi. Elle a fait de moi ce que je suis aujourd’hui et elle se ressent dans ma cuisine; simple, honnête, humble et gourmande ...
                Au fur et à mesure des années passés auprès de chefs comme Edouard Loubet, Patrick Henrioux ou en Dordogne où j’ai connu ma première étoile avec mon équipe, revenir en Gironde était pour moi devenu une évidence. 
                L’envie de m’installer comme chef à domicile ne m’a jamais quitté et aujourd’hui c’est un rêve qui se réalise !`,
          id: 1,
        },
        {
          src: "chef_n1.png",
          alt: "chef",
          title: "Michel F",
          subtitle: "chef à domicile",
          href: "#",
          text: `Cuisinier de coeur, je suis né en Gironde, j’y ai grandi. Elle a fait de moi ce que je suis aujourd’hui et elle se ressent dans ma cuisine; simple, honnête, humble et gourmande ...
                Au fur et à mesure des années passés auprès de chefs comme Edouard Loubet, Patrick Henrioux ou en Dordogne où j’ai connu ma première étoile avec mon équipe, revenir en Gironde était pour moi devenu une évidence. 
                L’envie de m’installer comme chef à domicile ne m’a jamais quitté et aujourd’hui c’est un rêve qui se réalise !`,
          id: 2,
        },
        {
          src: "chef_n1.png",
          alt: "chef",
          title: "Didier F",
          subtitle: "chef à domicile",
          href: "#",
          text: `Cuisinier de coeur, je suis né en Gironde, j’y ai grandi. Elle a fait de moi ce que je suis aujourd’hui et elle se ressent dans ma cuisine; simple, honnête, humble et gourmande ...
                Au fur et à mesure des années passés auprès de chefs comme Edouard Loubet, Patrick Henrioux ou en Dordogne où j’ai connu ma première étoile avec mon équipe, revenir en Gironde était pour moi devenu une évidence. 
                L’envie de m’installer comme chef à domicile ne m’a jamais quitté et aujourd’hui c’est un rêve qui se réalise !`,
          id: 3,
        },
        {
          src: "chef_n1.png",
          alt: "chef",
          title: "Gerard F",
          subtitle: "chef à domicile",
          href: "#",
          text: `Cuisinier de coeur, je suis né en Gironde, j’y ai grandi. Elle a fait de moi ce que je suis aujourd’hui et elle se ressent dans ma cuisine; simple, honnête, humble et gourmande ...
                Au fur et à mesure des années passés auprès de chefs comme Edouard Loubet, Patrick Henrioux ou en Dordogne où j’ai connu ma première étoile avec mon équipe, revenir en Gironde était pour moi devenu une évidence. 
                L’envie de m’installer comme chef à domicile ne m’a jamais quitté et aujourd’hui c’est un rêve qui se réalise !`,
          id: 4,
        },
        {
          src: "chef_n1.png",
          alt: "chef",
          title: "Dianne F",
          subtitle: "cheffe à domicile",
          href: "#",
          text: `Cuisinière de coeur, je suis né en Gironde, j’y ai grandi. Elle a fait de moi ce que je suis aujourd’hui et elle se ressent dans ma cuisine; simple, honnête, humble et gourmande ...
                Au fur et à mesure des années passés auprès de chefs comme Edouard Loubet, Patrick Henrioux ou en Dordogne où j’ai connu ma première étoile avec mon équipe, revenir en Gironde était pour moi devenu une évidence. 
                L’envie de m’installer comme chef à domicile ne m’a jamais quitté et aujourd’hui c’est un rêve qui se réalise !`,
          id: 5,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.chief-container {
  position: relative;
  .herbs {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
