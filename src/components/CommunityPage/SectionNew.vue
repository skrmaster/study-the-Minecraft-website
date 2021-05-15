<template>
    <div style="background-color:#f1edec">
        <div class="container">
            <div class="text-center"><h1 class="text-uppercase p-5">what's new</h1></div>
            <div class="row">
                <sectionnewchild v-for="(data, index) in sectionnew1" :key=index :data=data></sectionnewchild>
            </div>
            <div class="row">
                <sectionnewchild v-for="(data, index) in sectionnew2" :key=index :data=data></sectionnewchild>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <img :src=twomanfly class=" col-xl-8 col-lg-8 col-md-6 col-sm-6 col-12">
            </div>
        </div>
    </div>
</template>
<script>
import sectionnewchild from "@/components/CommunityPage/SectionNewChild.vue"

export default {
    name:'sectionnew',
    components:{
        sectionnewchild
    },
    data(){
        return{
            twomanfly:require("@/assets/pic/community/twomanfly.png"),
            sectionnew1:{
                one:{
                    pic:require("@/assets/pic/community/new1.jpg"),
                    titleblock:'news',
                    title:' Minecraft Earth R17 Patch Notes ',
                    titlesmall:'New stuff (and some changes) coming your way on Minecraft Earth!'
                },
                two:{
                    pic:require("@/assets/pic/community/new2.jpg"),
                    titleblock:'news',
                    title:' Free Map: Spring-a-Majig ',
                    titlesmall:'Download it free from the Minecraft Marketplace!'
                },
                three:{
                    pic:require("@/assets/pic/community/new3.png"),
                    titleblock:'deep dives',
                    title:' Trailer re-imagined with RTX Beta ',
                    titlesmall:'Community member re-imagines original Minecraft trailer'
                },
                four:{
                    pic:require("@/assets/pic/community/new4.png"),
                    titleblock:'news',
                    title:' Minecraft: Education Edition for Earth Day ',
                    titlesmall:'Spark learning with renewable energy lessons'
                }
            },
            sectionnew2:{
                 five:{
                    pic:require("@/assets/pic/community/new5.png"),
                    titleblock:'news',
                    title:' The Uncensored Library ',
                    titlesmall:'Providing access to independent information to young people around the world'
                },
                six:{
                    pic:require("@/assets/pic/community/new6.jpg"),
                    titleblock:'markeplace',
                    title:' Free Educational Content in Minecraft Marketplace! ',
                    titlesmall:'Venture into digital worlds instead of the real one!'
                },
                seven:{
                    pic:require("@/assets/pic/community/new7.png"),
                    titleblock:'news',
                    title:' 2020 Minecraft Education Challenge ',
                    titlesmall:'Join the 2020 Minecraft Education Challenge to engage students in creative problem solving'
                },
                eight:{
                    pic:require("@/assets/pic/community/new8.png"),
                    titleblock:'news',
                    title:' Access to Minecraft: Education Edition ',
                    titlesmall:'Minecraft: Education Edition is now available through June 2020'
                }
            }
        }
    }
}
</script>
<style scoped>

</style>