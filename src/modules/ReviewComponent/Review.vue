<template>
  <div class="review-container">
    <img
      class="profile-img"
      :src="require(`@/assets/img/${filename}`)"
      :alt="alt"
    />
    <div class="text-review">
      <div class="name">
        {{ name }}
      </div>
      <div class="text">
        {{ text }}
      </div>
      <div class="date">
        {{ date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",

  props: {
    filename: { type: String, required: true },
    alt: { type: String, required: true },
    name: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.review-container {
  background-color: $albatre;
  padding: 32px 24px;
  display: flex;
  justify-content: space-between;
  .profile-img {
    height: 62px;
    width: 62px;
    border-radius: 100%;
    margin-right: 24px;
    object-fit: cover;
  }
  .text-review {
    text-align: left;
    .name {
      font-family: $ff-butler;
      font-size: 25px;
      color: $olive;
    }
    .text {
      font-weight: 300;
      margin: 6px 0 16px 0;
    }
    .date {
      font-weight: 200;
      color: #787878;
    }
  }
}
</style>
