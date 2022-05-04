<template>
  <div class="home">
    <div class="content">
      <div class="start">
        <div class="title">
          <h1>醫院共享醫病共享決策SDM</h1>
          <span>神經免疫疾病</span>
          <p>－神經內科醫護團隊</p>
        </div>
      </div>
      
      <div class="more">
        <div class="title">
            <h2>我是神經免疫疾病患者</h2>
            <h2>神經免疫疾病是什麼呢??</h2>
            <router-link to="/introduction">
              <button>了解更多 ></button>
            </router-link>
        </div>
        
        <div class="title">
          <h2>我是神經免疫疾病患者</h2>
          <h2>在面臨病況急性惡化時，能有哪些治療選擇呢??</h2>
          <router-link to="/medicalTreatment">
              <button>了解更多 ></button>
            </router-link>
        </div>

        <div class="title">
          <h2>神經免疫疾病衛教內容</h2>
          <h2>相關資源連結!</h2>
          <router-link to="/more">
              <button>了解更多 ></button>
            </router-link>
        </div>

        <div class="title">
          <h2>病人自主權利法</h2>
          <h2>為愛超前部署！我生命，我做主！!</h2>
          <router-link to="/patientRight">
              <button>了解更多 ></button>
            </router-link>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'HomeView',
  data(){
    return{
    }
  }
}
</script>

<style lang="scss">

.home{
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  // background: rgb(143, 236, 122);
  // background: linear-gradient(to right ,  #fff 50% ,rgb(143, 236, 122) 50%) left;
  // background-size: 200%;
  // animation: changeBackground 5s ease-in;

  // @keyframes changeBackground {
  //   30%{background-position: right;}
  //   70%{background: rgb(143, 236, 122)}
  // }

  .content{
      margin-top: 20px;
      display: flex;
      border-radius: 10px;
      display: grid;
      grid-template-columns: 40% 60%;
      grid-column-gap: 10px;
      height:100%;


      .start{
      height:100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(57,166,74);
      border-radius: 10px;


        .title{
        height: 100%;
        padding: 130px 60px;

        h1{
          font-size: 40px;
          color: #fff;
        }
        span{
          font-size:80px;
          color: #fff;
          font-weight: bold;
          // text-shadow: 0.1em 0.1em 0.1em rgb(0, 0, 0);
        }
        p{
          width: 100%;
          color: #fff;
          font-size:30px;
          text-align: right;
        }
      }
    }

    .more{
      height:100%;
      display: grid;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-row-gap: 5px;

      
      .title{
        padding: 20px 30px;
        background: #fff;
        border-radius: 10px;
        
        button{
          width: 80px;
          height: 30px;
          margin-top: 5px;
          border-radius: 5px;
          border: none;
          background: black;
          color: #fff;
          cursor: pointer;
          transition: 0.5s ease-in;
        }

        button:hover{
          background: rgb(57,166,74);
        }
      }
      
    }

  }
  

  
}
</style>