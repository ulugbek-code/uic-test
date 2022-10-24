<template>
  <header class="">
    <div class="container mx-auto">
      <nav class="flex justify-between items-center">
        <div>
          <img src="../../assets/logo.svg" class="cursor-pointer" alt="" />
        </div>
        <div class="flex space-x-14 font-medium">
          <router-link to="/about" class="hover:text-sky-400"
            >About</router-link
          >
          <router-link to="/" class="hover:text-sky-400">Home</router-link>
          <router-link to="/service" class="hover:text-sky-400"
            >Service</router-link
          >
        </div>
        <div>
          <button
            class="
              border-sky-400
              rounded
              border-2
              py-2
              px-14
              text-sky-400
              hover:border-sky-500 hover:text-sky-500
            "
          >
            Login
          </button>
        </div>
      </nav>
    </div>
    <!-- <div v-if="$route.path === '/'" class="h-screen absolute top-0 -z-10">
      <img src="../../assets/circle.png" alt="" class="w-full h-full" />
    </div> -->
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  height: 15vh;
}
a.router-link-active {
  color: rgb(56 189 248);
}
</style>
