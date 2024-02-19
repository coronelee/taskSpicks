<script setup>
defineProps({
  setSelectedItems: Function
})
const openMenu = (id, menu) => {
  document.getElementById(id).classList.toggle('rotate-180')
  document.getElementById(menu).classList.toggle('hidden')
}
</script>

<template>
  <div
    class="h-[750px] w-[250px] bg-[#353542] rounded-[10px] border border-[#84D52C5C] [&>span]:text-white flex flex-col gap-y-4 p-4 [&>span]:text-[18px] [&>span]:font-bold"
  >
    <span class="menu flex justify-between w-full flex-col gap-y-2 cursor-pointer">
      <div class="flex justify-between" @click="openMenu('Classification', 'ClassificationMenu')">
        <span>Classification</span
        ><span
          ><img
            src="/topArr.svg"
            alt="top"
            id="Classification"
            class="w-[20px] h-[20px] transition-all"
          />
        </span>
      </div>
      <div id="ClassificationMenu" class="w-full flex transition-all gap-x-4 flex-col">
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="100% Indica"
            @change="setSelectedItems('100% Indica')"
          />100% Indica
        </span>
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="100% Sativa"
            @change="setSelectedItems('100% Sativa')"
          />100% Sativa
        </span>
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id=">50% Indica"
            @change="setSelectedItems('>50% Indica')"
          />>50% Indica
        </span>
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id=">50% Sativa"
            @change="setSelectedItems('>50% Sativa')"
          />>50% Sativa
        </span>
      </div>
    </span>

    <span class="menu flex justify-between w-full flex-col gap-y-2 cursor-pointer">
      <div class="flex justify-between" @click="openMenu('Production', 'ProductionMenu')">
        <span>Production Method</span
        ><span
          ><img
            src="/topArr.svg"
            alt="top"
            id="Production"
            class="w-[20px] h-[20px] transition-all"
          />
        </span>
      </div>
      <div id="ProductionMenu" class="w-full flex transition-all gap-x-4 flex-col">
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            @change="setSelectedItems('Indoor')"
            id="Indoor"
          />Indoor
        </span>
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="Outdoor"
            @change="setSelectedItems('Outdoor')"
          />Outdoor</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="Greenhouse"
            @change="setSelectedItems('Greenhouse')"
          />Greenhouse
        </span>
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="Mixed"
            @change="setSelectedItems('Mixed')"
          />Mixed
        </span>
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="Other"
            @change="setSelectedItems('Other')"
          />Other</span
        >
      </div>
    </span>

    <span class="menu flex justify-between w-full flex-col gap-y-2 cursor-pointer">
      <div class="flex justify-between" @click="openMenu('Size', 'SizeMenu')">
        <span>Classification</span
        ><span
          ><img src="/topArr.svg" alt="top" id="Size" class="w-[20px] h-[20px] transition-all" />
        </span>
      </div>
      <div id="SizeMenu" class="w-full flex transition-all gap-x-4 flex-col">
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="Flower"
            @change="setSelectedItems('Flower')"
          />Flower</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="Pre-Roll Flower"
            @change="setSelectedItems('Pre-Roll Flower')"
          />Pre-Roll Flower</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="Pre-Roll Infused"
            @change="setSelectedItems('Pre-Roll Infused')"
          />Pre-Roll Infused</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="Pre-Roll Leaf"
            @change="setSelectedItems('Pre-Roll Leaf')"
          />Pre-Roll Leaf</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="Shake"
            @change="setSelectedItems('Shake')"
          />Shake</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="Smalls"
            @change="setSelectedItems('Smalls')"
          />Smalls</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="Trim"
            @change="setSelectedItems('Trim')"
          />Trim</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="Snake"
            @change="setSelectedItems('Snake')"
          />Shake</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="Keef"
            @change="setSelectedItems('Keef')"
          />Keef</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px]"
            id="Fresh Frozen"
            @change="setSelectedItems('Fresh Frozen')"
          />Fresh Frozen</span
        >
      </div>
    </span>
  </div>
</template>

<style scoped>
.menu {
  height: auto;
}
</style>
