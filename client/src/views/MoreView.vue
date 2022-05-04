<template>
  <div class="moreLink">
    <div class="content">
      <h1>神經免疫疾病衛教內容</h1>
      <hr>
      <h3>相關連結</h3>
      <div class="link">
        <a href="https://www.cgmh.org.tw/tw/Services/DrugGuide#gallery-4">【用藥指導】</a>
        <a href="https://youtu.be/qCaCCu_BXao">【復健活動指導】</a>
        <a href="https://webapp.cgmh.org.tw/article/document/art_atch/00462-20210525-112931.pdf">【預防病人跌倒衛教須知】</a>
        <a href="https://webapp.cgmh.org.tw/article/document/art_atch/00387-20200725-171208.pdf">【飲食指導】</a>
        <a href="https://webapp.cgmh.org.tw/article/document/art_atch/00224-20210510-100423.pdf">【重症肌無力衛教手冊】</a>
        <a href="https://webapp.cgmh.org.tw/article/document/art_atch/00314-20210423-164317.pdf">【腰椎穿刺檢查衛教須知】</a>
        <a href="https://www.cgmh.org.tw/tw/Services/Guardian">【院內衛教資訊查詢】</a>
      </div>
      <h3>相關資源連結</h3>
      <div class="img">
        <a href="https://parc.tw/"><img alt="病人自主權利" src="../assets/m1.png"></a>
        <a href="http://www.neurohealth.org.tw/"><img alt="病人自主權利" src="../assets/m2.png"></a>
        <a href="http://www.fmg.org.tw/"><img alt="病人自主權利" src="../assets/m3.png"></a>
        <a href="https://www.hospice.org.tw/care/law"><img alt="病人自主權利" src="../assets/m4.png"></a>
      </div>
      
    </div>
  </div>
  

</template>

<script>
export default {
    name: 'MoreView',
    data(){
        return{

    }
  }
}
</script>

<style lang="scss">
.moreLink{
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
    }
    h3{
      margin-top: 20px;

    }
    .link{
      display: block;
      margin-bottom: 20px;
    }
    .img{
      width: 800px;
      display: grid;
      grid-template-columns: 1fr 1fr;

      img{
        width: 100%;
      }
    }
  }
}
</style>