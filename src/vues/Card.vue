<script setup>

defineProps({
  alien: {
    type: Object,
    required: true
  }
})
</script>

<template>
  Alien Species: {{ alien.alien_name }}
  <section class="card">
    <aside class="left-side">
      <div class="headshot" />
      <span class="environment">{{ alien.environment }}</span>
    </aside>
    <aside class="right-side">
      <div class="name">{{ alien.size }}, {{ alien.color }}</div>
      <router-link :to=" { name: 'AlienDetails', params: { id: alien.id } }">Learn more about this alien!</router-link>
    </aside>
  </section>
</template>

<style scoped>
section.card {
  /* Mobile first */
  display: flex;
  border: 1px solid lightgray;
  border-radius: 20px;
  width: 98.6%;
  gap: 1rem;
  padding: 0.5rem;
  }

  .left-side, .right-side {
    display: flex;
    flex-direction: column;
  }

  .left-side {
    flex-basis: 40%;
    display: flex;
    gap: 0.5rem;

    .headshot {
      height: 140px;
      width: 150px;
      background-color: lightgray;

      img{
        width: 100%;
        display: block;
      }
    }
  }

  .right-side {
    .name {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
</style>

