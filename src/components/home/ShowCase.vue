<template>
  <section class="h-900">
    <div class="container mx-auto h-full">
      <div class="flex h-full w-full items-center">
        <div class="flex-1">
          <h1
            data-aos="fade-down"
            class="text-3xl md:text-6xl font-bold text-gray-800 mb-6"
          >
            We Care About Your Health
          </h1>
          <div data-aos="fade-up" data-aos-delay="100">
            <h5 class="text-normal md:text-xl font-medium text-zinc-500 mb-5">
              check now your healty with our professional doctor, completed and
              modern fasilities services
            </h5>
            <the-button title="Check Now" :fill="true"></the-button>
          </div>
        </div>
        <div data-aos="fade-left" class="hidden sm:block flex-1">
          <img v-lazy="hero" class="ml-auto w-5/6" alt="" />
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
