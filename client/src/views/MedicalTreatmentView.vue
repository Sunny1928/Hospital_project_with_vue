<template>
    <div class="treatment">
        <div class="content">
            <h1>相關治療方法</h1>
            <hr>
            <p><b>自體免疫反應</b>可能發生在神經系統的不同位置，因而產生各種神經免疫疾病。</p>
            <p>當病患遭受感染、手術、受傷、情緒低落或接觸某些特定藥物時，可能會讓自體兔疫反應加強，進而誘發相關疾病或造成病症急性惡化。</p>
            <div class="img">
                <img alt="TreatmentImage" src="../assets/img1.png">
            </div>
            <div class="search">
                <select v-model="selected">
                    <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
                        {{ option.text }}
                    </option>
                </select>
            </div>
            <div class="methods" v-if="selected!=-1">
                <h2>治療方法介紹：</h2>
                <div class="col">
                    <div class="left">
                        <img alt="靜脈注射高劑量類固醇" src="../assets/img2.png">
                    </div>
                    <div class="right">
                        <h2>靜脈注射高劑量類固醇</h2>
                        <p>由於類固醇可以透過不同的藥理機轉抑制多種免疫反應，因此在神經免疫疾病急性惡化時，將高劑量類固醇直接注射至患者體內，可避免病症持續惡化。</p>
                    </div>
                </div>
                
                <div class="col">
                    <div class="left">
                        <img alt="靜脈注射高劑量類固醇" src="../assets/img3.jpeg">
                    </div>
                    <div class="right">
                        <h2>靜脈注射免疫球蛋白注射</h2>
                        <p>將健康捐贈者全血中分離出的免疫球蛋白直接注射至患者體內，目前作用機轉並沒有明確定論，但確實能改善部分患者的症狀。</p>
                    </div>
                </div>

                <div class="col">
                    <div class="left">
                        <img alt="靜脈注射高劑量類固醇" src="../assets/img4-1.jpeg">
                    </div>
                    <div class="right">
                        <h2>血漿置換術</h2>
                        <p>透過血漿分離器將患者的血漿從全血中分離出來，並同時利用健康捐贈者的血漿作為置換液，補充置換過程中流失的體液。</p>
                    </div>
                </div>

                <div class="col">
                    <div class="left">
                        <img alt="靜脈注射高劑量類固醇" src="../assets/img4-2.jpeg">
                    </div>
                    <div class="right">
                        <h2>雙重過濾血漿分離術</h2>
                        <p>將患者分離出的血漿，透過血漿分流器將大分子物質移除，小分子物質與水分則再次送回病人體內，整個過程無須仰賴健康捐贈者的血漿作為置換液。</p>
                    </div>
                </div>
                <div v-html="treatment[selected].table"></div> 
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'MedicalTreatmentView',
    data(){
        return{
            selected: 0,
            options:[
                {
                    text: "選擇疾病",
                    value: -1
                },
                {
                    text: "自體免疫腦炎",
                    value: 0
                },
                {
                    text: "多發性硬化症",
                    value: 1
                },
                {
                    text: "視神經脊髓炎",
                    value: 2
                },
                {
                    text: "重症肌無力",
                    value: 3
                },
                {
                    text: "格林-巴痢症候群",
                    value: 4
                },
                {
                    text: "慢性發炎性脫髓鞘神經病變",
                    value: 5
                }
            ],
            treatment:[
                {
                    table:
                    `<div class="table">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="5">治療方法比較</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="10%">選項比較</td>
                                    <td width="21%">靜脈注射高劑量類固醇</td>
                                    <td width="21%">靜脈注射免疫球蛋白</td>
                                    <td width="22%">血漿置換術</td>
                                    <td width="22%">雙重過濾血漿分離術</td>
                                </tr>
                                <tr class="gray">
                                    <td>效果</td>
                                    <td colspan="4">一、上述各種方式皆可用於急性治療。<br>二、目前證據皆為專家經驗分享，尚無比較性研究成果。</td>
                                </tr>
                                <tr>
                                    <td rowspan="2">風險</td>
                                    <td>腸胃不適、血糖升高、失眠、躁動</td>
                                    <td colspan="3">使用健康捐贈者血液成分，因此可能會有過敏排斥。</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td colspan="2">須使用雙腔靜脈導管作為暫時性人工瘻管，在導管置放的過程可能出現血腫或感染的風險。體液在分離器及人體之間快速流動，可能會出現血壓變化、心律不整、低體溫、肺水腫。</td>
                                </tr>
                                <tr class="gray">
                                    <td>健保給付</td>
                                    <td>Ｏ</td>
                                    <td>Ｘ<br>需自費，約30萬</td>
                                    <td>Ｘ<br>需自費，約8萬</td>
                                    <td>Ｘ<br>需自費，約8萬</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    `
                },
                {
                    table:
                    `<div class="table">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="5">治療方法比較</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="10%">選項比較</td>
                                    <td width="21%">靜脈注射高劑量類固醇</td>
                                    <td width="21%">靜脈注射免疫球蛋白</td>
                                    <td width="22%">血漿置換術</td>
                                    <td width="22%">雙重過濾血漿分離術</td>
                                </tr>
                                <tr class="gray">
                                    <td>效果</td>
                                    <td colspan="4">一、上述各種方式皆可用於急性治療。<br>二、目前證據皆為專家經驗分享，尚無比較性研究成果。</td>
                                </tr>
                                <tr>
                                    <td rowspan="2">風險</td>
                                    <td>腸胃不適、血糖升高、失眠、躁動</td>
                                    <td colspan="2">使用健康捐贈者血液成分，因此可能會有過敏排斥。</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td colspan="2">須使用雙腔靜脈導管作為暫時性人工瘻管，在導管置放的過程可能出現血腫或感染的風險。體液在分離器及人體之間快速流動，可能會出現血壓變化、心律不整、低體溫、肺水腫。</td>
                                </tr>
                                <tr class="gray">
                                    <td>健保給付</td>
                                    <td>Ｏ</td>
                                    <td>Ｘ<br>需自費，約30萬</td>
                                    <td>Ｏ</td>
                                    <td>Ｏ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    `
                },
                {
                    table:
                    `<div class="table">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="5">治療方法比較</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="10%">選項比較</td>
                                    <td width="21%">靜脈注射高劑量類固醇</td>
                                    <td width="21%">靜脈注射免疫球蛋白</td>
                                    <td width="22%">血漿置換術</td>
                                    <td width="22%">雙重過濾血漿分離術</td>
                                </tr>
                                <tr class="gray">
                                    <td>效果</td>
                                    <td>急性首選療法</td>
                                    <td>Ｘ</td>
                                    <td colspan="2">對類固醇反應不佳的患者，可考慮血漿置換術或雙重過濾血漿分離術。</td>
                                </tr>
                                <tr>
                                    <td rowspan="2">風險</td>
                                    <td>腸胃不適、血糖升高、失眠、躁動</td>
                                    <td colspan="2">使用健康捐贈者血液成分，因此可能會有過敏排斥。</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td colspan="2">須使用雙腔靜脈導管作為暫時性人工瘻管，在導管置放的過程可能出現血腫或感染的風險。體液在分離器及人體之間快速流動，可能會出現血壓變化、心律不整、低體溫、肺水腫。</td>
                                </tr>
                                <tr class="gray">
                                    <td>健保給付</td>
                                    <td>Ｏ</td>
                                    <td>Ｘ<br>需自費，約30萬</td>
                                    <td>Ｏ</td>
                                    <td>Ｏ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`
                },
                {
                    table:
                    `<div class="table">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="5">治療方法比較</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="10%">選項比較</td>
                                    <td width="21%">靜脈注射高劑量類固醇</td>
                                    <td width="21%">靜脈注射免疫球蛋白</td>
                                    <td width="22%">血漿置換術</td>
                                    <td width="22%">雙重過濾血漿分離術</td>
                                </tr>
                                <tr class="gray">
                                    <td>效果</td>
                                    <td>Ｘ</td>
                                    <td colspan="3">一、上述各種方式皆可用於急性治療。<br>二、目前證據皆為專家經驗分享，尚無比較性研究成果。</td>
                                </tr>
                                <tr>
                                    <td rowspan="2">風險</td>
                                    <td>腸胃不適、血糖升高、失眠、躁動</td>
                                    <td colspan="2">使用健康捐贈者血液成分，因此可能會有過敏排斥。</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td colspan="2">須使用雙腔靜脈導管作為暫時性人工瘻管，在導管置放的過程可能出現血腫或感染的風險。體液在分離器及人體之間快速流動，可能會出現血壓變化、心律不整、低體溫、肺水腫。</td>
                                </tr>
                                <tr class="gray">
                                    <td>健保給付</td>
                                    <td>Ｏ</td>
                                    <td>Ｘ<br>需自費，約30萬</td>
                                    <td>Ｏ</td>
                                    <td>Ｏ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`
                },
                {
                    table:
                    `<div class="table">
                        <table>
                            <thead>
                                <tr>
                                    <th colspan="5">治療方法比較</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="10%">選項比較</td>
                                    <td width="21%">靜脈注射高劑量類固醇</td>
                                    <td width="21%">靜脈注射免疫球蛋白</td>
                                    <td width="22%">血漿置換術</td>
                                    <td width="22%">雙重過濾血漿分離術</td>
                                </tr>
                                <tr class="gray">
                                    <td>效果</td>
                                    <td>Ｘ</td>
                                    <td colspan="3">一、上述各種方式皆可用於急性治療。<br>二、目前證據皆為專家經驗分享，尚無比較性研究成果。</td>
                                </tr>
                                <tr>
                                    <td rowspan="2">風險</td>
                                    <td>腸胃不適、血糖升高、失眠、躁動</td>
                                    <td colspan="2">使用健康捐贈者血液成分，因此可能會有過敏排斥。</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td colspan="2">須使用雙腔靜脈導管作為暫時性人工瘻管，在導管置放的過程可能出現血腫或感染的風險。體液在分離器及人體之間快速流動，可能會出現血壓變化、心律不整、低體溫、肺水腫。</td>
                                </tr>
                                <tr class="gray">
                                    <td>健保給付</td>
                                    <td>Ｏ</td>
                                    <td>Ｏ<br>呼吸衰竭患者<br>不得與後兩項併用</td>
                                    <td>Ｏ</td>
                                    <td>Ｏ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`
                }
            ]
        }
    },
    methods:{
        getTable(){

        }
    }
}
</script>

<style lang="scss">
.treatment{
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

            img{
                width: 800px;
            }
        }

        .methods{
            margin-top: 30px;
            h2{
                margin-top: 10px;
                margin-bottom: 10px;
            }
            .col{
                display: flex;
                justify-content: center;
                height: 200px;
                padding: 10px;

                .left{
                    width: 30%;
                    display: flex;
                    justify-content: center;

                    img{
                        height: 100%;

                    }
                }

                .right{
                    width: 70%;
                    background: rgb(57,166,74);
                    padding: 0px 15px;
                }
            }
            .table{
                display: flex;
                justify-content: center;
                margin: 20px;

                table{
                    border-collapse: collapse;
                    width: 90%;
                    text-align: center;

                    thead{
                        color: #fff;
                        background: rgb(57,166,74);
                    }

                    th, td {
                        padding: 10px;
                        border: solid 1px #eee;
                    }
                    .gray{
                        background: #ccc;
                    }
                }
            }
            
        }
    }
}
</style>