<script setup lang="ts">
    import { computed, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { resultCategories, type ResultKey } from '@/data/results'
    import { useSurveyStore } from '@/stores/survey'
    import ResultCard from '@/components/molecules/ResultCard.vue'

    const router = useRouter()
    const store = useSurveyStore()

    const selectedKey = ref<ResultKey>('discovery')
    const selectedCategory = computed(
        () => resultCategories.find((category) => category.key === selectedKey.value)!,
    )

    function retake() {
        store.reset()
        router.push('/')
    }
</script>

<template>
    <section class="results-summary">
        <h2 class="results-summary__heading">Your Results</h2>
        <p class="results-summary__intro">Here is a summary of your survey results based on the categories. These four
            areas - Discovery, Dependence, Development, and Direction - are the core values of Destiny Community Church.
            We believe that in order to be a well-rounded Christian, every believer should excel in these four areas.
            After you determine your scores, read the action steps on the following page.</p>
        <div class="results-summary__grid">
            <ResultCard v-for="category in resultCategories" :key="category.key" :score="store.scores[category.key]"
                :title="category.title" :active="category.key === selectedKey" @select="selectedKey = category.key" />
        </div>
        <div class="results-summary__detail">
            <h3 class="results-summary__detail-title">{{ selectedCategory.title }}</h3>
            <p class="results-summary__detail-text">{{ selectedCategory.description }}</p>
            <p class="results-summary__detail-text">{{ selectedCategory.description2 }}</p>
            <p class="results-summary__detail-text">{{ selectedCategory.description3 }}</p>
        </div>
        <button type="button" class="results-summary__retake" @click="retake">Retake Survey</button>
    </section>
</template>

<style scoped>
    .results-summary__heading {
        text-align: center;
        margin-bottom: 1.5rem;
        color: var(--color-heading);
    }

    .results-summary__intro {
        text-align: center;
        margin-bottom: 1.5rem;
        color: var(--color-text);
    }

    .results-summary__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }

    @media (max-width: 768px) {
        .results-summary__grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .results-summary__detail {
        margin-top: 1.5rem;
        padding: 1.5rem;
        border: 1px solid var(--color-border);
        border-radius: 6px;
        background: var(--color-background-soft);
    }

    .results-summary__detail-title {
        margin: 0 0 0.75rem;
        color: var(--color-heading);
    }

    .results-summary__detail-text {
        font-size: 0.9rem;
        text-align: left;
        color: var(--color-text);
        margin-bottom: 0.75rem;
    }

    .results-summary__detail-text:last-child {
        margin-bottom: 0;
    }

    .results-summary__retake {
        display: block;
        margin: 2rem auto 0;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 6px;
        background: hsla(160, 100%, 37%, 1);
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
    }
</style>
