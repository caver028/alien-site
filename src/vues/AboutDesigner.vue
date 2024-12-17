<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";

</script>

<template>
  <primary-template header-img="sea-waves.jpg">
    <h1>Meet the designer</h1>
    <p>
      My name is Elanor Caverzagie and I am a graphic design and UX student at the University of Minnesota.
      This website was created as the final project of my advanced web design class! I grew up in Saint Paul, Minnesota
      in the early 2000's and still reside there. It's no coincidence that my favorite childhood movie is the show this site
      is based on, my favorite game was Spore (where you play as an alien life form), and my favorite Godzilla monster is
      an alien, as It seemed like alien-inspired media was pretty popular around 2005-2008 which was the peak of my childhood.
    </p>
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5.07026C9.17669 4.38958 10.5429 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 10.5429 4.38958 9.17669 5.07026 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M13.8309 14.9264C8.40242 17.8185 3.18203 18.8529 2.17085 17.2367C1.63758 16.3844 2.38148 14.9651 4 13.3897M17.8486 6.19085C19.8605 5.81929 21.3391 5.98001 21.8291 6.76327C22.6266 8.03781 20.5682 10.5801 17 13.0164" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </primary-template>
</template>

<style scoped>

h1 {
  text-align: center;
}

p {
  margin: 40px;
  border: darkgray solid 5px;
  border-radius: 10px;
  padding: 3px;
  text-align: center;
  background-color: darkgrey;
}

svg{
  width: 450px;
  height: auto;
  margin: auto;
  display: block;
  position: relative;
}

</style>