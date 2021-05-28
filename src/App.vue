<template>
  <v-app>
    <v-app-bar color="primary" fixed app>
      <v-toolbar-title>Tests vue</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <RestaurantScreen />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import RestaurantScreen from '@/components/RestaurantScreen';
export default {
  name: 'App',
  components: {RestaurantScreen},
};
</script>
