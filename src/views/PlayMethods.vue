<template>
    <div>
        <div>
            <navheader></navheader>
            <div>
                <div v-if="show" style="height:70px;"></div>
                <navSection @vis="op($event)"></navSection>
            </div>
            <sectionbody @work="hide,clears"></sectionbody>
            <footer1></footer1>
        </div>
    </div>
</template>
<script>
import navheader from '@/components/NavLoginRegister.vue'
import navSection from '@/components/NavSection.vue'
import sectionbody from '@/components/playmethodscomponents/SectionBody.vue'

import footer1 from '@/components/Footer.vue'

export default {
    name:'playmethod',
    components:{
        navheader,
        navSection,
        sectionbody,
        footer1
    },
    data(){
        return{
            show:false,
            operation:true
        }
    },
    methods:{
        hide(){
            this.operation = false
        },
        clears(){
          this.$emit('clearsc')
        },
        op($event){
          this.show = $event
        }
        
    }
}
</script>