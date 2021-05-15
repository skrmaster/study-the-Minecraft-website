<template>
    <div>
        <div>
            <navheader></navheader>
            <div v-if="show" style="height:70px;"></div>
            <navSection @vis="op($event)"></navSection>
        </div>

        <div style="background-color:black;">
            <div class="container setbg1">
                <div style="height:600px;position:relative;">
                    <jum></jum>
                </div>
            </div>
        </div>
        <div class="p-5 text-center"><h2 class="text-uppercase"><b>new</b></h2></div>
        <div class="setbg2"><div class="container"><lightpage v-for="(data, index) in leftrightmain" :key="index" :data=data></lightpage></div></div>
        <footer1></footer1>
    </div>
</template>
<script>
import navheader from '@/components/NavLoginRegister.vue'
import navSection from '@/components/NavSection.vue'
import lightpage from '@/components/ThreeLevelPage/LightPagePicWhile.vue'
import Jum from '@/components/ThreeLevelPage/LightPageSectionJum.vue'


import footer1 from '@/components/Footer.vue'

export default {
    name:'lightpage2',
    components:{
        navheader,
        navSection,
        Jum,
        lightpage,
        footer1
    },
    data(){
        return{
            show:false,
            leftrightmain:{
                one:{
                    imgposset:'right',
                    title:"WINDOWS 10 测试版现已推出",
                    titlesmall:"Windows 10 实时光线追踪让 Minecraft 的图形边界体现出 超棒的增强效果！ 我们通过 与 NVIDIA 展开合作，将光线追踪引入 DirectX 支持型设备（如 GeForce RTX GPU）。在指定商城世界中 体验光线追踪，更有机会享受免费下载",
                    awhile:{
                        one:'获取测试版',
                        two:'常见问题'
                    },
                    pic:require("@/assets/pic/threenewpic1.png")
                },
                two:{
                    imgposset:'left',
                    title:"获得灵感启发！",
                    titlesmall:"通过 Elysium Fire、Gemini Tay、Blockworks、Razzleberries、Dr_Bond 等众多创建者的精美作品，发现光线追踪增强世界之美。",
                    awhile:{

                    },
                    pic:require("@/assets/pic/threenewpic2.jpg")
                },
                three:{
                    imgposset:'right',
                    title:"点亮您的世界！",
                    titlesmall:"了解如何使用 Wiki 上的文档创建自己的光线追踪世界。利用新型基于物理的渲染 (PBR) 系统创建您自己的纹理，为您的世界增添光彩，体验您的所有创建作品在光线追踪光环中的炫目效果！",
                    awhile:{
                        one:'光线追踪文档'
                    },
                    pic:require("@/assets/pic/threenewpic3.jpg")
                }
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
.setbg1{
    background-image: url("../../assets/gif/lightsectionbg.gif");
}
.setbg2{
    background-image: url("../../assets/pic/bg2.png");
}
</style>