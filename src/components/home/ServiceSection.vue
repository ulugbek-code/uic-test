<template>
  <section class="min-h-screen bg-sky-100">
    <div class="container h-full mx-auto flex-col py-28">
      <div class="text-gray-800 text-center mb-32">
        <h5 class="text-xl font-semibold mb-5">Our Services</h5>
        <h2 class="text-2xl sm:text-4xl font-semibold leading-snug">
          4 Step Easy We Care Your <br />
          Health
        </h2>
      </div>
      <div
        class="xl:w-3/4 mx-auto md:flex justify-center md:gap-x-4 lg:gap-x-12"
      >
        <div
          class="
            each
            flex-1
            relative
            text-center
            bg-white
            rounded-sm
            pt-20
            pb-8
            px-8
            md:px-2
            lg:px-8
          "
        >
          <img v-lazy="calendar" class="absolute left-1/2" alt="" />
          <h6 class="text-xl font-semibold mb-2">Date</h6>
          <p class="text-lg text-slate-400">
            Choose what date <br />
            to check
          </p>
        </div>

        <div
          class="
            each
            relative
            text-center
            flex-1
            bg-white
            rounded-sm
            pt-20
            pb-8
            px-8
            md:px-2
            lg:px-8
          "
        >
          <img v-lazy="heart" class="absolute left-1/2" alt="" />
          <h6 class="text-xl font-semibold mb-2">Poly</h6>
          <p class="text-lg text-slate-400">
            Choose what Poly <br />
            to check
          </p>
        </div>
        <div
          class="
            each
            relative
            text-center
            flex-1
            bg-white
            rounded-sm
            pt-20
            pb-8
            px-8
            md:px-2
            lg:px-8
          "
        >
          <img v-lazy="doctor" class="absolute left-1/2" alt="" />
          <h6 class="text-xl font-semibold mb-2">Doctor</h6>
          <p class="text-lg text-slate-400">
            And choose doctor <br />
            to check
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      calendar: new URL("../../assets/calendar.png", import.meta.url).href,
      heart: new URL("../../assets/heart.png", import.meta.url).href,
      doctor: new URL("../../assets/doctor.png", import.meta.url).href,
    };
  },
};
</script>

<style scoped>
.each img {
  top: -3.6rem;
  transform: translateX(-50%);
}
@media (max-width: 768px) {
  .each:not(:last-child) {
    margin-bottom: 5rem;
  }
}
</style>
