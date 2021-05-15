<template>
    <div class="bgset">
        <div class="container">
            <div class="row justify-content-center">
                <h1 class="p-5 text-white">讨论与帮助</h1>
            </div>
            <div class="row justify-content-center">
                <a class="btn btn-defaul col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-white">
                    <img :src=headface style="height:40px;width:40px">
                    <span>Discord 上的 Minecraft</span>
                </a>
            </div>
            <div class="row justify-content-center mt-4">
                <a class="btn col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 text-white seta"><span>最新更新日志</span></a>
                <a class="btn col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 text-white ml-2 seta">
                    <span>游戏测试版信息</span>
                </a>
            </div>
            <div class="row justify-content-center mt-4">
                <a class="btn col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-white p-2 seta"><span>支持</span></a>
            </div>
        </div>
        <div class="p-5"></div>
    </div>
</template>
<script>
export default {
    name:'buttongroup',
    data(){
        return{
            headface:require("@/assets/svg/hatface.svg")
        }
    }
}
</script>
<style scoped>
.bgset{
    background-image: url('../../assets/pic/bg1.png');
}
.btn-defaul {
    border-radius: 0;
    background-color: #34aa2f;
    border-color: #34aa2f;
    padding: 1rem 2rem!important;
    font-size: 18px!important;
    z-index: 99;
    text-shadow: 0 2px 0 rgba(0,0,0,.25);
    box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
}
.btn-defaul:hover{
    background-color: #313131;
    border-color: #313131;
    box-shadow: 0 -4px rgba(0,0,0,.5) inset, 0 4px rgba(255,255,255,.2) inset, -4px 0 rgba(255,255,255,.2) inset, 4px 0 rgba(0,0,0,.5) inset;   
}
.seta{
    border-radius: 0;
    background-color: #757575;
    border-color: #555;
    padding: 1rem 2rem!important;
    font-size: 18px!important;
    z-index: 99;
    text-shadow: 0 2px 0 rgba(0,0,0,.25);
    box-shadow: 0 -4px rgba(0,0,0,.5) inset, 0 4px rgba(255,255,255,.2) inset, -4px 0 rgba(255,255,255,.2) inset, 4px 0 rgba(0,0,0,.5) inset;   
}
.seta:hover{
    background-color: #313131;
    box-shadow: 0 -4px rgba(0,0,0,.5) inset, 0 4px rgba(255,255,255,.2) inset, -4px 0 rgba(255,255,255,.2) inset, 4px 0 rgba(0,0,0,.5) inset;   
}
</style>