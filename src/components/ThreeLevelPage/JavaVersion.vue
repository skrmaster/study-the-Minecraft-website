<template>
    <div>
        <navloginregister></navloginregister>
        <div v-if="show" style="height:70px;"></div>
        <navsection @vis="op($event)"></navsection>
        <div class="sectionbg">
            <div class="p-5"></div>
            <div class="container">
                <div class="row p-5">
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12 offset-1">
                        <div><img class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-6" :src="require('@/assets/pic/javaversion.jpg')"/></div>
                        <div class="text-center mt-5"><img class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-4" :src="require('@/assets/svg/esrb.svg')"/></div>
                    </div>
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12 text-white">
                        <div><h1>Minecraft Java Edition</h1></div>
                        <p class="col-xl-10 pl-0">体验原始版本的 Minecraft！Java 版本支持在Windows、Linux、macOS 之间进行跨平台联机游戏，还支持用户制作的皮肤和生物，并包含我们数十年的珍贵更新，还有更多即将到来！</p>
                        <div class="row">
                            <img :src="require('@/assets/svg/apple-w.svg')" class="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2">
                            <img :src="require('@/assets/svg/windows-w.svg')" class="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2">
                            <img :src="require('@/assets/svg/linux-w.svg')" class="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2">
                        </div>
                        <div class="mt-3 btnset">
                            <a href="#" class="btn p-0 svgset" style="position:relative">
                                <div class="imgset"></div>
                                <div class="text-center text-uppercase one text-white p-1">购买minecraft</div>
                            </a>
                        </div>
                        <div class="pt-2" style="font-weight:800;font-size:28px">NT$800.00</div>
                    </div>
                </div>
                <div class="p-5"></div>
            </div>
        </div>
        <div class="container">
            <div class="text-center">
                <h3 class="p-5" style="font-weight:700">特色</h3>
                <img class="p-5" :src="require('@/assets/pic/teshe.png')">    
            </div>
            <div class="row justify-content-center">
                <div v-for="(value,index) in teshe" :key=index class="col-lg-4 pl-5">
                    <div class="col-">
                        <img style="width:30px;height:20px" :src="require('@/assets/svg/heart.svg')">
                        <span class="ml-2">{{value.text}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-5"></div>
        <downtable></downtable>
        <footer1></footer1>
    </div>
</template>
<script>
import navloginregister from '@/components/NavLoginRegister.vue'
import navsection from '@/components/NavSection.vue'
import downtable from '@/components/ThreeLevelPage/JavaVersionSectionBody.vue'

import footer1 from '@/components/Footer.vue'

export default {
    name:'javaversion',
    components:{
        navloginregister,
        navsection,
        downtable,
        footer1
    },
    data(){
        return{
            show:false,
            teshe:{
                one:{
                    text:'适用于 Windows、Linux 以及 Mac'
                },
                two:{
                    text:'访问快照，以便及早体验新功能'
                },
                three:{
                    text:'支持用户制作的皮肤和模块'
                },
                four:{
                    text:'通过游戏启动器及时接收更新'
                },
                five:{
                    text:'兼容 Java 版本 Realms'
                },
                six:{
                    text:'您可以免费试玩'
                },
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
<style scoped>
.sectionbg{
    background-image: url('../../assets/pic/javaversionsectionbg.png');
}
.imgset {
    width: 150px;
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
.one{
    position: absolute;
    top:8px;
    left:10px;
    text-shadow: 0 2px 0 rgba(0,0,0,.25);
}
</style>