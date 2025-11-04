<template>
  <div class="case-card" :class="cardClass" v-for="card in cards" :key="card.id">
    <NuxtLink :to="'/case/' + card.id" class="case-card__link">
      <nuxt-picture :src="getImageUrl(card.src)"
                    :alt="card.alt"
                    formats="webp"
                    class="case-picture"
      />
      <span class="case-card__title">{{ card.title }}</span>
      <span class="case-card__text">{{ card.tags }}</span>
    </NuxtLink>

  </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()

const getImageUrl = (src) => {
  return runtimeConfig.app.baseURL + src
}

 defineProps({
  cards: {
    type:  Array ,
    required: true,
    default: () => []
  },
  cardClass: String

});

</script>

<style>
@import 'CaseCard.scss';
</style>
