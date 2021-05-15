<template>
    <div class="navHeader" >
      <div style="height:28px;" class="container text-right">
          <a href="#" style="text-decoration:none;font-size:12px" class="mr-5 text-green"><span>登录</span></a>
          <a href="#" style="text-decoration:none;font-size:12px" class="mr-5 text-green"><span>帮助</span></a>
      </div>
    </div>
</template>
<script>
export default {
    name:'navheader'
}
</script>
<style scoped>
  .navHeader {
      background-color: black;
  }
  .text-green {
    color:#fff;
  }
  .text-green:hover{
    color:green;    
  }
</style>