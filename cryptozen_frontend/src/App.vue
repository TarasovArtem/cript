<template>
  <div class="container">
    <top-menu> </top-menu>
    <sub-header></sub-header>
    <info-content></info-content>
    <footer-dom></footer-dom>
    <router-view></router-view>
  </div>
  
</template>

<script>
  import topMenu from './assets/components/topMenu.vue'
  import subHeader from './assets/components/subHeader.vue';
  import infoContent from './assets/components/infoContent.vue';
  import footerDom from './assets/components/footerDom.vue';

  export default {
    components: {
      topMenu,
      subHeader,
      infoContent,
      footerDom
  },
}




</script>

<style>


body {
  height: 100%;
  margin: 0;
	padding: 0;
   
}
.container {
  position:absolute;
  overflow: hidden; 
  width: 100%;
  height: 100% ;
}
</style>
