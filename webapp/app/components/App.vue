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
    }
  }
}
</script>

<style>
label {
  text-align: center;
  font-size: 20;
  color: #000000;
  margin: 2 8;
}

button {
  background-color: #46c3e3;
  color: #ffffff;
  border-radius: 12;
}
</style>
