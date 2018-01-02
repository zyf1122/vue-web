<template>
  <div class="top">
    <ul>
      <li class="img">
        <img :src="msg.url" alt="">
        <p id="top" :class="msg.icon"></p>
      </li>      
      <li class="font">{{msg.name}}</li>
      <li><button>VIP会员</button> </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: {
        "url":require('../assets/tou.jpg'),
        "icon":'iconfont icon-biaoqing_zuanshi',
        "name":'凯丽_Kyllie'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  height: 210px;
  background-image: url('../assets/top.jpg');
  background-size: 100% 100%;  
}
.top ul{
  padding-top: 30px;
}
.font{
  font-size: 16px;
}
ul li:nth-child(1) img{
  height: 80px;
  border-radius: 50%;
  border:2px solid #fff;
}
.img{
  position: relative;
  width:100px;
  /* text-align: center; */
  margin: 0 auto;
}
.img p{  
  position: absolute;
  right: 10px;
  bottom: 0;
  font-size:1.5em;
  /* color: #d1d9de; */
}
button{
  width: 70px;
  border-radius: 30px;
  border:1px solid #fff;
  outline: none;
  background:#9c826e;
  color: #fff;
}
button:active{
  color: rgb(206, 182, 182);
  background: #fff;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  color: white;
  /* padding:1px; */
  margin-bottom:10px;
}
a {
  color: #42b983;
}
</style>
