<template>
  <div class="home">        
    <Header message='会员杂锦'></Header>
    <Banner></Banner>
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
      'Footer':Footer
      
  }
}

</script>

<style scoped>

</style>
