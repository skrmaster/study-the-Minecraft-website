<template>
    <div class="wholeset col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3" @mouseover=soildaction() @mouseout=soildoff()>
        <div  class="imgsetsilde">
            <b-img :src=data.pic ref="imgNode" class="imgset"></b-img>
        </div>
        <div ref="animotionNode" class="text-center text-uppercase sildetext" @mouseover=soildaction() @mouseout=soildoff()>
            <div class="whiteblock">{{data.titleblock}}</div>
            <div class="fontset"><P class="col-md-12">{{data.title}}</P></div>
            <div class="text-white mt-4"><P class="fontsetc col-md-12" ref="fontset">{{data.titlesmall}}</P></div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        data:Object
    },
    methods:{
        soildaction(){
            this.$refs.animotionNode.style.height = '130px'
            this.$refs.imgNode.style.transform = 'scale(1.1)'
            this.$refs.imgNode.style.transition = 'all .4s'
            this.$refs.fontset.style.transition = 'all 1s'
            this.$refs.fontset.style.opacity = '1'
            
        },
        soildoff(){
            this.$refs.animotionNode.style.height = '80px'
            this.$refs.imgNode.style.transform = 'scale(1)'
            this.$refs.imgNode.style.transition = 'all .4s'
        }
    }
}
</script>
<style scoped>
.wholeset {
    height: 270px;
    width: 270px;
    position: relative;
    overflow: hidden;
}
.imgsetsilde {
    height: 270px;
    width: 270px;
    overflow:hidden;
}
.sildetext {
    height: 80px;
    width: 100%;
    position:absolute;
    bottom:0px;
    background-color: rgba(0,0,0,.7);
    transition: all .2s;
}
.whiteblock {
    display: inline-block;
    font-size: .625rem;
    font-weight: 700;
    letter-spacing: 1px;
    background-color: #fff;
    color: #1d1e1e;
    padding: .5rem 1rem;
    text-transform: uppercase;
    position: relative;
    bottom: 15px;

}
.fontset {
    color:#fff;
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
}
.fontsetc{
    font-size: 14px;
    opacity: 0;
}
</style>