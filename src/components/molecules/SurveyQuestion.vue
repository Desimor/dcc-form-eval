<script setup lang="ts">
    import { likertOptions } from '@/data/questions'
    import LikertButton from '@/components/atoms/LikertButton.vue'

    defineProps<{
        number: number
        text: string
        modelValue: number | null
    }>()

    defineEmits<{
        'update:modelValue': [value: number]
    }>()
</script>

<template>
    <fieldset class="survey-question">
        <legend class="survey-question__text"><span class="survey-question__number">{{ number }}.</span> {{ text }}
        </legend>
        <div class="survey-question__options">
            <LikertButton v-for="option in likertOptions" :key="option.value" :value="option.value"
                :label="option.label" :selected="modelValue === option.value"
                @select="$emit('update:modelValue', $event)" />
        </div>
    </fieldset>
</template>

<style scoped>
    .survey-question {
        border: none;
        padding: 1rem 0;
        border-bottom: 1px solid var(--color-border);
    }

    .survey-question__text {
        padding: 0;
        margin-bottom: 0.75rem;
        font-weight: 500;
    }

    .survey-question__number {
        color: var(--color-heading);
        font-weight: 700;
    }

    .survey-question__options {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
</style>
