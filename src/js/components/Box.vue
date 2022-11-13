<template>
  <div class="box">
    <h1 >Box</h1>
    <img :src="info?.thumbnailUrl" alt="">
    <p v-text="info?.title"></p>
  </div>
</template>

<script>
import '../../style/components/Box.scss';
export default {
  props:{
    id:{
      type:Number,
      required:true
    }
  },
  data(){
    return{
      info:null
    }
  },
  async beforeMount() {
    let req=await fetch(`https://jsonplaceholder.typicode.com/photos/${this.$props.id}`)
    this.info=req.ok ? await req.json() : 'Error'
  }

}
</script>