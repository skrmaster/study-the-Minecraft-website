<template>
  <div id="app">
    <router-view @clearsc="clearscroll" @hidescrollY="scrollV" @showscrollY="scrollS"/>
  </div>
</template>
<script>
export default {
  methods:{
    scrollV(){
      document.documentElement.style.overflowX = 'hidden'
      document.documentElement.style.overflowY = 'hidden'
    },
    scrollS(){
      document.documentElement.style.overflowX = 'hidden'
      document.documentElement.style.overflowY = 'visible'
    },
    clearscroll(){
      document.documentElement.style = "scroll-behavior:auto;overflow-x:hidden"
      document.documentElement.scrollTop = 0
      document.documentElement.style = "scroll-behavior:smooth;overflow-x:hidden"
    }
  }
}
</script>
<style>
*{
  margin:0px;
  padding:0px;
}
html{
  scroll-behavior:smooth;
  overflow-x:hidden
}
</style>
