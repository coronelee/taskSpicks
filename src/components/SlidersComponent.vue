<script>
import Slider from '@vueform/slider'
import FilterComponent from './FilterComponent.vue'
import { ref } from 'vue'

export default {
  components: { Slider, FilterComponent },
  el: '#example-2',
  data: () => ({
    value: ref([234, 9999]),
    min: 234,
    max: 9999,
    tooltips: false,
    random: ref(Math.floor(Math.random() * 111)),
    selectedItems: [],
    showSort: ref(false)
  }),
  methods: {
    setSelectedItems(itemSelect) {
      if (this.selectedItems.includes(itemSelect)) {
        this.selectedItems.splice(this.selectedItems.indexOf(itemSelect), 1)
        this.random = Math.floor(Math.random() * this.selectedItems.length * 500)
      } else {
        this.selectedItems.push(itemSelect)
        this.random = Math.floor(Math.random() * this.selectedItems.length * 500)
      }
    },

    setFirstValue() {
      this.value[0] = document.getElementById('sliderDown').value
    },
    setSecondValue() {
      this.value[1] = document.getElementById('sliderUp').value
    },
    deleteSelectedItems(index, id) {
      this.selectedItems.splice(index, 1)
      document.getElementById(id).checked = false
    }
  }
}
</script>
<template>
  <div class="flex gap-x-12 gap-y-2 relative flex-wrap">
    <div class="flex flex-col justify-center items-center gap-y-2 w-[225px] h-[100px]">
      <div class="w-[225px]">
        <h1 class="text-white text-1xl font-bold mb-4">Price Range</h1>
        <Slider
          v-model="value"
          :min="min"
          :max="max"
          @change="setFirstValue"
          :tooltips="tooltips"
          class="slider"
        />
      </div>

      <div
        class="flex justify-between items-center w-full [&>input]:w-[55px] [&>input]:h-[20px] [&>input]:py-4 [&>input]:px-2 [&>input]:bg-[#212129] [&>input]:rounded-[3px] [&>input]:text-white [&>input]:text-center"
      >
        <input
          type="number"
          id="sliderDown"
          :value="this.value[0]"
          @input="this.value[0] = $event.target.value"
          class="appearance-none outline-none -moz-appearance-none -webkit-appearance-none"
          max="9999"
          min="234"
        />
        <input
          type="number"
          id="sliderUp"
          :value="this.value[1]"
          @input="this.value[1] = $event.target.value"
          class="appearance-none outline-none -moz-appearance-none -webkit-appearance-none"
          max="9999"
          min="234"
        />
      </div>
    </div>
    <div class="flex flex-col justify-center items-center gap-y-2 w-[106px] h-[100px]">
      <div class=" ">
        <h1 class="text-white text-1xl font-bold mb-4">Nose</h1>
        <div>
          <img src="/Vector(1).svg" alt="nose" class="w-full" />
          <div class="flex justify-between text-[#959595]"><span>min</span><span>max</span></div>
        </div>
      </div>
    </div>

    <div
      class="border border-[#84D52C5C] w-[48px] h-[48px] bg-[#353542] absolute right-0 rounded-[10px] flex justify-center items-center"
    >
      <img src="/Filter.svg" class="z-10 cursor-pointer" @click="this.showSort = !this.showSort" />
      <div
        class="absolute w-[220px] h-auto p-4 bg-[#212129] top-[50px] right-0 rounded-[10px] shadow-2xl flex flex-col gap-y-2 text-white"
        v-if="this.showSort"
      >
        <span>Sort By: </span>
        <span class="flex gap-2"
          ><img src="/sort/Calendar.svg" alt="" class="w-[20px] h-[20px]" /><span>
            Date (New first)</span
          ></span
        >
        <span class="flex gap-2"
          ><img src="/sort/Calendar.svg" alt="" class="w-[20px] h-[20px]" /><span
            >Date (Old first)</span
          ></span
        >
        <span class="flex gap-2"
          ><img src="/sort/Vector.svg" alt="" class="w-[20px] h-[20px]" /><span
            >Price (High first)</span
          ></span
        >
        <span class="flex gap-2"
          ><img src="/sort/Vector1.svg" alt="" class="w-[20px] h-[20px]" /><span
            >Price (Low first)</span
          ></span
        >
        <span class="flex gap-2"
          ><img src="/sort/THC.svg  " alt="" class="w-[20px] h-[20px]" /><span
            >Total THC (High first)</span
          ></span
        >
        <span class="flex gap-2"
          ><img src="/sort/THC.svg" alt="" class="w-[20px] h-[20px]" /><span
            >Total THC (Low first)</span
          ></span
        >
        <span class="flex gap-2"
          ><img src="/sort/CBD.svg" alt="" class="w-[20px] h-[20px]" /><span
            >Total CBD (High first)</span
          ></span
        >
        <span class="flex gap-2"
          ><img src="/sort/CBD.svg" alt="" class="w-[20px] h-[20px]" /><span
            >Total CBD (Low first)</span
          ></span
        >
      </div>
    </div>
  </div>
  <div class="w-full flex items-center flex-wrap gap-x-2">
    <span class="text-white text-1xl font-bold">{{ this.random }} Results</span>
    <ul id="example-2" class="flex flex-wrap gap-2">
      <li
        v-for="(item, index) in selectedItems"
        v-bind:key="index"
        class="text-white px-2 py-1 bg-[#297019] rounded-[20px] flex gap-2 h-auto items-center justify-center cursor-pointer hover:bg-[#2e9b2e] transition-all"
      >
        {{ item }}
        <img
          src="/Vector(2).svg"
          alt="exit"
          class="w-[18px] h-[18px]"
          @click="deleteSelectedItems(index, item)"
        />
      </li>
    </ul>
  </div>
  <FilterComponent :setSelectedItems="setSelectedItems" />
</template>

<style scoped>
.slider {
  --slider-bg: #30303d;
  --slider-connect-bg: #7acb22;
  --slider-connect-bg-disabled: #7acb22;
  --slider-height: 4px;
  --slider-vertical-height: 300px;
  --slider-radius: 9999px;

  --slider-handle-bg: #7acb22;
  --slider-handle-border: 0;
  --slider-handle-width: 16px;
  --slider-handle-height: 16px;
  --slider-handle-radius: 9999px;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
