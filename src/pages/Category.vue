<template>
  <div class="home">        
    <Header message='分类'></Header>
    <Cate></Cate>
    <Content></Content>
    <Footer></Footer>
    
  </div>
</template>

<script>
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Content from '@/components/Content'
import Advertise from '@/components/Advertise'
import Footer from '@/components/Footer'
import Cate from '@/components/Cate'

export default {
  data () {
    return {
    }
  },
  methods:{

  },
  components:{
      'Header':Header,
      'Banner':Banner,
      'Content':Content,
      'Advertise':Advertise,
      'Footer':Footer,
      Cate

      
  }
}

</script>

<style scoped>

</style>
