<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { resultCategories } from '@/data/results'
    import { useSurveyStore } from '@/stores/survey'
    import ResultCard from '@/components/molecules/ResultCard.vue'

    const router = useRouter()
    const store = useSurveyStore()

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
                :title="category.title" :description="category.description" :description2="category.description2"
                :description3="category.description3" />
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
