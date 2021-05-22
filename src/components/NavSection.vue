<template>
    <div :class=fixedtop>
        <div style="position:relative;z-index:900">
            <div id="nav2" :style="boxshadownone">
                <div class="container">
                    <b-navbar toggleable="lg" type="dark" class="p-0">
                        <b-navbar-brand href="/" style="height:70px;">
                            <b-img :src=logo class="mt-2" style="height:40px;"></b-img>
                        </b-navbar-brand>
                        <b-col class="ml-5"></b-col>            
                        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                        <b-collapse id="nav-collapse" is-nav>
                            <b-navbar-nav class="text-left mt-1">
                                <b-nav-item v-for="(data, index) in hdata" :key=index class="ml-4" style="font-size:13px;" @mouseover=downchange(index) @mouseout=upchange(index)>
                                    <div class="text-nowrap justify-content-center" :id=index :ref=index @mouseover="changegif(index)" @mouseout="changegifreversed(index)">
                                        <b-img :src=data.hicon style="height:40px;width:50px;"></b-img>
                                        <router-link :to=data.linktwopage class="ml-2">
                                            <b-nav-text class="text-uppercase" :id=index><span @click="$emit('clearscroll')">{{data.text}}</span></b-nav-text>
                                        </router-link>
                                        <b-icon v-if="typeof(data.testicon) != 'undefine'" :icon=data.demoicon class="ml-1"></b-icon> 
                                    </div>
                                </b-nav-item>
                            </b-navbar-nav>
                        </b-collapse>
                    </b-navbar>
                </div>
                <div id="navpic" ref="showhide" @mouseover="trainsitonshow()" @mouseout="trainsitonhide()">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div id="changesize" v-for="(data, index) in navpics" :key=index class="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3 mt-5">
                                <router-link :to="data.pica">
                                    <img id="imgboder" :src="data.navpic">
                                </router-link>
                                <p class="text-uppercase text-center text-white" style="width:120px;"><b>{{data.navpictext}}</b></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="topset" class="topbackset text-center">
                    <div class="position-relative" style="height:50px;width:50px;" @click="gotop()" @mouseover=topbackshow() @mouseleave=topbackhide()>
                        <transition name="topbacksolid">
                            <b-img v-if="showhideset" key='topimg' :src="backtop" class="mt-2" style="height:30px;width:30px;"></b-img>
                            <div v-else key='toptext' ref="textset" class="ml-2" style="height:30px;width:30px;">
                                <span style="font-size:12px;color:#fff;">返回顶部</span>                       
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
            <div v-if="data" style="z-index: 998;box-shadow: 0 5px 0 0 rgba(0,0,0,.25);background-color:#fff;" >
                <div class="container twoa">
                    <div class="row justify-content-around text-center text-nowrap p-2 navtext">
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 mt-3">
                            <router-link to='/' style="background-color:#fff"><b-img :src=minecraftpage.logo style="height:30px; width:200px;"></b-img></router-link>
                        </div>
                        <div class="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"></div>
                        <div v-for="(value, index) in minecraftpage.text" :key=index class="d-none d-lg-block d-xl-block mt-3">
                            <div class="text-uppercase"><router-link :to="value.hrefthree"><span @click="$emit('clearscroll')">{{value.text}}</span></router-link></div>
                        </div>
                        <div class="d-none d-lg-block d-xl-block mt-3"><a href="#">{{minecraftpage.freeplay}}</a></div>
                        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 d-none d-sm-block"><router-link to="/playmethods" class="btn btn-defaul text-uppercase text-white">{{minecraftpage.buttontext}}</router-link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'navsection',
    props:{
        data:Boolean,
        boxshadownone:String
    },
    data(){
        return{
            status:this.pagetwoshow,
            fixedtop:'',
            scroll: '',
            logo:require("@/assets/pic/logo.png"),
            navpic:true,
            backtop:require("@/assets/pic/backtop.png"),
            topset:false,
            showhideset:true,
            hdata:{
                navsectionone:{
                    hicon:require("@/assets/pic/h1.png"),
                    hgif:require("@/assets/gif/h1.gif"),
                    hgifreversed:require("@/assets/gif/h1-reversed.gif"),
                    text:'game',
                    testicon:'',
                    demoicon:'chevron-down',
                    linktwopage:''
                },
                navsectiontwo:{
                    hicon:require("@/assets/svg/h2.svg"),
                    hgif:require("@/assets/gif/h2.gif"),
                    hgifreversed:require("@/assets/gif/h2-reversed.gif"),
                    text:'community',
                    linktwopage:'/community'
                },
                navsectionthree:{
                    hicon:require("@/assets/svg/h3.svg"),
                    hgif:require("@/assets/gif/h3.gif"),
                    hgifreversed:require("@/assets/gif/h3-reversed.gif"),
                    text:'merch',
                    linktwopage:''
                },
                navsectionfour:{
                    hicon:require("@/assets/svg/h4.svg"),
                    hgif:require("@/assets/gif/h4.gif"),
                    hgifreversed:require("@/assets/gif/h4-reversed.gif"),
                    text:'support',
                    linktwopage:''
                },
            },
            navpics:{
                navpicone:{
                    navpic:require("@/assets/pic/nav_pic1.jpg"),
                    navpictext:'minecraft',
                    pica:'/minecraft'
                },
                navpictwo:{
                    navpic:require("@/assets/pic/nav_pic2.jpg"),
                    navpictext:'minecraft Dungeons' ,
                    pica:'/minecraft'                
                },
                navpicthree:{
                    navpic:require("@/assets/pic/nav_pic3.jpg"),
                    navpictext:'minecraft Earth',
                    pica:'/minecraft'                
                },
                navpicfour:{
                    navpic:require("@/assets/pic/nav_pic4.jpg"),
                    navpictext:'minecraft: Education Edition',
                    pica:'/minecraft'               
                }
            },
            minecraftpage:{
                logo:require("@/assets/pic/logo.png"),
                text:{
                   one:{
                        text:'REALMS PLUS',
                        hrefthree:''
                   },
                   two:{
                        text:'REALMS JAVA EDITION',
                        hrefthree:''
                   },
                   three:{
                        text:'商城',
                        hrefthree:''
                   }, 
                   four:{
                        text:'获取更新',
                        hrefthree:'/minecraft/updataguide'
                   }
                },
                freeplay:'免费试玩',
                buttontext:'获取 minecrft'
            }
        }
    },
    methods:{
        menu(){
            this.scroll = document.documentElement.scrollTop
            if (this.scroll >= 29){
              this.fixedtop = 'fixed-top'
              this.topset = true
              this.$emit('vis',true)
            }
            else{
              this.fixedtop = ''
              this.topset = false
              this.$emit('vis',false)
            }
        },
        changegif(index){
            if (index == 'navsectionone') { 
                this.hdata.navsectionone.hicon = this.hdata.navsectionone.hgif;
            }
            else if (index == 'navsectiontwo') { this.hdata.navsectiontwo.hicon = this.hdata.navsectiontwo.hgif }
            else if (index == 'navsectionthree') { this.hdata.navsectionthree.hicon = this.hdata.navsectionthree.hgif }
            else { this.hdata.navsectionfour.hicon = this.hdata.navsectionfour.hgif }
        },
        changegifreversed(index){
            if (index == 'navsectionone') { this.hdata.navsectionone.hicon = this.hdata.navsectionone.hgifreversed }
            else if (index == 'navsectiontwo') { this.hdata.navsectiontwo.hicon = this.hdata.navsectiontwo.hgifreversed }
            else if (index == 'navsectionthree') { this.hdata.navsectionthree.hicon = this.hdata.navsectionthree.hgifreversed }
            else { this.hdata.navsectionfour.hicon = this.hdata.navsectionfour.hgifreversed }        
        },
        downchange(index){
            if (index == 'navsectionone'){
                this.hdata.navsectionone.demoicon = "chevron-up";
                this.$refs.showhide.style.height = '400px';
            }
        },
        upchange(index){
            if (index == 'navsectionone'){
                this.hdata.navsectionone.demoicon = "chevron-down"
                this.$refs.showhide.style.height = '0px';
            }
        },
        trainsitonshow(){
            this.$refs.showhide.style.height = '400px';
        },
        trainsitonhide(){
            this.$refs.showhide.style.height = '0px';
        },
        topbackshow(){
            this.showhideset = false
        },
        topbackhide(){
            this.showhideset = true
        },
        gotop(){
            document.documentElement.scrollTop=0;      
            this.topbackhide()         
        }
    },
    mounted () {
        window.addEventListener('scroll', this.menu)
    }
}
</script>

