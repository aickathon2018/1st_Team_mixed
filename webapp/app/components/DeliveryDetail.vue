<template>
  <Page actionBarHidden="true">
    <AbsoluteLayout top="0" left="0" backgroundColor="#3c495e">
      <DockLayout height="100%" width="100%">
        <Label text="Welcome back!" dock="top" margin="0" height="22%" lineHeight="100%" color="#ffffff" textAlign="left" backgroundColor="#46c3e3" />
        <StackLayout dock="bottom" backgroundColor="#e6e6e6" />
      </DockLayout>
      <DockLayout top="70" width="100%">
        <StackLayout dock="left" width="30" />
        <StackLayout dock="right" width="30" />
        <StackLayout dock="top" padding="22 8" borderRadius="11" backgroundColor="rgba(255, 255, 255, .4)">
          <Image src="~/assets/images/face.png" width="80" />
          <Label text="Gavin" paddingBottom="36" />
        </StackLayout>
        <StackLayout dock="bottom" borderRadius="11" paddingBottom="8" backgroundColor="rgba(255, 255, 255, .4)">
          <DockLayout paddingTop="8" stretchLastChild="false">
            <Label dock="left" :text="id" fontSize="30" textAlignment="left" />
            <Button dock="right" text="Sign" @tap="takePicture" height="38" width="70" marginRight="8" />
          </DockLayout>
          <Label text="Address" fontSize="22" textAlignment="left" />
          <Label :text="parcel.address" marginLeft="16" textAlignment="left" color="grey" />
          <Label text="Received by" fontSize="22" textAlignment="left" />
          <Label :text="parcel.receive_by" marginLeft="16" textAlignment="left" color="grey" />
          <Label text="Deliver by" fontSize="22" textAlignment="left" />
          <Label :text="parcel.deliver_by" marginLeft="16" textAlignment="left" color="grey" />
        </StackLayout>
        <StackLayout dock="center" height="20" />
      </DockLayout>
      <StackLayout height="100%" width="100%" text="hello">
        <StackLayout height="90%" width="90%" />
      </StackLayout>
    </AbsoluteLayout>
  </Page>
</template>

<script>
import * as camera from 'nativescript-camera'
import axios from 'axios'

export default {
  props: ['id'],
  data () {
    return {
      parcel: {
        id: '75e7cb59',
        address: '123, Fake Street',
        receive_by: '2018-02-29',
        deliver_by: '2017-11-11'
      }
    }
  },
  methods: {
    browseParcel (event) {
      console.log(event.item.id)
    },
    takePicture () {
      camera
        .requestPermissions()
        .then(() =>
          camera.takePicture({
            width: 300,
            height: 300,
            keepAspectRatio: true,
            saveToGallery: true
          })
        )
        .catch(e => console.error(e))
        .then(imageAsset => axios.post(`http://172.16.10.38:3000/parcel/${this.id}/sign`))
        .then(response => this.$navigateBack())
        .catch(e => console.error(e))
    }
  }
}
</script>

<style scoped>
button {
}

.detail-btn {
  background-color: #46c3e3;
}
</style>
