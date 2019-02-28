<template>
  <div class="card giftcard-preview">
    <h1 class="giftcard-heading">Preview</h1>
    <h2 class="giftcard-side">Front Side</h2>

    <div></div>

    <h2 class="giftcard-side">Back Side</h2>
    <p><strong>Note: </strong>You should handwrite some special note (Passphrase) you wrote previosly on the giftcard after you receive it or print it. Whatch out for capital letters and interpunction signs.</p>
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

  .giftcard-side,
  .giftcard-heading {
    color: #C5C4DF;
    text-align: center;
  }

  .giftcard-heading {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .giftcard-side {
    font-size: 1.2rem;
  }

  .giftcard-preview {
    background-color: #F8FAFF;
    border-color: #E4E4F7;
  }
</style>
