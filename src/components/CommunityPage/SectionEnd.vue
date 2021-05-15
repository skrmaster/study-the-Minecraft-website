<template>
    <div>
        <div class="container">
            <div class="row justify-content-center"><h1 class="p-5">反馈</h1></div>
            <div class="row justify-content-center">
                <div v-for="(data, index) in goback" :key=index class="text-center col-md-5 col-xl-5 col-lg-5 col-sm-5 col-12 mb-2 mx-auto" style="background-color:#d8d8da"> 
                    <div><img :src=data.gobackpic style="height:130px;widht:130px;"></div>
                    <div><h3>{{data.title}}</h3></div>
                    <div class="p-4"><a href="#" class="aset">{{data.titlesmall}}</a></div>
                </div>
            </div>
        </div>
        <div class="p-5"></div>
    </div>
</template>
<script>
export default {
    name:'sectionend',
    data(){
        return{
            goback:{
                one:{
                    gobackpic:require("@/assets/pic/community/spider.png"),
                    title:'发现 BUG ?',
                    titlesmall:'在此处报告！'
                },
                two:{
                    gobackpic:require("@/assets/pic/community/mail.png"),
                    title:'建言献策 ?',
                    titlesmall:'在此处提交！'
                }
            }
        }
    }
}
</script>

<style scoped>
.aset{
    text-decoration:none;
    color:#288123;
    font-weight: 700;
}
</style>