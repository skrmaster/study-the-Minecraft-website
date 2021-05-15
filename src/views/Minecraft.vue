<template>
    <div>
        <div>
            <navloginregister></navloginregister>
            <div>
                <div v-if="show" style="height:145px;"></div>
                <navsection @clearscroll="clears" @vis="op($event)" :data=pagetwoshow :boxshadownone=style></navsection>
            </div>
        </div>
        <div style="background-color:black">
            <div class="container setjumbg">
                <div style="height:600px;position:relative;">
                    <sectionjum></sectionjum>
                </div>
            </div>
        </div>
        <div class="setcarouselbg">
            <div class="container">
                <sectioncarousel @clearscroll="clears"></sectioncarousel>
            </div>
        </div>
        <div>
            <SectionPaginnation></SectionPaginnation>
        </div>
        <div class="sethowtorunbg p-5 text-center">
            <h3 class="text-white" style="font-size:700">如何运行</h3>
        </div>
        <div class="howtobg">
            <div class="setbgdown"></div>
            <sectionpicwhile v-for="(data, index) in leftright" :key=index :data=data></sectionpicwhile>
            <div class="setbgup"></div>
        </div>
        <div class="sethowtorunbg p-5"></div>
        <div style="background-color:#d8d8d8">
            <div class="container">
                <div class="row justify-content-center">
                    <b-img class="mt-5" :src='require("@/assets/pic/minecraft/havefunpic.png")'></b-img>
                </div>
                <div class="p-5 text-center">
                    <h3 class="text-black"><b>尽享畅玩</b></h3>
                    <p>在您喜爱的设备上轻松畅玩 Minecraft！尽享无限乐趣！</p>
                </div>  
            </div>  
        </div>
        <div class="mt-5 text-center pb-5">
            <div class="text-uppercase follow-text-set">Follow minecraft</div>
            <div class="mt-5 btnset">
                <a href="#" v-for="(classth, index) in iconsvg" :key="index" class="btn p-0 svgset ml-4" style="position:relative">
                    <div class="imgset"></div>
                    <div :class="classth"></div>
                </a>
            </div>
        </div>
        <footer1></footer1>
    </div>
</template>
<script>
import navloginregister from "@/components/NavLoginRegister.vue"
import navsection from "@/components/NavSection.vue"
import sectionjum from "@/components/minecraft/SectionJum.vue"
import sectioncarousel from "@/components/minecraft/SectionCarousel.vue"
import SectionPaginnation from "@/components/minecraft/SectionPagination.vue"
import sectionpicwhile from "@/components/minecraft/SectionPicWhile.vue"


import footer1 from "@/components/Footer.vue"

export default {
    name:'minecraft',
    components:{
        navloginregister,
        navsection,
        sectionjum,
        sectioncarousel,
        SectionPaginnation,
        sectionpicwhile,
        footer1
    },
    data(){
        return{
            show:false,
            pagetwoshow:true,
            style:'box-shadow:none',
            leftright:{
                one:{
                    imgposset:'left',
                    pic:require("@/assets/pic/minecraft/howto1.png"),
                    title:'保持足智多谋',
                    titlesmall:'成为能工巧匠，充分利用周围环境收集建造材料 - 参见砍伐树木如何助您创造新的作品。'
                },
                two:{
                    imgposset:'right',
                    pic:require("@/assets/pic/minecraft/howto2.png"),
                    title:'挺过黑夜',
                    titlesmall:'始终远离游走的生物以防不测 - 如果靠的太近，从来没有人知道后果。'
                },
                three:{
                    imgposset:'left',
                    pic:require("@/assets/pic/minecraft/howto3.png"),
                    title:'建造令人惊奇的作品',
                    titlesmall:'发现红石粉的各种使用方法，从而提升您的创造作品，让作品栩栩如生，或让作品引入注目。'
                }
            },
            iconsvg:{
                one1:'onesvgset',
                two2:'twosvgset',
                three3:'threesvgset',
                four4:'foursvgset'
            }
        }
    },
    methods:{
        clears(){
          this.$emit('clearsc')
        },
        op($event){
          this.show = $event
        }
    } 
}   
</script>
<style lang="scss" scoped>
$svgbg1:url("../assets/svg/instagrampic.svg");
$svgbg2:url("../assets/svg/twitterpic.svg");
$svgbg3:url("../assets/svg/youtubepic.svg");
$svgbg4:url("../assets/svg/facebookpic.svg");

@mixin svgbgset($svgbg){
    height: 32px;
    width: 32px;
    background-image: $svgbg;
    position: absolute;
    top:10px;
    left:8px;
    
}

.onesvgset {
    @include svgbgset($svgbg1);
}
.twosvgset {
    @include svgbgset($svgbg2);  
}
.threesvgset {
    @include svgbgset($svgbg3);
}
.foursvgset{
    @include svgbgset($svgbg4);
}
.setjumbg {
    background-size: cover;
    background-position: center;
    background-image: url("../assets/pic/minecraft/section.jpg");
}
.setcarouselbg{
    background-image: url("../assets/pic/bg2.png");
}
.sethowtorunbg{
    background-image: url("../assets/pic/bg1.png");

}
.setbgdown{
    z-index: -999;
    background-image:url("../assets/pic/bg3.png");
    height: 100px;
    background-position-x: -710px;
    background-repeat: repeat-x!important;
    width: 100%;
    margin-top: -1px;
}
.howtobg{
    background-image: url("../assets/pic/bg2.png");
}
.setbgup{
    z-index: -999;
    background-image:url("../assets/pic/bg4.png");
    height: 100px;
    background-position-x: -710px;
    background-repeat: repeat-x!important;
    width: 100%;
    margin-top: -1px;
}
.btn-default {
    color:white;
    background-color: #34aa2f!important;
    border-color: #34aa2f!important;
    padding: 1rem 2rem!important;
    font-size: 18px!important;
    text-shadow: 0 2px 0 rgba(0,0,0,.25);
    z-index: -1;
    box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
}
.follow-text-set {
    font-weight: 700;
    font-size: 18px;
    font-family:'Noto Sans';
}
.imgset {
    width: 48px;
    height: 48px;
    background-color:#008542;
    box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
    z-index: -1;
    
}
.svgset:hover .imgset{
    transform: scale(1.1);
    transition: all .2s;
    box-shadow: 0 -4px rgba(0,0,0,.3) inset, 0 4px rgba(255,255,255,.5) inset, -4px 0 rgba(255,255,255,.5) inset, 4px 0 rgba(0,0,0,.3) inset;
}
.btnset .btn{
    box-shadow: none;
}
</style>