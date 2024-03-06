<template>
    
        <div class="w-[150px] ">
              <div class="flex items-center cursor-pointer justify-start space-x-2" @click="toggleDrop">
                <div class="font-semibold dark:text-black text-left">
                  <div>{{ nombreUsuarioLogeado }}</div>
                  
                </div>
                <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="../assets/logo.png" alt="">
              </div>
              <!-- Drop down -->
              <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1 text-left" role="none">
                  <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                  <form @submit.prevent="mysignOut" action="#" role="none">
                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                  </form>
                </div>
              </div>
            </div>
   
</template>