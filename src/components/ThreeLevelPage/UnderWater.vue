<template>
    <div>
        <navloginregister></navloginregister>
        <div v-if="show" style="height:70px;"></div>
        <navsection @vis="op($event)" v-show="value"></navsection>
        <div style="background-color:#12214a">
            <div class="position-relative">
                <div class="container">
                    <div class="bluebg position-absolute">
                        <div v-for="i in 9" :key=i :class="'bgset' + i + ' position-absolute'"></div>
                    </div>
                    <div class="row">
                        <div class="col-xl-6 text-center text-white">
                            <div class="p-5"></div>
                            <div style="text-shadow:0 4px 0 rgba(0,0,0,.65)"><b>水底乐趣已经到来</b></div>
                            <div style="text-shadow:0 4px 0 rgba(0,0,0,.65)"><h1>更新版水域世界!</h1></div>
                            <div>
                                <p>深吸一口气，潜入水面下生机勃勃的活力新世界！琳琅满目的海洋生物、
                                    全新怪物和五彩缤纷的海洋景观，Minecraft 的海洋将迎来史上最大的一次更新！
                                </p>
                            </div>
                            <div class="d-flex justify-content-center position-relative" style="z-index:600">
                                <div class="d-flex align-self-center videobgse position-relative">
                                    <span class="btn btn-success btnset seta position-relative" @click="showvideo(),$emit('hidescrollY'),hidenav()">
                                        <b-icon icon="camera-video-fill" style="z-index:1"></b-icon>
                                    </span>
                                </div>
                                <div class="position-absolute align-self-end text-center text-white p-2" style="background-color: rgba(0,0,0,.65);width:274px">观看预告片</div>
                            </div>

                        </div>
                        <div class="col-xl-6 position-relative">
                            <div class="p-5"></div>
                            <div class="twomanrun">
                                <img class="col-xl-10 d-none d-xl-block" :src="require('@/assets/pic/aquatic/towman.png')"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="background-color:#12214a">
            <div class="p-5"></div>
            <a href="#" class="position-relative svgset text-white" style="display:block;z-index:600">
                <div class="btn buybtn btn-success col-xl-4 col-lg-6 col-md-8 col-sm-8 col-10 offset-xl-4 offset-lg-3 offset-md-2 offset-sm-2 offset-1" style="height:100px;"></div>
                <div class="text-center col-xl-4 col-lg-6 col-md-8 col-sm-8 col-10 offset-xl-4 offset-lg-3 offset-md-2 offset-sm-2 offset-1 position-absolute" style="top:15px;">
                    <h3> 购买Minecraft(我的世界)</h3>
                    <span> Java Edition (PC & MAC) - </span>
                    <span>US$26.95</span>
                </div>
            </a>
            <div class="p-5"></div>
            <div class="p-5"></div>
        </div>
        <div style="height:0px;width:0px;overflow:hidden;clip-path:circle(0% at 50% 50%);" ref="video">
            <div class="container">
                <div class="text-center">
                    <div class="col-xl-8 col-lg-10 col-md-8 col-sm-8 col-12 offset-6">
                        <span class="btn btn-success btnset seta position-relative" @click="close(),$emit('showscrollY'),shownav()">
                            <b-icon icon="x" style="z-index:1;transform:scale(3)"></b-icon>
                        </span>
                    </div>
                    <div>
                        <iframe class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mt-4 p-0" style="height:600px"
                        src="https://www.youtube.com/embed/hcutClmY1pI?modestbranding=1&autohide=1&showinfo=0&controls=1&frameborder=0&rel=0&start=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fwww.minecraft.net&widgetid=1"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <footer1></footer1>
    </div>
</template>
<script>
import navloginregister from '@/components/NavLoginRegister.vue'
import navsection from '@/components/NavSection.vue'

import footer1 from '@/components/Footer.vue'

