<script setup lang="ts">
    const year = new Date().getFullYear()
</script>

<template>
    <footer class="app-footer">
        <p>&copy; {{ year }} DCC. All rights reserved.</p>
    </footer>
</template>

<style scoped>
    .app-footer {
        padding: 0.75rem 1.5rem;
        background-color: #e5e7eb;
        color: #1f2937;
        text-align: center;
        font-size: 0.85rem;
    }
</style>
