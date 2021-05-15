<template>
    <div :class="data.class" :id="data.ref">
        <a href="#">
            <b-img :src=data.pic class="imgset"></b-img>
        </a>
        <div>
            <p class="text-uppercase col-6 offset-3" style="font-size:18px;"><b>{{data.title}}</b></p>
        </div>
        <div>
            <div class="settext col-xl-10 offset-xl-1 col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-10 offset-1 "><p>{{data.titleSmall}}</p></div>
        </div>
        <a href="#" class="aset"><b>了解更多</b></a>
    </div>
</template>
<script>
export default {
    props:{
        data:Object
    },
    data(){
        return{
            wd:''
        }
    },
    methods:{

    },
    mounted(){
        let wd2 = document.getElementById('one');
        this.wd = wd2.offsetWidth + parseInt(window.getComputedStyle(wd2,null).getPropertyValue("margin-right"))
        this.$emit('width',this.wd)
    }
}
</script>
<style lang="scss" scoped>

@media (min-width: 1200px) {
        .widthset {
        width:220px;
        margin-right: 75px;
    }
}
@media (max-width: 1199px) and (min-width: 992px){
        .widthset {
        width: 260px;
        margin-right: 45px;
    }
}
@media (max-width: 991px) and (min-width: 768px){
        .widthset {
        width: 350px;
        margin-right: -20px;
    }
}
@media (max-width: 767px) and (min-width: 576px){
        .widthset {
        width: 300px;
        margin-right: -20px;
    }
}
@media (max-width: 576px) {
    .widthset{
        width: 300px;
        margin-right: -20px;
    }
}
.imgset {
    width: 216px;
    height: 334px;
    text-decoration: none;
    border:2px #fff solid;
    transition: all .4s;
    &:hover {
        transform:scale(1.02);
        border:2px #288123 solid;
    }
}
.aset {
    text-decoration: none;
    color:#196d17!important;
}
.settext {
    font-size: 14px;
    font-family: 'Noto Sans';
    line-height: 20px;
    font-weight: 400;
    text-transform: none;
}
</style>