<template>
  <b-container>
    <b-row>
      <b-col md="4">
        <div class="card">
          <GiftCardForm />
        </div>
      </b-col>
      <b-col md="8">
        <div class="card">
          <p>dasda</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BContainer from 'bootstrap-vue/src/components/layout/container'
import BCol from 'bootstrap-vue/src/components/layout/col'
import BRow from 'bootstrap-vue/src/components/layout/row'
import GiftCardForm from '../../components/GiftCardForm/index'

export default {
  name: 'Home',
  components: {GiftCardForm, BRow, BCol, BContainer}
}
</script>

<style scoped lang="scss">

</style>
