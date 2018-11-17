<template>
  <Page actionBarHidden="true">
    <AbsoluteLayout top="0" left="0" backgroundColor="#3c495e">
      <DockLayout height="100%" width="100%">
        <Label text="Parcel details" dock="top" margin="0" height="22%" lineHeight="10" color="#ffffff" textAlign="left" backgroundColor="#46c3e3" />
        <StackLayout dock="bottom" backgroundColor="#e6e6e6" />
      </DockLayout>
      <DockLayout top="70" width="100%">
        <StackLayout dock="left" width="30" />
        <StackLayout dock="right" width="30" />
        <StackLayout dock="top" padding="22 8" borderRadius="11" backgroundColor="rgba(255, 255, 255, .4)">
          <Image src="~/assets/images/face.png" width="80" />
          <Label text="Iris" paddingBottom="36" />
        </StackLayout>
        <StackLayout dock="bottom" borderRadius="11" paddingBottom="8" backgroundColor="rgba(255, 255, 255, .4)">
          <DockLayout paddingTop="8" stretchLastChild="false">
            <Label class= "title" dock="left" :text="id" fontSize="30" textAlignment="left"/>
            <Button dock="right" text="Sign" @tap="takePicture" height="38" width="100" marginRight="12" />
          </DockLayout>
          <Label class="sub-title" text="Address" textAlignment="left" />
          <Label class="sub-details" :text="parcel.address" marginLeft="16" textAlignment="left" color="grey" />
          <Label class="sub-title" text="Received by" textAlignment="left" />
          <Label class="sub-details" :text="parcel.receive_by" marginLeft="16" textAlignment="left" color="grey" />
          <Label class="sub-title" text="Deliver by" textAlignment="left" />
          <Label class="sub-details" :text="parcel.deliver_by" marginLeft="16" textAlignment="left" color="grey" />
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
import * as imageSource from "tns-core-modules/image-source"
import { Image } from "tns-core-modules/ui/image"
import { File } from 'tns-core-modules/file-system'
import * as fs from 'file-system'
import * as bgHttp from 'nativescript-background-http'
// import axios from 'axios'

export default {
  props: ['id'],
  data () {
    return {
      parcel: {
        id: '75e7cb59',
        address: '123, Fake Street',
        receive_by: '2018-02-29',
        deliver_by: 'Gavin'
      }
    }
  },
  methods: {
    takePicture () {
      camera
        .requestPermissions()
        .then(() =>
          camera.takePicture({
            width: 300,
            height: 300,
            keepAspectRatio: true
          })
        )
        .catch(e => console.error(e))
        .then(imageSource => {
          const folder = fs.knownFolders.documents()
          const path = fs.path.join(folder.path, 'file.png')
          const saved = imageSource.saveToFile(path, 'png')
          const session = bgHttp.session('image-upload')

          const request = {
            url: `http://172.16.10.38:3000/parcel/${this.id}/sign`,
            method: 'POST',
            headers: {
              'Content-Type': 'application/octet-stream'
            }
          }

          const task = session.uploadFile(path, request)
          console.log(task)
          return task
          // console.log(imageAsset._android)
          // const image = imageSource.fromFile(imageAsset._android)
          // console.log(image.toBase64String('png'))
        })
        // .then(image => axios.post(`http://172.16.10.38:3000/parcel/${this.id}/sign`, image))
        // .then(response => this.$navigateBack())
        .then(d => console.log(d))
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
  margin-right: 10;
}

.title {
  padding-left:8;
  font-weight:bold; 
}

.sub-title {
  margin-top:10;
  font-size: 18;
  font-style: italic;
  padding-left:10;
}

.sub-details {
  font-size:12;
  color: grey;
  padding-left:10;
}
</style>
