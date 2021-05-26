import Vuex from 'vuex';
import {createLocalVue, mount} from '@vue/test-utils';
import RestaurantList from '@/components/RestaurantList';

describe('RestaurantList', () => {
  const records = [
    {id: 1, name: 'Salad Place'},
    {id: 2, name: 'Pasta Place'},
  ];
  const localVue = createLocalVue();
  localVue.use(Vuex);
  let restaurantsModule;
  let wrapper;

  beforeEach(() => {
    restaurantsModule = {
      namespaced: true,
      state: {records},
      actions: {
        load: jest.fn().mockName('load'),
      },
    };
    const store = new Vuex.Store({
      modules: {
        restaurants: restaurantsModule,
      },
    });
    wrapper = mount(RestaurantList, {localVue, store});
  });

  const findByTestId = (wrapper, testId, index) =>
    wrapper.findAll(`[data-testid="${testId}"]`).at(index);

  it('loads restaurants on mount', () => {
    expect(restaurantsModule.actions.load).toHaveBeenCalled();
  });
  it('displays the restaurants', () => {
    expect(findByTestId(wrapper, 'restaurant', 0).text()).toBe('Salad Place');
    expect(findByTestId(wrapper, 'restaurant', 1).text()).toBe('Pasta Place');
  });
});
