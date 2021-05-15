<template>
    <div>
        <transition-group>
            <div class="position-relative" v-for="data in paginationmain" :key=data.id :id=data.id>
                <div v-show="data.status">
                    <div  style="height:900px;">
                        <div class="container">
                            <div class="row justify-content-center p-5">
                                <ul class="list-group list-group-horizontal" style="font-size:12px;font-weight:700">
                                    <li class="list-group-item create" style="color:#fff;background: black;" @click=create() :name=data.id>进入创造模式</li>
                                    <li class="list-group-item live" @click=live() :name=data.id>进入生存模式</li>
                                    <li class="list-group-item together" @click=together() :name=data.id>与朋友同乐</li>
                                </ul>
                            </div>
                        </div>
                        <div class="container">
                            <div >
                                <div class="row justify-content-center"><h2 style="font-weight:700;font-size:26px;">{{data.tilte}}</h2></div>
                                <div class="row justify-content-center"><p style="font-size:14px;">{{data.titlesmall}}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>
<script>

export default {
    name:'pagination',
    data(){
        return{
            paginationmain:{
                one:{
                    tilte:'进入创造模式',
                    titlesmall:'建您所想。在创造模式下，尽情发挥您的想象力并利用无限资源进行建造。',
                    id:'one',
                    status:true
                },
                two:{
                    tilte:'进入生存模式',
                    titlesmall:'您在生存模式下努力生存与发展时，仅需一天即可体验与生物战斗，建造避难所和探索景观。',
                    id:'two',
                    status:false
                },
                three:{
                    tilte:'与朋友同乐',
                    titlesmall:'与您的朋友一道建造、探寻并获得乐趣！与朋友一起探索，Minecraft 的世界变得更加绚丽多彩。',
                    id:'three',
                    status:false
                }
            }
        }
    },
    methods:{
        create(){
            let titlearray = document.getElementsByName('one');
            let wholetextcolor = document.getElementById('one');

            titlearray[0].style.color = '#fff';
            titlearray[0].style.background = 'black';
            wholetextcolor.style.color = 'black'

            this.paginationmain.one.status = true
            this.paginationmain.two.status = false
            this.paginationmain.three.status = false
        },
        live(){
            let titlearray = document.getElementsByName('two');
            let wholetextcolor = document.getElementById('two');

            titlearray[0].removeAttribute("style")
            titlearray[0].style.color = '#fff';
            titlearray[1].style.color = 'black';
            titlearray[1].style.background = '#fff';
            wholetextcolor.style.color = '#fff'

            this.paginationmain.one.status = false
            this.paginationmain.two.status = true
            this.paginationmain.three.status = false
        },
        together(){
            let titlearray = document.getElementsByName('three');
            let wholetextcolor = document.getElementById('three');

            titlearray[0].style.color = '#fff';
            titlearray[2].style.color = 'black';
            titlearray[2].style.background = '#fff';
            wholetextcolor.style.color = '#fff'

            this.paginationmain.one.status = false
            this.paginationmain.two.status = false
            this.paginationmain.three.status = true
        }
    }
}
</script>
<style scoped>
#one{
    background-image: url("../../assets/pic/minecraft/pagination1.jpg");
    background-position: center top;
}
#two{
    background-image: url("../../assets/pic/minecraft/pagination2.jpg");
    background-position: center top;
}
#three{
    background-image: url("../../assets/pic/minecraft/pagination3.jpg");
    background-position: center top;
}
.list-group-item{
    background-color: transparent;
    border:none;
}
.create:hover{
    cursor: pointer;
}
.live:hover{
    cursor: pointer;
}
.together:hover{
    cursor: pointer;
}
</style>