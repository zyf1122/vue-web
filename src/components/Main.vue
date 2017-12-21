<template>
  <div class="main">
    <div class="left">
      <img v-bind:src="msg" alt="">
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
.main::after {
  /* height: 100%; */
  height: 0;
  content:'';
  display: block;
  clear: both;
  /* overflow: hidden; */
  visibility: hidden;
}
.main .left {
  width: 32%;
  /* text-align:left; */
  float: left;
}
.main .left img {
  width: 100%;
  padding-left: 10px;
}
.main .right {
  width: 67%;
  /* text-align:right; */
  float: right;
}
.main .right img {
  width: 48%;
  padding-right: 5px;
}
.main .right a:nth-child(3) img {
  margin-top: 5px;
}
.main .right a:nth-child(4) img {
  margin-top: 5px;
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
