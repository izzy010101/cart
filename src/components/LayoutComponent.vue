<script setup>
import { useImageStore } from '@/stores/imageStore.js';
import { computed, watch } from "vue";

const imageStore = useImageStore();

const cart = computed(() => imageStore.cart);

// Watch for changes in the cart to update the local storage and UI
watch(cart, (newCart) => {
  imageStore.cartToLocalStorage();
}, { deep: true });

</script>

<template>
  <div class="min-h-full">
    <nav class="bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between border-b-2 border-gray-200">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="w-[150px]" src="@/assets/images/sneakers_logo.jpg" alt="Your Company">
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a href="/" class="rounded-md px-3 py-2 text-sm font-medium text-gray-500  hover:text-[#d96a1f]">Collections</a>
                <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-500  hover:text-[#d96a1f]">Men</a>
                <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-500  hover:text-[#d96a1f]">Women</a>
                <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-500  hover:text-[#d96a1f]">About</a>
                <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-gray-500  hover:text-[#d96a1f]">Contact</a>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-6 flex items-center md:ml-6">

                <router-link
                    v-if="cart.length === 0"
                    to="/cart"
                    class="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >

                        <img
                            class="h-[32px]"
                            src="@/assets/icons/cart_icon.png"
                            alt="cart_icon">

                </router-link>

                <router-link
                  v-else
                  to="/cart"
                  class="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >

                      <img
                          class="h-[32px]"
                          src="@/assets/icons/cart_icon.png"
                          alt="cart_icon">
                      <span class="red_dot"></span>

                </router-link>



              <!-- Profile dropdown -->
              <div class="relative ml-3">
                <div>
                  <button type="button" class="ml-6 relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- RESPONSIVE HERE -->
      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden flex flex-col " id="mobile-menu">
        <div class="px-2 pb-3 pt-2 sm:px-3 flex ">
          <router-link to="/" class="block rounded-md px-2 py-2 text-base font-small font-bold text-gray-700 hover:text-[#d96a1f]">Collections</router-link>
          <router-link to="#" class="block rounded-md px-2 py-2 text-base font-small font-bold text-gray-700 hover:text-[#d96a1f]">Men</router-link>
          <router-link to="#" class="block rounded-md px-2 py-2 text-base font-small font-bold text-gray-700 hover:text-[#d96a1f]">Women</router-link>
          <router-link to="#" class="block rounded-md px-2 py-2 text-base font-small font-bold text-gray-700 hover:text-[#d96a1f]">About</router-link>
          <router-link to="#" class="block rounded-md px-2 py-2 text-base font-small font-bold text-gray-700 hover:text-[#d96a1f]">Contact</router-link>
        </div>
        <div class=" pb-3 pt-4">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-white">Tom Cook</div>
              <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            </div>
            <router-link
                v-if="cart.length === 0"
                to="/cart"
                class="relative ml-auto flex-shrink-0 rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              <img
                  class="h-[25px]"
                  src="@/assets/icons/cart_icon.png"
                  alt="cart_icon">
            </router-link>
            <router-link
                v-else
                to="/cart"
                class="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >

              <img
                  class="h-[25px]"
                  src="@/assets/icons/cart_icon.png"
                  alt="cart_icon">
              <span class="red_dot"></span>

            </router-link>

          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <slot/>
      </div>
    </main>
  </div>

</template>

<style scoped>
.red_dot {
  position: absolute;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  background-color: darkred;
  border-radius: 50%;
}

</style>