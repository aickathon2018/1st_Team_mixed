<template>
  <Page>
    <ActionBar title="Delively" />
    <StackLayout>
      <Button text="Take Picture" @tap="takePicture" />
      <Label :text="img" />
      <Image src="~/assets/images/mini-logo.svg" stretch="none" />
      <Button text="Login" @tap="$navigateTo(menuPage)" />
    </StackLayout>
  </Page>
</template>

<script>
import * as camera from 'nativescript-camera'
import Menu from './Menu'

export default {
  data () {
    return {
      msg: 'Hello World!',
      img: '',
      menuPage: Menu
    }
  },
  methods: {
    takePicture () {
      camera
        .requestPermissions()
        .then(() => {
          camera
            .takePicture({ width: 300, height: 300, keepAspectRatio: true, saveToGallery: true })
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

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
