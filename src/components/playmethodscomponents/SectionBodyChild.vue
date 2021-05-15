<template>
    <div :id="data.id" class="container">
        <div :class="data.class">
            <a  class="aset">
                <div class="mt-5" style="height:150px;">
                    <b-img :src=data.pic :style="data.sizeset"></b-img>
                </div>
                <div>
                    <p>{{data.text}}</p>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'sectionbodychild',
    props:{
        data:Object
    }
}
</script>
<style scoped>
p{
    font-family: "Noto Sans";
    font-weight: 700;
    font-size: 18px;
    line-height: 34px;
    opacity: 0.9;
    color:#808d8f;
}
.aset{
    cursor: pointer;
    background-color:#f8f5f4;
    border: 1px solid #f8f5f4;
    display:block; 
    text-decoration:none;
}
.aset:hover{
    border: 1px solid #313131;
}
</style>