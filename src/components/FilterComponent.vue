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
    class="filter h-auto mt-4 w-[250px] bg-[#353542] rounded-[10px] border border-[#84D52C5C] [&>span]:text-white flex flex-col gap-y-4 p-4 [&>span]:text-[18px] [&>span]:font-bold"
  >
    <span class="menu flex justify-between w-full flex-col gap-y-2 cursor-pointer transition-all">
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
      <div
        id="ClassificationMenu"
        class="w-full flex transition-all gap-x-4 flex-col [&>span]:flex [&>span]:justify-start [&>span]:items-center [&>span]:gap-x-2"
      >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id="100% Indica"
            @change="setSelectedItems('100% Indica')"
          />100% Indica
        </span>
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id="100% Sativa"
            @change="setSelectedItems('100% Sativa')"
          />100% Sativa
        </span>
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id=">50% Indica"
            @change="setSelectedItems('>50% Indica')"
          />>50% Indica
        </span>
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
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
      <div
        id="ProductionMenu"
        class="w-full flex transition-all gap-x-4 flex-col [&>span]:flex [&>span]:justify-start [&>span]:items-center [&>span]:gap-x-2"
      >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            @change="setSelectedItems('Indoor')"
            id="Indoor"
          />Indoor
        </span>
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id="Outdoor"
            @change="setSelectedItems('Outdoor')"
          />Outdoor</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id="Greenhouse"
            @change="setSelectedItems('Greenhouse')"
          />Greenhouse
        </span>
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id="Mixed"
            @change="setSelectedItems('Mixed')"
          />Mixed
        </span>
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
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
      <div
        id="SizeMenu"
        class="w-full flex transition-all gap-x-4 flex-col [&>span]:flex [&>span]:justify-start [&>span]:items-center [&>span]:gap-x-2"
      >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id="Flower"
            @change="setSelectedItems('Flower')"
          />Flower</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id="Pre-Roll Flower"
            @change="setSelectedItems('Pre-Roll Flower')"
          />Pre-Roll Flower</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id="Pre-Roll Infused"
            @change="setSelectedItems('Pre-Roll Infused')"
          />Pre-Roll Infused</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id="Pre-Roll Leaf"
            @change="setSelectedItems('Pre-Roll Leaf')"
          />Pre-Roll Leaf</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id="Shake"
            @change="setSelectedItems('Shake')"
          />Shake</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id="Smalls"
            @change="setSelectedItems('Smalls')"
          />Smalls</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id="Trim"
            @change="setSelectedItems('Trim')"
          />Trim</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id="Snake"
            @change="setSelectedItems('Snake')"
          />Shake</span
        >
        <span>
          <input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
            id="Keef"
            @change="setSelectedItems('Keef')"
          />

          Keef</span
        >
        <span
          ><input
            type="checkbox"
            class="w-[20px] h-[20px] border rounded appearance-none border-[#fff] checked:border-none checked:bg-[#84D52C] checked:bg-[url('/check.svg')] bg-center bg-no-repeat"
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
.menu > input {
  background-color: red;
}
input[type='checkbox']:checked + label:after,
input[type='checkbox']:not(:checked) + label:after {
  left: 3px;
  top: 4px;
  width: 10px;
  height: 5px;
  border-radius: 1px;
  border-left: 4px solid #e145a3;
  border-bottom: 4px solid #e145a3;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.filter {
  background-image: url('/Background Leaf.svg');
  background-repeat: no-repeat;
  background-position: center left;
}
</style>
