<template>
    <div>
        <navloginregister></navloginregister>
        <div v-if="show" style="height:70px;"></div>
        <navsection @vis="op($event)" v-show="value"></navsection>
        <div class="position-relative">
            <div class="col-md-6 d-none d-sm-block d-md-block d-lg-block position-absolute" style="left:0">
                <span v-for="(value, index) in manlist" :key=index :class="'position-absolute ' + value.class"></span>
            </div>
            <div class="col-md-6 d-none d-sm-block d-md-block d-lg-block position-absolute" style="right:0">
                <span v-for="(value, index) in badmanlist" :key=index :class="'position-absolute ' + 'bad'+value.class"></span>
            </div>
        </div>
        <div class="bgset">
            <div class="container">
                <div class="text-center p-5" style="z-index:600">
                    <div><b>新的社区暗藏新的威胁</b></div>
                    <div><h1>全 新 的 村 庄 ！</h1></div>
                    <div><p>探索最具冒险性的更新版本！抵御新的威胁，使用新方块进行建造，体验全新的村庄生活。</p></div> 
                </div>
                
                <div class="d-flex justify-content-center position-relative" style="z-index:600">
                    <div class="d-flex align-self-center videobgse position-relative">
                        <span class="btn btn-success btnset seta position-relative" @click="showvideo(),$emit('hidescrollY'),hidenav()">
                            <b-icon icon="camera-video-fill" style="z-index:1"></b-icon>
                        </span>
                    </div>
                    <div class="position-absolute align-self-end text-center text-white p-2" style="background-color: rgba(0,0,0,.65);width:274px">观看预告片</div>
                </div>
                <div class="p-3"></div>
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
                <div class="p-5"></div>
                <div class="p-5"></div>
                <div class="p-5"></div>
                <div class="p-5"></div>
            </div>
        </div>
        <div v-if="arrow">
            <div v-for="(data, index) in pic" :ref="data.name" :key=index :class="data.name">
                <img :src="data.arrowpic"/>
            </div>
        </div>
        <div class="video" ref="video">
            <div class="container">
                <div class="text-center">
                    <div class="col-xl-8 col-lg-10 col-md-8 col-sm-8 col-12 offset-6">
                        <span class="btn btn-success btnset seta position-relative" @click="close(),$emit('showscrollY'),shownav()">
                            <b-icon icon="x" style="z-index:1;transform:scale(3)"></b-icon>
                        </span>
                    </div>
                    <div>
                        <iframe class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-12 mt-4 p-0" style="height:600px"
                        src="https://www.youtube.com/embed/gcf9FM4TbN4?modestbranding=1&autohide=1&showinfo=0&
                        controls=1&frameborder=0&rel=0&start=0&autoplay=1&enablejsapi=1"></iframe>
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
    name:'town',
    components:{
        navloginregister,
        navsection,
        footer1
    },
    data(){
        return{
            value:true,
            show:false,
            arrow:false,
            manlist:{
                one:{
                    class:'man1'
                },
                two:{
                    class:'man2'
                },
                three:{
                    class:'man3'
                },
                four:{
                    class:'man4'
                },
                five:{
                    class:'man5'
                },
                six:{
                    class:'man6'
                },
                seven:{
                    class:'man7'
                },
                eight:{
                    class:'man8'
                },
                night:{
                    class:'man9'
                },
                ten:{
                    class:'man10'
                },
                eleven:{
                    class:'man11'
                },
                twolve:{
                    class:'man12'
                },
                thirteen:{
                    class:'man13'
                },
                fourteen:{
                    class:'man14'
                },
                fiveteen:{
                    class:'man15'
                },
                sixteen:{
                    class:'man16'
                }
            },
            badmanlist:{
                one:{
                    class:'man1'
                },
                two:{
                    class:'man2'
                },
                three:{
                    class:'man3'
                },
                four:{
                    class:'man4'
                },
                five:{
                    class:'man5'
                },
                six:{
                    class:'man6'
                },
                seven:{
                    class:'man7'
                },
                eight:{
                    class:'man8'
                },
                night:{
                    class:'man9'
                },
                ten:{
                    class:'man10'
                },
                eleven:{
                    class:'man11'
                },
                twolve:{
                    class:'man12'
                },
                thirteen:{
                    class:'man13'
                },
                fourteen:{
                    class:'man14'
                },
                fiveteen:{
                    class:'man15'
                },
                sixteen:{
                    class:'man16'
                },
                seventeen:{
                    class:'man17'
                },
                eighteen:{
                    class:'man18'
                },
                nineteen:{
                    class:'man19'
                },
                twenty:{
                    class:'man20'
                }
            },
            pic:{
                one:{
                    arrowpic:require("@/assets/pic/town/arrow-m.png"),
                    name:'arrow1',
                    leave:'leave1'
                },
                two:{
                    arrowpic:require("@/assets/pic/town/arrowr-m.png"),
                    name:'arrow2',
                    leave:'leave2'
                },
                // three:{
                //     arrowpic:require("@/assets/pic/town/arrowr-m.png"),
                //     name:'arrow3',
                // },
                // four:{
                //     arrowpic:require("@/assets/pic/town/arrowr-s.png"),
                //     name:'arrow4',
                // },
            }
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
            this.$refs.video.style.top = '0'
            this.$refs.video.style.left = '0'

            this.$refs.video.style.transition = 'clip-path .6s ease'

            this.$refs.video.style.background = 'black'
            this.$refs.video.style.zIndex = '1000'
            this.$refs.video.style.clipPath = 'circle(100% at 50% 50%)'
 
            this.$refs.video.style.width = '100%'
            this.$refs.video.style.height = '100%'
            
        },
        close(){
            this.$refs.video.style.clipPath = 'circle(0% at 50% 50%)'
        },
        arrowrun(){
            this.arrow = true
        },
        setclass(){
            this.arrow = true
        },
        removeclass(){
            this.arrow = false
        },
        op($event){
          this.show = $event
        }
    },
    mounted(){
        this.arrowrun();
        setInterval(() => {
            this.removeclass()
        }, 8600);
        setInterval(() => {
            this.setclass()
        }, 8601);
    }
}
</script>
<style lang='scss' scoped>

