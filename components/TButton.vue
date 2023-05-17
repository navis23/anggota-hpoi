<template>
    <button class="inline-flex gap-x-2 items-center rounded py-2 pl-3 pr-4 text-white bg-sky-600 transition ease-in-out hover:bg-sky-700 hover:outline-none hover:ring-2 hover:ring-sky-500 hover:ring-offset-1">
        <slot> button </slot>
    </button>
</template>

<script setup lang="ts">

</script>

<style lang="postcss" scoped>
.danger {
    @apply text-white bg-red-600 hover:bg-red-700 hover:outline-none hover:ring-2 hover:ring-red-500 hover:ring-offset-1
}
.hpoi {
    @apply text-white bg-orange-600 hover:bg-orange-700 hover:outline-none hover:ring-2 hover:ring-orange-500 hover:ring-offset-1
}
.green {
    @apply text-white bg-teal-600 hover:bg-teal-700 hover:outline-none hover:ring-2 hover:ring-teal-500 hover:ring-offset-1
}

.gray {
    @apply text-white bg-gray-400 hover:bg-gray-500 hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-offset-1
}

.darkness {
    @apply text-white bg-gray-700 hover:bg-gray-800 hover:outline-none hover:ring-2 hover:ring-gray-700 hover:ring-offset-1
}

</style>