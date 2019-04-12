<template>

  <div class="subheader">
    <div class="block-subheader">
    <div class="logo_header" >
        <img class="logo-item_header" src="../logo2.png">
    </div>
    <div class="block_button">
      <h1 class="main_text">СОЗЕРЦАЯ СВЕРХДОХОДЫ</h1>
      <button class="button_login">
        <h1 class="login_text">LOGIN</h1>
      </button>
    </div>
    </div>
  </div>


</template>

<script>

</script>

<style>

.subheader {
  font-family: 'Roboto', sans-serif;
  position: relative;
  background-color: #BFCADC;
  height: 270px;   
}

.block-subheader {
  display: flex;
  flex-direction: row;
  width: 800px;
  justify-content: space-between;
}

.logo_header {
  color: white;
  margin-top: 15px;
}

.logo-item_header {
  margin-left: 250px;
}

.button_login {
  width: 180px;
  height: 50px;
  background-color: #342D4C;
}

.login_text {
  cursor: pointer;
  color: white;
  font-size: 18px;
}

.main_text {
  color: white;
  font-size: 40px;
}

.block_button {
  width: 100px;
  margin-top: 15px;
  
  
}

</style>
