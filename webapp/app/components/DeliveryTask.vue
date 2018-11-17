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
        <ListView dock="bottom" for="parcel in parcels" @itemTap="browseParcel" borderRadius="11" width="100%" height="150" margin="6 0" backgroundColor="rgba(255, 255, 255, .4)">
          <v-template>
            <GridLayout height="100%" rows="*" columns="*, 80" padding="12 0">
              <Label row="0" col="0" :text="parcel.id" textAlignment="left" />
              <Label class="detail-btn" row="0" col="1" text="detail" />
            </GridLayout>
          </v-template>
        </ListView>
      </DockLayout>
      <StackLayout height="100%" width="100%" text="hello">
        <StackLayout height="90%" width="90%" />
      </StackLayout>
    </AbsoluteLayout>
  </Page>
</template>

<script>
import DeliveryDetail from './DeliveryDetail'

export default {
  data () {
    return {
      detailPage: DeliveryDetail,
      parcels: [{ id: '75e7cb59' }, { id: 'cb5975e7' }]
    }
  },
  methods: {
    browseParcel (event) {
      this.$navigateTo(DeliveryDetail, { props: { id: event.item.id } })
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
