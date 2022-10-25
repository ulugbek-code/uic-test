<template>
  <section class="h-screen">
    <div class="container mx-auto h-full">
      <div class="flex h-full items-center md:gap-8">
        <div data-aos="fade-right" class="hidden md:block flex-1 xl:h-3/4">
          <img v-lazy="girl" class="h-full mx-auto" alt="" />
        </div>
        <div data-aos="fade-left" class="flex-1">
          <h5 class="text-xl font-semibold text-zinc-800 mb-4">About Us</h5>
          <h2 class="text-4xl font-semibold leading-snug text-zinc-800 mb-5">
            We help your Health
          </h2>
          <p class="text-normal lg:text-lg leading-8 text-slate-400 mb-10">
            This profile describes the activities of health services and medical
            support as well as the facilities and conditions of the General
            Hospital which is reflected in the general public served from all
            groups, religions and beliefs, ethnicity and the level and frequency
            of bed occupancy which continues to increase significantly.
          </p>
          <the-button title="More About Us" :fill="true"></the-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      girl: new URL("../../assets/girl.png", import.meta.url).href,
    };
  },
};
</script>

<style scoped></style>
