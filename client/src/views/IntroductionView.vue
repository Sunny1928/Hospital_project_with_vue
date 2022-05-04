<template>
    <div class="intro">
        <div class="content">
            <h1>神經免疫疾病簡介</h1>
            <hr>
            <p><b>神經免疫疾病</b>是一群特殊的疾病，主要是患者的免疫系統錯誤攻擊自身神經組織所致，當這些疾病造成急性惡化時，可能造成病患呼吸衰竭或生命徵象不穩的情況，甚至有致死的風險。</p>
            <p>免疫系統如同身體內的警察，主要負責辨識、抓捕及攻擊外來病菌(圖A)。然而，當免疫系統誤將體內正常組織視為外來病菌而進行攻擊時，就會產生自體免疫反應(圖B)。</p>
            <div class="img">
                <img alt="ImageA" src="../assets/imga.png">
                <img alt="ImageB" src="../assets/imgb.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IntroductionView',
    data(){
        return{
      
        }
    }
}
</script>

<style lang="scss">
.intro{
    display: flex;
    justify-content: center;

    .content{
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 10px;
        width: 80%;
        border-radius: 10px;
        background: #fff;

        h1{
            color: rgb(57,166,74);
            font-size: 2rem;
            font-weight: bold;
        }

        p{
            margin-top: 10px;
            font-size: 1rem;
        }

        .img{
            display: flex;
            justify-content: center;
            margin-top: 10px;
        }
    }
}
</style>