<template>
    <div class="pt-4">
        <!-- loading overlay -->
        <Loading v-if="loadingOverlay == true"/>

        <!-- ads -->
        <div class="relative px-10 pb-10">
            <div class="absolute left-0 rounded-r-full py-3 pl-4 pr-8 md:py-4 md:pl-10 md:pr-14 bg-orange-400 text-gray-700">
                <h3 class="font-oswald text-gray-100 text-xl md:text-2xl font-semibold">
                    Highlight Anggota
                </h3>
            </div>
            <!-- services item -->
            <div class="pt-24 pb-8">
                <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div v-for="(item, index) in members.slice(0,3)" :key="index" @click="detailDataMember(item)" class="relative flex flex-col items-center justify-center gap-x-3 border border-b-orange-400 border-b-4 lg:h-72 rounded-lg  text-gray-700 px-3 py-3 cursor-pointer">
                        <nuxt-img :src="urlHostApi + item.logo" alt="" class=" h-20 object-fill rounded-lg" loading="lazy" />
                        <p class="absolute left-3 rounded-lg top-0 text-sm mt-3 px-2 py-1 font-semibold bg-gray-700 text-gray-100">
                            {{ item.no_reg }}
                        </p>
                        <p class="font-oswald font-semibold text-xl pt-1 text-center lg:text-2xl">
                            {{ item.nama_provider }}
                        </p>
                        <dl class="mt-1 px-2 text-sm font-medium flex items-center row-start-2 gap-x-6">
                            <dd class="text-emerald-600 flex items-center justify-center gap-x-2">
                                <Icon name="carbon:phone" size="18" />
                                <span class="">{{ item.telepon }}</span>
                            </dd>
                            <dt class="sr-only">Location</dt>
                            <dd class="flex items-center gap-x-2">
                                <Icon name="carbon:location" size="18" class="text-gray-500 font-semibold"/>
                                {{ item.dpc.nama_dpc }}, {{ item.dpc.dpd.nama_dpd }}
                            </dd>
                        </dl>
                        <div class="flex flex-wrap justify-center gap-1 mt-3">
                            <p v-for="(layanan, index) in item.services" :key="index" class="text-xs rounded py-1 px-2 font-semibold bg-orange-200 bg-opacity-30 text-orange-700">
                                {{ layanan }}
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <!-- topbar -->
        <div class="flex flex-col mb-4 px-10">
            <h3 class="text-xl pb-1 font-semibold"> 
                Explore Anggota HPOI
            </h3>
            <span class="w-10 pb-1 mb-2 border-b-4 border-orange-400"></span>
        </div>

        <!-- search -->
        <div class="flex gap-x-2 h-18 items-center rounded bg-gray-800 mb-8 mx-10">
            <div class="w-52 flex justify-center items-center">
                <button @click="searchData(1, totalData, searchField)" class="flex gap-x-2 items-center py-4 px-4 text-gray-200 border-r-4 border-stone-50 hover:text-sky-600 relative group">
                    <Icon name="carbon:search-locate" size="18" />
                    <span class="text-xs font-medium">Cari Provider</span>
                    <span class="absolute w-full h-0.5 bg-sky-600 rounded bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"></span>
                </button>
            </div>
            <div class="w-full flex items-center">
                <FormKit
                type="search"
                placeholder="Cari berdasarkan nama Provider. . ."
                v-model="searchField" 
                @keydown.enter="searchData(1, totalData, searchField)" 
                @keydown.tab="searchData(1, totalData, searchField)"
                @blur="searchData(1, totalData, searchField)"
                :classes = "{
                    inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center w-full focus-within:ring-blue-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded',
                    outer :'$reset w-full pr-6 pl-3 formkit-outer formkit-disabled:opacity-50',
                    input : '$reset formkit-input appearance-none bg-transparent focus:outline-none focus:ring-0 focus:shadow-none w-full px-3 py-2 border-none text-base text-gray-100 placeholder-gray-400'
                }"
            />
            </div>
            
        </div>

        <!-- filtering -->
        <div class="fixed bottom-0 mb-8 w-full flex items-center justify-center z-20">
            <div class="flex gap-x-2 h-18 items-center rounded-lg bg-white">
                <div class="flex justify-center items-center">
                    <button @click="searchData(1, totalData, searchField)" class="flex gap-x-2 items-center py-4 px-4 border-r-4 border-stone-50 hover:text-sky-600 relative group">
                        <Icon name="carbon:filter" size="18" />
                        <span class="text-xs font-medium">Filter</span>
                        <span class="absolute w-full h-0.5 bg-sky-600 rounded bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"></span>
                    </button>
                </div>

                <div class="w-full flex items-center">
                    
                </div>
                
            </div>
        </div>

        <!-- main data -->
        <div v-if="!loadingOverlay" class="grid grid-cols-1 md:grid-cols-3 gap-5 px-10 h-full overflow-hidden">
            <div v-for="(item, index) in members" :key="index" class="pt-2 pb-6">
                    <div class="max-w-4xl mx-auto grid grid-cols-1 border-2 rounded-lg h-[28rem]">
                        <div
                            class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse bg-gradient-to-t from-black/100 via-black/50 ">
                            <h2 class="mt-1 text-2xl font-semibold text-white">
                                {{ item.nama_provider }}
                            </h2>
                            <p class="text-sm leading-4 font-medium text-white">
                                {{ item.no_reg }}
                            </p>
                            <div class="absolute p-2 z-10 top-0 left-0 bg-gray-200 rounded-br-lg">
                                <nuxt-img :src="urlHostApi + item.logo" alt="" class=" h-20 object-fill rounded-lg"
                                loading="lazy" />
                            </div>
                        </div>

                        <div class="grid gap-4 col-start-1 col-end-3 row-start-1">
                            <nuxt-img :src="urlHostApi + item.hero_img" alt="" class="w-full h-60 object-cover rounded-t-lg" loading="lazy" />
                        </div>

                        <dl class="px-2 text-sm font-medium flex items-center row-start-2 gap-x-6">
                            <dd class="text-emerald-600 flex items-center justify-center gap-x-2">
                                <Icon name="carbon:phone" size="18" />
                                <span class="">{{ item.telepon }}</span>
                            </dd>
                            <dt class="sr-only">Location</dt>
                            <dd class="flex items-center gap-x-2">
                                <Icon name="carbon:location" size="18" class="text-gray-500 font-semibold"/>
                                {{ item.dpc.nama_dpc }}, {{ item.dpc.dpd.nama_dpd }}
                            </dd>
                        </dl>

                        <div class="px-2 row-start-3 pt-1">
                            <div class="flex flex-wrap gap-1">
                                <p v-for="(layanan, index) in item.services" :key="index" class="text-xs rounded py-1 px-2 font-semibold bg-orange-200 bg-opacity-30 text-orange-700">
                                    {{ layanan }}
                                </p>
                            </div>
                        </div>

                        <div class="mb-2 mx-2 col-start-1 row-start-4 self-end">
                                <TButton class="hpoi" @click="detailDataMember(item)">
                                    <Icon name="carbon:cube-view" size="20" />
                                    <span class="text-xs font-semibold tracking-wide ">
                                        Detail Provider
                                    </span>
                                </TButton>
                        </div>
                    </div>
            </div>
            
        </div>
    </div>
</template>


<script setup lang="ts">
    import axios from 'axios';

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

    // show detail data
    //update 
    const detailDataMember = (async (item : any) => {
        loadingOverlay.value = true
        btnEdit.value = true
        id.value = item.id
        kode_provider.value = item.kode_provider
        nama_provider.value = item.nama_provider
        no_reg.value = item.no_reg
        nama_anggota.value = item.nama_anggota
        profile_one.value = item.profile_one
        profile_two.value = item.profile_two
        services.value = item.services
        alamat.value = item.alamat
        telepon.value = item.telepon
        email.value = item.email
        instagram.value = item.instagram
        facebook.value = item.facebook
        youtube.value = item.youtube
        website.value = item.website
        nama_dpc.value = item.nama_dpc
        nama_dpd.value = item.nama_dpd
        logo.value = item.logo
        hero_img.value = item.hero_img
        gallery_one.value = item.gallery_one
        gallery_two.value = item.gallery_two
        gallery_three.value = item.gallery_three
        await navigateTo(`/anggota/${item.no_reg}`)
        setTimeout(() => {loadingOverlay.value = false}, 300)
    })
    

    
</script>

<style scoped>

</style>