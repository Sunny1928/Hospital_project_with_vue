<template>
  <header>
    <a href="https://www.cgmh.org.tw/tw/Systems/BranchInfo/8/83700"><img alt="logo" src="./assets/logo2.png" class="logo"></a>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <div class="content">
      <p>地址：高雄市鳥松區大埤路123號醫學大樓二樓神經內科</p>
      <p>電話：07-7317123分機8885</p>
    </div>
    
  </footer>
</template>

<style lang="scss">
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
}

a{
  text-decoration: none;
}

header{
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo{
    width: 250px;
  }
}

main{
  min-height: 83vh;
  background: #fafafa;
}

footer{
  color: #777;

  .content{
    margin: 5px;
  }

  p{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>