<template>
  <Page actionBarHidden="true" @loaded="hideStatusBar" @unloaded="showStatusBar">
    <DockLayout stretchLastChild="false">
      <Image src="~/assets/images/front.png" dock="top" />
      <StackLayout dock="bottom" padding="22">
        <Label text="People trust that their on-time" />
        <Label text="delivery is going to happen." />
        <Button text="Delivery" @tap="$navigateTo(menuPage)" marginTop="16" marginBottom="8" />
        <Button text="Recipient" @tap="$navigateTo(recipientPage)" marginBottom="16" />
      </StackLayout>
    </DockLayout>
  </Page>
</template>

<script>
import * as camera from 'nativescript-camera'
import * as statusBar from 'nativescript-status-bar'
import Delivery from './Delivery'
import Recipient from './Recipient'

export default {
  data () {
    return {
      msg: 'Hello World!',
      menuPage: Delivery,
      recipientPage: Recipient
    }
  },
  methods: {
    hideStatusBar () {
      statusBar.hide()
    },
    showStatusBar () {
      statusBar.show()
    },
    takePicture () {
      camera
        .requestPermissions()
        .then(() => {
          camera
            .takePicture({
              width: 300,
              height: 300,
              keepAspectRatio: true,
              saveToGallery: true
            })
            .then(imageAsset => {
              this.img = imageAsset
              console.log(this.img)
            })
            .catch(e => console.error(e))
        })
        .catch(e => console.error(e))
    }
  }
}
</script>

<style>
Label {
  text-align: center;
  font-size: 20;
  color: #000000;
  margin: 2 8;
}

Button {
  background-color: #5558e2;
  color: #ffffff;
  border-radius: 12;
}
</style>
