<template>
    <div class="fixed w-full flex items-center justify-center px-4 py-2 border-b-2 bg-stone-100">
        <div class="flex items-center gap-3">
            <img class="" src="/img/hpoi.png" alt="">
        </div>
        <div class="absolute right-10">
                <TButton class="hpoi" @click="goInput()">
                    <Icon name="carbon:user-follow" size="24" />
                    <span class="text-sm font-semibold tracking-wide ">
                        Tambah Anggota
                    </span>
                </TButton>
        </div>
    </div>
</template>

<script setup lang="ts">
const storeMember = useMemberStore()

const {
    members,
    id,
    kode_provider,
    nama_provider,
    no_reg,
    nama_anggota,
    profile_one,
    profile_two,
    services,
    alamat,
    telepon,
    email,
    instagram,
    facebook,
    youtube,
    website,
    nama_dpc,
    nama_dpd,
    logo,
    hero_img,
    gallery_one,
    gallery_two,
    gallery_three,
} = storeToRefs(storeMember)

// default API url set
// const urlHostApi = 'http://localhost:8181/'
const urlHostApi = 'https://hpoi-api.enterbiner.com/'

// ref for setting page
const loadingOverlay = ref(false)
const searchField = ref('');
const perPage = ref(0);
const currentPage = ref(0);
const pages = ref(0);
const totalData = ref(0);
const optionPages = ref(10);
const numShown = ref(5)
const isOpenAdd = ref(false);
const isOpenCategory =ref(false);
const isOpenDelete = ref(false);
const errMsg = ref('');
const btnEdit = ref(false);

const goInput = ( async () => {
    loadingOverlay.value = true
    kode_provider.value = ''
    nama_provider.value = ''
    no_reg.value = ''
    nama_anggota.value = ''
    profile_one.value = ''
    profile_two.value = ''
    services.value = []
    alamat.value = ''
    telepon.value = ''
    email.value = ''
    instagram.value = ''
    facebook.value = ''
    youtube.value = ''
    website.value = ''
    logo.value = ''
    hero_img.value = ''
    gallery_one.value = ''
    gallery_two.value = ''
    gallery_three.value = ''
    await navigateTo('input')
    setTimeout( () => {
        loadingOverlay.value = false
    }, 300)
})

</script>

<style scoped>

</style>