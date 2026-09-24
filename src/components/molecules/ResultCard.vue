<script setup lang="ts">
    defineProps<{
        score: number
        title: string
        description: string
    }>()
</script>

<template>
    <div class="result-card">
        <div class="result-card__score">{{ score }}</div>
        <h3 class="result-card__title">{{ title }}</h3>
        <p class="result-card__description">{{ description }}</p>
    </div>
</template>

<style scoped>
    .result-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        text-align: center;
    }

    .result-card__score {
        font-size: 2.5rem;
        font-weight: 700;
        color: hsla(160, 100%, 37%, 1);
    }

    .result-card__title {
        font-size: 1.1rem;
        color: var(--color-heading);
    }

    .result-card__description {
        font-size: 0.9rem;
        color: var(--color-text);
    }
</style>
