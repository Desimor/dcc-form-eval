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
        <div class="results-summary__grid">
            <ResultCard v-for="category in resultCategories" :key="category.key" :score="store.scores[category.key]"
                :title="category.title" :description="category.description" />
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
