<template>
    <div>
        <navloginregister></navloginregister>
        <div v-if="show" style="height:70px;"></div>
        <navsection @vis="op($event)"></navsection>
        <div style="background-color:#eee">
            <div class="p-2 text-center">
                <h1 style="font-weight:700">畅玩 MINECRAFT 最新版</h1>
                <p class="p-3">我如何将 Minecraft 更新为最新版本?</p>
            </div>
            <div class="container">
                <div class="row justify-content-around">
                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                        <updatesectionleft></updatesectionleft>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                        <updatesectionright></updatesectionright>
                    </div>
                </div>
            </div>
            <div class="p-5"></div>
        </div>
        <footer1></footer1>
    </div>
</template>
<script>
import updatesectionleft from "@/assets/updatesectionleft.md"
import updatesectionright from "@/assets/updatesectionright.md"

import navloginregister from '@/components/NavLoginRegister.vue'
import navsection from '@/components/NavSection.vue'

import footer1 from '@/components/Footer.vue'
export default {
    name:'updatepage',
    components:{
        navloginregister,
        navsection,
        updatesectionleft,
        updatesectionright,
        footer1
    },
    data(){
        return{
            show:false
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

</style>