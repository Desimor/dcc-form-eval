<script setup lang="ts">
    import { useRouter } from 'vue-router'
    import { questions } from '@/data/questions'
    import { useSurveyStore } from '@/stores/survey'
    import SurveyQuestion from '@/components/molecules/SurveyQuestion.vue'

    const router = useRouter()
    const store = useSurveyStore()

    function submit() {
        if (store.isComplete) {
            router.push('/results')
        }
        // TODO: re-enable store.isComplete check once testing is done
        router.push('/results')
    }
</script>

<template>
    <form class="survey-form" @submit.prevent="submit">
        <p class="survey-form__progress">{{ store.answeredCount }} / {{ questions.length }} answered</p>

        <SurveyQuestion v-for="(text, index) in questions" :key="index" :number="index + 1" :text="text"
            :model-value="store.answers[index] ?? null" @update:model-value="store.setAnswer(index, $event)" />

        <!-- <button type="submit" class="survey-form__submit" :disabled="!store.isComplete">
            Submit
        </button> -->
        <button type="submit" class="survey-form__submit">
            Submit
        </button>
    </form>
</template>

<style scoped>
    .survey-form {
        display: flex;
        flex-direction: column;
    }

    .survey-form__progress {
        position: sticky;
        top: 0;
        padding: 0.5rem 0;
        background: var(--color-background);
        font-weight: 500;
    }

    .survey-form__submit {
        margin: 1.5rem 0;
        padding: 0.75rem 1.5rem;
        align-self: center;
        border: none;
        border-radius: 6px;
        background: hsla(160, 100%, 37%, 1);
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
    }

    .survey-form__submit:disabled {
        background: var(--color-background-mute);
        color: var(--color-text);
        cursor: not-allowed;
    }
</style>
