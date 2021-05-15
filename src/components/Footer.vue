<template>
    <footer style="background-color:black">
        <div class="container">
            <div class="row position-relative justify-content-center">
                <div class="col-12 text-center mt-4">
                    <b-img v-for="(data,index) in pic" :key=index :src=data.img class="imgset1 ml-2"></b-img>
                </div>
            </div>
            <div class="row text-white-50 justify-content-center" style="font-size:14px;"><p class="mt-3">Mojang © 2009-2020. “Minecraft”以及“我的世界”是 Mojang Synergies AB 的商标</p></div>
            <div class="row justify-content-center">
                <a href="#" class='p-1 mr-1 fontsize'>条款和条件</a>
                <a href="#" class='p-1 fontsize setshu'>品牌和资产指南</a>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    data(){
        return{
            pic:{
                logo1:{
                    img:require("@/assets/pic/logob1.png")
                },
                logo2:{
                    img:require("@/assets/svg/xboxgamepic.svg")
                },
                logo3:{
                    img:require("@/assets/svg/esrb.svg")
                }
            }
        }
    }
}
</script>
<style scoped>
.imgset1{
    height: 50px;
    width: 60px;
}
.imgset2{
    height: 50px;
    width: 90px;
}
.imgset3{
    height: 55px;
    width: 120px;
}
.fontsize{
    color:#d1cfce;
    font-size:14px;
}
.fontsize:hover{
    color:#5c5c5c;
}
.setshu{
    border-left: 1px solid #d1cfce;
}
</style>