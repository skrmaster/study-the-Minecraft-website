<template>
    <div class="container">
        <div class="row justify-content-around">
            <div v-if="data.imgposset == 'left'" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-5 mb-5">
                <b-img :src=data.pic class="col-xl-12 col-lg-10 col-md-10 col-sm-10 col-10 pr-5"></b-img>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mt-5">
                <div class="p-4" style="background-color:#fff"><h2 class="text-uppercase">{{data.title}}</h2></div>
                <div class="p-3" style="background-color:#fff">
                    <p class="textset">{{data.titlesmall}}</p>
                </div>
            </div>
            <div v-if="data.imgposset == 'right'" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 mt-5 mb-5">
                <b-img :src=data.pic class="col-xl-12 col-lg-10 col-md-10 col-sm-10 col-10 pl-5"></b-img>
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
</style>