<template>
  <img v-lazy="img" alt="" />
</template>

<script>
export default {
    props:['image'],
    computed:{
        img = ()=> new URL(this.image, import.meta.url).href
    }

}
</script>

<style scoped></style>
