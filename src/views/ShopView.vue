<template>
    <div class="shop-list">
        <ul>
            <li><router-link to="/phoneslist">Телефони</router-link></li>
            <li><router-link to="/laptopslist">Ноутбуки</router-link></li>
            <li> <router-link to="/tvlist">Телевізори</router-link></li>
       </ul>
            <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'ShopView'
    }
</script>

<style lang="css" scoped>
 ul{
    display:  block;
      background-color: #5bc696be ;
    justify-content: flex-left;
    align-items: left;  
     padding: 10px;
 }
.shop-list{
    display: flex;
    justify-content: flex-start;
}
</style>