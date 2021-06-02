import Vue from 'vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import {createLocalVue, mount} from '@vue/test-utils';
import RestaurantList from '@/components/RestaurantList';

describe('RestaurantList', () => {
  Vue.use(Vuetify);
  const records = [
    {id: 1, name: 'Salad Place'},
    {id: 2, name: 'Pasta Place'},
  ];
  const vuetify = new Vuetify();
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let restaurantsModule;
  let wrapper;
  const mountWithStore = (state = {records}) => {
    restaurantsModule = {
      namespaced: true,
      state,
      actions: {
        load: jest.fn().mockName('load'),
      },
    };
    const store = new Vuex.Store({
      modules: {
        restaurants: restaurantsModule,
      },
    });
    wrapper = mount(RestaurantList, {localVue, store, vuetify});
  };

  const findByTestId = (wrapper, testId, index) =>
    wrapper.findAll(`[data-testid="${testId}"]`).at(index);

  it('loads restaurants on mount', () => {
    mountWithStore();
    expect(restaurantsModule.actions.load).toHaveBeenCalled();
  });

  it('displays the restaurants', () => {
    mountWithStore();
    expect(findByTestId(wrapper, 'restaurant', 0).text()).toBe('Salad Place');
    expect(findByTestId(wrapper, 'restaurant', 1).text()).toBe('Pasta Place');
  });

  it('displays the loading indicator while loading', () => {
    mountWithStore({loading: true});
    expect(wrapper.find('[data-testid="loading-indicator"]').exists()).toBe(
      true,
    );
  });

  it('does not display the loading indicator while not loading', () => {
    mountWithStore({loading: false});
    expect(wrapper.find('[data-testid="loading-indicator"]').exists()).toBe(false);
  });
  
});
