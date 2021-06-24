<template>
  <div class="flex-pagination">
    <div
      :class="
        i === array[0].id ? 'pagination-dot current-dot' : 'pagination-dot'
      "
      v-for="i in array.length"
      :key="i"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    array: {
      type: Array,
      required: true,
    },
    arrayKey: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
$radius: 7px;
.flex-pagination {
  display: flex;
  .pagination-dot {
    height: 14px;
    width: 14px;
    background-color: $bistre-clair;
    border-radius: $radius;
    margin: 0 4px;
    transition: 0.4s ease;
  }
  .current-dot {
    width: 42px;
    background-color: $bistre;
  }
}
</style>
