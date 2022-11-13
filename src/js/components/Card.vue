<template>
    <div class="card">
        <div class="card_header">
            <h3>Card Header</h3>
            <span>Lorem ipsum dolor.</span>
        </div>
      <div class="card_body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis, commodi culpa, cum eum explicabo facilis illo magni maiores modi molestiae natus non perferendis possimus quasi sint soluta suscipit tenetur.</p>
      </div>
      <div class="card_footer">
        <div>
          <button @click="counter">Counter</button>
          <span  v-text="number"></span>
        </div>
        <input v-model.number="number" type="number" placeholder="start from ?">
      </div>
    </div>
</template>

<script>
import '../../style/components/Card.scss';
export default {
  data(){
    return{
       number:0
    }
  },
  methods:{
    counter(){
      this.number++
    }
  }
}
</script>
