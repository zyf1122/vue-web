<template>
  <div class="advertise">
    <div class="top">
      <span>特卖专区 Sales</span>
      </div>
    <div class="content">
      <a v-for="msg in msg">
      <ul>
        <li><img v-bind:src="msg.url" alt=""></li>
        <li>{{msg.name}}</li>
      </ul>
      </a>      
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: [
        {"url":require('../assets/g-1.jpg'),"name":'【10月抢购预告】 荣耀乐大神爆款 惊爆价'},
        {"url":require('../assets/g-2.jpg'),"name":'【惊爆开枪】 宝洁大礼包优惠前所没有'},
        {"url":require('../assets/g-3.jpg'),"name":'【神价再现】 GOD PRICE 华丽上市'}
      ]
    }
  }
}
</script>

<style scoped>
.advertise{
  margin-bottom:60px;
  /* background: #f2f2f2;  */
}
.top{
  height: 40px;
  line-height: 40px;
  position: relative;
}
.top:after {
    content: "";
    position: absolute;
    left: 0;
    z-index: -1;
    top: 20px;
    width: 95%;
    height: 1px;
    background: #dbdbdb;
    margin: 0 10px;
    /* text-align: center; */
}
.top span{
  color: #808080;
  background: #fff;
  padding: 0 10px;  
  display:inline-block;
}
.content ul{
  border: 1px rgb(228, 217, 217) solid;
  margin: 0 10px;
  margin-bottom:5px;
}
.content ul li img{
  width:100%;
}
.content ul li:nth-child(2){
  text-align: left;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  min-width: 355px;
  height: 30px;
  line-height: 30px;
  /* text-indent: 1em; */
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li { */
  /* display: inline-block; */
  /* margin: 0 10px; */
/* } */
a {
  color: #141414;
  text-decoration: none;
}
</style>
