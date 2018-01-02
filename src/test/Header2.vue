<template>
  <div class="header">      
    
    <div >{{message}}</div>
    <div class="right" v-show="$route.path == '/cart'? true : false"><a >编辑</a></div>
    
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
.header div:nth-child(1){
  font-size:20px;
  /* font-weight: bold; */
}
.header > div {
  display:inline-block;
  line-height: 40px;
  color:white;
}

.header .right{
   position:absolute;
   top:0;
   right:10px;
   /* font-size:20px; */
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
