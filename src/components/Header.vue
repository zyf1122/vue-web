<template>
  <div class="header">      
    <div class="left" v-show="$route.path == '/'? true : false">
      <select>
        <option v-for="msg in msg">{{msg}}</option>        
      </select>
    </div>
    <div >{{message}}</div>
    <div class="right iconfont icon-sousuokuangsousuo" v-show="$route.path == '/'? true : false"></div>
    <div class="right1" v-show="$route.path == '/cart'? true : false"><a >编辑</a> </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg:['广州','深圳','上海','东莞','海南']
    }
  },
  props:['message']
}
</script>

<style scoped>
.header{
  height: 40px;
  background: rgb(228, 188, 14);
  position: relative;
}
.header div:nth-child(2){
  font-size:20px;
  /* font-weight: bold; */
}
.header > div {
  display:inline-block;
  line-height: 40px;
  color:white;
}
.header .left{
  position:absolute;
  left: 10px;
  top:0;
}
.header .left select{
  background: rgb(228, 188, 14);
  border:none;
  outline: none;
  color: white;
}
.header .right{
   position:absolute;
   top:0;
   right:10px;
   font-size:1.5em; 
}
.header .right1{
   position:absolute;
   top:0;
   right:10px;
   /* font-size:1.5em;  */
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
  color: #fff;
  text-decoration: none;
}
</style>