.video{
    height:0px; 
    width:0px;
    overflow:hidden;
    clip-path:circle(0% at 50% 50%);
}
.arrow1{
    position:fixed;
    z-index: 999;
    animation:arrow1 1s linear 2.2s;
}
.arrow2{
    position:fixed;
    z-index: 999;
    animation:arrow1 1s linear 4.4s reverse;
}
@keyframes arrow1 {
    0%{
        left:0%;
        top:50%;
        transform: rotate(-10deg);
    }
    25%{
        left:25%;
        top:40%;
    }
    50%{
        left:50%;
        top:40%;
    }
    75%{
        left:75%;
        top:40%;
    }
    100%{
        left:100%;
        top:50%;
        transform: rotate(10deg);
    }
}




.bgset {
    z-index:999;
    background-size: cover;
    background-position: center;
    background-image:url("../../assets/pic/town/bg.png")
}
.videobgse {
    border: 3px solid #f3ca90;
    width: 280px;
    height: 170px;
    background-image:url("../../assets/pic/town/videobg.png")
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
@mixin man($w,$h,$bw,$bh,$s,$x,$y,$l) {
    background: url(../../assets/pic/town/css-sprite-combined.png) $bw $bh;
    width: $w;
    height: $h;
    display: inline-block;
    -webkit-transform: scale($s);
    -ms-transform: scale($s);
    transform: scale($s);
    z-index: $l;
    opacity: 0;
}
@mixin badman($w,$h,$bw,$bh,$s,$x,$y,$l) {
    background: url(../../assets/pic/town/css-sprite-combined.png) $bw $bh;
    width: $w;
    height: $h;
    display: inline-block;
    transform: scale($s);
    -webkit-transform: scale($s);
    -ms-transform: scale($s);
    z-index: $l;
    opacity: 0;
}
@mixin manrun($name,$w,$s,$x,$y,$x100){
    @keyframes #{$name} {
        from{
            transform-origin: $x100 $y;
        }
        to{
            transform-origin: $x $y;
            -webkit-transform-origin: $x $y;
            -ms-transform-origin: $x $y;
            opacity: 1;
        }
    }
}
@mixin badmanrun($name,$w,$s,$x,$y,$x100){
    @keyframes #{$name} {
        from{
            transform-origin: $x100 $y;
        }
        to{
            transform-origin: $x $y;
            -webkit-transform-origin: $x $y;
            -ms-transform-origin: $x $y;
            opacity: 1;
        }
    }
}

