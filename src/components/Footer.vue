<template>
	<div class="tabar" >
		<div class="tab">
			<div class="tab-item">
				<router-link to="/" exact>
					<div class="tab-icon"><span class="iconfont icon-home"></span></div>
					<div class="tab-text">首页</div>
				</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/hun" exact>
					<div class="tab-icon"><span class="iconfont icon-liwu"></span></div>
					<div class="tab-text">会员杂锦</div>
				</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/category" exact>
					<div class="tab-icon"><span class="iconfont icon-leimupinleifenleileibie"></span></div>
					<div class="tab-text">分类</div>
				</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/cart" exact>
					<div class="tab-icon"><span class="iconfont icon-cart-copy"></span></div>
					<div class="tab-text">购物车</div>
				</router-link>
			</div>
      <div class="tab-item">
				<router-link to="/mine" exact>
					<div class="tab-icon"><span class="iconfont icon-home1"></span></div>
					<div class="tab-text">我的</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped >
/* .tabar{
  margin-bottom: 60px;
} */
.tabar .tab {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 30px;
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
  color: rgb(175, 175, 171);
  text-decoration: none;
}
.router-link-active {
  color: #c3e62c;
  
}

.tab-icon {
  width: 50px;
  height: 25px;
  margin: 0 auto;
}
.tab-icon span {
  font-size: 25px;
  display:inline-block;
}
.tab-text {
  height: 25px;
  line-height: 25px;
}
</style>

