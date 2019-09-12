<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <img src="@/static/img/Dino-Clock.svg" height="100%" style="padding-right:20px" />
      <v-toolbar-title v-text="title" />
      <v-spacer/>
      <v-btn @click="emitReset()">Reset</v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Dino Time Calculator'
    }
  },
  methods(){
    function emitReset(){
      this.$nuxt.emit('ResetSignal')
    }
  }
}
</script>
