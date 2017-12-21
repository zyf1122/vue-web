<template>
  <div class="home">
    <Header></Header>
    <Banner></Banner>
    <Main></Main>
    <Advertise></Advertise>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Main from '@/components/Main'
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
      'Main':Main,
      'Advertise':Advertise,
      'Footer':Footer
  }
}

</script>

<style scoped>

</style>
