<script setup>
import {onMounted} from "vue";
import aliensFile from "./MOCK_DATA.js"
import {useRoute, useRouter} from "vue-router";
import PrimaryTemplate from "./templates/PrimaryTemplate.vue";

const route = useRoute();
const router = useRouter();
const paramId = route.params.id;
const alien = aliensFile.aliens.filter(alien => alien.id === paramId)[0];

onMounted(() => {
  if (!alien) {
    router.push({
      name: "Alien",
    })
  }
})
</script>

<template>
  <primary-template header-img="sea-waves.jpg" v-if="alien">
      <h1>{{ alien.alien_name }} {{ alien.environment }}</h1>
    <p>Size: {{ alien.size }}</p>
    <p>Nature: {{ alien.nature }}</p>
  </primary-template>

</template>

<style scoped>

</style>