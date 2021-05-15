<template>
    <section>
        <b-jumbotron text-variant="white">
            <template v-slot:header><b>欢迎来到 MINECRAFT</b></template>
            <template v-slot:lead>
              新游戏、新更新、新畅玩方式应有尽有，快来加入最大的游戏社区之一，今天就开启创作之旅吧！
            </template>
            <a href="/playmethods" class="btn btn-default text-uppercase mt-5"><b>获取 minecraft</b></a>
        </b-jumbotron>                
    </section>
</template>
<script>
export default {

}
</script>
<style scoped>
.jumbotron {
   background-color:transparent;
}
.btn-default {
    color:white;
    background-color: #34aa2f!important;
    border-color: #34aa2f!important;
    padding: 1.38rem 3.25rem!important;
    font-size: 19.2px!important;
    text-shadow: 0 2px 0 rgba(0,0,0,.25);
    z-index: -1;
    box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
}
</style>