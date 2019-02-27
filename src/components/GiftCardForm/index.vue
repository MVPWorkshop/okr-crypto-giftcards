<template>
      <b-form class="gift-form">
        <!--Occasion-->
        <b-form-group label="Occasion:">
          <b-form-select
            v-model="form.selectedDesignOption"
            :options="designOptions"
          />
        </b-form-group>
        <!--For whom-->
        <b-form-group label="For whom:">
          <b-form-input
            v-model="form.forWhom"
            required
            placeholder="Name of the person this card is for"
          />
        </b-form-group>
        <!--Note (Passphrase)-->
        <b-form-group>
          <label>Special note <b>(Passphrase)</b><small class="muted-text"> - at least 10 characters:</small></label>
          <b-form-textarea
            v-model="form.passphrase"
            required
            placeholder="Leave personalized message for someone special to you"
          />
          <span class="mt-1 d-block">
            <b>IMPORTANT: </b>Receiver needs to use this passphrase to access their wallet. Please write it down
            exactly like here and keep it safe.
          </span>
        </b-form-group>
        <hr>
        <!-- Paper card radio -->
        <b-form-group label="How do you like to receive this gift card:">
          <b-form-radio value="A" v-model="choice" name="some-radios">Paper card and digital copy</b-form-radio>
          <b-form-radio value="B" v-model="choice" name="some-radios">Digital copy only</b-form-radio>
        </b-form-group>
        </b-form-group>
        <!--Country-->
        <b-form-group label="Country:">
          <b-form-input
            v-model="form.country"
            required
            placeholder="Please enter country"
          />
        </b-form-group>
        <!-- City -->
        <b-form-group label="City:">
          <b-form-input
            v-model="form.city"
            required
            placeholder="Please enter city"
          />
        </b-form-group>
        <!-- Address -->
        <b-form-group label="City:">
          <b-form-input
            v-model="form.address"
            required
            placeholder="Please enter address"
          />
        </b-form-group>
        <!-- Address -->
        <b-form-group label="Email:">
          <b-form-input
            v-model="form.email"
            required
            placeholder="Please enter email"
          />
        </b-form-group>
      </b-form>
</template>

<script>
import BForm from 'bootstrap-vue/src/components/form/form'
import BFormGroup from 'bootstrap-vue/src/components/form-group/form-group'
import BFormInput from 'bootstrap-vue/src/components/form-input/form-input'
import BFormSelect from 'bootstrap-vue/src/components/form-select/form-select'
import BFormTextarea from 'bootstrap-vue/src/components/form-textarea/form-textarea'
import supportedCoins from './../../utils/address-generator'

const designOptions = [
  {
    value: null,
    text: 'Please select giftcard design',
    disabled: true
  },
  {
    text: 'Birthday',
    value: 'birthday'
  },
  {
    text: 'New Year',
    value: 'newyear'
  },
  {
    text: 'Wedding',
    value: 'wedding'
  },
]

export default {
  name: 'GiftCardForm',
  components: {BFormTextarea, BFormSelect, BFormInput, BFormGroup, BForm},
  data() {
    return {
      form: {
        selectedDesignOption: null,
        forWhom: '',
        passphrase: '',
        choice: [],
        country: '',
        city: '',
        email: ''
      },
      designOptions: designOptions
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .muted-text {
    opacity: 0.5;
  }
</style>
