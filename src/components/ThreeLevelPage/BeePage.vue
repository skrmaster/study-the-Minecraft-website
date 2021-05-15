<template>
    <div>
        <navloginregister></navloginregister>
        <div v-if="show" style="height:70px;"></div>
        <navsection @vis="op($event)"></navsection>
        <div>
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div style="z-index:-10"><img :src=pic  class="col-xl-12 col-lg-10 col-md-10 col-sm-8 col-12"></div>
                </div>
                <div class="row justify-content-center">
                    <div style="z-index:900;margin-top:-25px;">
                        <div class="col-xl-12 col-lg-10 col-md-10 col-sm-10 text-center col-12 text-uppercase text-white p-2" style="background-color:#252525">new</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="p-5" style="background:#eee"></div>
        <div style="background:#eee">
            <div class="container">
                <div class="row justify-content-around">
                    <div class="col-md-2 col-lg-2">
                        <div>
                            <h6><b>作者</b></h6>
                            <p>kelsey Howard</p>
                        </div>
                        <div>
                            <h6><b>发布日期</b></h6>
                            <p>2019/12/04</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-8 col-lg-8">
                        <beestory></beestory>
                        <div class="text-center p-5"><b>分享此故事</b></div>
                        <div class="text-center mr-3">
                            <div class="btnset">
                                <a href="#" v-for="(classth, index) in iconsvg" :key=index class="btn p-0 svgset ml-4" style="position:relative">
                                    <div class="imgset"></div>
                                    <div :class=classth></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-5" style="background:#eee"></div>
        <footer1></footer1>
    </div>
</template>
<script>
import beestory from "@/assets/beestory.md"

import navloginregister from '@/components/NavLoginRegister.vue'
import navsection from '@/components/NavSection.vue'

import footer1 from '@/components/Footer.vue'

export default {
    name:'bee',
    components:{
        beestory,
        navloginregister,
        navsection,
        footer1
    },
    data(){
        return{
            show:false,
            pic:require("@/assets/pic/beesectionpic.png"),
            iconsvg:{
                one1:'onesvgset',
                two2:'twosvgset',
                three3:'threesvgset'
            }
        }
    },
    methods:{   
        op($event){
          this.show = $event
        }
    }
}
</script>
<style lang="scss" scoped>
$svgbg1:url("../../assets/svg/instagrampic.svg");
$svgbg2:url("../../assets/svg/twitterpic.svg");
$svgbg3:url("../../assets/svg/reddit.svg");

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