<template>
  <div class="header">      
    <div class="left">
      <select>
        <option v-for="msg in msg">{{msg}}</option>        
      </select>
    </div>
    <div>生活一家</div>
    <div class="right glyphicon glyphicon-search"></div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg:['广州','深圳','上海','东莞','海南']
    }
  }
}
</script>

<style scoped>
.header{
  height: 40px;
  background: rgb(228, 188, 14);
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
}
.header .right{
   position:absolute;
   top:0;
   right:10px;
   font-size:20px;
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
