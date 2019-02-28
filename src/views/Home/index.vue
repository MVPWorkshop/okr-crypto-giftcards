<template>
  <b-container class="giftcard-cotainer">
    <b-row>
      <b-col md="4">
        <div class="card">
          <GiftCardForm :error="error" @change-form="changeFormData" @send-giftcard="sendGiftcard"/>
        </div>
      </b-col>
      <b-col md="8">
        <Preview :form="form" :imagesrc="imagesrc" :keyPair="keyPair" :defaultBackground="defaultBackground"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BContainer from "bootstrap-vue/src/components/layout/container";
import BCol from "bootstrap-vue/src/components/layout/col";
import BRow from "bootstrap-vue/src/components/layout/row";
import GiftCardForm from "../../components/GiftCardForm/index";
import Preview from "../../components/Preview/index";
import { addressGenerator } from "../../utils/address-generator";
import { saveGiftCard } from "../../services/send-giftcard";
import { sendPassphraseEmail } from "../../services/email-service";

export default {
  name: "Home",
  components: { GiftCardForm, Preview, BRow, BCol, BContainer },
  methods: {
    changeFormData(event) {
      this.form = event;
      this.imagesrc =
        "https://github.com/atomiclabs/cryptocurrency-icons/blob/master/32/color/" +
        event.selectedCoin.toLowerCase() +
        ".png?raw=true";
      this.keyPair = addressGenerator.generateKeyPair(
        event.passphrase,
        event.selectedCoin
      );
      switch (event.selectedDesignOption) {
        case 'birthday':
          this.defaultBackground = '/bday-preview-ver2.png'
          break;
        case 'graduate':
          this.defaultBackground = '/graduate.png'
          break;
      
        default:
          this.defaultBackground = '/default-placeholder.png'
          break;
      }
      this.isGenerated = true;
    },

    sendGiftcard(event) {
      this.form = event;

      if(!this.isGenerated) return this.error = 'Please generate giftcard first';

      if (!this.form.forWhom) return this.error = 'Please enter recepient';
      if (!this.form.passphrase) return this.error = 'Please enter passphrase';
      if (!this.form.email) return this.error = 'Please enter email';
      if (!this.form.selectedCoin) return this.error = 'Please select a currency';

      const {
        email,
        selectedCoin,
        forWhom,
        country,
        city,
        address,
        passphrase
      } = this.form;
      if(event.selectedReceiveType === 'PaperAndDigital'){
        saveGiftCard(
          this.keyPair.publicKey,
          email,
          selectedCoin,
          forWhom,
          country,
          city,
          address
        );
      }
      sendPassphraseEmail(email, forWhom, passphrase);
    }
  },
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
      imagesrc: "/icon-placeholder.png",
      keyPair: {
        publicKey: "",
        encryptedPrivateKey: ""
      },
      error: "",
      isGenerated: false,
      defaultBackground: "/default-placeholder.png"
    };
  }
};
</script>

<style scoped lang="scss">
.giftcard-cotainer {
  margin: 2rem auto;
}

.giftcard-form {
  background-color: #f8faff;
  border-color: #e4e4f7;
}
</style>
