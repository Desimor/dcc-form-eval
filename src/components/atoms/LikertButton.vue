<script setup lang="ts">
    defineProps<{
        name: string
        value: number
        label: string
        selected: boolean
    }>()

    defineEmits<{
        select: [value: number]
    }>()
</script>

<template>
    <label class="likert-button" :class="{ 'likert-button--selected': selected }">
        <input type="radio" class="likert-button__input" :name="name" :value="value" :checked="selected"
            @change="$emit('select', value)" />
        <span class="likert-button__label">{{ label }}</span>
    </label>
</template>

<style scoped>
    .likert-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.4rem;
        min-width: 4.5rem;
        color: var(--color-text);
        cursor: pointer;
        font-size: 0.8rem;
        text-align: left;
        line-height: 1.2;
    }

    .likert-button:hover .likert-button__input {
        outline: 2px solid hsla(160, 100%, 37%, 1);
        outline-offset: 2px;
    }

    .likert-button--selected .likert-button__label {
        color: hsla(160, 100%, 37%, 1);
        font-weight: 700;
    }

    .likert-button__input {
        width: 1.15rem;
        height: 1.15rem;
        accent-color: hsla(160, 100%, 37%, 1);
        cursor: pointer;
    }

    .likert-button__label {
        font-weight: 500;
    }
</style>
