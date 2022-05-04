<template>
  <div class="patientRight">
    <div class="content">
      <h1>為愛超前部署！我生命，我做主！!</h1>
      <p>您知道「病人自主權利法」嗎？這是您的權利喔!!讓我們分享給您~~</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/GQ_1u8f3Uos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Dxh64VcnqoU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br>
      <img alt="病人自主權利" src="../assets/pr1.jpeg">
      <h3>如有關「病人自主權利法」任何相關問題，可以與我們連絡!!<br>以下為本院神經內科安寧共照護理師!!</h3>
      <div class="box">
        <div class="left">
          <h2>莊   佩   雯</h2>
          <h2>CHUANG PEI WEN</h2>
          <p>安寧共照護理師N4</p>
          <p>高雄市83301鳥松區大埤路123號</p>
          <p>123,Dapi Rd, Niaosong District, Kaohsiung 833, Taiwan (R.O.C)</p>
          <p>行動電話：0965-854-023</p>
          <p>E-mail:apple7259@cgmh.org.tw</p>
        </div>
        <div class="right">
          <img alt="logo" src="../assets/logo3.png">
          <h2>長庚醫療財團法人</h2>
          <p>CHANG GUNG MEDICAL FOUNDATION</p>
          <p>高雄長庚紀念醫院</p>
          <p>安寧共照護理師組</p>
          <p>TEL:(07)731-7123 EXT.3651</p>          
        </div>
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
  .patientRight{
    display: flex;
    justify-content: center;
    .content{
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 10px;
      border-radius: 10px;
      background: #fff;

      h1{
        color: rgb(57,166,74);
      }

      p{
        margin-bottom: 10px;
      }

      img{
        width: 560px;
      }

      h3{
        margin-top: 30px;
        margin-bottom: 10px;
      }

      .box{
        width: 560px;
        padding: 20px;
        background: rgb(57,166,74);
        display: flex;
        justify-content: center;
        align-items: flex-end;
        border-radius: 15px;

        .left{
          width: 50%;
          h2{
            font-size: 30px;
          }
          p{
            margin-bottom: 5px;
          }
        }

        .right{
          width: 50%;
          text-align: right;
          p{
            margin-bottom: 0;
          }
          img{
            width: 60%;
          }
        }
      }
    }
    
  }
</style>