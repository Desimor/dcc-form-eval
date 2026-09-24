<script setup lang="ts">
    defineProps<{
        value: number
        label: string
        selected: boolean
    }>()

    defineEmits<{
        select: [value: number]
    }>()
</script>

<template>
    <button type="button" class="likert-button" :class="{ 'likert-button--selected': selected }"
        :aria-pressed="selected" @click="$emit('select', value)">
        <span class="likert-button__value">{{ value }}</span>
        <span class="likert-button__label">{{ label }}</span>
    </button>
</template>

<style scoped>
    .likert-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        min-width: 4.5rem;
        padding: 0.5rem 0.25rem;
        border: 1px solid var(--color-border);
        border-radius: 6px;
        background: var(--color-background-soft);
        color: var(--color-text);
        cursor: pointer;
        font-size: 0.7rem;
        text-align: center;
        line-height: 1.2;
        transition:
            background-color 0.15s,
            border-color 0.15s,
            color 0.15s;
    }

    .likert-button:hover {
        border-color: hsla(160, 100%, 37%, 1);
    }

    .likert-button--selected {
        background: hsla(160, 100%, 37%, 1);
        border-color: hsla(160, 100%, 37%, 1);
        color: #fff;
    }

    .likert-button__value {
        font-weight: 700;
        font-size: 1rem;
    }
</style>