<style lang="scss" scoped>
$nav2bg:url("../assets/pic/bg1.png");
$navpicbg:url("../assets/pic/bg1.png");

.topbacksolid-enter {
    opacity: 0;
}
.topbacksolid-leave {
    opacity: 1;
}
.topbacksolid-enter-active {
    transition:all .2s;
    transform: translateX(-20px);
}
.topbacksolid-leave-active {
    transition:all .2s;
    transform: translateX(20px);
}
.topbacksolid-enter-to {
    opacity: 1;
}
.topbacksolid-leave-to {
    opacity: 0;
}
#nav2 {
    background-image:$nav2bg;
    z-index: 998;
    box-shadow: 0 5px 0 0 rgba(0,0,0,.25);
}
#navsectionone {
    color:#fff;
    &:hover #navpic {
        height:400px;
    }
}
#iconupdown:hover {
    color:#fff;
    &:hover {color:green}      
}
#navsectiontwo, #navsectionthree, #navsectionfour {
    color:#fff;
    &:hover {
        color:green;
    }
}
#navpic {
    height:0;
    width:100%;
    z-index:10;
    background-image:$navpicbg;
    position: absolute;
    overflow: hidden;
    transition: height .4s;
}
#imgboder {
    height:200px;
    width:125px;
    border:2px solid #9a9a9a
}
#changesize {
    transition: all  .4s ease-in;
    &:hover {
        transition: all 1s;
        transform: scale(1.2);
    }
    #imgboder:hover {
        border:2px solid #84c94c
    }
}
.topbackset {
    position:absolute;
    top:500px;
    left:20px;
    border-radius: 50px;
    background-color: rgba(0,0,0,.25);
    overflow: hidden;
    cursor: pointer;
}
.navtext a{
    font-size:12px;
    color:#196d17;
}
.btn-defaul {
    border-radius: 0;
    background-color: #34aa2f;
    border-color: #34aa2f;
    padding: 1rem 2rem!important;
    font-size: 18px!important;
    z-index: 99;
    text-shadow: 0 2px 0 rgba(0,0,0,.25);
    box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
    &:hover{
        background-color: #313131;
        border-color: #313131;
        box-shadow: 0 -4px rgba(0,0,0,.5) inset, 0 4px rgba(255,255,255,.2) inset, -4px 0 rgba(255,255,255,.2) inset, 4px 0 rgba(0,0,0,.5) inset;   
    }
}
.twoa a:hover {
    color:black;
    background-color: rgba(0,0,0,.25);
}
</style>
