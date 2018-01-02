<template>
  <div class="content">
      <ul>
          <li v-for="msg in msg">
            <a >
                <img v-bind:src="msg.url" alt="">
                <p>{{msg.title}}</p>
                <p><b>{{msg.price}}</b> <span> 原价<del>{{msg.original}}</del></span></p>
            </a>          
          </li>          
      </ul>                 
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: [
          {"url":require('../assets/c-1.jpg'),"title":'休闲零食五味园pk脆独立小包装500g',"price":'￥10.9',"original":'￥12.8'},
          {"url":require('../assets/c-2.jpg'),"title":'坚果特产山核桃奶有味碧根果210gx2袋',"price":'￥29.5',"original":'￥42.5'},
          {"url":require('../assets/c-2.jpg'),"title":'坚果特产山核桃奶有味碧根果210gx2袋',"price":'￥29.5',"original":'￥42.5'},
          {"url":require('../assets/c-1.jpg'),"title":'休闲零食五味园pk脆独立小包装500g',"price":'￥10.9',"original":'￥12.8'},          
          {"url":require('../assets/c-1.jpg'),"title":'休闲零食五味园pk脆独立小包装500g',"price":'￥10.9',"original":'￥12.8'},
          {"url":require('../assets/c-2.jpg'),"title":'坚果特产山核桃奶有味碧根果210gx2袋',"price":'￥29.5',"original":'￥42.5'},
          {"url":require('../assets/c-2.jpg'),"title":'坚果特产山核桃奶有味碧根果210gx2袋',"price":'￥29.5',"original":'￥42.5'},
          {"url":require('../assets/c-1.jpg'),"title":'休闲零食五味园pk脆独立小包装500g',"price":'￥10.9',"original":'￥12.8'},          
          {"url":require('../assets/c-1.jpg'),"title":'休闲零食五味园pk脆独立小包装500g',"price":'￥10.9',"original":'￥12.8'},
          {"url":require('../assets/c-2.jpg'),"title":'坚果特产山核桃奶有味碧根果210gx2袋',"price":'￥29.5',"original":'￥42.5'},
          {"url":require('../assets/c-1.jpg'),"title":'休闲零食五味园pk脆独立小包装500g',"price":'￥10.9',"original":'￥12.8'}          
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  background: #f2f2f2;
}
.content::after{
  content:'';
  height: 0;
  display: block;
  visibility: hidden;
  clear: both;
  margin-bottom:70px;
}
.content p {
  padding-left:10px;
}
.content li a p:nth-child(3){
    color: red;
}
ul li a  p span{
    color: rgb(155, 152, 152);
}
.content li{
  width:46%;
  float: left;
  text-align: left;  
  /* border:1px solid rgb(211, 193, 193); */
  background:#fff;
  margin-bottom:5px;
}
.content li:nth-child(2n+1){
  margin-left:10px;
  margin-right: 5px;
}
.content li:nth-child(2n){
  margin-right:10px;
  margin-left:5px;
}
.content li a img{
  width:100%;  
}
ul {
  list-style-type: none;
  padding-top:8px;
}
a {
  color: black;
  text-decoration: none;
}
</style>
