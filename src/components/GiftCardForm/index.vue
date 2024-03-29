<template class="test-class">
  <b-form class="gift-form">
    <h2 class="giftcard-side">Step 1/2: Create card</h2>
    <!--Occasion-->
    <b-form-group label="Occasion:">
      <b-form-select v-model="form.selectedDesignOption" :options="designOptions"/>
    </b-form-group>
    <!--For whom-->
    <b-form-group label="For whom:">
      <b-form-input
        v-model="form.forWhom"
        required
        placeholder="Name of the person this card is for"
      />
      <b-form-invalid-feedback>Your user ID must be 5-12 characters long.</b-form-invalid-feedback>
    </b-form-group>
    <!--Note (Passphrase)-->
    <b-form-group>
      <label>
        Special note
        <b>(Passphrase)</b>
        <small class="muted-text">- at least 10 characters:</small>
      </label>
      <b-form-textarea
        rows="8"
        v-model="form.passphrase"
        required
        placeholder="Leave personalized message for someone special to you"
      />
      <span class="mt-1 d-block">
        <b>IMPORTANT:</b>
        <span class="light-text">
          Receiver needs to use this passphrase to access their wallet. Please write it down
          exactly like here and keep it safe.
        </span>
      </span>
    </b-form-group>
    <b-form-group label="Coin:">
      <b-form-select v-model="form.selectedCoin" :options="supportedCoins"/>
    </b-form-group>
    <b-form-group>
      <b-button
        class="giftcard-button"
        block
        variant="primary"
        @click="$emit('change-form',form)"
      >Generate giftcard</b-button>
    </b-form-group>
    <hr>
    <h2 class="giftcard-side">Step 2/2: Delivery details</h2>
    <!-- Paper card radio -->
    <b-form-group label="How do you like to receive this gift card:">
      <b-form-radio
        value="PaperAndDigital"
        v-model="form.selectedReceiveType"
        name="some-radios"
      >Paper card and digital copy</b-form-radio>
      <b-form-radio
        value="Digital"
        v-model="form.selectedReceiveType"
        name="some-radios"
      >Digital copy only</b-form-radio>
    </b-form-group>
    <!--Country-->
    <b-form-group v-if="form.selectedReceiveType === 'PaperAndDigital'" label="Country:">
      <b-form-input v-model="form.country" required placeholder="Please enter country"/>
    </b-form-group>
    <!-- City -->
    <b-form-group v-if="form.selectedReceiveType === 'PaperAndDigital'" label="City:">
      <b-form-input v-model="form.city" required placeholder="Please enter city"/>
    </b-form-group>
    <!-- Address -->
    <b-form-group v-if="form.selectedReceiveType === 'PaperAndDigital'" label="Address:">
      <b-form-input v-model="form.address" required placeholder="Please enter address"/>
    </b-form-group>
    <!-- Address -->
    <b-form-group label="Email:">
      <b-form-input v-model="form.email" required placeholder="Please enter email"/>
    </b-form-group>
    <b-form-group>
      <b-button
        class="giftcard-button"
        block
        variant="primary"
        @click="$emit('send-giftcard',form)"
      >Send giftcard</b-button>
    </b-form-group>

    <p class="error-text">{{ error }}</p>
  </b-form>
</template>

<script>
import BForm from "bootstrap-vue/src/components/form/form";
import BFormGroup from "bootstrap-vue/src/components/form-group/form-group";
import BFormInput from "bootstrap-vue/src/components/form-input/form-input";
import BFormSelect from "bootstrap-vue/src/components/form-select/form-select";
import BFormTextarea from "bootstrap-vue/src/components/form-textarea/form-textarea";
import {
  addressGenerator,
  supportedCoins
} from "../../utils/address-generator";
import BFormInvalidFeedback from "bootstrap-vue/src/components/form/form-invalid-feedback";
import BFormRadio from "bootstrap-vue/src/components/form-radio/form-radio";

const designOptions = [
  {
    value: null,
    text: "Please select giftcard design",
    disabled: true
  },
  {
    text: "Birthday",
    value: "birthday"
  },
  {
    text: "Graduate",
    value: "graduate"
  }
];

const GIFT_RECEIVE_TYPE = {
  PaperAndDigital: "PaperAndDigital",
  Digital: "Digital"
};

export default {
  name: "GiftCardForm",
  components: {
    BFormRadio,
    BFormInvalidFeedback,
    BFormTextarea,
    BFormSelect,
    BFormInput,
    BFormGroup,
    BForm
  },
  props: ["error"],
  data() {
    return {
      form: {
        selectedDesignOption: "",
        forWhom: "",
        passphrase: "",
        selectedCoin: "BTC",
        selectedReceiveType: "PaperAndDigital",
        country: "",
        city: "",
        email: "",
        address: ""
      },
      supportedCoins: [
        {
          value: null,
          text: "Please select which coin is included",
          disabled: true
        },
        ...supportedCoins.map(coin => {
          return {
            value: coin,
            text: coin
          };
        })
      ],
      designOptions: designOptions
    };
  },
  methods: {
    async generateKeyPair(event) {
      const value = event.target.value;
      console.log(event.target.value);
      const keyPair = await addressGenerator.generateKeyPair(value);
      console.log(keyPair);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.muted-text {
  opacity: 0.5;
}

::placeholder {
  /* Edge */
  font-size: 0.9rem;
  line-height: 1.5rem;
  color: #c5c4df;
}
.gift-form {
  label,
  span,
  .col-form-label,
  select {
    font-size: 0.9rem !important;
    line-height: 1.5rem !important;
  }
  .giftcard-side {
    font-size: 1.2rem;
    color: #c5c4df;
    text-align: left;
  }

  .light-text {
    color: #969696;
    font-size: 13px;
  }

  .giftcard-button {
    margin-top: 1rem;
  }

  .error-text {
    color: red;
    font-weight: 600;
  }
}
</style>
