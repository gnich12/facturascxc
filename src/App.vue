<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon >{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app class="blue darken-1">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up" style="color:white">
      </v-toolbar-side-icon>
     <v-toolbar-title v-text="title" style="color:white"></v-toolbar-title>
      <v-spacer></v-spacer>
       <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link" color="white">
          <v-icon left color="white">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Administrador de Facturas",
      sideNav: false
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        {
          icon: "fas fa-lock",
          title: "Sign in",
          link: ""
        }
      ];
      return menuItems;
    }
  }
};
</script>
