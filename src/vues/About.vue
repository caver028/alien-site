<script setup>
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template header-img="gourd-trees.jpg">
    <h1>About the Project</h1>

    <div class="content">
      <p>
        The site you are currently viewing is a passion project dedicated to my favorite show as a child. It is meant to
        preserve the memory of a lost website that was a big part of my childhood, so hopefully the charm of an old 2005
        website is preserved here.
      </p>
      <p>
        This project is meant to be a love-letter to an early 2000's website for the Discovery Channel movie
        Alien Planet. The site was sadly taken down sometime after 2014 and the "virtual voyage" game that allowed
        players to explore the fictional planet and its fauna, as well as other features are all lost media now. All that
        of the site is the home page on Internet Archive's "Wayback Machine".
      </p>
      <p>
        Discovery Channel's 2005 speculative documentary movie titled Alien Planet is the source of all the content on
        this site. The documentary is about an expedition that take place in the future to a fictional planet of Darwin IV.
        The expedition is carried out by two drones that operate with AI and explore the planet while finding the flora
        and fauna. The documentary itself is based on the book Expedition by artist Wayne Barlowe, in which the same
        expedition to Darwin IV takes place but is a manned mission with Barlowe providing the account of the creatures found
        on the planet.
      </p>
    </div>

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
  margin: 5px;
  border: darkgrey solid 5px;
  border-radius: 10px;
  padding: 3px;
  text-align: center;
  background-color: darkgrey;
}

svg{
  width: 100%;
  height: auto;
}

</style>