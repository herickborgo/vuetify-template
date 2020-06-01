import '@test/index.js';
import { shallowMount } from '@vue/test-utils';
import LeftBar from '@/components/layout/left-bar.vue';

describe('left-bar.vue', () => {
  it('test drawer computed without value props', () => {
    const wrapper = shallowMount(LeftBar);
    expect(wrapper.vm.drawer).toBeFalsy();
  });
  it('test drawer computed with value props', () => {
    const wrapper = shallowMount(LeftBar, {
      propsData: {
        value: true,
      },
    });
    expect(wrapper.vm.drawer).toBeTruthy();
  });
});
