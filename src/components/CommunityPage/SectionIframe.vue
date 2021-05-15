<template>
    <div>
        <div class="text-center p-5"><h1>WATCH ON YOUTUBE</h1></div>
        <a @click="heightpass()" style="display:block" class="container position-relative" v-show="iframeshow">
            <div class="row justify-content-center">
                <span class="btn btn-success btnset seta">
                    <b-icon icon="camera-video-fill" style="z-index:999"></b-icon>
                </span>
            </div>
            <div class="row justify-content-center">
                <b-img class="col-xl-8 col-lg-10 col-md-8 col-sm-8 col-12 m-0 p-0" ref="getheight" :src=videoface></b-img>       
            </div>        
        </a>
        <div class="container" v-show="!iframeshow">
            <div class="row justify-content-center">
                <iframe class="col-xl-8 col-lg-10 col-md-8 col-sm-8 col-12 m-0 p-0" ref="setheight" src="https://www.youtube.com/embed/lP56PJ5Tkp0?modestbranding=1&autohide=1&showinfo=0&controls=1&frameborder=0&rel=0&start=0&autoplay=1&enablejsapi=1&origin=https%3A%2F%2Fwww.minecraft.net&widgetid=1" allowfullscreen></iframe>
            </div>
        </div>
        <div class="container text-center">
            <h2 class="p-4">PLAYERS BEST FRIEND</h2>
            <p><b>Typface</b> takes us on a moving journey with their beloved canine friend.</p>
            <p class="col-md-6 offset-md-3">You might be our next featured YouTube video creator. Send your submission to <a href="#" style="color:#288123">FeatureMe@minecraft.net</a></p>
            <div class="p-5">
                <a class="btn btn-lg btn-default text-uppercase" style="color:white;"><span>Official youtube channel</span></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'sectioniframe',
    data(){
        return{
            iframeshow:'false',
            heigthset:'',
            videoface:require("@/assets/pic/community/ifram.jpg")
        }
    },
    methods:{
        heightpass(){            
            this.heigthset = 'height:' + this.$refs.getheight.height + 'px';
            this.$refs.setheight.setAttribute("style",this.heigthset);
            this.iframeshow = !this.iframeshow
        }
    }
}
</script>
<style scoped>
a{
    cursor: pointer;
}
.seta:hover {
    transform: scale(1.2);
    transition: 625ms cubic-bezier(0,.8,.25,1);
}
.seta{
    z-index:900;
    height:auto;
}
.btnset:before{
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
.btnset{
    border-radius: 0;
    background: #34aa2f;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 42px;
    padding: 0;
    transition: 625ms cubic-bezier(0,.8,.25,1);
    box-sizing: content-box;
    margin: 19px 0;
    border-right: 4px solid #47d009;
    border-left: 4px solid #1e8c03;
    position:absolute;
}
.btnset:after{
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
.btn-default {
    background-color: #008542!important;
    border-color: #34aa2f!important;
    border-radius: 0;
    padding: 1rem 2rem!important;
    font-weight: 700;
    font-size: 20px!important;
    text-shadow: 0 2px 0 rgba(0,0,0,.25);
    box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
}
.btn-default:hover{
    transform: scale(1.1);
    transition: all .2s;
    box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
}
</style>