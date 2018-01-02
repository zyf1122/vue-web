<template>
  <div class="list">
    <ul>      
      <li v-for="msg in msg"><a ><i :class="msg.icon"></i><span>{{msg.title}}</span><i class="right iconfont icon-arrowright"></i></a></li>
    </ul>

    <ul>      
      <li v-for="bot in bot"><a ><i :class="bot.icon"></i><span>{{bot.title}}</span><i class="right iconfont icon-arrowright"></i></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: [
        {"icon":'iconfont icon-fenleidianjizhuangtai02',"title":'基本资料'},
        {"icon":'iconfont icon-dingdan',"title":'我的订单'},
        {"icon":'iconfont icon-shoucang-copy',"title":'我的收藏'},
        {"icon":'iconfont icon-qianbao',"title":'我的钱包'},
        {"icon":'iconfont icon-dizhi',"title":'收货地址'},
        {"icon":'iconfont icon-huiyuanquanyi_pinpaizhuanxiang_px',"title":'升级会员'}
      ],
      bot:[
         {"icon":'iconfont icon-gongju',"title":'更多'},
         {"icon":'iconfont icon-zhuxiao',"title":'注销'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list{
  /* margin-top:5px; */
  background:#f2f2f2;
  margin-bottom:60px;
}
ul li a i{
  font-size:1.5em;
  color: rgb(255, 0, 85);
}
.list ul:nth-child(1) li:nth-child(3) i{
  font-size:2em;
  margin-left:-5px
}
.list ul:nth-child(1) li:nth-child(4) i{
  font-size:1em;
  padding-left:3px;
}
.list ul:nth-child(2) li:nth-child(2) i{
  font-size:1em;
  padding-left:5px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin-top:8px;
  margin-bottom:10px;
  background: #fff;
}
li {
  /* display: inline-block; */
  height: 40px;
  line-height: 40px;
  text-align: left;
  margin-left: 20px;
  border-bottom:1px solid #f2f2f2;
  position: relative;
}
li .right{
  float:right;
  color:#9c8b8b;
  font-size:1.5em !important;
}
li span{
  position: absolute;
  text-indent: 1em;
}
a {
  color: #343634;
  text-decoration: none;
}
</style>
