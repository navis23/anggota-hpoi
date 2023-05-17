<template>
    <div class="fixed w-full flex items-center justify-center px-4 py-2 border-b-2 bg-stone-100">
        <div class="flex items-center gap-3">
            <img class="" src="/img/hpoi.png" alt="">
        </div>
        <div class="absolute right-10">
            <nuxt-link to="input">
                <TButton class="hpoi">
                    <Icon name="carbon:user-follow" size="24" />
                    <span class="text-sm font-semibold tracking-wide ">
                        Tambah Anggota
                    </span>
                </TButton>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>