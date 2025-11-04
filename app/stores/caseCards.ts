import { defineStore } from 'pinia'
import {computed,  ref} from 'vue'
import { useI18n } from 'vue-i18n';

export interface ICard {
    id: string
    src: string
    alt: string
    title: string
    tags: string
}


export const useCaseCardsStore = defineStore('caseCards', () => {
    const { t } = useI18n();

    const cards = computed<ICard[]>(() => {
        const arr: ICard[] = []
        for (let i = 1; i <= 8; i++) {
            arr.push({
                src: `/images/case/any-${i}.jpg`,
                alt: t(`caseCards.cards.card${i}.alt`),
                title: t(`caseCards.cards.card${i}.title`),
                tags: t(`caseCards.cards.card${i}.tags`),
                id: t(`caseCards.cards.card${i}.id`),
            })
        }
        return arr
    })


    const visibleCount = ref(4)

    const visibleCards = computed(() => cards.value.slice(0, visibleCount.value))

    const hiddenCards = computed(() => cards.value.slice(visibleCount.value))

    function loadMore(count = 4) {
        visibleCount.value = Math.min(cards.value.length, visibleCount.value + count)
    }

    function getCardById(id: string) {
        return cards.value.find((c) => c.id === String(id))
    }

    return { cards, visibleCards, hiddenCards, visibleCount, loadMore, getCardById }
})
