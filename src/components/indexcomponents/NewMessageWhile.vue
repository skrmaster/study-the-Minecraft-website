<template>
    <div>
        <div class="row justify-content-center">
            <h2 class="text-white mt-5 mb-5">最新消息</h2>
        </div>
        <div class="container" style="height:500px">
            <div class="position-relative boxset">
                <div class="prevset position-absolute">
                    <a class="btn svgset position-relative">
                        <b-icon icon='arrow-left-short' @click="prev()" class="imgset text-white"></b-icon>
                    </a>
                </div>

                <div class="container position-relative setheight">
                    <div class="carouse" ref="rowset" style="transform:translate3d(0, 0, 0)">
                        <maintext :data="pic.four"></maintext>
                        <maintext v-for="data in pic" @width="getwd" :key=data.pic :data=data></maintext>
                        <maintext v-for="data in pic" :ref="data.ref" :key="data.pic+'only'" :data=data></maintext>
                    </div>
                </div>

                <div class="nextset position-absolute">
                    <a class="btn svgset position-relative">
                        <b-icon icon='arrow-right-short' @click="next()" class="imgset text-white"></b-icon>
                    </a>
                </div>
            </div>
            <div class="p-5"></div>
        </div>
    </div>
</template>
<script>
import maintext from "@/components/indexcomponents/NewMessageSectionMain.vue"

