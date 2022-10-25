<template>
  <section class="min-h-screen bg-sky-100 pt-12 pb-24 px-10 sm:p-12">
    <div class="container mx-auto h-full">
      <div class="text-gray-800 text-center mb-12">
        <h5 class="text-xl font-semibold text-zinc-800 mb-5">Our Doctors</h5>
        <h2
          class="text-2xl sm:text-4xl font-semibold text-zinc-800 leading-snug"
        >
          Visit Our Professional <br />
          Specialists
        </h2>
      </div>
      <div class="md:flex flex-wrap gap-8 gap-y-20 mb-12 lg:mb-0">
        <div class="relative md:w-45 lg:flex-1 doctor">
          <img
            v-lazy="person1"
            alt=""
            class="w-full object-cover drop-shadow-md"
          />
          <doctor-card
            fullName="dr. Moeharman, Sp. THT.KL"
            position="Orthodontist"
          ></doctor-card>
        </div>
        <div class="relative md:w-45 lg:flex-1 doctor">
          <img
            v-lazy="person2"
            alt=""
            class="w-full object-cover drop-shadow-md"
          />
          <doctor-card
            fullName="ANTONIUS JANSEN"
            position="Pediatric "
          ></doctor-card>
        </div>
        <div class="relative md:w-45 lg:flex-1 doctor">
          <img
            v-lazy="person3"
            alt=""
            class="w-full object-cover drop-shadow-md"
          />
          <doctor-card
            fullName="dr. NADYA NAVIRA"
            position="Dentist"
          ></doctor-card>
        </div>
        <div class="relative md:w-45 lg:flex-1 doctor">
          <img
            v-lazy="person4"
            alt=""
            class="w-full object-cover drop-shadow-md"
          />
          <doctor-card
            fullName="MUHAMMAD ALI SYAHPUTRA"
            position="Dentist"
          ></doctor-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DoctorCard from "../UI/DoctorCard.vue";
export default {
  components: {
    DoctorCard,
  },
  data() {
    return {
      person1: new URL("../../assets/person1.jpg", import.meta.url).href,
      person2: new URL("../../assets/person2.png", import.meta.url).href,
      person3: new URL("../../assets/person3.png", import.meta.url).href,
      person4: new URL("../../assets/person4.png", import.meta.url).href,
    };
  },
};
</script>

<style scoped>
.each-card {
  bottom: -3rem;
}
@media (max-width: 768px) {
  .doctor:not(:last-child) {
    margin-bottom: 5rem;
  }
}
</style>
