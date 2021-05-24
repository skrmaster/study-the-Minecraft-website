<template>
    <div class="container">
        <div>
            <div class="text-center p-5">
                <h3><b>始终有新的发现</b></h3>
                <p>我们对游戏进行定期更新，新的工具、地点和空间等待您的探索。检查最新更新。</p>
            </div>
            <div class="row position-relative">
                <div class="carousel-control-prev carouselbtnset col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1" style="display:block" href="#carouselExampleControls" role="button" data-slide="prev">
                    <div class="position-relative row justify-content-center">
                        <b-icon icon="arrow-left" class="text-center" style="transform:scale(1.5)" aria-hidden="true"></b-icon>
                        <span class="sr-only">Previous</span>
                    </div>
                </div>

                <div id="carouselExampleControls" data-interval	="false" class="carousel slide col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10 offset-1 position-relative">
                    <ol class="carousel-indicators" style="position:absolute;top:400px;">
                        <li data-target="#carouselExampleControls" style="background-color: black;" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleControls" style="background-color: black;" data-slide-to="1"></li>
                        <li data-target="#carouselExampleControls" style="background-color: black;" data-slide-to="2"></li>
                        <li data-target="#carouselExampleControls" style="background-color: black;" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div v-for="(data,index) in carouselmain" :key=index :class="data.class">
                            <b-card no-body style="height:400px" class="p-5">
                                <b-row no-gutters>
                                  <b-col md="7">
                                    <b-card-img :src=data.pic alt="Image" class="rounded-0"></b-card-img>
                                  </b-col>
                                  <b-col md="5">
                                    <b-card-body>
                                        <b-card-title class="p-3">{{data.title}}</b-card-title>
                                        <b-card-text class="p-3">
                                            <p>{{data.titlesmall}}</p>
                                            <b-link style="display:block;color:green;" class="mt-5">
                                                <img style="width:20xp;height:20px;" :src="require('@/assets/svg/link-arrow.svg')">
                                                <router-link :to="data.hrefthree" class="ml-1 routerborderset" style="color:green;"><span @click="$emit('clearscroll')">了解更多</span></router-link>
                                            </b-link>
                                        </b-card-text>
                                    </b-card-body>
                                  </b-col>
                                </b-row>
                            </b-card>
                        </div>
                    </div>
                </div>
                
                <div class="carousel-control-next carouselbtnset col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1" style="display:block" href="#carouselExampleControls" role="button" data-slide="next">
                    <div class="position-relative row justify-content-center">
                        <b-icon icon="arrow-right" class="text-center" style="transform:scale(1.5)" aria-hidden="true"></b-icon>
                        <span class="sr-only">next</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-5"></div>
    </div>
</template>

<script>


export default {
    name:'twopagecarousel',
    data(){
        return{
            carouselmain:{
                one:{
                    pic:require("@/assets/pic/minecraft/carousel1.jpg"),
                    title:'嗡嗡蜂群',
                    titlesmall:'Minecraft 正在嗡嗡嗡！蜂群所到之处皆焕发新生，蜂群嗡嗡嗡，庄稼长长长，蜂箱舒适，蜂蜜黏黏！',
                    class:'carousel-item active',
                    hrefthree:'/minecraft/beepage'
                },
                two:{
                    pic:require("@/assets/pic/minecraft/carousel2.jpg"),
                    title:'村庄和掠夺',
                    titlesmall:'探索最具冒险性的更新版本！抵御新的威胁，使用新方块进行建造，体验全新的村庄生活。',
                    class:'carousel-item',
                    hrefthree:'/Town'
                },
                three:{
                    pic:require("@/assets/pic/minecraft/carousel3.jpg"),
                    title:'更新水域世界',
                    titlesmall:'深吸一口气，潜入水面下生机勃勃的活力新世界！琳琅满目的海洋生物、全新怪物和五彩缤纷的海洋景观， Minecraft 的海洋已完成史上最大的一次更新！',
                    class:'carousel-item',
                    hrefthree:'/Underwater'
                },
                four:{
                    pic:require("@/assets/pic/minecraft/carousel4.jpg"),
                    title:'猫和熊猫',
                    titlesmall:'焕然一新的猫和珍奇的熊猫已登陆 Minecraft！',
                    class:'carousel-item',
                    hrefthree:'/minecraft/lighttest'
                },
            }
        }
    }
    
}
</script>
<style lang="scss" scoped>

.carouselbtnset{
    opacity: 1;
    height:50px;
    width:50px;
    margin-top: 150px;
    border-radius: 0;
    background-color: #34aa2f;
    border-color: #34aa2f;
    padding: 1rem 2rem;
    font-size: 18px;
    z-index: 99;
    text-shadow: 0 2px 0 rgba(0,0,0,.25);
    box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
    &:hover{
        background-color: #313131;
        border-color: #313131;
        box-shadow: 0 -4px rgba(0,0,0,.5) inset, 0 4px rgba(255,255,255,.2) inset, -4px 0 rgba(255,255,255,.2) inset, 4px 0 rgba(0,0,0,.5) inset;   
    }
}
.carousel-indicators li{
    height:15px;
    width:15px;
}
</style>