@include manrun(manrun1,0,.5,0,90%,-100%);
.man1 {
    @include man(1036px,898px,-50px,-1310px,.5,0,90%,17);
    animation: manrun1 ease-out 1.5s forwards;
}

@include manrun(manrun2,0,.5,25%,68%,-100%);
.man2 {
    @include man(454px,800px,-5208px,-1408px,.5,25%,68%,14);
    animation: manrun2 ease-out 1.5s forwards;
}

@include manrun(manrun3,0,.5,155%,180%,-100%);
.man3 {
    @include man(444px,402px,-5712px,-1806px,.5,155%,180%,13);
    animation: manrun3 ease-out 1.5s forwards;
}

@include manrun(manrun4,0,.5,-29%,29%,-100%);
.man4 {
    @include man(790px,810px,-12274px,-1398px,.6,-29%,29%,1);
    animation: manrun4 ease-out 1.5s forwards;
}

@include manrun(manrun5,0,.5,-5%, 355%,-100%);
.man5 {
    @include man(342px, 330px, -13818px, -1878px, .5, -5%, 355%, 15);
    animation: manrun5 ease-out 1.5s forwards;
}

@include manrun(manrun6,0,.5,95%,118%,-100%);
.man6 {
    @include man(336px,640px,-28062px,-1568px,.5,95%,118%,16);
    animation: manrun6 ease-out 1.5s forwards;
}

@include manrun(manrun7,0,.5,542%,270%,-100%);
.man7 {
    @include man(128px,264px,-28448px,-1944px,.5,542%,270%,12);
    animation: manrun7 ease-out 1.5s forwards;
}

@include manrun(manrun8,0,.5,18%,157%,-100%);
.man8 {
    @include man(196px,436px,-28626px,-1772px,.5,18%,157%,13);
    animation: manrun8 ease-out 1.5s forwards;
}

@include manrun(manrun9,0,.5,100%,275%,-100%);
.man9 {
    @include man(94px,192px,-28872px,-2016px,.5,100%,275%,12);
    animation: manrun9 ease-out 1.5s forwards;
}

@include manrun(manrun10,0,.5,-35%,198%,-100%);
.man10 {
    @include man(146px,292px,-29016px,-1916px,.5,-35%,198%,12);
    animation: manrun10 ease-out 1.5s forwards;
}

@include manrun(manrun11,0,.5,260%,180%,-100%);
.man11 {
    @include man(228px,446px,-29212px,-1762px,.5,260%,180%,16);
    animation: manrun11 ease-out 1.5s forwards;
}

@include manrun(manrun12,0,.5,225%,280%,-100%);
.man12 {
    @include man(80px,184px,-29490px,-2024px,.5,225%,280%,2);
    animation: manrun12 ease-out 1.5s forwards;
}

@include manrun(manrun13,0,.5,22%,144%,-100%);
.man13 {
    @include man(366px,582px,-29620px,-1626px,.5,22%,144%,14);
    animation: manrun13 ease-out 1.5s forwards;
}

@include manrun(manrun14,0,.5,275%,180%,-100%);
.man14 {
    @include man(186px,352px,-5208px,-1408px,.5,275%,180%,15);
    animation: manrun14 ease-out 1.5s forwards;
}

@include manrun(manrun15,0,.5,-35%,110%,-100%);
.man15 {
    @include man(370px,740px,-30272px,-1468px,.5,-35%,110%,16);
    animation: manrun15 ease-out 1.5s forwards;
}

