<template>
  <header :class="{ 'bg-white': isMobileOpen }">
    <div class="container mx-auto">
      <nav class="flex justify-between items-center">
        <div>
          <img src="../../assets/logo.svg" class="cursor-pointer" alt="" />
        </div>
        <div class="hidden sm:flex space-x-14 font-medium">
          <router-link to="/about" class="hover:text-sky-400"
            >About</router-link
          >
          <router-link to="/" class="hover:text-sky-400">Home</router-link>
          <router-link to="/service" class="hover:text-sky-400"
            >Service</router-link
          >
        </div>
        <div class="flex items-center gap-3">
          <button
            class="
              border-sky-400
              rounded
              border-2
              py-2
              px-6
              text-sky-400
              hover:border-sky-500 hover:text-sky-500
              sm:px-14
            "
          >
            Login
          </button>
          <svg
            @click="isMobileOpen = !isMobileOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="block cursor-pointer sm:hidden"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>
      </nav>
    </div>
    <transition name="fade" mode="out-in">
      <ul
        v-if="isMobileOpen"
        class="absolute w-full font-medium p-8 text-center bg-white"
      >
        <li>
          <router-link to="/about" class="hover:text-sky-400"
            >About</router-link
          >
        </li>
        <li class="my-4">
          <router-link to="/" class="hover:text-sky-400">Home</router-link>
        </li>
        <li>
          <router-link to="/service" class="hover:text-sky-400"
            >Service</router-link
          >
        </li>
      </ul>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMobileOpen: false,
    };
  },
};
</script>

<style scoped>
nav {
  height: 15vh;
}
a.router-link-active {
  color: rgb(56 189 248);
}
li {
  user-select: none;
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
</style>
