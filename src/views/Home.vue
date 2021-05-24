<template>
  <div>
    <navheader></navheader>
    <div>
      <div v-if="show" style="height:70px;"></div>
      <navSection @clearscroll="clears" @vis="op($event)"></navSection>
    </div>
    <div style="background-color:black;">
      <div class="container setbg">
        <div style="height:600px;position:relative;">
          <sectionjum></sectionjum>
        </div>
      </div>
    </div>
    <div class="sectioncarousel">
      <div class="container">
        <carouselsection class="row"></carouselsection>
      </div>
    </div>
    <div class="newmessagecarousel">
      <div class="container">
        <newmessagewhile></newmessagewhile>
      </div>
    </div>
    <div class="leftrightmsg">
      <div class="setbgdown"></div>
      <newmessagesection v-for="(data, index) in newmessagesectionpic" :key=index :data=data></newmessagesection>
      <div class="setbgup"></div>
    </div>
    <!-- <div class="sectionend">
      <div class="sectionendhead"></div>
      <div style="background-color:#f1edec">
        <sectionend></sectionend>
      </div>
    </div> -->
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-12 text-center text-black mt-5"><h2>社区创作品</h2></div>
            <div class="col-12 col-md-12 text-center textset mt-2"><p>发现最好的 Add-On、模组，以及非凡的 Minecraft 社区正在创建的更多内容！</p></div>
            <router-link to="#" class="linkset col-12 col-md-12 text-center mt-2 mb-5">
                <b-img :src=linkArrow class="setarrow"></b-img>
                <span class="ml-2 mt-1">探索</span>
            </router-link>
        </div>
        <div class="row">
            <sectionendchild v-for="(data, index) in pic" :key="index" :data="data"></sectionendchild>
        </div>
        <div class="text-center mt-5">
            <div class="">
				<router-link to="#" class="btn btn-default text-uppercase mt-5 ">
					<b>Learn more</b>
				</router-link>
			</div>
        </div>
        <div style="height:100px"></div>
        <div class="mt-5 text-center">
            <div class="text-uppercase follow-text-set">Follow minecraft</div>
            <div class="mt-5 btnset">
                <router-link to="#" v-for="(classth, index) in iconsvg" :key=index class="btn p-0 svgset ml-4" style="position:relative">
                    <div class="imgset"></div>
                    <div :class="classth"></div>
                </router-link>
            </div>
        </div>
        <div class="text-center mt-5 pt-2 pb-5" style="font-family: 'Noto Sans';font-size:14px;">
            <i>   
                Xbox One、PlayStation 4、Nintendo Switch、iOS、Android 和 Windows 10 都支
                持跨平台游戏。跨平台游戏需要 Microsoft 账号。Xbox One 在线多人游戏需要 Xbox Live 金会员资格。
                PlayStation 4 在线多人游戏需要 PlayStation Plus 会员资格 。Nintendo Switch 在线多人游戏需要 
                Nintendo Switch Online 会员资格。
            </i>
        </div>
    </div>
    <footer1></footer1>
  </div>
</template>

