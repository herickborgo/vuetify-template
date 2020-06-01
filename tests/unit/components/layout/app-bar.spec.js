import '@test/index.js';
import { shallowMount } from '@vue/test-utils';
import AppBar from '@/components/layout/app-bar.vue';

describe('AppBar.vue', () => {
  it('test title props', () => {
    const wrapper = shallowMount(AppBar, {
      propsData: { title: 'Test title' },
    });
    const title = wrapper.find('.headline');
    expect(title.html()).toBe('<span class="mr-2 headline">Test title</span>');
  });
  it('test update drawer method', async () => {
    const wrapper = shallowMount(AppBar);
    wrapper.vm.updateDrawer();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted()['update:drawer']).toBeTruthy();
  });
});
