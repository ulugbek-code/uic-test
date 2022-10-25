<template>
  <button
    class="
      transition-all
      bg-sky-500
      rounded
      text-white
      py-2
      px-8
      border-2 border-sky-500
      hover:bg-sky-600
    "
    :class="{
      'hover:bg-white hover:text-sky-500 rounded': fill,
    }"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: ["title", "fill"],
};
</script>

<style></style>
