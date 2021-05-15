<template>
    <div class="container">
        <div class="row">
            <div v-if="data.imgposset == 'left'" class="col-md-6 mt-5 mb-5 pr-0">
                <b-img :src=data.pic class="imgset"></b-img>
            </div>
            <div class="col-md-6 mt-5 mb-5">
                <div class="pt-5"><h2 class="text-uppercase">{{data.title}}</h2></div>
                <div class="col-md-10 p-0 pt-3">
                    <p class="textset">{{data.titlesmall}}</p>
                </div>
                <div v-for="(value, index) in data.awhile" :key=index>
                    <a href="#" class="linkset">
                        <b-img :src=linkArrow class="setarrow"></b-img>
                        <span class="ml-2 pt-4">{{value}}</span>
                    </a>
                </div>
            </div>
            <div v-if="data.imgposset == 'right'" class="col-md-6 mt-5 mb-5 pl-0">
                <b-img :src=data.pic class="imgset"></b-img>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data:Object
    },
    data(){
        return{
            linkArrow:require("@/assets/svg/link-arrow.svg")
        }
    }
}
</script>
<style scoped>
.linkset{
    color:#196d17;
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    text-decoration: none;
}
h2{
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
}
.textset{
    font-size: 15px;
    line-height: 20px;
    font-family: "Noto Sans";
}
.setarrow{
    width: 15px;
    height:15px;
}
.imgset{
    height:285px;
    width:475px;
}
</style>