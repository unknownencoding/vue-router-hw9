import { createStore } from 'vuex'

export default createStore({
  state: {
      phonesList: [
        {
          id: 1,
          manufacturer: 'Apple',
          model: 'iPhone 15 Pro',
          description:'Екран (6.1", OLED (Super Retina XDR), 2556x1179) / Apple A17 Pro / основна квадро-камера: 48 Мп + 12 Мп + 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 256 ГБ вбудованої памяті / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17',
          image: 'https://content1.rozetka.com.ua/goods/images/big/364827150.jpg',
          price: 1200,
        },
        {
          id: 2,
          manufacturer: 'Samsung',
          model: 'galaxy s21',
          description:'Екран (6.8", Dynamic AMOLED 2X, 3088x1440) / Qualcomm Snapdragon 8 Gen 2 for Galaxy (3.36 ГГц + 2.8 ГГц + 2.8 ГГц + 2.0 ГГц) / основна квадро-камера: 200 Мп + 12 Мп + 10 Мп + 10 Мп, фронтальна 12 Мп / RAM 12 ГБ / 256 ГБ вбудованої памʼяті / 3G / LTE / 5G / GPS / підтримка 2х SIM-карт (Nano-SIM) / Android 13 / 5000 мА*год',
          image: 'https://content1.rozetka.com.ua/goods/images/big/310655485.jpg',
          price: 1000,
        },
        // Додайте інші телефони за потреби
      ],

      // Список телевізорів
      TVsList: [
        {
          id: 1,
          manufacturer: 'Sony',
          model: 'Bravia X900H',
          image: 'braviax900h.jpg',
          price: 1500,
        },
        {
          id: 2,
          manufacturer: 'LG',
          model: 'OLED CX',
          image: 'oledcx.jpg',
          price: 1800,
        },
        // Додайте інші телевізори за потреби
      ],

      // Список ноутбуків
      laptopsList: [
        {
          id: 1,
          manufacturer: 'Dell',
          model: 'XPS 13',
          description:'text about this laptop Dell',
          image: 'https://content.rozetka.com.ua/goods/images/big/378352643.jpg',
          price: 1300,
        },
        {
          id: 2,
          manufacturer: 'HP',
          model: 'Spectre x360',
          description:'text about this laptop HP',
          image: 'https://content2.rozetka.com.ua/goods/images/big/384360990.png',
          price: 1200,
        },
        // Додайте інші ноутбуки за потреби
      ]




  },
  getters: {
    getPhonesList:state=>state.phonesList,
    getPhonesById: state => phoneId => state.phonesList.find(phone => phone.id == phoneId),
     getTVsList:state=>state.TVsList,
    
    getLaptopsList:state=>state.laptopsList,
    getLaptopsById: state => laptopId => state.laptopsList.find(laptop => laptop.id == laptopId),

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
