/* eslint-disable */

import Vue from 'vue';
import ProblemsList from '@/components/ProblemsList';

describe('ProblemsList.vue', () => {
  it('should render table head correctly.', () => {
    const Constructor = Vue.extend(ProblemsList);
    const vm = new Constructor({propsData: {perPage: 20, problems: []}}).$mount();
    expect(Array.prototype.map.call(vm.$el.querySelectorAll('#oj-problems-list > table > thead > tr > th > div'),
      element => element.textContent))
      .to.deep.equal(['序号', '名称', '通过率', '难度', '状态']);
  });

  it('should show 暂无题目显示 when there is no item in problems list.', () => {
    const Constructor = Vue.extend(ProblemsList);
    const vm = new Constructor({propsData: {perPage: 20, problems: []}}).$mount();
    const text = vm.$el.querySelector('#oj-problems-list > table > tbody > tr > td > div > div').textContent;
    expect(text).toBe('暂无题目显示');
  })
});
