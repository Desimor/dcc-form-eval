<script setup lang="ts">
    // Placeholder title; update with the church's preferred survey name.
    const title = 'DCC Survey'
</script>

<template>
    <header class="app-header">
        <img class="app-header__logo" src="@/assets/DCC Logo.webp" alt="DCC logo" height="48" />
        <h1 class="app-header__title">{{ title }}</h1>
    </header>
</template>

<style scoped>
    .app-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem 1.5rem;
        background-color: #1d1d1f;
    }

    .app-header__logo {
        height: 48px;
        width: auto;
    }

    .app-header__title {
        font-size: 1.25rem;
        color: #ffffff;
    }
</style>
