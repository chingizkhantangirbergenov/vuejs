<template>
  <v-app class="main">
    <div></div>
  <v-navigation-drawer fixed v-model="sideNav"> 
      <v-list class="navFont"> 
        <v-list-tile>
        <v-list-tile-action>
          <v-icon>pageview </v-icon>
        </v-list-tile-action>
        <v-list-tile-content>Реестр </v-list-tile-content>
      </v-list-tile>
      </v-list>
    <v-list> 
        <v-list-tile>
        <v-list-tile-action>
          <v-icon>location_city </v-icon>
        </v-list-tile-action>
        <v-list-tile-content>Компании</v-list-tile-content>
      </v-list-tile>
      </v-list>

      <v-list> 
        <v-list-tile>
        <v-list-tile-action>
          <v-icon>help_outline</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>Поддержка</v-list-tile-content>
      </v-list-tile>
      </v-list>

    </v-navigation-drawer>  
    
    <main>
      
 <v-toolbar class="light-blue accent-3">
        <v-toolbar-side-icon @click.native.stop="sideNav=!sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">Атамекен</router-link></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}</v-btn>
    </v-toolbar-items>
      </v-toolbar>
      <router-view>
        
      </router-view> 
    </main>
  </v-app>

</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
          { icon: 'person_outline', title: 'Регистрация', link: '/signup' },
          { icon: 'location_city', title: 'Компании', link: '/search' },
          { icon: 'help_outline', title: 'Поддержка', link: '/help' },
          
        ],

      }
  },
  name: 'App'
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');
  .navFont {
    font-family: 'Titillium Web', sans-serif;
  }
  
</style>
