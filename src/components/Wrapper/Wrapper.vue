<template>
  <div id="main-wrapper">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#main-wrapper {
  padding: 0 120px 30px;
  @media (max-width: 900px) {
    padding: 0 60px 30px;
  }
  @media (max-width: 550px) {
    padding: 0 10px 0px;
  }
}
</style>
