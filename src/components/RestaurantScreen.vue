<template>
  <v-card>
    <v-card-title>Restaurants</v-card-title>
    <v-card-text>
      <NewRestaurantForm />
      <RestaurantList />
    </v-card-text>
  </v-card>
</template>

<script>
import NewRestaurantForm from './NewRestaurantForm.vue';
import RestaurantList from './RestaurantList.vue';

export default {
  name: 'RestaurantScreen',
  components: {
    NewRestaurantForm,
    RestaurantList,
  },
};
</script>
