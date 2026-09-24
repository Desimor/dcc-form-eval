<script setup lang="ts">
    import AppHeader from '@/components/organisms/AppHeader.vue'
    import AppFooter from '@/components/organisms/AppFooter.vue'
</script>

<template>
    <div class="app-layout">
        <AppHeader />
        <main class="app-layout__content">
            <slot />
        </main>
        <AppFooter />
    </div>
</template>

<style scoped>
    .app-layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .app-layout__content {
        flex: 1;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        padding: 1.5rem;
    }
</style>
