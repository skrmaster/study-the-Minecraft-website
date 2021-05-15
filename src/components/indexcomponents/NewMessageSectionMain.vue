<template>
    <div ref="cardset" class="text-center pt-2 widthset float-left widthset" :style="data.style" id="two2">
        <a href="#" class="text-decoration-none">
            <img :src=data.pic class="setimg">
        </a>
        <div>
            <div style="position:relative;bottom:15px" v-show="data.status">
                <div class="settext" style="z-index:999">{{data.title}}</div>
            </div>

            <h3 class="text-center text-uppercase">{{data.atext}}</h3>
            <p class="text-center text-white" v-show="data.status">{{data.text}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'newmessagemain',
    props:{
        data:Object
    },
    data(){
        return{
            wd:''
        }
    },
    methods:{
        
    },
    mounted(){
        let wd2 = document.getElementById('two2');
        this.wd = wd2.offsetWidth + parseInt(window.getComputedStyle(wd2,null).getPropertyValue("margin-right"))
        this.$emit('width',this.wd)
    }
}
</script>
<style lang="scss" scoped>
$bg_white_color:white;

@media (min-width: 1200px) {
        .widthset {
        width:270px;
        margin-right:10px;
    }
}
@media (max-width: 1199px) and (min-width: 992px){
        .widthset {
        width: 270px;
        margin-right: 45px;
    }
}
@media (max-width: 991px) and (min-width: 768px){
        .widthset {
        width: 270px;
        margin-right: -20px;
    }
}
@media (max-width: 767px) and (min-width: 576px){
        .widthset {
        width: 270px;
        margin-right: -20px;
    }
}
@media (max-width: 576px) {
    .widthset{
        width: 300px;
        margin-right: -20px;
    }
}

.setimg {
    height:158px;
    width:270px;
    border:2px solid #f1edec;
    &:hover{
        border:2px #288123 solid;
    }
}

h3 {
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color:$bg_white_color;
    &:hover {
        color:#288123 ;
    }
}

.settext {
    display: inline-block;
    font-size: .625rem;
    font-weight: 700;
    letter-spacing: 1px;
    background-color:$bg_white_color;
    color: #1d1e1e;
    padding: .5rem 1rem;
    text-transform: uppercase;
    text-align: center;
}
</style>