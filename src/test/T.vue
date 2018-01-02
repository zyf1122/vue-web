<template>
	<div class="tabar" >
		<div class="tab">
			<div class="tab-item">
				<router-link to="/t" exact>
					<div class="tab-icon"><img src="" alt=""></div>
					<div class="tab-text">首页</div>
				</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/t" exact>
					<div class="tab-icon"><img src="" alt=""></div>
					<div class="tab-text">约跑</div>
				</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/t" exact>
					<div class="tab-icon"><img src="" alt=""></div>
					<div class="tab-text">约行</div>
				</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/t" exact>
					<div class="tab-icon"><img src="" alt=""></div>
					<div class="tab-text">我的</div>
				</router-link>
			</div>
		</div>

    <div v-on:click='fn'>afsdfsdfs</div>
	</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    fn(){
      console.log(this.$route)
      console.log(this.$route.path)
      console.log(this.$route.path.split('/')[1])
      console.log(this.$route.path.split('/').length)
    }
  }
};
</script>
<style scoped >
.tabar .tab {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 90px;
  line-height: 90px;
  background: #fff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
}
.tab:after {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-top: 1px solid rgba(7, 17, 27, 0.1);
  content: "";
}
.tab-item {
  flex: 1;
  text-align: center;
}

a {
  display: block;
  font-size: 14px;
  color: rgb(224, 126, 13);
  text-decoration: none;
}
a.active {
  color: #98df15;
  
}

.tab-icon {
  width: 50px;
  height: 50px;
  margin: 0 auto;
}
.tab-icon img {
  width: 100%;
}
.tab-text {
  height: 40px;
  line-height: 40px;
}
</style>

