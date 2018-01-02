<template>
  <div class="footer">
    <ul>
      <li v-for="msg in msg " ><a v-bind:href="msg.url" class><i v-bind:class="msg.cls"></i><br>{{msg.name}}</a></li>
    </ul> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: [
        {"cls":'iconfont icon-home',"name":'首页',"url":'/'},
        {"cls":'iconfont icon-huiyuan',"name":'会员杂锦',"url":'/hun'},
        {"cls":'iconfont icon-leimupinleifenleileibie',"name":'分类',"url":'/'},
        {"cls":'iconfont icon-cart-copy',"name":'购物车',"url":'/'},
        {"cls":'iconfont icon-home1',"name":'我的',"url":'/'}
      ]
    };
  },
  methods:{
       
  }
};
</script>

<style scoped>
.footer{
  margin-bottom: 70px;
}
.footer ul{
  width: 100%;
  height: 60px; 
  border-top: 1px  #e0e0e0 solid;
  position: fixed;
  bottom: -10px;
  background:#fff;
}
.footer ul li{
  width:20%;
  float: left;  
  /* margin-top:5px; */
}
.footer ul li i{
  font-size: 25px;
}
ul {
  list-style-type: none;
  padding: 0;
}


a{
  color:#c4bdb6;
  text-decoration: none;
}
a.active{
  color: #f29004;
}
/* a:link,:visited{
  color: #f29004;
} */
a:hover{  
  color: #f29004;
}

</style>
