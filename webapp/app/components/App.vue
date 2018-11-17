<template>
  <Page actionBarHidden="true">
    <DockLayout stretchLastChild="false">
      <Image src="~/assets/images/front.png" dock="top" />
      <StackLayout dock="bottom" padding="16">
        <TextView editable="false">
          <Span text="People trust that their on-time" />
          <Span text="delivery is going to happen." />
        </TextView>
        <Button text="Login" dock="bottom" @tap="$navigateTo(menuPage)" />
      </StackLayout>
    </DockLayout>
  </Page>
</template>

<script>
import * as camera from 'nativescript-camera'
import Menu from './Menu'

export default {
  data () {
    return {
      msg: 'Hello World!',
      menuPage: Menu
    }
  },
  methods: {
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

<style scoped>
ActionBar {
  background-color: #46c3e3;
  color: #ffffff;
}

Button {
  background-color: #5558e2;
  border-radius: 12;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
