<template>
  <div class="mine">        
    <Top></Top>
    <List></List>
    <!-- <Content></Content> -->
    <Footer></Footer>
    
  </div>
</template>

<script>
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Content from '@/components/Content'
import Advertise from '@/components/Advertise'
import Footer from '@/components/Footer'
import Top from '@/components/Top'
import List from '@/components/List'

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
      Top,
      List
      
  }
}

</script>

<style scoped>

</style>
