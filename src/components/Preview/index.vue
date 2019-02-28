<template>
  <div class>
    <h1 class="giftcard-heading">Preview</h1>
    <h2 class="giftcard-side">Front Side</h2>

    <div class="card outside">
      <div class="card-content">
        <div class="card-page">
          <div class="wbox back-wb">
            <span class="box-title">YOUR BITCOIN WALLET</span>
            <img :src="imagesrc" class="crypto-icon">
            <span class="info-text">Check funds on your wallet via this address</span>
            <div class="qr-holder"></div>
            <span class="info-text" id="public-address">0x5fa8e594f1c883ddd04005eca5eff123d4679047</span>
          </div>
        </div>
        <div class="card-page">
          <span class="for-whom">For:</span>
          <span class="person-name">{{form.forWhom}}</span>
        </div>
      </div>
    </div>

    <h2 class="giftcard-side">Back Side</h2>
    <div class="card inside">
      <div class="card-content">
        <div class="card-page">
          <div class="wbox">
            <span class="box-title">YOUR PRIVATE KEY:</span>
            <div class="qr-holder"></div>
            <span id="private-key">eec86f430a466196dbd93eec1165b992aabcc958c7ce31eafe7ee9086e7004b3</span>
            <span class="info-text">
              Please
              <strong>DO NOT</strong> Share Your Private Key With Anyone!
            </span>
          </div>
        </div>
        <div class="col-6 card-page">
          <div class="wbox">
            <span class="box-title">SPECIAL NOTE:</span>
          </div>
        </div>
      </div>
    </div>
    <p>
      <strong>Note:</strong>You should handwrite some special note (Passphrase) you wrote previosly on the giftcard after you receive it or print it. Whatch out for capital letters and interpunction signs.
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
    },
    imagesrc: {
      required: false,
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.giftcard-side,
.giftcard-heading {
  color: #c5c4df;
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
  background-color: #f8faff;
  border-color: #e4e4f7;
}
.card {
  max-width: 750px;
  position: relative;
  background-color: #f8faff;
  margin: 48px 32px;
  font-size: 16px;
}

.card:before {
  display: block;
  content: "";
  width: 100%;
  padding-top: 50%;
}

.card > .card-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.card-page {
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  width: 50%;
  padding: 1.5rem 1rem;
  float: left;
  height: 100%;
}

.card-page:first-child {
  border-right: 1px dashed #a9d2d5;
}

.wbox {
  display: block;
  background: #fff;
  border-radius: 1rem;
  height: 100%;
  width: 100%;
}

.back-wb {
  display: block;
  width: 80%;
  margin: auto;
}

.box-title {
  display: block;
  width: 100%;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  color: #b8b8b8;
}

.qr-holder {
  display: block;
  margin: auto;
  height: 10rem;
  width: 10rem;
  background: yellow;
}

.back-wb .qr-holder {
  height: 7.5rem;
  width: 7.5rem;
  background: purple;
}

.crypto-icon {
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 auto 0.75rem;
  border-radius: 1.25rem;
}

.info-text {
  display: block;
  width: 92%;
  margin: 1rem auto;
  font-size: 0.75rem;
  line-height: 1.1rem;
  text-align: center;
  color: #b8b8b8;
}

#private-key {
  display: block;
  width: 85%;
  margin: 1rem auto;
  font-size: 0.9rem;
  line-height: 1.26rem;
  text-align: center;
}

#public-address {
  color: #000;
  width: 80%;
}

.card.outside,
.card.inside {
  margin: 0;
  margin: 2rem 0;
}

.for-whom {
  margin-top: 0.5rem;
  display: block;
  width: 100%;
  text-align: right;
  padding-right: 1rem;
  color: #c5c4df;
}

.person-name {
  display: block;
  width: 100%;
  text-align: right;
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: 500;
  padding-right: 1rem;
}
</style>
