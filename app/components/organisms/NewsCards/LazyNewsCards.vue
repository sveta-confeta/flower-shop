<template>
  <div class="news-cards" id="news">
    <app-title :title="t('newsCards.title', 'Floral Business News')"  :text="t('newsCards.subtitle', 'Fresh trends, blooming opportunities')"/>
    <ul class="news-card container">
      <li v-for="card in newsData" :key="card.id" class="news-card__item">
        <NuxtLink :to="'/news/' + card.id" class="news-card__link">
          <div class="news-card__item-img">
            <nuxt-picture :src="card.src"
                          :alt="card.alt"
                          formats="webp"
                          class="news-picture"
            />
          </div>
          <div class="news-card__item-wrap">
            <span class="news-card__item-title">{{ card.title }}</span>
            <span class="news-card__item-text">{{ card.text }}</span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useNewsCardsStore } from "~/stores/newsCards";
import AppTitle from "../../molecules/AppTitle/AppTitle.vue";

const store = useNewsCardsStore();
const { t } = useI18n();
const newsData = computed(() => store.cards || [] )


</script>

<style>
@import "NewsCards.scss";
</style>