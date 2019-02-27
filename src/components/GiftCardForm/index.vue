<template>
      <b-form>
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
      </b-form>
</template>

<script>
import BForm from 'bootstrap-vue/src/components/form/form'
import BFormGroup from 'bootstrap-vue/src/components/form-group/form-group'
import BFormInput from 'bootstrap-vue/src/components/form-input/form-input'
import BFormSelect from 'bootstrap-vue/src/components/form-select/form-select'
import BFormTextarea from 'bootstrap-vue/src/components/form-textarea/form-textarea'

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
