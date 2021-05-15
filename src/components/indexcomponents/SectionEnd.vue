<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-12 text-center text-black mt-5"><h2>社区创作品</h2></div>
            <div class="col-12 col-md-12 text-center textset mt-2"><p>发现最好的 Add-On、模组，以及非凡的 Minecraft 社区正在创建的更多内容！</p></div>
            <a href="#" class="linkset col-12 col-md-12 text-center mt-2 mb-5">
                <b-img :src=linkArrow class="setarrow"></b-img>
                <span class="ml-2 mt-1">探索</span>
            </a>
        </div>
        <div class="row">
            <sectionendchild v-for="(data, index) in pic" :key=index :data=data></sectionendchild>
        </div>
        <div class="text-center mt-5">
            <a href="\" class="btn btn-default text-uppercase mt-5"><b>Learn more</b></a>
        </div>
        <div style="height:100px"></div>
        <div class="mt-5 text-center">
            <div class="text-uppercase follow-text-set">Follow minecraft</div>
            <div class="mt-5 btnset">
                <a href="#" v-for="(classth, index) in iconsvg" :key=index class="btn p-0 svgset ml-4" style="position:relative">
                    <div class="imgset"></div>
                    <div :class=classth></div>
                </a>
            </div>
        </div>
        <div class="text-center mt-5 pt-2 pb-5" style="font-family: 'Noto Sans';font-size:14px;">
            <i>   
                Xbox One、PlayStation 4、Nintendo Switch、iOS、Android 和 Windows 10 都支
                持跨平台游戏。跨平台游戏需要 Microsoft 账号。Xbox One 在线多人游戏需要 Xbox Live 金会员资格。
                PlayStation 4 在线多人游戏需要 PlayStation Plus 会员资格 。Nintendo Switch 在线多人游戏需要 
                Nintendo Switch Online 会员资格。
            </i>
        </div>
    </div>
</template>
<script>
import sectionendchild from "@/components/indexcomponents/SectionEndChild.vue"

export default {
    components:{
        sectionendchild
    },
    data(){
        return{
            linkArrow:require("@/assets/svg/link-arrow.svg"),
            pic:{
                one:{
                    pic:require("@/assets/pic/sectionend1.jpg"),
                    titleblock:'Deep Dives',
                    title:'Dressed for success',
                    titlesmall:'Don your gear, Minecraft Dungeons is (almost) here! '
                },
                two:{
                    pic:require("@/assets/pic/sectionend2.jpg"),
                    titleblock:'Marketplace',
                    title:'Happy 40th birthday, PAC-MAN!',
                    titlesmall:' Let’s celebrate with some DLC!'
                },
                three:{
                    pic:require("@/assets/pic/sectionend3.jpg"),
                    titleblock:'Deep Dives',
                    title:'Block of the Week: Honey',
                    titlesmall:'Sweet!'
                },
                four:{
                    pic:require("@/assets/pic/sectionend4.jpg"),
                    titleblock:'News',
                    title:'Minecraft Snapshot 20w21a',
                    titlesmall:'A Minecraft Java Snapshot'
                }
            },
            iconsvg:{
                one1:'onesvgset',
                two2:'twosvgset',
                three3:'threesvgset',
                four4:'foursvgset'
            },
        }
    }
}
</script>
<style lang='scss' scoped>
$svgbg1:url("../../assets/svg/instagrampic.svg");
$svgbg2:url("../../assets/svg/twitterpic.svg");
$svgbg3:url("../../assets/svg/youtubepic.svg");
$svgbg4:url("../../assets/svg/facebookpic.svg");

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
h2{
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
}
.setarrow {
    width: 15px;
    height:15px;
}
.linkset {
    color:#196d17;
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    text-decoration: none;
}
.textset {
    font-size: 15px;
    line-height: 20px;
    font-family: "Noto Sans";
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
    -moz-box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
    box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
    z-index: -1;
    
}
.svgset:hover .imgset{
    -moz-transform: scale(1.1);
    transform: scale(1.1);
    -moz-transition: all .2s;
    transition: all .2s;
    -moz-box-shadow: 0 -4px rgba(0,0,0,.3) inset, 0 4px rgba(255,255,255,.5) inset, -4px 0 rgba(255,255,255,.5) inset, 4px 0 rgba(0,0,0,.3) inset;
    box-shadow: 0 -4px rgba(0,0,0,.3) inset, 0 4px rgba(255,255,255,.5) inset, -4px 0 rgba(255,255,255,.5) inset, 4px 0 rgba(0,0,0,.3) inset;
}
.btnset .btn{
    -moz-box-shadow: none;
    box-shadow: none;
}
</style>