@include manrun(manrun16,0,.5,300%,235%,-100%);
.man16 {
    @include man(232px,348px,-30692px,-1860px,.5,300%,235%,14);
    animation: manrun16 ease-out 1.5s forwards;
}




@include badmanrun(badmanrun1,0,.5,145%,20%,1000%);
.badman1 {
    @include badman(620px,794px,-11604px,-1414px,.6,145%, 0,1);
    animation: badmanrun1 ease-out 1s forwards;
}

@include badmanrun(badmanrun2,0,.5,160%, 75%,1500%);
.badman2 {
    @include badman(454px,592px,-13114px, -1616px,.5,160%, 75%,21);
    animation: badmanrun2 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun3,0,.5,18%, 90%,1500%);
.badman3 {
    @include badman(790px,888px,-16994px,-1320px,.5,18%, 90%,22);
    animation: badmanrun3 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun4,0,.5,1250%,300%,1500%);
.badman4 {
    @include badman(118px,166px,-17834px,-2042px,.6,1250%,300%,15);
    animation: badmanrun4 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun5,0,.5,389%, 311%,1500%);
.badman5 {
    @include badman(218px, 190px,-18002px, -2018px, .5,389%, 311%, 15);
    animation: badmanrun5 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun6,0,.5,178%,178%,1500%);
.badman6 {
    @include badman(304px,430px,-18270px,-1778px,.5,178%,178%,17);
    animation: badmanrun6 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun7,0,.5,220%,160%,1500%);
.badman7 {
    @include badman(396px,640px,-18624px,-1568px,.5,220%,160%,20);
    animation: badmanrun7 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun8,0,.5,540%,215%,1500%);
.badman8 {
    @include badman(180px,244px,-19070px, -1964px,.5,540%,215%,14);
    animation: badmanrun8 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun9,0,.5,70%,130%,1500%);
.badman9 {
    @include badman(468px,484px,-19300px,-1724px,.5,70%,130%,16);
    animation: badmanrun9 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun10,0,.5,78%,78%,1500%);
.badman10 {
    @include badman(835px,726px,-19818px,-1482px,.5,78%,78%,19);
    animation: badmanrun10 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun11,0,.5,200%,215%,1500%);
.badman11 {
    @include badman(294px,282px,-20718px,-1926px,.5,200%,215%,16);
    animation: badmanrun11 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun12,0,.5,750%,350px,1500%);
.badman12 {
    @include badman(96px,128px,-21062px,-2080px,.5,750%,350px,10);
    animation: badmanrun12 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun13,0,.5,240%,300%,1500%);
.badman13 {
    @include badman(424px,428px,-21208px, -1780px,.5,240%,300%,21);
    animation: badmanrun13 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun14,0,.5,510%,220%,1500%);
.badman14 {
    @include badman(208px,300px,-21682px,-1908px,.5,510%,220%,15);
    animation: badmanrun14 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun15,0,.5,155%,180%,1500%);
.badman15 {
    @include badman(408px,510px,-22104px,-1698px,.5,155%,180%,19);
    animation: badmanrun15 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun16,0,.5,775%,269%,1500%);
.badman16 {
    @include badman(144px,194px,-22562px,-2014px,.5,775%,269%,14);
    animation: badmanrun16 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun17,0,.5,775%,269%,1500%);
.badman17 {
    @include badman(144px,194px,-22562px,-2014px,.5,775%,269%,14);
    animation: badmanrun17 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun18,0,.5,755%,290%,1500%);
.badman18 {
    @include badman(174px,226px,-22756px,-1982px,.5,755%,290%,16);
    animation: badmanrun18 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun19,0,.5,855%,255%,1500%);
.badman19 {
    @include badman(156px,214px,-22980px,-1994px,.5,855%,255%,15);
    animation: badmanrun19 ease-out 1.5s forwards;
}

@include badmanrun(badmanrun20,0,.5,202%,116%,1500%);
.badman20 {
    @include badman(490px,720px,-23186px,-1488px,.5,202%,116%,19);
    animation: badmanrun20 ease-out 1.5s forwards;
}
</style>