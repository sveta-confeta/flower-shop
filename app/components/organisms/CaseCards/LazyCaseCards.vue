<template>
  <div class="case-cards container" id="flowers">
    <app-title
        :title="t('caseCards.title','Popular flowers')"
        :text="t('caseCards.subtitle')"
    />

    <div class="case-cards__wrap">
      <case-card :cards="store.visibleCards" card-class="my-custom" />
    </div>

    <!-- кнопка Показать ещё / Скрыть -->
    <button
        class="case-cards__btn"
        @click="handleLoadMore"
        v-if="store.cards.length > store.visibleCards.length"
    >
      {{ t('caseCards.showMore') }}
    </button>
    <button
        class="case-cards__btn"
        @click="handleReset"
        v-else
    >
      {{ t('caseCards.hide') }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCaseCardsStore } from "../../../stores/caseCards";
import { useI18n } from "vue-i18n";
import AppTitle from "../../molecules/AppTitle/AppTitle.vue";
import CaseCard from "../../molecules/CaseCard/CaseCard.vue";

const { t } = useI18n();
const store = useCaseCardsStore();

const handleLoadMore = () => {
  store.loadMore();
};

const handleReset = () => {
  store.visibleCount = 4; // исходное значение, как в store
};
</script>

<style lang="scss">
@use "CaseCards.scss" as *;

.case-cards {
  position: relative;
  &__list {
    overflow: hidden;
    transition: all 0.4s ease;
  }
}
</style>
