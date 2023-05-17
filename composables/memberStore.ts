export const useMemberStore = defineStore('MemberStore', {
    state : () => ({
        members : [] as any[],
        id: '',
        kode_provider : '',
        nama_provider : '',
        no_reg : '',
        nama_anggota: '',
        profile_one: '',
        profile_two: '',
        services: [] as any[],
        alamat: '',
        telepon: '',
        email: '',
        instagram: '',
        facebook: '',
        youtube: '',
        website: '',
        nama_dpc: '',
        nama_dpd: '',
        logo : '',
        hero_img : '',
        gallery_one : '',
        gallery_two : '',
        gallery_three : '',
    }),
    getters : {

    },
    actions : {

    }
})