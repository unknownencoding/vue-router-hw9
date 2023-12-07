<template>
    <div class="phone-card">
       <p><img :src="productPhone.image" alt="Phone Image"></p>
        <div class="card-text">  
            <p class="manufacturer">{{ productPhone.manufacturer }}</p>
            <p class="model">{{ productPhone.model }}</p>
            <p class="description">{{ productPhone.description }}</p>
            <p class="price">{{ productPhone.price }}</p>
            <button><router-link to="/">Home</router-link></button>
            <button @click="goBack">Back</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name:'PhoneCard',
        data(){
            return {
                productPhone:{}
            }
        },
        methods: {
    goBack() {
      // Метод для повернення на попередню вкладку
      this.$router.go(-1);
      
    }
  },
        computed: {
            ...mapGetters(['getPhonesById']),
          phoneId(){
            return this.$route.params.phoneId
          }
            
        },
        created (){
            // this.productPhone = this.getPhonesById(this.phoneId)
            this.productPhone = this.getPhonesById(this.phoneId) || {};
        }
        
    }
</script>

<style lang="css" scoped>
.phone-card{
    display: flex;
    max-width: 1200px;
    justify-content: center;
    margin: 0 auto;

}
.manufacturer{
font-weight: 700;
font-size: 24px;
}
.model{
font-weight: 500;
font-size: 20px;
}
.description{

}
.price{
font-weight: 900;
color: red;
}
img{
    width: 350px;
}
.card-text{
    display: block;
   width: 30%;
   margin: 10px 30px 10px 30px;

}


</style>