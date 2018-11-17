<template>
  <Page actionBarHidden="true">
    <AbsoluteLayout top="0" left="0" backgroundColor="#3c495e">
      <DockLayout height="100%" width="100%">
        <Label text="Your parcel" dock="top" margin="0" height="22%" lineHeight="100%" color="#ffffff" textAlign="left" backgroundColor="#46c3e3" />
        <StackLayout dock="bottom" backgroundColor="#e6e6e6" />
      </DockLayout>
      <DockLayout top="70" width="100%">
        <StackLayout dock="left" width="30" />
        <StackLayout dock="right" width="30" />
        <StackLayout dock="top" padding="22 8" borderRadius="11" backgroundColor="rgba(255, 255, 255, .4)">
          <Image src="~/assets/images/face.png" width="80" />
          <Label text="Iris" paddingBottom="36" />
        </StackLayout>
        <ListView dock="bottom" for="parcel in parcels" @itemTap="browseParcel" borderRadius="11" width="100%" height="150" margin="6 0" backgroundColor="rgba(255, 255, 255, .4)">
          <v-template>
            <GridLayout height="100%" rows="*" columns="*, 80" padding="12 0">
              <Label class="ref-btn" row="0" col="0" :text="parcel.id" textAlignment="left" />
              <Label class="detail-btn" row="0" col="1" text="Details" />
            </GridLayout>
          </v-template>
        </ListView>
      </DockLayout>
      <!--StackLayout height="100%" width="100%" text="hello">
        <StackLayout height="90%" width="90%" />
      </StackLayout-->
    </AbsoluteLayout>
  </Page>
</template>

<script>
import RecipentParcelDetail from './RecipentParcelDetail'

export default {
  data () {
    return {
      detailPage: RecipentParcelDetail,
      parcels: [{ id: '75e7cb59' }, { id: 'cb5975e7' }]
    }
  },
  methods: {
    browseParcel (event) {
      this.$navigateTo(RecipentParcelDetail, { props: { id: event.item.id } })
    }
  }
}
</script>

<style scoped>
.detail-btn {
  background-color: #46c3e3;
  font-size:15;
  color:white;
  margin-right: 15;
}
.ref-btn{
  font-size:20;
  padding-left:15;
  font-weight: bold;
}
</style>
