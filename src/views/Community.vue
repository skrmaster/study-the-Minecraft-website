<template>
    <div>
        <navheader></navheader>
        <div>
            <div v-if="show" style="height:70px;"></div>
            <navSection @vis="op($event)" id="section2height"></navSection>
        </div>
        <div style="background-color:black;">
            <div class="container setbg">
                <div style="height:600px;position:relative;">
                    <sectionjum></sectionjum>
                </div>
            </div>
        </div>
        <div id="height">
            <b-nav pills v-b-scrollspy :style="fixtop" class="row justify-content-center p-4 bg-dark mx-auto">
                <b-nav-item href="#new" >新奇事物</b-nav-item>
                <b-nav-item href="#youtub" >YOUTUBE</b-nav-item>
                <b-nav-item href="#works" >创作品</b-nav-item>
                <b-nav-item href="#help" >讨论与帮助</b-nav-item>
                <b-nav-item href="#bugback">反馈</b-nav-item>
            </b-nav>
            <div id="nav-scroller">
                <div id="new">
                    <sectionnew></sectionnew>
                </div>
                <div id="youtub" class="videobg position-relative">
                    <div class="sectionendhead"></div>              
                    <div class="setbgdown"></div>
                    <sectioniframe></sectioniframe>
                </div>
                <div id="help">
                    <buttongroup></buttongroup>
                </div>
                <div id="bugback">
                    <sectionend></sectionend>
                </div>
                <div class="mt-5 text-center">
                    <div class="text-uppercase follow-text-set">Follow minecraft</div>
                    <div class="mt-5 btnset">
                        <router-link to="#" v-for="(classth, index) in iconsvg" :key=index class="btn p-0 svgset ml-4" style="position:relative">
                            <div class="imgset"></div>
                            <div :class=classth></div>
                        </router-link>
                    </div>
                </div>
                <div class="p-5"></div>
            </div>
        </div>
        <footer1></footer1>
    </div>
</template>
<script>
import navheader from '@/components/NavLoginRegister.vue'
import navSection from '@/components/NavSection.vue'
import sectionjum from '@/components/CommunityPage/SectionJum.vue'
import sectionnew from '@/components/CommunityPage/SectionNew.vue'
import sectioniframe from '@/components/CommunityPage/SectionIframe.vue'
import buttongroup from '@/components/CommunityPage/SectionButtonGroup.vue'
import sectionend from '@/components/CommunityPage/SectionEnd.vue'

import footer1 from '@/components/Footer.vue'

export default {
    name:'community',
    components:{
        navheader,
        navSection,
        sectionjum,
        sectionnew,
        sectioniframe,
        buttongroup,
        sectionend,
        footer1
    },
    data(){
        return{
            show:false,
            fixtop:'',
            scroll:'',
            iconsvg:{
                one1:'onesvgset',
                two2:'twosvgset',
                three3:'threesvgset',
                four4:'foursvgset'
            }
        }
    },
    methods:{
        menu(){
            let height = document.getElementById("height").offsetTop;
            let section2height = document.getElementById("section2height").offsetTop;
            this.scroll = document.documentElement.scrollTop;
            
            if (this.scroll >= (height -section2height)){
              this.fixtop = 'position:fixed;top:70px;z-index:999;width:100%;box-shadow: 0 5px 0 0 rgba(0,0,0,.25);'
            }
            else{
              this.fixtop = ''
            }
        },
        op($event){
            this.show = $event
        }
    },
    mounted(){
        this.$nextTick(function(){
            window.addEventListener('scroll', this.menu)
        }),
        window.addEventListener('onload', this.beforeset)
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
.setbg {
    z-index: 998;
    background-size: cover;
    background-position: center;
    background-image: url("../assets/pic/community/sectionbg.png");
}
.nav-item a{
    color:#fff;
    font-size:12px;
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
.videobg{
    background-image: url('../assets/pic/bg2.png');
}
.sectionendhead {
    height:100px;
    background-image: url('../assets/pic/bg1.png');
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