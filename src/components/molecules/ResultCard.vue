<script setup lang="ts">
    defineProps<{
        score: number
        title: string
        active: boolean
    }>()

    defineEmits<{
        select: []
    }>()
</script>

<template>
    <button type="button" class="result-card" :class="{ 'result-card--active': active }" @click="$emit('select')">
        <div class="result-card__score">{{ score }}</div>
        <h3 class="result-card__title">{{ title }}</h3>
    </button>
</template>

<style scoped>
    .result-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        border: 1px solid var(--color-border);
        border-radius: 6px;
        background: var(--color-background-soft);
        text-align: center;
        cursor: pointer;
        transition:
            border-color 0.15s,
            background-color 0.15s;
    }

    .result-card:hover {
        border-color: hsla(160, 100%, 37%, 1);
    }

    .result-card--active {
        border-color: hsla(160, 100%, 37%, 1);
        background: hsla(160, 100%, 37%, 0.1);
    }

    .result-card__score {
        font-size: 2.5rem;
        font-weight: 700;
        color: hsla(160, 100%, 37%, 1);
    }

    .result-card__title {
        font-size: 1.1rem;
        margin: 0;
        color: var(--color-heading);
    }
</style>