export default {
    name:'underwater',
    components:{
        navloginregister,   
        navsection,
        footer1
    },
    data(){
        return{
            value:true,
            show:false
        }
    },
    methods:{
        hidenav(){
            this.value = !this.value
        },
        shownav(){
            this.value = !this.value
        },
        showvideo(){
            this.$refs.video.style.position = 'fixed'
            this.$refs.video.style.background = 'black'
            this.$refs.video.style.transition = 'all ease .5s'
            this.$refs.video.style.zIndex = '1000'
            this.$refs.video.style.bottom = '0'
            this.$refs.video.style.right = '0'
            this.$refs.video.style.width = '100%'
            this.$refs.video.style.height = '100%'
            this.$refs.video.style.transition = 'clip-path .6s ease'
            this.$refs.video.style.clipPath = 'circle(100% at 50% 50%)'
        },
        close(){
            this.$refs.video.style.clipPath = 'circle(0% at 50% 50%)'
        },
        op($event){
          this.show = $event
        }
    }
}
</script>
<style scoped>
@keyframes bluerun {
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(20px);
    }
    100%{
        transform: translateY(0px);
    }
}
@keyframes blueshow {
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;      
    }
    100%{
        opacity: 0;
    }
}
.bluebg{
    overflow: hidden;
    height: 680px;
    max-width: 1200px;
    left: 0;
    right: 0;
    margin: auto;
    -webkit-filter: blur(50px);
    filter: blur(50px);
}
.bgset1{
    background-image: radial-gradient(50% 99% at top,#5ac0ff 50%,#12214a 99%);
    width: 100%;
    height: 100%;
    z-index: 1;
}
.bgset2{
    background-image: radial-gradient(50% 50% at top,#5ac0ff 50%,rgba(0,0,255,0) 98%);
    width: 60%;
    height: 95%;
    z-index: 2;
    left: 25%;
    animation: bluerun 2s ease-in-out infinite
}
.bgset3{
    background-image: radial-gradient(50% 100% at top,#3164dd 50%,rgba(0,0,255,0) 100%);
    width: 70%;
    height: 55%;
    z-index: 3;
    animation: bluerun 2s ease-in-out infinite
}
.bgset4{
    background-image: radial-gradient(52% 60% at top,#3164dd 25%,rgba(0,0,255,0) 75%);
    width: 70%;
    height: 95%;
    z-index: 4;
    left: 40%;
    top: 5%;
}
.bgset5{
    background-image: radial-gradient(50% 45% at top,#3164dd 50%,rgba(0,0,255,0) 100%);
    width: 75%;
    height: 100%;
    z-index: 5;
    left: 0;
    right: 0;
    margin: auto;
    animation: blueshow 4s ease-in-out infinite;
}
.bgset6{
    background-image: radial-gradient(50% 100% at top,#3164dd 50%,rgba(0,0,255,0) 100%);
    width: 70%;
    height: 65%;
    right: 0;
    z-index: 6;
    animation: blueshow 4s ease-in-out infinite;
}
.bgset7{
    background-image: radial-gradient(50% 100% at top,#3164dd 50%,rgba(0,0,255,0) 100%);
    width: 70%;
    height: 95%;
    right: 0;
    left: 0;
    margin: auto;
    z-index: 7;
    animation: blueshow 4s ease-in-out infinite;
}
.bgset8{
    background-image: radial-gradient(50% 110% at top,#17a6fe 44%,rgba(88,190,255,.61) 78%,rgba(0,0,255,0) 90%);
    width: 94%;
    height: 80%;
    right: 0;
    left: 0;
    margin: auto;
    z-index: 8;
    animation: blueshow 4s ease-in-out infinite;
}
.bgset9{
    background-image: radial-gradient(50% 50% at top,#0073ba 50%,rgba(0,0,255,0) 100%);
    width: 70%;
    height: 110%;
    top: -20%;
    z-index: 9;
    animation: blueshow 4s ease-in-out infinite;
}

@keyframes manrun {
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(10px);
    }
    100%{
        transform: translateY(0px);
    }
}

.twomanrun{
    position:absolute;
    animation: manrun 7s ease-in-out infinite;
}

.bgset{
    background-image: radial-gradient(50% 110% at top,#17a6fe 44%,rgba(88,190,255,.61) 78%,rgba(0,0,255,0) 90%);
}

.videobgse {
    border: 3px solid #5ac0ff;
    width: 280px;
    height: 170px;
    background-image:url("../../assets/pic/aquatic/videobg1.jpg")
}
a {
    cursor: pointer;
}
.seta:hover {
    transform: scale(1.2);
    transition: 625ms cubic-bezier(0,.8,.25,1);
}
.seta {
    margin-left: 100px !important;
    margin-top: 50px !important;
}
.btnset:before {
    content: '';
    width: 51.3px;
    height: 51.3px;
    left: 50%;
    background: #34aa2f;
    transform: translateY(-26px) translateX(-50%) rotateX(58deg) rotate(45deg);
    border-top: 6px solid #64fd1f;
    border-left: 6px solid #47d009;
    box-shadow: 2px 2px 0 transparent;
    position: absolute;
    top: 0;
    box-sizing: border-box;
}
.btnset {

    border-radius: 0;
    background: #34aa2f;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 42px;
    padding: 0;
    box-sizing: content-box;
    margin: 19px 0;
    border-right: 4px solid #47d009;
    border-left: 4px solid #1e8c03;
    position:absolute;
}
.btnset:after {
    content: '';
    width: 51.3px;
    height: 51.3px;
    left: 50%;
    background: #34aa2f;
    transform: translateY(-26px) translateX(-50%) rotateX(58deg) rotate(45deg);
    border-bottom: 6px solid #1e8c03;
    border-right: 6px solid #1e8c03;
    box-shadow: 2px 2px 0 transparent;
    position: absolute;
    top: 44px;
    box-sizing: border-box;
}
.svgset:hover .buybtn {
    transform: scale(1.1);
    transition: all .2s;
    box-shadow: 0 -4px rgba(0,0,0,.3) inset, 0 4px rgba(255,255,255,.5) inset, -4px 0 rgba(255,255,255,.5) inset, 4px 0 rgba(0,0,0,.3) inset;
}
.buybtn {
    border-radius: 0;
    border-color: #28a745;
    background-color:#008542;
    box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
}

</style>