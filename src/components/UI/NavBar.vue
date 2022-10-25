<template>
  <header
    class="duration-75 ease-linear"
    :class="{ 'bg-white': isMobileOpen, 'delay-60': !isMobileOpen }"
  >
    <div class="container mx-auto">
      <transition name="nav" appear>
        <nav class="flex justify-between items-center h-15">
          <div>
            <img src="../../assets/logo.svg" class="cursor-pointer" alt="" />
          </div>
          <div class="hidden sm:flex space-x-14 font-medium">
            <router-link to="/about" class="transition-all hover:text-sky-400"
              >About</router-link
            >
            <router-link to="/" class="transition-all hover:text-sky-400"
              >Home</router-link
            >
            <router-link to="/service" class="transition-all hover:text-sky-400"
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
                transition-all
                hover:bg-sky-400 hover:text-white
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
      </transition>
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

.nav-enter-from,
.nav-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s linear;
}
.nav-enter-active,
.nav-leave-active {
  transition: all 0.35s linear;
}
</style>
