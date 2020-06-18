import '@test/index.js';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import LeftBar from '@/components/layout/left-bar.vue';

const localVue = createLocalVue();
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => {},
    meta: {
      leftBar: {
        title: 'Inicio',
        icon: 'home',
      },
    },
  },
];
localVue.use(VueRouter);
const router = new VueRouter({ routes });

describe('left-bar.vue', () => {
  it('test drawer computed without value props', () => {
    const wrapper = shallowMount(LeftBar, {
      localVue,
      router,
    });
    expect(wrapper.vm.drawer).toBeFalsy();
  });
  it('test drawer computed with value props', () => {
    const wrapper = shallowMount(LeftBar, {
      localVue,
      router,
      propsData: {
        value: true,
      },
    });
    expect(wrapper.vm.drawer).toBeTruthy();
  });
  it('test routes computed', () => {
    const wrapper = shallowMount(LeftBar, {
      localVue,
      router,
    });
    expect(wrapper.vm.routes).toEqual([
      {
        name: 'Home',
        icon: 'home',
        title: 'Inicio',
      },
    ]);
  });
  it('test getRoutes method', () => {
    const wrapper = shallowMount(LeftBar, {
      localVue,
      router,
    });
    const route = {
      path: '/components',
      name: 'Components',
      component: () => {},
      meta: {
        leftBar: {
          title: 'Componentes',
          icon: 'dashboard',
        },
      },
    };
    expect(wrapper.vm.getRoutes([route])).toEqual([
      {
        name: 'Components',
        icon: 'dashboard',
        title: 'Componentes',
      },
    ]);
  });
  it('test getRoutes method with children route', () => {
    const wrapper = shallowMount(LeftBar, {
      localVue,
      router,
    });
    const route = {
      path: '/components',
      name: 'Components',
      component: () => {},
      meta: {
        leftBar: {
          title: 'Componentes',
          icon: 'dashboard',
        },
      },
      children: [
        {
          path: '/layout',
          name: 'Layout',
          component: () => {},
          meta: {
            leftBar: {
              title: 'Layout',
              icon: '',
            },
          },
        },
      ],
    };
    expect(wrapper.vm.getRoutes([route])).toEqual([
      {
        name: 'Components',
        icon: 'dashboard',
        title: 'Componentes',
        children: [
          {
            name: 'Layout',
            icon: '',
            title: 'Layout',
          },
        ],
      },
    ]);
  });
});
