<template>
  <div class="cate">
    <div>
      <div >
        <p v-on:click='fu' ref="myColor" class="mei">生活美食 <i class="iconfont icon-icon"></i></p>
        <ul class="shi" v-show="msg">
          <li v-for="ms in ms"><span>{{ms}}</span></li>          
        </ul>
      </div>
      <div>
        <p v-on:click='fu1' ref="myColor1">价格从高到低 <i class="iconfont icon-icon"></i></p>
      </div>
      <div>
        <p v-on:click='fu2' ref="myColor2">销量优先 <i class="iconfont icon-icon"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: false,
      ms:['美食','美酒','家具','百货','家电','汽车配置','箱包','珠宝']
    }
  },
  methods:{
    fu(){
      this.$refs.myColor.style.color='#f39612';
      this.$refs.myColor1.style.color='#666';
      this.$refs.myColor2.style.color='#666';
      this.msg = !this.msg;
    },
    fu1(){
      this.$refs.myColor1.style.color='#f39612';
      this.$refs.myColor.style.color='#666';
      this.$refs.myColor2.style.color='#666';
      if(this.msg){
        this.msg = !this.msg;
      }
    },
    fu2(){
      this.$refs.myColor2.style.color='#f39612';
      this.$refs.myColor1.style.color='#666';
      this.$refs.myColor.style.color='#666';
      if(this.msg){
        this.msg = !this.msg;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  height: 30px;
  line-height: 30px; 
  color: #666;  
}

.cate .shi{
  position: absolute;
  left: 0;
  top: 71px;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  height: 100px;
  background:#fff;
  border-bottom:1px solid rgb(228, 225, 225);
}
li{
  display: inline-block;
  /* float: left; */
  width:24%;
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
  /* margin-bottom: 10px; */
}
li span {
  width:90%;
  display: inline-block;
  background: #f2f2f2;
  border-radius: 10px;
}
.cate > div {
  border-bottom:1px solid rgb(228, 225, 225);
}
.cate div div{
  width:32%;
  display: inline-block;
  /* background: red; */
}
a {
  color: #42b983;
}
</style>
