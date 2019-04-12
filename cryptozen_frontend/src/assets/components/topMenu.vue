<template >
  <nav class="topMenu">
    <div class="block-top_menu">
      <div class="logo" >
        <img class="logo-item" src="../logo1.png">
      </div>
      <div class="menu">
        <ul class="menu-list">
        <li class="menu_item active"><router-link tag="a" to="/home"><h3>Home</h3></router-link></li>
        <li class="menu_item"><router-link tag="a" to="/service"><h3>Service</h3></router-link></li>
        <li class="menu_item"><router-link tag="a" to="/work"><h3>Work</h3></router-link></li>
        <li class="menu_item"><router-link tag="a" to="/about"><h3>About</h3></router-link></li>
        <li class="menu_item"><router-link tag="a" to="/blog"><h3>Blog</h3></router-link></li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>


</script>

<style>
  .topMenu {
      font-family: 'Roboto', sans-serif;
      position: relative;
      top: 0px;
      left: 0px;
      right: 0px;
      background-color: #4F4D63;
      height: 80px;
      
      margin-bottom: 5px;   
   }
    
  .block-top_menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between ;
  }

  .menu {
    display: flex;
    flex-direction: row;
    
  }
  
  .logo {
     margin-left: 20px;
   }

  .logo-item {
      width: 150px;
      height: 50px;
      margin-top: 15px;
   }

  .menu_item {
      color: white;
      text-decoration: none;
      font-size:18px;
      margin-top: 5px;
      margin-right: 200px;
      
  }

  .menu_item:hover  {
    cursor: pointer;
    color: aqua;
  }

</style>
