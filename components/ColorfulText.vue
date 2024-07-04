<script setup lang="ts">
const props = defineProps({
    color: String || "red",
});
</script>

<template>
    <span class="text-hl-color" :style="{ color: props.color }">
        <slot></slot>
    </span>
</template>
