<template>
  <show-case></show-case>
  <service-section></service-section>
  <about-us></about-us>
  <doctors-section></doctors-section>
  <testimonial-section></testimonial-section>
  <the-footer></the-footer>
</template>

<script>
import ShowCase from "../components/home/ShowCase.vue";
import ServiceSection from "../components/home/ServiceSection.vue";
import AboutUs from "../components/home/AboutUs.vue";
import DoctorsSection from "../components/home/DoctorsSection.vue";
import TestimonialSection from "../components/home/TestimonialSection.vue";
export default {
  components: {
    ShowCase,
    ServiceSection,
    AboutUs,
    DoctorsSection,
    TestimonialSection,
  },
};
</script>

<style scoped></style>
