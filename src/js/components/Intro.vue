<template>
    <section id="intro">
        <Card/>
        <Card/>
        <Card/>
    </section>
</template>

<script>
import '../../style/components/Intro.scss';
import Card from "./Card.vue";
export default {
  components:{
    Card
  }
}
</script>