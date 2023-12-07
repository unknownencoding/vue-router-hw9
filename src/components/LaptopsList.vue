<template>
            <div v-for="laptop in getLaptopsList" :key="laptop.id" @click="onLaptopClick(laptop.id)">
                <div>{{ laptop.model }}</div>
                <img :src="laptop.image">
                <div>{{ laptop.price }}</div>
            </div>
</template>

<script>
import { mapGetters } from "vuex";
    export default {
        name: 'LaptopsList',
        computed: {
             ...mapGetters(['getLaptopsList'])
            },
            
            methods: {
            onLaptopClick(id) {
                this.$router.push({
                    name:'laptopscard',
                    params:{
                        laptopId:id
                    }
                })
            }
        }
    }
</script>

<style lang="css" scoped>
img{
width: 150px;
}
</style>