<template>
  <div class="banner">
    <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides">
      <img v-bind:src="slide.url" alt="">
      <!-- <div></div> -->
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

export default {
  
  data () {
    return {
      swiperOption: {
        loop: true,
        speed: 1000,
        autoplay: true,
        autoplay: {
          disableOnInteraction: false
        },
        
          pagination: {
            el: '.swiper-pagination'
          }
        },
        swiperSlides: [
          {"url":require("../assets/1.jpg"),"name":'第一张'},
          {"url":require("../assets/2.jpg"),"name":'第二张'},
          {"url":require("../assets/3.jpg"),"name":'第三张'},
          {"url":require("../assets/4.jpg"),"name":'第四张'},
          {"url":require("../assets/5.jpg"),"name":'第五张'}
        ]
      }    
  }
}
</script>

<style scoped>
.swiper-container{
  height:100%;
}
img{
  width:100%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
