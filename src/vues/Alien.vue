<script setup>
import alien_data from '../MOCK_DATA.js'
import Card from "./Card.vue";
import PrimaryTemplate from "../templates/PrimaryTemplate.vue";
</script>

<template>
  <primary-template header-img="sea-waves.jpg">
    <h1>Welcome to Alien Planet, Select an Alien to Begin a Virtual Voyage</h1>

    <p v-for="(alien, index) in alien_data.aliens" :key="index">
      <card :alien="alien"/>
    </p>
  </primary-template>
</template>

<style scoped>

</style>