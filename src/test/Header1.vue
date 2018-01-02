<template>
  <div class="header">      
    
    <div>{{message}}</div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props:['message']
}
</script>

<style scoped>
.header{
  height: 40px;
  background: rgb(228, 188, 14);
}
.header div{
  font-size:20px;
  /* font-weight: bold; */
}
.header div {
  display:inline-block;
  line-height: 40px;
  color:white;
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
