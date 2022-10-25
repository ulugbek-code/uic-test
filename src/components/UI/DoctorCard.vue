<template>
  <div
    class="
      absolute
      bg-white
      rounded
      each-card
      inset-x-4
      p-2
      lg:p-4
      drop-shadow-md
    "
  >
    <div class="flex gap-4">
      <img src="../../assets/facebook.svg" alt="" />
      <img src="../../assets/pinterest.svg" alt="" />
      <img src="../../assets/dribble.svg" alt="" />
      <img src="../../assets/instagram.svg" alt="" />
    </div>
    <h5 class="font-bold my-2 text-sm sm:text-base lg:text-xl">
      {{ fullName }}
    </h5>
    <p class="text-sm sm:text-base">{{ position }}</p>
  </div>
</template>

<script>
export default {
  props: {
    fullName: {
      required: true,
      type: String,
    },
    position: {
      required: false,
      type: String,
      default: "Employer",
    },
  },
};
</script>

<style scoped></style>
