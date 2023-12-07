<template>  
    <div v-for="phone in getPhonesList" :key="phone.id" @click="onPhoneClick(phone.id)">
       <div style="font-weight: bold;">{{ phone.model }}</div>
       <img :src="phone.image" alt="Phone Image">
       <div style="color: red; font-weight: bolder;">€{{ phone.price }}</div> 
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name:'PhonesList',
        computed: {
            ...mapGetters(['getPhonesList'])
        },
        methods:{
            onPhoneClick(id){
                this.$router.push({
                    name:'phonescard',
                    params:{
                        phoneId:id
                    }
                })
            }
        }
    }
</script>

<style lang="css" scoped>
img{
    width: 180px;
}
</style>