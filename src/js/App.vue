<template>
  <SiteHeader/>
  <Intro/>
  <div id="box_container">
    <Box id="1"/>
    <Box id="2"/>
    <Box id="3"/>
    <Box id="4"/>
    <Box id="5"/>
    <Box id="6"/>
  </div>
  <SideBar/>
  <Footer/>
</template>

<script>
import '../style/main.scss';
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Sidebar from "./components/Sidebar.vue";
import Box from "./components/Box.vue";
import Footer from "./components/Footer.vue";

export default {
  components:{
    SiteHeader:Header,
    Intro:Intro,
    SideBar:Sidebar,
    Box:Box,
    Footer:Footer
  }
}
</script>
