<template>
  <Page>
    <ActionBar title="Delively" />
    <StackLayout>
      <Button text="Take Picture" @tap="takePicture" />
      <Label :text="img" />
    </StackLayout>
  </Page>
</template>

<script>
import * as camera from 'nativescript-camera'

export default {
  data () {
    return {
      msg: 'Hello World!',
      img: ''
    }
  },
  methods: {
    takePicture () {
      camera
        .requestPermissions()
        .then(() => {
          camera
            .takePicture({ width: 300, height: 300, keepAspectRatio: true })
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
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