<script>
import navheader from '@/components/NavLoginRegister.vue'
import navSection from '@/components/NavSection.vue'
import sectionjum from '@/components/indexcomponents/SectionJum.vue'
import carouselsection from '@/components/indexcomponents/CarouselSection.vue'
import newmessagewhile from '@/components/indexcomponents/NewMessageWhile.vue'
import newmessagesection from '@/components/indexcomponents/NewMessageSection.vue'
import sectionendchild from "@/components/indexcomponents/SectionEndChild.vue"
// import sectionend from '@/components/indexcomponents/SectionEnd.vue'
import footer1 from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    navheader,
    navSection,
    sectionjum,
    carouselsection,
    newmessagewhile,
    newmessagesection,
    // sectionend,
    sectionendchild,
    footer1
  },
  data(){
    return{
      linkArrow:require("@/assets/svg/link-arrow.svg"),
            pic:{
                one:{
                    pic:require("@/assets/pic/sectionend1.jpg"),
                    titleblock:'Deep Dives',
                    title:'Dressed for success',
                    titlesmall:'Don your gear, Minecraft Dungeons is (almost) here! '
                },
                two:{
                    pic:require("@/assets/pic/sectionend2.jpg"),
                    titleblock:'Marketplace',
                    title:'Happy 40th birthday, PAC-MAN!',
                    titlesmall:' Let’s celebrate with some DLC!'
                },
                three:{
                    pic:require("@/assets/pic/sectionend3.jpg"),
                    titleblock:'Deep Dives',
                    title:'Block of the Week: Honey',
                    titlesmall:'Sweet!'
                },
                four:{
                    pic:require("@/assets/pic/sectionend4.jpg"),
                    titleblock:'News',
                    title:'Minecraft Snapshot 20w21a',
                    titlesmall:'A Minecraft Java Snapshot'
                }
            },
            iconsvg:{
                one1:'onesvgset',
                two2:'twosvgset',
                three3:'threesvgset',
                four4:'foursvgset'
            },
      show:false,
      newmessagesectionpic:{
        one:{
          pic:require("@/assets/pic/sec1.jpg"),
          title:'PAC-MAN 现已加入 Minecraft！',
          titlesmall:'在通过 3D 迷宫途中感受疯狂的游戏体验！快和朋友在 10 项挑战关卡展开比拼竞争高分成绩，您还可以在迷宫编辑器中自行开启建造之旅。',
          shopping:'了解更多',
          imgposset:'left'
        },
        two:{
          pic:require("@/assets/pic/sec2.jpg"),
          title:'Minecraft Dungeons',
          titlesmall:'这款以经典游戏地牢爬行者为灵感来源、并以 Minecraft 宇宙为背景的全新动作冒险游戏，将让您感受到精彩的奋战体验！',
          shopping:'立即预定',
          imgposset:'right'
        },
        three:{
          pic:require("@/assets/pic/sec3.jpg"),
          title:'Realms Plus 现已可用',
          titlesmall:'立即查看商城中的 50 多种商品及每月新增商品。在专属私人 Realms 服务器上向朋友分享。',
          shopping:'了解更多',
          imgposset:'left'
        },
      }
    }
  },
  methods:{
    clears(){
      this.$emit('clearsc')
    },
    op($event){
      this.show = $event
    }
  }
}
</script>
<style lang="scss" scoped>
  $bgdown:url("../assets/pic/bg3.png");
  $bgup:url("../assets/pic/bg4.png");

  @mixin setbackground1($bgtype) {
    z-index: -999;
    background-image:$bgtype;
    height: 100px;
    background-position-x: -710px;
    background-repeat: repeat-x!important;
    width: 100%;
    margin-top: -1px; 
  }
  .text-green {
    color:#fff;
    &:hover {
        color:green;    
    }
  }
  .setbg {
    background-size: cover;
    background-image: url("../assets/pic/home.jpg");
    background-position: center;
  }
  .sectioncarousel {
    width: 100%;
    background-image: url('../assets/pic/bg1.png');
  }
  .newmessagecarousel {
    background-image: url('../assets/pic/bg1.png');
  }
  .setbgdown{
    @include setbackground1($bgdown);
  }
  .setbgup {
    @include setbackground1($bgup);
  }
  .leftrightmsg {
    z-index: -999;
    background-image: url('../assets/pic/bg2.png');
  }
  .sectionendhead {
    height:100px;
    background-image: url('../assets/pic/bg1.png');
  }


$svgbg1:url("../assets/svg/instagrampic.svg");
$svgbg2:url("../assets/svg/twitterpic.svg");
$svgbg3:url("../assets/svg/youtubepic.svg");
$svgbg4:url("../assets/svg/facebookpic.svg");

@mixin svgbgset($svgbg){
    height: 32px;
    width: 32px;
    background-image: $svgbg;
    position: absolute;
    top:10px;
    left:8px;
}

.onesvgset {
    @include svgbgset($svgbg1);
}
.twosvgset {
    @include svgbgset($svgbg2);  
}
.threesvgset {
    @include svgbgset($svgbg3);
}
.foursvgset{
    @include svgbgset($svgbg4);
}
h2{
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
}
.setarrow {
    width: 15px;
    height:15px;
}
.linkset {
    color:#196d17;
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 15px;
    line-height: 20px;
    text-decoration: none;
}
.textset {
    font-size: 15px;
    line-height: 20px;
    font-family: "Noto Sans";
}
.btn-default {
    color:white;
    background-color: #34aa2f!important;
    border-color: #34aa2f!important;
    padding: 1rem 2rem!important;
    font-size: 18px!important;
    text-shadow: 0 2px 0 rgba(0,0,0,.25);
    z-index: -1;
    box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
}
.follow-text-set {
    font-weight: 700;
    font-size: 18px;
    font-family:'Noto Sans';
}
.imgset {
    width: 48px;
    height: 48px;
    background-color:#008542;
    -moz-box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
    box-shadow: 0 -4px rgba(21,108,0,.5) inset, 0 4px rgba(100,253,31,.99) inset, -4px 0 rgba(100,253,31,.5) inset, 4px 0 rgba(21,108,0,.5) inset;
    z-index: -1;
    
}
.svgset:hover .imgset{
    -moz-transform: scale(1.1);
    transform: scale(1.1);
    -moz-transition: all .2s;
    transition: all .2s;
    -moz-box-shadow: 0 -4px rgba(0,0,0,.3) inset, 0 4px rgba(255,255,255,.5) inset, -4px 0 rgba(255,255,255,.5) inset, 4px 0 rgba(0,0,0,.3) inset;
    box-shadow: 0 -4px rgba(0,0,0,.3) inset, 0 4px rgba(255,255,255,.5) inset, -4px 0 rgba(255,255,255,.5) inset, 4px 0 rgba(0,0,0,.3) inset;
}
.btnset .btn{
    -moz-box-shadow: none;
    box-shadow: none;
}

</style>

