<template>
  <div class="bg-red-200 w-full p-12" style="height: 400px;">
    <h1>{{ title }} </h1>
    This is my TextImage Blok
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
