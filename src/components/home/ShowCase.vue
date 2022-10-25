<template>
  <section class="h-900">
    <div class="container mx-auto h-full">
      <div class="flex h-full w-full items-center">
        <div class="flex-1">
          <h1 class="text-3xl md:text-6xl font-bold text-gray-800 mb-6">
            We Care About Your Health
          </h1>
          <h5 class="text-normal md:text-xl font-medium text-zinc-500 mb-5">
            check now your healty with our profesional doctor, completed and
            modern fasilities services
          </h5>
          <the-button title="Check Now"></the-button>
        </div>
        <div class="hidden sm:block flex-1">
          <img v-lazy="hero" class="ml-auto" alt="" />
        </div>
      </div>
    </div>
    <div class="h-screen absolute top-0 -z-10">
      <img v-lazy="circle" alt="" class="w-full h-full" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hero: new URL("../../assets/hero.png", import.meta.url).href,
      circle: new URL("../../assets/circle.png", import.meta.url).href,
    };
  },
};
</script>

<style scoped></style>
