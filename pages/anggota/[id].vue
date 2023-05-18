<template>
    <div class="mb-10">
        <!-- header -->
        <div class="fixed w-full flex items-center justify-between px-16 py-2 bg-gray-50 border-b z-[999]">
            <div class="flex items-center">
                <nuxt-img class="" src="/img/hpoi.png" alt="" />
            </div>
            <div class="flex items-center h-16">
                <nuxt-img class="h-16 object-fill rounded-lg" :src="urlHostApi + logo" alt="" />
            </div>
            <div>
                <nuxt-link to="/">
                    <TButton class="hpoi">
                        <Icon name="carbon:power" size="24" />
                        <span class="text-sm font-semibold tracking-wide ">
                            Menu Utama
                        </span>
                    </TButton>
                </nuxt-link>
                
            </div>
        </div>

        <!-- hero section -->
        <div class="pt-28 px-16 py-4 w-full">
            <div class="w-full grid grid-cols-1 md:grid-cols-2 bg-gray-100 py-8 px-12">
                <div class="flex flex-col items-start justify-center">
                    <h3 class="text-xl font-semibold tracking-wide pb-3">
                        Anggota HPOI <span class="text-lg py-1 px-2 font-semibold bg-orange-200 bg-opacity-30 text-orange-700"> {{ no_reg }}</span>
                    </h3>
                    <h2 class="font-bold text-4xl uppercase tracking-widest pb-3">
                        {{ nama_provider }}
                    </h2>
                    <span class="w-12 pb-1 mb-2 border-b-8 border-orange-400"></span>
                    <div class="flex gap-x-10 pt-3">
                        <p class="flex gap-x-2 items-center">
                            <Icon name="carbon:user-avatar-filled" size="32" class="font-semibold text-sky-500" />
                            <span class="text-lg tracking-widest">{{ nama_anggota }}</span>
                        </p>
                    </div>
                    <div class="pt-10">
                        <TButton class="darkness">
                            <Icon name="carbon:certificate-check" size="24" />
                            <span class="text-sm font-semibold tracking-wide ">
                                Lihat Profile
                            </span>
                        </TButton>
                    </div>
                </div>
                <div class="drop-shadow-md">
                    <nuxt-img :src="urlHostApi + hero_img" alt="" class="w-full max-h-80 object-contain" loading="lazy" />
                </div>
            </div>
        </div>

        <!-- profile and services -->
        <div class="mt-6 px-96">
            <h3 class="font-semibold text-3xl tracking-wide uppercase pb-9">
                Profile
            </h3>
            <p class="text-lg pb-3">
                {{ profile_one }}
            </p>
            <p class="text-lg">
                {{ profile_two }}
            </p>
        </div>

        <div class="mt-12 px-96">
            <h3 class="font-semibold text-3xl tracking-wide uppercase pb-9">
                Main Services
            </h3>
            <div class="flex flex-wrap gap-4">
                <p v-for="(item, index) in services" :key="index" class="text-base py-1 px-2 font-semibold bg-orange-200 bg-opacity-30 text-orange-700">
                    {{ item }}
                </p>
            
            </div>
        </div>

        <!-- contact -->
        <div class="px-16 py-4 w-full mt-12">
            <div class="w-full grid grid-cols-1 justify-items-center bg-gray-800 text-gray-50 py-8 px-12">
                <h2 class="font-semibold text-5xl tracking-widest uppercase pb-9">
                    get in touch
                </h2>
                <!-- address -->
                <h3 class="font-semibold text-xl flex items-start justify-start gap-x-4 tracking-wide pb-4">
                    <Icon name="carbon:map" size="32"/>
                    <span>{{ alamat }}</span>
                </h3>
                <!-- sosmed -->
                <div class="flex flex-col justify-center items-center mt-6">
                    <div class="flex gap-5 justify-between">
                        <div class="text-center px-4">
                            <a :href="`https://www.instagram.com/${instagram}`" target="_blank">
                                <Icon name="ph:instagram-logo-bold" size="32"/>
                                <p class="pt-2 tracking-wide font-semibold">{{ instagram }}</p>
                            </a>
                        </div>
                        <div class="text-center px-4">
                            <Icon name="ph:youtube-logo-bold" size="32"/>
                            <p class="pt-2 tracking-wide font-semibold">{{ youtube }}</p>
                        </div>
                        <div class="text-center px-4">
                            <Icon name="ph:facebook-logo-bold" size="32"/>
                            <p class="pt-2 tracking-wide font-semibold">{{ facebook }}</p>
                        </div>
                        <div class="text-center px-4">
                            <Icon name="ph:envelope-simple-bold" size="32"/>
                            <p class="pt-2 tracking-wide font-semibold">{{ email }}</p>
                        </div>
                    </div>
                </div>

                <!-- call -->
                <h3 class="font-bold text-4xl flex items-center gap-x-4 tracking-widest py-4 mt-6">
                    Call Us : 
                    <span class="bg-white py-2 px-3 text-gray-700 rounded-lg">
                        <Icon name="ph:phone-call-fill" size="32"/>
                        {{ telepon }}
                    </span>
                </h3>

                <!-- website -->
                <h3 class="font-bold text-3xl flex items-end gap-x-4 tracking-widest py-4">
                    <a :href="`https://${website}`" target="_blank">

                        <Icon name="ph:globe-simple-bold" size="32"/>
                        <span class="underline underline-offset-1">
                            {{ website }}
                        </span>
                    </a>
                </h3>
            </div>
        </div>

        <!-- mini galleries -->
        <div class="mt-12 px-96">
            <h3 class="font-semibold text-3xl tracking-wide uppercase pb-9">
                Mini Gallery
            </h3>
            <div class="columns-2">
                <nuxt-img class="opacity-90 object-cover shadow-lg object-center mb-4" :src="urlHostApi + hero_img" alt="" />
                <nuxt-img class="opacity-90 object-cover shadow-lg object-center mb-4" :src="urlHostApi + gallery_one" alt="" />
                <nuxt-img class="opacity-90 object-cover shadow-lg object-center mb-4" :src="urlHostApi + gallery_two" alt="" />
                <nuxt-img class="opacity-90 object-cover shadow-lg object-center mb-4" :src="urlHostApi + gallery_three" alt="" />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
    import axios from 'axios';

    definePageMeta({
        layout: "detail-layout",
    });

    // ref data from pinia store in composabl
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

    // mounted first data
    onMounted( async () => {
        loadingOverlay.value = true
        await fetchMember()
    })

    // fetching data
    const fetchMember = async () => {
        await axios.post( `${urlHostApi}hpoi-api/api/member/daftar`, {}, {
        headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*"
        }
        })
        .then( res => {
            members.value = res.data.data
            perPage.value = res.data.limit
            currentPage.value = parseInt(res.data.page)
            pages.value = Math.ceil(res.data.total_data/perPage.value)
            totalData.value = parseInt(res.data.total_data)
            searchField.value = res.data.search

            setTimeout(() => loadingOverlay.value = false, 500)
            
        })
        .catch( err => {
            console.log({
                message : err.message || "some error while retreiving category data.",
                msg : `error fetch members process`
            })
        });
    }
    
    // trigger function to fetch data table paginate and search
    const clickPage = async (page : any, optionPages : any, search : any) => {
        await axios.post( `${urlHostApi}hpoi-api/api/member/daftar?page=${page}&limit=${optionPages}&search=${search}`, {}, {
        headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*"
        }
        })
        .then( res => {
            scrollTop()
            members.value = res.data.data
            perPage.value = res.data.limit
            currentPage.value = parseInt(res.data.page)
            pages.value = Math.ceil(res.data.total_data/perPage.value)
            totalData.value = parseInt(res.data.total_data)
            searchField.value = res.data.search

        })
        .catch( err => {
            console.log({
                message : err.message || "some error while retreiving category data."
            })
        });
    }

    const searchData = async  ( page = 1, total : any, search : any) => {
        if(search == '') page = 1, total = 10, optionPages.value = 10
        await axios.post( `${urlHostApi}hpoi-api/api/member/daftar?page=${page}&limit=${total}&search=${search}`, {}, {
        headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*"
        }
        })
        .then( res => {
            members.value = res.data.data
            perPage.value = parseInt(res.data.limit)
            currentPage.value = parseInt(res.data.page)
            pages.value = Math.ceil(res.data.total_data/perPage.value)
            totalData.value = parseInt(res.data.total_data)
            searchField.value = res.data.search
            optionPages.value = 10
            
        })
        .catch( err => {
            console.log({
                message : err.message || "some error while retreiving category data."
            })
        });
    }

    // setting for paginate function
    const scrollTop = () => {
        let currentScroll = document.documentElement.scrollTop
        let int = setInterval(frame, 6)

        function frame() {
            if(0 > currentScroll)
                clearInterval(int)
            else {
                currentScroll = currentScroll - 12
                document.documentElement.scrollTop = currentScroll
            }
        }
    }

    const displayPages = computed (() => {
        const showNumber = Math.min(numShown.value, pages.value);
        let first = currentPage.value - Math.floor(showNumber / 2);
        first = Math.max(first, 1);
        first = Math.min(first, pages.value - showNumber + 1);
        return [...Array(showNumber)].map((k,i) => i + first);
    })

    // setting for modal function
    function openModalAdd() {
        loadingOverlay.value = true
        setTimeout(() => {loadingOverlay.value = false, isOpenAdd.value = true}, 300)
    }


    const cancelDataCategory = ( async () => {
        await fetchMember()
        loadingOverlay.value = true
        errMsg.value = "focus"
        setTimeout( () => {
            isOpenAdd.value = false
            isOpenDelete.value = false
            btnEdit.value = false
            loadingOverlay.value = false
        }, 300)
    })


    // setting and trigger for CRUD data

    
</script>

<style scoped>

</style>