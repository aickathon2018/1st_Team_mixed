<template>
  <Page actionBarHidden="true" @loaded="onLoaded">
    <AbsoluteLayout top="0" left="0" backgroundColor="#3c495e">
      <DockLayout height="100%" width="100%">
        <Label text="Welcome back!" dock="top" margin="0" height="22%" lineHeight="100%" color="#ffffff" textAlign="left" backgroundColor="#46c3e3" />
        <StackLayout dock="bottom" backgroundColor="#e6e6e6" />
      </DockLayout>
      <DockLayout top="70" width="100%">
        <StackLayout dock="left" width="30" />
        <StackLayout dock="right" width="30" />
        <StackLayout dock="center" padding="22 8" borderRadius="11" backgroundColor="rgba(255, 255, 255, 0.4)">
          <Image src="~/assets/images/face.png" width="80" />
          <Label text="Gavin" paddingBottom="36" />
          <Button text="My Account" />
          <Button text="Manage Task" />
          <Button text="Settings" />
        </StackLayout>
      </DockLayout>
      <DockLayout v-if="displayModal" height="100%" width="100%">
        <StackLayout dock="left" width="40" backgroundColor="rgba(0, 0, 0, 0.5)" />
        <StackLayout dock="right" width="40" backgroundColor="rgba(0, 0, 0, 0.5)" />
        <StackLayout dock="top" height="60" backgroundColor="rgba(0, 0, 0, 0.5)" />
        <StackLayout dock="bottom" height="60" backgroundColor="rgba(0, 0, 0, 0.5)" />
        <StackLayout dock="center" borderRadius="11" backgroundColor="#43b883">
          <AbsoluteLayout backgroundColor="#000">
            <GridLayout>
              <Button horizontalAlignment="right" text="x" left="100%" />
            </GridLayout>
          </AbsoluteLayout>
        </StackLayout>
      </DockLayout>
      <Button text="hello" @tap="toggleModal" />
    </AbsoluteLayout>
  </Page>
</template>

<script>
import * as application from 'tns-core-modules/application'

export default {
  data () {
    return {
      displayModal: 0
    }
  },
  methods: {
    onLoaded () {
      // override back button
    },
    toggleModal () {
      this.displayModal ^= 1
    }
  }
}
</script>

<style scoped>
ActionBar {
  background-color: #46c3e3;
  color: #ffffff;
}

button {
  margin: 6;
}
</style>
