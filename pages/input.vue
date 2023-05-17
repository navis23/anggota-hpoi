<template>
    <div class="grid grid-cols-3">
        <div class="col-start-1 col-span-2 ">
            <div class="mb-10">

                <div class="w-full px-16">
                    <div v-if="logoPrevGo" class="drop-shadow-md py-4 flex justify-center bg-gray-100">
                            <nuxt-img :src="logoPrev" alt="" class="h-20 object-fill rounded-lg" loading="lazy" />
                    </div>
                
                </div>
                <!-- hero section -->
                <div class="pt-18 px-16 py-4 w-full">
                    <div class="w-full grid grid-cols-1 md:grid-cols-2 bg-gray-100 py-8 px-12">
                        <div class="flex flex-col items-start justify-center">
                            <h3 class="text-base font-semibold tracking-wide pb-3">
                                Anggota HPOI <span class="text-sm py-1 px-2 font-semibold bg-orange-200 bg-opacity-30 text-orange-700"> {{ no_reg }}</span>
                            </h3>
                            <h2 class="font-bold text-2xl uppercase tracking-widest pb-3">
                                {{ nama_provider }}
                            </h2>
                            <span class="w-12 pb-1 mb-2 border-b-8 border-orange-400"></span>
                            <div class="flex gap-x-10 pt-3">
                                <p class="flex gap-x-2 items-center">
                                    <Icon name="carbon:user-avatar-filled" size="24" class="font-semibold text-sky-500" />
                                    <span class="text-base tracking-widest">{{ nama_anggota }}</span>
                                </p>
                            </div>
                            <div class="pt-10">
                            </div>
                        </div>
                        <div v-if="heroPrevGo" class="drop-shadow-md">
                            <nuxt-img :src="heroPrev" alt="" class="w-full object-cover" loading="lazy" />
                        </div>
                    </div>
                </div>

                <!-- profile and services -->
                <div class="mt-6 px-40">
                    <h3 class="font-semibold text-xl tracking-wide uppercase pb-9">
                        Profile
                    </h3>
                    <p class="text-sm pb-3">
                        {{ profile_one }}
                    </p>
                    <p class="text-sm">
                        {{ profile_two }}
                    </p>
                </div>

                <div class="mt-12 px-40">
                    <h3 class="font-semibold text-xl tracking-wide uppercase pb-9">
                        Main Services
                    </h3>
                    <div class="flex flex-wrap gap-4">
                        <p class="text-base py-1 px-2 font-semibold bg-sky-200 bg-opacity-30 text-sky-700">
                            {{ servicesTemp }}
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
                                    <Icon name="ph:instagram-logo-bold" size="32"/>
                                    <p class="pt-2 tracking-wide font-semibold">{{ instagram }}</p>
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
                            <Icon name="ph:globe-simple-bold" size="32"/>
                            <span class="underline underline-offset-1">
                                {{ website }}
                            </span>
                        </h3>
                    </div>
                </div>

                <!-- mini galleries -->
                <div class="mt-12 px-16">
                    <h3 class="font-semibold text-3xl tracking-wide uppercase pb-9">
                        Mini Gallery
                    </h3>
                    <div class="columns-2">
                        <nuxt-img v-if="heroPrevGo" class="opacity-90 object-cover shadow-lg object-center mb-4" :src="heroPrev" alt="" />
                        <nuxt-img v-if="imgOnePrevGo" class="opacity-90 object-cover shadow-lg object-center mb-4" :src="imgOnePrev" alt="" />
                        <nuxt-img v-if="imgTwoPrevGo" class="opacity-90 object-cover shadow-lg object-center mb-4" :src="imgTwoPrev" alt="" />
                        <nuxt-img v-if="imgThreePrevGo" class="opacity-90 object-cover shadow-lg object-center mb-4" :src="imgThreePrev" alt="" />
                    </div>
                </div>

            </div>
        </div>
        <div class="sticky right-0">
            <div class="grid col-start-3 grid-cols-1 p-4 w-full">
                <FormKit
                    type="text"
                    label="Nama Provider"
                    placeholder=". . ."
                    validation="required|length:3"
                    v-model="nama_provider"
                    :classes="{
                        label : 'font-semibold text-sm tracking-wide pb-2',
                        inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center max-w-full border focus-within:ring-sky-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded-lg mb-1',
                    }"
                    :validation-visibility="errMsg"
                />
            </div>

            <div class="grid grid-cols-2 gap-x-4 p-4 pt-1 w-full">
                <FormKit
                    type="number"
                    label="Nomor Registrasi"
                    placeholder=". . ."
                    validation="*required|*number|length:3"
                    v-model="no_reg"
                    :classes="{
                        label : 'font-semibold text-sm tracking-wide pb-2',
                        inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center max-w-full border focus-within:ring-sky-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded-lg mb-1',
                    }"
                    :validation-visibility="errMsg"
                />
                <FormKit
                    type="text"
                    label="Nama Anggota"
                    placeholder=". . ."
                    validation="required"
                    v-model="nama_anggota"
                    :classes="{
                        label : 'font-semibold text-sm tracking-wide pb-2',
                        inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center max-w-full border focus-within:ring-sky-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded-lg mb-1',
                    }"
                    :validation-visibility="errMsg"
                />
            </div>

            <div class="grid col-start-3 grid-cols-1 p-4 w-full">
                <FormKit
                    type="select"
                    label="DPC"
                    name="dpc"
                    v-model="selectedDpc"
                    :classes="{
                        label : 'font-semibold text-sm tracking-wide pb-2',
                        inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center max-w-full border focus-within:ring-sky-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded-lg mb-1',
                    }"
                    >
                        <option value="" disabled>Pilih DPC</option>
                        <option v-for="(item, index) in dpcs" :key="index" :value="item.id">{{ item.nama_dpc }}</option>
                </FormKit>
            </div>

            <div class="grid grid-cols-1 w-full p-4 py-3"> 
                <label class="font-semibold text-sm tracking-wide pb-2" for="file1">Logo Image</label>
            
                <input type="file" 
                    @change = "selectLogo"
                    ref="file2"
                    name="file2"
                    id="file2"
                    class="flex justify-center items-center rounded-lg border cursor-pointer p-4 file:bg-sky-200 file:text-sky-600 file:mr-6 file:text-sm file:cursor-pointer file:rounded-lg file:px-6 file:py-3 file:bg-opacity-30 file:border-none file:font-semibold"
                >
            </div>

            <div class="grid grid-cols-1 w-full p-4 py-3"> 
                <label class="font-semibold text-sm tracking-wide pb-2" for="file1">Hero Image (Foto Utama)</label>
                
                
                <input type="file" 
                    @change = "selectHero"
                    ref="file1"
                    name="file1"
                    id="file1"
                    class="flex justify-center items-center rounded-lg border cursor-pointer p-4 file:bg-sky-200 file:text-sky-600 file:mr-6 file:text-sm file:cursor-pointer file:rounded-lg file:px-6 file:py-3 file:bg-opacity-30 file:border-none file:font-semibold"
                >
                
            </div>
            
            <div class="grid col-start-3 grid-cols-1 p-4 w-full">
                <FormKit
                    type="textarea"
                    label="Profile Paragraf 1"
                    placeholder=". . ."
                    validation="required|length:3"
                    rows="5"
                    v-model="profile_one"
                    :classes="{
                        label : 'font-semibold text-sm tracking-wide pb-2',
                        inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center max-w-full border focus-within:ring-sky-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded-lg mb-1',
                    }"
                    :validation-visibility="errMsg"
                />
            </div>

            <div class="grid col-start-3 grid-cols-1 p-4 w-full">
                <FormKit
                    type="textarea"
                    label="Profile Paragraf 2"
                    placeholder=". . ."
                    validation="required|length:3"
                    rows="5"
                    v-model="profile_two"
                    :classes="{
                        label : 'font-semibold text-sm tracking-wide pb-2',
                        inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center max-w-full border focus-within:ring-sky-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded-lg mb-1',
                    }"
                    :validation-visibility="errMsg"
                />
            </div>

            <div class="grid col-start-3 grid-cols-1 p-4 w-full">
                <FormKit
                    type="text"
                    label='List Services / Layanan'
                    placeholder=". . ."
                    validation="required|length:3"
                    v-model="servicesTemp"
                    :classes="{
                        label : 'font-semibold text-sm tracking-wide pb-2',
                        inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center max-w-full border focus-within:ring-sky-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded-lg mb-1',
                    }"
                    :validation-visibility="errMsg"
                    help='Beri tanda koma saat isi, contoh : outbound fun, training camp'
                />
            </div>

            <div class="grid col-start-3 grid-cols-1 p-4 w-full">
                <FormKit
                    type="text"
                    label='Alamat Provider'
                    placeholder=". . ."
                    validation="required|length:3"
                    v-model="alamat"
                    :classes="{
                        label : 'font-semibold text-sm tracking-wide pb-2',
                        inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center max-w-full border focus-within:ring-sky-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded-lg mb-1',
                    }"
                    :validation-visibility="errMsg"
                />
            </div>

            <div class="grid grid-cols-2 gap-x-4 p-4 pt-1 w-full">
                <FormKit
                    type="text"
                    label='Nama Instagram'
                    placeholder=". . ."
                    validation="required|length:3"
                    v-model="instagram"
                    :classes="{
                        label : 'font-semibold text-sm tracking-wide pb-2',
                        inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center max-w-full border focus-within:ring-sky-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded-lg mb-1',
                    }"
                    :validation-visibility="errMsg"
                />
                <FormKit
                    type="text"
                    label='Nama Youtube'
                    placeholder=". . ."
                    validation="required|length:3"
                    v-model="youtube"
                    :classes="{
                        label : 'font-semibold text-sm tracking-wide pb-2',
                        inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center max-w-full border focus-within:ring-sky-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded-lg mb-1',
                    }"
                    :validation-visibility="errMsg"
                />
            </div>

            <div class="grid grid-cols-2 gap-x-4 p-4 pt-1 w-full">
                <FormKit
                    type="text"
                    label='Nama Facebook'
                    placeholder=". . ."
                    validation="required|length:3"
                    v-model="facebook"
                    :classes="{
                        label : 'font-semibold text-sm tracking-wide pb-2',
                        inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center max-w-full border focus-within:ring-sky-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded-lg mb-1',
                    }"
                    :validation-visibility="errMsg"
                />
                <FormKit
                    type="text"
                    label='Nama Email'
                    placeholder=". . ."
                    validation="required|length:3"
                    v-model="email"
                    :classes="{
                        label : 'font-semibold text-sm tracking-wide pb-2',
                        inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center max-w-full border focus-within:ring-sky-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded-lg mb-1',
                    }"
                    :validation-visibility="errMsg"
                />
            </div>

            <div class="grid grid-cols-2 gap-x-4 p-4 pt-1 w-full">
                <FormKit
                    type="text"
                    label='Nomor Telepon'
                    placeholder=". . ."
                    validation="required|length:3"
                    v-model="telepon"
                    :classes="{
                        label : 'font-semibold text-sm tracking-wide pb-2',
                        inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center max-w-full border focus-within:ring-sky-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded-lg mb-1',
                    }"
                    :validation-visibility="errMsg"
                />
                <FormKit
                    type="text"
                    label='nama Website'
                    placeholder=". . ."
                    validation="required|length:3"
                    v-model="website"
                    :classes="{
                        label : 'font-semibold text-sm tracking-wide pb-2',
                        inner : '$reset formkit-inner formkit-disabled:bg-gray-200 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none flex items-center max-w-full border focus-within:ring-sky-500 focus-within:ring-2 [&>label:first-child]:focus-within:text-blue-500 rounded-lg mb-1',
                    }"
                    :validation-visibility="errMsg"
                />
            </div>

            <div class="grid grid-cols-1 w-full p-4 py-3"> 
                <label class="font-semibold text-sm tracking-wide pb-2" for="file1">Galeri 1</label>
            
                
                <input type="file" 
                    @change = "selectOne"
                    ref="file3"
                    name="file3"
                    id="file3"
                    class="flex justify-center items-center rounded-lg border cursor-pointer p-4 file:bg-sky-200 file:text-sky-600 file:mr-6 file:text-sm file:cursor-pointer file:rounded-lg file:px-6 file:py-3 file:bg-opacity-30 file:border-none file:font-semibold"
                >
            </div>
            <div class="grid grid-cols-1 w-full p-4 py-3"> 
                <label class="font-semibold text-sm tracking-wide pb-2" for="file1">Galeri 2</label>
            
                
                
                <input type="file" 
                    @change = "selectTwo"
                    ref="file4"
                    name="file4"
                    id="file4"
                    class="flex justify-center items-center rounded-lg border cursor-pointer p-4 file:bg-sky-200 file:text-sky-600 file:mr-6 file:text-sm file:cursor-pointer file:rounded-lg file:px-6 file:py-3 file:bg-opacity-30 file:border-none file:font-semibold"
                >
            </div>
            <div class="grid grid-cols-1 w-full p-4 py-3"> 
                <label class="font-semibold text-sm tracking-wide pb-2" for="file1">Galeri 3</label>
            
                
                
                <input type="file" 
                    @change = "selectThree"
                    ref="file5"
                    name="file5"
                    id="file5"
                    class="flex justify-center items-center rounded-lg border cursor-pointer p-4 file:bg-sky-200 file:text-sky-600 file:mr-6 file:text-sm file:cursor-pointer file:rounded-lg file:px-6 file:py-3 file:bg-opacity-30 file:border-none file:font-semibold"
                >
                
            </div>
            <div class="flex gap-x-4 justify-end p-4 border-t-2 pt-4 mt-3">
                <TButton class="gray" @click="cancelDataMember()">
                    <Icon name="carbon:close-outline" size="24" />
                    <span class="text-sm font-semibold tracking-wide ">
                        Batal
                    </span>
                </TButton>
                <TButton v-if="!btnEdit" @click="saveDataMember()">
                    <Icon name="carbon:save" size="24" />
                    <span class="text-sm font-semibold tracking-wide ">
                        Simpan
                    </span>
                </TButton>
                <!-- <TButton v-if="btnEdit" @click="saveEditProduct()">
                    <Icon name="carbon:save" size="24" />
                    <span class="text-sm font-semibold tracking-wide ">
                        Edit
                    </span>
                </TButton> -->
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
    const storeDpc = useDpcStore()

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

    const {
        dpcs,
        id_dpc,
        kode_dpc,
        dpc_nama,
        kode_dpd,
        dpd_nama
    } = storeToRefs(storeDpc)

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
    const servicesTemp = ref([])
    const tempData = ref([])
    const file1 = ref()
    const file2 = ref()
    const file3 = ref()
    const file4 = ref()
    const file5 = ref()
    const heroPrev = ref()
    const logoPrev = ref()
    const imgOnePrev = ref()
    const imgTwoPrev = ref()
    const imgThreePrev = ref()
    const heroPrevGo = ref(false)
    const logoPrevGo = ref(false)
    const imgOnePrevGo = ref(false)
    const imgTwoPrevGo = ref(false)
    const imgThreePrevGo = ref(false)
    const selectedDpc = ref()

    // mounted first data
    onMounted( async () => {
        loadingOverlay.value = true
        await fetchMember()
        await fetchDpc()
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

    // fetching data
    const fetchDpc = async () => {
        await axios.post( `${urlHostApi}hpoi-api/api/dpc/daftar`, {}, {
        headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*"
        }
        })
        .then( res => {
            dpcs.value = res.data.data
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

    const selectHero = ((e : any) => {
        const imageChoose = file1.value.files.item(0)
        if (imageChoose == null){
            hero_img.value = ''
            heroPrev.value = ''
            heroPrevGo.value = false
        } else {
            hero_img.value = imageChoose
            heroPrev.value = URL.createObjectURL(imageChoose)
            heroPrevGo.value = true
        }
        
    })

    const selectLogo = ((e : any) => {
        const imageChoose = file2.value.files.item(0)
        if (imageChoose == null){
            logo.value = ''
            logoPrev.value = ''
            logoPrevGo.value = false
        } else {
            logo.value = imageChoose
            logoPrev.value = URL.createObjectURL(imageChoose)
            logoPrevGo.value = true
        }
        
    })

    const selectOne = ((e : any) => {
        const imageChoose = file3.value.files.item(0)
        if (imageChoose == null){
            gallery_one.value = ''
            imgOnePrev.value = ''
            imgOnePrevGo.value = false
        } else {
            gallery_one.value = imageChoose
            imgOnePrev.value = URL.createObjectURL(imageChoose)
            imgOnePrevGo.value = true
        }
        
    })

    const selectTwo = ((e : any) => {
        const imageChoose = file4.value.files.item(0)
        if (imageChoose == null){
            gallery_two.value = ''
            imgTwoPrev.value = ''
            imgTwoPrevGo.value = false
        } else {
            gallery_two.value = imageChoose
            imgTwoPrev.value = URL.createObjectURL(imageChoose)
            imgTwoPrevGo.value = true
        }
        
    })

    const selectThree = ((e : any) => {
        const imageChoose = file5.value.files.item(0)
        if (imageChoose == null){
            gallery_three.value = ''
            imgThreePrev.value = ''
            imgThreePrevGo.value = false
        } else {
            gallery_three.value = imageChoose
            imgThreePrev.value = URL.createObjectURL(imageChoose)
            imgThreePrevGo.value = true
        }
        
    })

    const selectDpc = ((item : any) => {
       console.log(item)
    //    nama_dpc.value = nama_dpc
    })


    const cancelDataMember = ( async () => {
        await fetchMember()
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
        selectedDpc.value = ''
        await navigateTo('/')
        setTimeout( () => {
            loadingOverlay.value = false
        }, 300)
    })


    // setting and trigger for CRUD data

    //insert
    const saveDataMember = ( async () => {
        loadingOverlay.value = true
        const splitArray = servicesTemp.value.split(', ')
        services.value = splitArray
        // console.log('0 ' + splitArray)
        // console.log('1' + tempData.value)
        // console.log('2' + servicesTemp.value)
        // services.value.push(splitArray)
        // console.log(services.value)
        // console.log((services.value))

        await axios.post(`${urlHostApi}hpoi-api/api/member/simpan`, {
            
            kode_provider: kode_provider.value,
            nama_provider: nama_provider.value,
            no_reg: no_reg.value,
            nama_anggota: nama_anggota.value,
            profile_one: profile_one.value,
            profile_two: profile_two.value,
            services: services.value,
            alamat: alamat.value,
            telepon: telepon.value,
            email: email.value,
            instagram: instagram.value,
            facebook: facebook.value,
            youtube: youtube.value,
            website: website.value,
            logo: logo.value,
            hero_img: hero_img.value,
            gallery_one: gallery_one.value,
            gallery_two: gallery_two.value,
            gallery_three: gallery_three.value,
            dpc: selectedDpc.value,
        }, {
            headers: {
                    "Content-Type": "multipart/form-data",
                    "Access-Control-Allow-Origin": "*"
            }
        })
        .then( async (res) => {
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
            selectedDpc.value = ''
            await navigateTo('/')
            await fetchMember()
            setTimeout( () => {
                loadingOverlay.value = false
            }, 300)
        })
        .catch( err => {
            console.log({error : err.message, msg : `error insert process`})
            errMsg.value = "live"
            setTimeout( () => {
                loadingOverlay.value = false
            }, 300)
        })
    })


    
</script>

<style scoped>

</style>