<template>
  <v-app
    light
    v-scroll="onScroll"
  >
    <v-navigation-drawer
      disable-resize-watcher
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :class="'elevation-0 ' + [offsetTop ? 'pt-0' : 'pt-3']"
      :color="[offsetTop ? 'teal' : 'transparent']"
      scroll-off-screen
      :scroll-threshold="72"
      dark
      app
    >
      <v-container class="py-0">
        <v-layout>
          <v-toolbar-title style="margin: auto 0">
            Title
          </v-toolbar-title>
          <v-spacer/>
          <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"/>
          <v-toolbar-items v-for="(item, i) in items" :key="i" class="hidden-sm-and-down">
            <v-btn flat>{{ item.title }}</v-btn>
          </v-toolbar-items>
          <v-menu
            bottom
            left
            offset-y
            nudge-top="-10"
            transition="slide-y-transition"
            class="hidden-sm-and-down"
          >
            <v-btn icon slot="activator">
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile @click="''">
                <v-list-tile-title>Facebook</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-layout>
      </v-container>
    </v-toolbar>
    <v-jumbotron class="teal" style="padding-top: 80px;height: 700px">
      <v-container fill-height>
        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-layout column align-start justify-center>
              <h3 class="white--text slogan py-2" style="opacity: .64">Vuetify.js</h3>
              <div class="white--text subheading">Build your application today!</div>
              <v-btn color="green accent-2" class="mt-4">raised</v-btn>
            </v-layout>
          </v-flex>
          <v-flex xs12 md6>
             <v-layout column justify-center>
               <div style="height: 360px">
                 <v-system-bar color="grey darken-4" style="border-radius: 2px 2px 0 0" dark>
                   <v-btn icon small dark color="red" v-ripple="false" style="height: 10px;width: 10px; margin: 0 3px"></v-btn>
                   <v-btn icon small dark color="orange lighten-2" v-ripple="false" style="height: 10px;width: 10px; margin: 0 3px"></v-btn>
                   <v-btn icon small dark color="green" v-ripple="false" style="height: 10px;width: 10px; margin: 0 3px"></v-btn>
                 </v-system-bar>
                 <v-layout row class="white black--text">
                   <v-flex sm4 class="grey lighten-2"></v-flex>
                   <v-flex sm8>
                     <v-container fluid></v-container>
                   </v-flex>
                 </v-layout>
               </div>
             </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer
      app
      static
    >
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Components from '@/components'

export default {
  name: 'App',
  components: Components,
  data () {
    return {
      drawer: false,
      parallax: require('@/assets/parallax-background.jpg'),
      offsetTop: false,
      items: [
        { icon: 'home', title: 'Home' },
        { icon: 'android', title: 'User' }
      ]
    }
  },
  methods: {
    onScroll () {
      this.offsetTop = window.pageYOffset > 1
    }
  }
}
</script>
