<template>
  <footer class="bg-sky-100 py-16">
    <div class="container mx-auto">
      <div class="sm:flex justify-between">
        <div class="basis-3/6">
          <img src="../../assets/logo.svg" alt="" />
          <p class="w-full sm:w-4/5 leading-7 my-4">
            Our hospital tries to answer the challenges in the community's need
            for quality dental health services but still affordable by a wide
            audience.
          </p>
          <div class="flex gap-3">
            <img
              src="../../assets/twitter.svg"
              alt=""
              class="bg-white p-2 rounded cursor-pointer hover:bg-gray-200"
            />
            <img
              src="../../assets/twitter.svg"
              alt=""
              class="bg-white p-2 rounded cursor-pointer hover:bg-gray-200"
            />
            <img
              src="../../assets/twitter.svg"
              alt=""
              class="bg-white p-2 rounded cursor-pointer hover:bg-gray-200"
            />
            <img
              src="../../assets/twitter.svg"
              alt=""
              class="bg-white p-2 rounded cursor-pointer hover:bg-gray-200"
            />
            <img
              src="../../assets/twitter.svg"
              alt=""
              class="bg-white p-2 rounded cursor-pointer hover:bg-gray-200"
            />
            <img
              src="../../assets/twitter.svg"
              alt=""
              class="bg-white p-2 rounded cursor-pointer hover:bg-gray-200"
            />
          </div>
        </div>
        <div class="basis-1/6 my-8 sm:my-0">
          <h5 class="text-xl font-semibold">Menus</h5>
          <ul>
            <li class="my-3 hover:text-sky-400">
              <router-link to="/about">About</router-link>
            </li>
            <li class="my-3 hover:text-sky-400">
              <router-link to="/">Home</router-link>
            </li>
            <li class="my-3 hover:text-sky-400">
              <router-link to="/service">Service</router-link>
            </li>
          </ul>
        </div>
        <div class="basis-2/6">
          <h5 class="text-xl font-semibold">Get Medical Checkup Voucher</h5>
          <input
            class="
              w-full
              bg-stone-800
              text-slate-400
              p-3
              my-4
              rounded
              focus:outline-none
            "
            placeholder="Enter Your Email"
          />
          <div>
            <the-button title="Subscribe" :fill="true"></the-button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
a.router-link-active {
  color: rgb(56 189 248);
}
</style>
