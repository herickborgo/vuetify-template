import '@test/index.js';
import { shallowMount } from '@vue/test-utils';
import MenuList from '@/components/layout/left-bar/menu-list.vue';

describe('menu-list.vue', () => {
  it('test default value of routes props', () => {
    const wrapper = shallowMount(MenuList);
    expect(wrapper.vm.routes).toEqual([]);
  });
  it('test default value of routes props', () => {
    const wrapper = shallowMount(MenuList, {
      propsData: {
        routes: [
          {
            name: 'Components',
            icon: 'dashboard',
            title: 'Componentes',
          },
        ],
      },
    });
    expect(wrapper.vm.routes).toEqual(
      [
        {
          name: 'Components',
          icon: 'dashboard',
          title: 'Componentes',
        },
      ],
    );
  });
});
