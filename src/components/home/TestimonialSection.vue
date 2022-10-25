<template>
  <section class="pt-12">
    <div class="container mx-auto">
      <div data-aos="fade-right" class="text-gray-800 mb-12">
        <h5 class="text-xl font-semibold text-zinc-800 mb-5">Testimonials</h5>
        <h2
          class="text-2xl md:text-4xl font-semibold text-zinc-800 leading-snug"
        >
          What they say after visiting <br />
          our hospital
        </h2>
      </div>
      <div class="sm:flex gap-4 mb-20">
        <div
          data-aos="fade-up-right"
          class="
            flex-1
            bg-sky-100
            rounded-md
            overflow-hidden
            drop-shadow-md
            mb-6
            transition-all
            cursor-pointer
            sm:mb-0
            hover:shadow-lg
          "
        >
          <img v-lazy="docSection1" class="w-full object-cover" alt="" />
          <div class="p-3">
            <h6 class="font-bold text-xl">John Doe</h6>
            <p class="w-5/6 text-lg leading-6 text-gray-800 my-3">
              The service I felt was very good, the staff and doctors were
              friendly and provided very clear information.
            </p>
            <div class="mb-2">
              <img v-lazy="stars" alt="" class="mx-auto" />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          class="
            flex-1
            bg-sky-100
            rounded-md
            overflow-hidden
            drop-shadow-lg
            cursor-pointer
            transition-all
            hover:shadow-lg
          "
        >
          <img v-lazy="docSection2" class="w-full object-cover" alt="" />
          <div class="p-3">
            <h6 class="font-bold text-xl">John Doe</h6>
            <p class="w-5/6 text-lg leading-6 text-gray-800 my-3">
              The service I felt was very good, the staff and doctors were
              friendly and provided very clear information.
            </p>
            <div class="mb-2">
              <img v-lazy="stars" alt="" class="mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" class="bg-stone-800 text-white p-12">
        <h3 class="text-xl sm:text-4xl font-semibold mb-10 w-full md:w-3/4">
          Let's consult your health with our doctor
        </h3>
        <div class="sm:flex justify-between items-center">
          <h6 class="text-normal sm:text-lg font-medium mb-4 sm:mb-0">
            We will provide the best service.
          </h6>
          <the-button title="Contact Us" :fill="true"></the-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      stars: new URL("../../assets/stars.svg", import.meta.url).href,
      docSection1: new URL("../../assets/doc-section1.jpg", import.meta.url)
        .href,
      docSection2: new URL("../../assets/doc-section2.jpg", import.meta.url)
        .href,
    };
  },
};
</script>

<style></style>
