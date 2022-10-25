<template>
  <section class="min-h-screen bg-sky-100 pt-12 pb-24 px-10 sm:p-12">
    <div class="container mx-auto h-full">
      <div data-aos="flip-down" class="text-gray-800 text-center mb-12">
        <h5 class="text-xl font-semibold text-zinc-800 mb-5">Our Doctors</h5>
        <h2
          class="text-2xl sm:text-4xl font-semibold text-zinc-800 leading-snug"
        >
          Visit Our Professional <br />
          Specialists
        </h2>
      </div>
      <div
        class="md:flex flex-wrap justify-center gap-8 gap-y-20 mb-12 lg:mb-0"
      >
        <each-doctor
          :person="'../../assets/person1.jpg'"
          name="dr. Moeharman, Sp. THT.KL"
          orientation="Orthodontist"
          fade="fade-right"
          delay="100"
        ></each-doctor>
        <each-doctor
          person="../../assets/person2.png"
          name="ANTONIUS JANSEN"
          orientation="Pediatric"
          fade="fade-right"
          delay="0"
        ></each-doctor>
        <each-doctor
          person="../../assets/person3.png"
          name="dr. NADYA NAVIRA"
          orientation="Dentist"
          fade="fade-left"
          delay="0"
        ></each-doctor>
        <each-doctor
          person="../../assets/person4.png"
          name="MUHAMMAD ALI SYAHPUTRA"
          orientation="Dentist"
          fade="fade-left"
          delay="100"
        ></each-doctor>
      </div>
    </div>
  </section>
</template>

<script>
import EachDoctor from "../UI/EachDoctor.vue";
import DoctorCard from "../UI/DoctorCard.vue";
export default {
  components: {
    EachDoctor,
    DoctorCard,
  },
  data() {
    return {
      // person2: new URL("../../assets/person2.png", import.meta.url).href,
      // person3: new URL("../../assets/person3.png", import.meta.url).href,
      // person4: new URL("../../assets/person4.png", import.meta.url).href,
    };
  },
};
</script>

<style scoped>
.each-card {
  bottom: -3rem;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s linear;
}
@media (max-width: 768px) {
  .doctor:not(:last-child) {
    margin-bottom: 5rem;
  }
}
</style>