export default {
    name:'newmessagecarousel',
    components:{
        maintext
    },
    data(){
        return{
            timecontrol:true,
            pic:{
                one:{
                    pic:require("@/assets/pic/new1.png"),
                    title:'new',
                    atext:'Meet Mojang Studios',
                    text:'We have a new name, a new logo, and a new trailer! ',
                    status:'',
                    style:''
                },
                two:{
                    pic:require("@/assets/pic/new2.jpg"),
                    title:'Deep-dive',
                    atext:'The road to Dungeons',
                    text:'Exploring the random art of procedural levels ',
                    status:true,
                    style:'transform:scale(1.05)'
                },
                three:{
                    pic:require("@/assets/pic/new3.jpg"),
                    title:'Marketplace',
                    atext:'Our Marketplace Picks: March-April 2020',
                    text:'Our four favourite Marketplace highlights from the previous months! ',
                    status:'',
                    style:''
                },
                four:{
                    pic:require("@/assets/pic/new4.jpg"),
                    title:'Minecraft Builds',
                    atext:'Best community skins: April',
                    text:'Pretty! Weird! But NEVER pretty weird, which is pretty weird. ',
                    status:'',
                    style:''
                }
            }
        }
    },
    methods:{
        getwd(value){
            this.wd = value
        },
        delayLoading3d(arr,x, time){
            setTimeout(()=>{
                    this.$refs.rowset.removeAttribute(arr)
                    this.$refs.rowset.setAttribute(arr,"transform:translate3d("+x+"px, 0, 0);")
                    this.timecontrol = true
                },time)          
        },
        prev(){
            if (!this.timecontrol) { return }

            this.timecontrol = false

            let wd = parseInt(this.wd)

            if (this.$refs.rowset.style.transform == 'translate3d(0px, 0px, 0px)'){
                this.$refs.rowset.style.transform = "translate3d(-"+wd+"px, 0, 0)"     
                this.$refs.rowset.style.transition = 'all .9s ease-out'
                this.delayLoading3d('style', -wd, 901)
            }
            else if(this.$refs.rowset.style.transform == "translate3d(-"+wd+"px, 0px, 0px)"){
                this.$refs.rowset.style.transform = "translate3d(-"+2*wd+"px, 0, 0)"
                this.$refs.rowset.style.transition = 'all .9s ease-out'
                this.delayLoading3d('style', -2*wd, 901)
            }
            else if(this.$refs.rowset.style.transform == "translate3d(-"+2*wd+"px, 0px, 0px)"){
                this.$refs.rowset.style.transform = "translate3d(-"+3*wd+"px, 0, 0)"
                this.$refs.rowset.style.transition = 'all .9s ease-out'
                this.delayLoading3d('style', -3*wd, 901)
            }
            else if(this.$refs.rowset.style.transform == "translate3d(-"+3*wd+"px, 0px, 0px)"){
                this.$refs.rowset.style.transform = "translate3d(-"+4*wd+"px, 0px, 0px)"
                this.$refs.rowset.style.transition = 'all .9s ease-out'
                this.delayLoading3d('style', 0, 901)
            }
            
            if (this.pic.two.status == true){
                this.pic.two.style = 'transition:all .5s;transform:scale(1)'
                this.pic.two.status = false
                this.pic.three.status = true
                this.pic.three.style = 'transition:all .5s;transform:scale(1.05)'
            }
            else if (this.pic.three.status == true){
                this.pic.three.style = 'transition:all .5s;transform:scale(1)'
                this.pic.three.status = false
                this.pic.four.status = true
                this.pic.four.style = 'transition:all .5s;transform:scale(1.05)'
            }
            else if (this.pic.four.status == true){
                this.pic.four.style = 'transition:all .5s;transform:scale(1)'
                this.pic.four.status = false
                this.pic.one.status = true
                this.pic.one.style = 'transition:all .5s;transform:scale(1.05)'
            }
            else {
                this.pic.one.style = 'transition:all .5s;transform:scale(1)'
                this.pic.one.status = false
                this.pic.two.status = true 
                this.pic.two.style = 'transition:all .5s;transform:scale(1.05)'
            }
        },
        next(){
            if (!this.timecontrol) { return }

            this.timecontrol = false
            let wd = parseInt(this.wd)

            if (this.$refs.rowset.style.transform == "translate3d(0px, 0px, 0px)"){
                this.$refs.rowset.style.transform = "translate3d("+wd+"px, 0, 0)"
                this.$refs.rowset.style.transition = 'all .9s ease-out'
                this.delayLoading3d('style', -3*wd, 901)
            }
            else if(this.$refs.rowset.style.transform == "translate3d(-"+3*wd+"px, 0px, 0px)"){
                this.$refs.rowset.style.transform = "translate3d(-"+2*wd+"px, 0, 0)"
                this.$refs.rowset.style.transition = 'all .9s ease-out'
                this.delayLoading3d('style', -2*wd, 901)
            }
            else if(this.$refs.rowset.style.transform == "translate3d(-"+2*wd+"px, 0px, 0px)"){
                this.$refs.rowset.style.transform = "translate3d(-"+wd+"px, 0, 0)"
                this.$refs.rowset.style.transition = 'all .9s ease-out'    
                this.delayLoading3d('style', -wd, 901)
            }
            else if (this.$refs.rowset.style.transform == "translate3d(-"+wd+"px, 0px, 0px)"){
                this.$refs.rowset.style.transform = "translate3d(0, 0, 0)"      
                this.$refs.rowset.style.transition = 'all .9s ease-out'                            
                this.delayLoading3d('style', 0, 901)
            }

            if (this.pic.two.status == true){
                this.pic.two.style = 'transition:all .5s;transform:scale(1)'
                this.pic.two.status = false
                this.pic.one.status = true
                this.pic.one.style = 'transition:all .5s;transform:scale(1.05)'
            }
            else if (this.pic.one.status == true){
                this.pic.one.style = 'transition:all .5s;transform:scale(1)'
                this.pic.one.status = false
                this.pic.four.status = true
                this.pic.four.style = 'transition:all .5s;transform:scale(1.05)'
            }
            else if (this.pic.four.status == true){
                this.pic.four.style = 'transition:all .5s;transform:scale(1)'
                this.pic.four.status = false
                this.pic.three.status = true
                this.pic.three.style = 'transition:all .5s;transform:scale(1.05)'
            }
            else {
                this.pic.three.style = 'transition:all .5s;transform:scale(1)'
                this.pic.three.status = false
                this.pic.two.status = true 
                this.pic.two.style = 'transition:all .5s;transform:scale(1.05)'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.text-white {
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 28px;
}
.boxset{
    padding: 0 125px 0 125px;
}
.setheight{
    height:310px;
    overflow: hidden;
}
.carouse{
    height:100%;
    position: relative;
    left: -295px;
    top: 0;
    width:400%;
    z-index: 1;
}
.setbg {
    width:1105px;
    background-color:#fff
}
h2 {
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.btn-default {
    color:white;
    background-color: #34aa2f!important;
    z-index: -1;
    box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
}
.imgset {
    width: 48px;
    height: 48px;
    background-color:#008542;
    box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
    z-index: -1;
}
.imgset{
    transition: all .2s;
}
.imgset:hover{
    transform: scale(1.1);
    box-shadow: 0 -4px rgba(0,0,0,.5) inset, 0 4px rgba(255,255,255,.2) inset, -4px 0 rgba(255,255,255,.2) inset, 4px 0 rgba(0,0,0,.5) inset;
}
.btnset .btn{
    box-shadow: none;
}
.prevset{
    top: 148px;
    left: 25px;
    z-index: 500;
}
.nextset{   
    top: 148px;
    right: 25px;
    z-index: 500;
}
.imgset2 {
    width: 216px;
    height: 334px;
    text-decoration: none;
    border:2px #fff solid;
    transition: all .4s;
    &:hover {
        transform:scale(1.02);
        border:2px #288123 solid;
    }
}
.aset {
    text-decoration: none;
    color:#196d17!important;
}
.settext {
    font-size: 14px;
    font-family: 'Noto Sans';
    line-height: 20px;
    font-weight: 400;
    text-transform: none;
}
</style>