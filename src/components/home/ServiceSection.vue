<template>
  <section class="h-screen bg-sky-100">
    <div class="container h-full mx-auto flex-col py-28">
      <div class="text-gray-800 text-center mb-32">
        <h5 class="text-xl font-semibold mb-5">Our Services</h5>
        <h2 class="text-4xl font-semibold leading-snug">
          4 Step Easy We Care Your <br />
          Health
        </h2>
      </div>
      <div class="flex justify-center gap-x-20">
        <div
          class="
            each
            relative
            text-center
            px-20
            pt-24
            pb-12
            bg-white
            rounded-sm
          "
        >
          <img
            src="../../assets/calendar.png"
            class="absolute left-1/2"
            alt=""
          />
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
            px-20
            pt-24
            pb-12
            bg-white
            rounded-sm
          "
        >
          <img src="../../assets/heart.png" class="absolute left-1/2" alt="" />
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
            px-20
            pt-24
            pb-12
            bg-white
            rounded-sm
          "
        >
          <img src="../../assets/doctor.png" class="absolute left-1/2" alt="" />
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
export default {};
</script>

<style scoped>
.each img {
  top: -3.6rem;
  transform: translateX(-50%);
}
</style>
