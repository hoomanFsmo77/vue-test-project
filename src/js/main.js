import '../style/main.scss';
import {createApp} from "vue/dist/vue.esm-bundler";
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Sidebar from "./components/Sidebar.vue";
import Box from "./components/Box.vue";
import Footer from "./components/Footer.vue";
//////////////////////////////////
const app=createApp({
    components:{
        SiteHeader:Header,
        Intro:Intro,
        SideBar:Sidebar,
        Box:Box,
        Footer:Footer
    },
    template:`
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
    `
})
app.mount('body')