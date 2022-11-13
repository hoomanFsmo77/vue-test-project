<template>
  <aside id="sidebar">
    <h1>Comments</h1>
      <div class="sidebar_item" v-for="(item,index) in data.slice(0,6)" :key="index">
        <h3>Name: {{item.name}}</h3>
        <span>Email: {{item.email}}</span>
        <br>
        <button @click="showMessage(index)">Show message</button>
        <transition name="fade">
          <p v-if="visible===index">Message: {{item.body}}</p>
        </transition>
      </div>
  </aside>
</template>

<script>
import '../../style/components/Sidebar.scss';
export default {
  data(){
    return{
      visible:null,
      data:[]
    }
  },
  methods:{
    showMessage(index){
      this.visible=index
      this.show=!this.show
    }
  },
  async beforeMount() {
     let req=await fetch('https://jsonplaceholder.typicode.com/comments')
      this.data=req.ok ? await req.json() :'Error'
  }

}
</script>
