<template>
    <div class="laptop-card">
        <img :src="productLaptop.image">
          <div class="card-text"> 
                <div>{{ productLaptop.manufacturer }}</div>
                <div>{{ productLaptop.model }}</div>
                <div>{{ productLaptop.description }}</div>
                <div>{{ productLaptop.price }}</div>
                <button><router-link to="/">Home</router-link></button>
                <button @click="goBack">Back</button>
          </div>      
    </div>
</template>

<script>
import { mapGetters } from "vuex";
    export default {
        name:'LaptopCard',
        data(){
            return {
                productLaptop:{}
            }
        },
         methods: {
            goBack() {
            // Метод для повернення на попередню вкладку
            this.$router.go(-1);
            
            }
        },

         computed: {
             ...mapGetters(['getLaptopsById']),
             laptopId(){
                return this.$route.params.laptopId
             }
            },
        created (){
            // this.productPhone = this.getPhonesById(this.phoneId)
            this.productLaptop = this.getLaptopsById(this.laptopId) || {};
        }   
    }
</script>

<style lang="css" scoped>
img{
width: 500px;
}
</style>