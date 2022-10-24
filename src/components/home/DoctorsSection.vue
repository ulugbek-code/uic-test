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
      <div class="md:flex gap-8">
        <div class="relative flex-1 doctor">
          <img
            src="../../assets/person1.jpg"
            alt=""
            class="w-full object-cover drop-shadow-md"
          />
          <doctor-card
            fullName="dr. Moeharman, Sp. THT.KL"
            position="Orthodontist"
          ></doctor-card>
        </div>
        <div class="relative flex-1 doctor">
          <img
            src="../../assets/person2.png"
            alt=""
            class="w-full object-cover drop-shadow-md"
          />
          <doctor-card
            fullName="ANTONIUS JANSEN"
            position="Pediatric "
          ></doctor-card>
        </div>
        <div class="relative flex-1 doctor">
          <img
            src="../../assets/person3.png"
            alt=""
            class="w-full object-cover drop-shadow-md"
          />
          <doctor-card
            fullName="dr. NADYA NAVIRA"
            position="Dentist"
          ></doctor-card>
        </div>
        <div class="relative flex-1 doctor">
          <img
            src="../../assets/person4.png"
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
