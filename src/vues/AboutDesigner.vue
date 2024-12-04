<script setup>
import Card from "./Card.vue";
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template header-img="sea-waves.jpg">
    <h1>Meet the designer</h1>
    <p>
      My name is Elanor Caverzagie and I am a graphic design and UX student at the University of Minnesota.
      This website was created for the final project of my advanced web design class! I grew up in Saint Paul, Minnesota
      in the early 2000's and still reside there. It's no coincidence that my favorite childhood movie is the show this site
      is based on, my favorite game was Spore (where you play as an alien life form), and my favorite Godzilla monster is
      an alien, as It seemed like alien-inspired media was pretty popular around 2005-2008 which was the peak of my childhood.
    </p>
  </primary-template>
</template>

<style scoped>

h1 {
  text-align: center;
}

p {
  margin: 5px;
  border: rebeccapurple solid 5px;
  border-radius: 10px;
  padding: 3px;
  text-align: center;
}

</style>