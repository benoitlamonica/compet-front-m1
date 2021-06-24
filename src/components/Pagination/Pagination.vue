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
  },
};
</script>

<style lang="scss">
$radius: 7px;
.flex-pagination {
  margin-top: 32px;
  margin-bottom: 125px;
  display: flex;
  padding-left: 120px;
  width: 50vw;
  justify-content: center;
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
@media screen and (max-width: 768px) {
  .flex-pagination {
    padding-left: 0;
    width: 100%;
    margin-bottom: 80px;
    margin-top: 0;
  }
}
</style>
