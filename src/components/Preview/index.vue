<template>
  <div class="card">
    <h1>Preview</h1>
    <h2>Front Side</h2>

    <div></div>

    <h2>Back Side</h2>
    <p>
      <strong>Note: {{form.forWhom}}</strong>...
    </p>
  </div>
</template>

<script>
export default {
  name: "Preview",
  components: {},
  props: {
    form: {
      required: true,
      type: Object
    }
  }
};
</script>

<style scoped lang="scss">
</style>
