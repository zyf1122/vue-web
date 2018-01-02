<template>
  <div class="jq">
   <p class="p">fdfdsfd</p> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    // fu:function(){
    //  console.log($('p').html());
    // }
    
  }
}

$(function(){
      $('.p').click(function(){
        // console.log($(this).html());
        $(this).append('<span>4535435</span>');
      })
    })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
