<template>
  <div
    :data-aos="fade"
    :data-aos-delay="delay"
    class="relative md:w-45 lg:flex-1 doctor cursor-pointer"
    @mouseenter="isOpened = true"
    @mouseleave="isOpened = false"
  >
    <img
      v-lazy="avatar"
      alt=""
      id="hero-img'"
      class="w-full object-cover drop-shadow-md"
    />
    <transition name="fade">
      <doctor-card
        v-if="isOpened"
        :fullName="name"
        :position="orientation"
      ></doctor-card>
    </transition>
  </div>
</template>

<script>
import DoctorCard from "./DoctorCard.vue";
export default {
  components: {
    DoctorCard,
  },
  props: ["person", "orientation", "name", "fade", "delay"],
  data() {
    return {
      isOpened: false,
      avatar: new URL(this.person, import.meta.url).href,
    };
  },
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s linear;
}
</style>
