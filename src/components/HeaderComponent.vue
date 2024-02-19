<script setup>
import { ref } from 'vue'
import Sliders from './SlidersComponent.vue'
const isChecked = ref([false, false, false, false])
const checked = (event) => {
  if (!isChecked[event.target.id]) {
    document.getElementById(event.target.id).classList.add('bg-[#212126]')
    isChecked[event.target.id] = true
  } else {
    document.getElementById(event.target.id).classList.remove('bg-[#212126]')
    isChecked[event.target.id] = false
  }
}
</script>

<template>
  <div class="w-full h-[500px]">
    <div class="flex gap-x-2.5">
      <h1 class="text-3xl text-white font-bold text-center">Marketplace</h1>
      <input
        type="text"
        class="outline-none bg-transparent text-[#959595] border border-[#959594] rounded-xl py-2 pl-12 pr-2 w-[300px] bg-search bg-no-repeat bg-left bg-[15px] bg-[length:20px_20px]"
        placeholder="Search for a product, flower, etc"
      />

      <div class="h-auto w-auto flex gap-x-2.5">
        <button
          id="0"
          class="itemCheckBoxes h-full bg-[#353542] px-[12px] py-[10px] rounded-[10px] flex gap-2 justify-center items-center cursor-pointer"
          @click="checked"
        >
          <img id="0" src="/cannabis.svg" alt="cannabis" class="w-[20px] h-[20px]" />
          <span id="0" class="text-white">Buds</span>
        </button>
        <button
          class="itemCheckBoxes h-full bg-[#353542] px-[12px] py-[10px] rounded-[10px] flex gap-2 justify-center items-center cursor-pointer"
          @click="checked"
          id="1"
        >
          <img id="1" src="/cannabis.svg" alt="cannabis" class="w-[20px] h-[20px]" />
          <span id="1" class="text-white">Edible</span>
        </button>
        <button
          class="itemCheckBoxes h-full bg-[#353542] px-[12px] py-[10px] rounded-[10px] flex gap-2 justify-center items-center cursor-pointer"
          @click="checked"
          id="2"
        >
          <img id="2" src="/cannabis.svg" alt="cannabis" class="w-[20px] h-[20px]" />
          <span id="2" class="text-white">Non Edible</span>
        </button>
        <button
          class="itemCheckBoxes h-full bg-[#353542] px-[12px] py-[10px] rounded-[10px] flex gap-2 justify-center items-center cursor-pointer"
          @click="checked"
          id="3"
        >
          <img id="3" src="/cannabis.svg" alt="cannabis" class="w-[20px] h-[20px]" />
          <span id="3" class="text-white">Concentrate</span>
        </button>
      </div>
    </div>
    <div class="mt-10"><Sliders /></div>
  </div>
</template>
<style scoped>
.itemCheckBoxes {
  border: 1px solid
    linear-gradient(174.36deg, rgba(132, 213, 44, 0.36) 11.39%, rgba(23, 23, 34, 0) 189.78%);

  box-shadow: 0px 3px 15px 0px #84d52c33;
}
</style>
