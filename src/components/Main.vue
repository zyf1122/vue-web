<template>
  <div class="main">
    <div class="left">
      <a >
      <img v-bind:src="msg" alt="">
      </a>
      </div>
    <div class="right">
    <a v-for="img in img">
      <img v-bind:src="img.url" alt="">
      </a>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: require("../assets/01.jpg"),
      img: [
        { url: require("../assets/02.jpg") },
        { url: require("../assets/03.jpg") },
        { url: require("../assets/04.jpg") },
        { url: require("../assets/05.jpg") }
      ]
    };
  }
};
</script>


<style scoped>
.main{  
  margin: 5px 10px 0 ;
}
.main > div{
  display: inline-block;
}
.main::after {  
  height: 0;
  content:'';
  display: block;
  clear: both;
  /* overflow: hidden; */
  visibility: hidden;
}
.main .left {
  width: 32%;
  
  float: left;
}
.main .left img {
  width: 100%;
}

.main .right {
  width: 67%;
  
  float: right;
}
.main .right img {
  width: 48%;
 
}

.main .right a:nth-child(2n) img {
  margin-left: 5px;
}
.main .right a:nth-child(3) img {
  margin-top: 5px;
}
.main .right a:nth-child(4) img {
  margin-top: 5px;
}
ul {
  list-style-type: none;
 
}

a {
  color: #42b983;
}
</style>
