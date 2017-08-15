import Vue from 'vue'
import User from '@/pages/User'

describe('User.vue', () => {
  var vm;
  beforeEach(() => {
    let Constructor = Vue.extend(User)
    vm = new Constructor().$mount();
  })
  it('should be initialized with the correct value', done => {
    vm.initialData();
    setTimeout(() => {
      expect(vm.$el.querySelector('.user-name').textContent)
        .to.equal('林七月');
      done();
    }, 1000);
  })
  it('should have four tabs that can be actived', () => {
    let tabButtonArray = vm.$el.querySelectorAll('.nav-link');
    tabButtonArray[1].click();
    expect(vm.selectItem[1]).to.equal(true);
    tabButtonArray[0].click();
    expect(vm.selectItem[0]).to.equal(true);
    tabButtonArray[2].click();
    expect(vm.selectItem[2]).to.equal(true);
    tabButtonArray[3].click();
    expect(vm.selectItem[3]).to.equal(true);
  })
  it('should pass the input valid test ', () => {
    vm.nickname = '测试所用的错误昵称';
    vm.isNicknameValid();
    expect(vm.nicknameValid).to.equal(true);
    vm.nickname = '测试正确昵称';
    vm.isNicknameValid();
    expect(vm.nicknameValid).to.equal(false);
    vm.email = 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest'
    vm.isEmailValid();
    expect(vm.emailValid).to.equal(true);
    vm.email = 'testtesttesttesttesttest'
    vm.isEmailValid();
    expect(vm.emailValid).to.equal(false);
    vm.introduction = 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest'
    vm.isIntroValid();
    expect(vm.introValid).to.equal(true);
    vm.introduction = 'testtesttesttesttesttest'
    vm.isIntroValid();
    expect(vm.introValid).to.equal(false);
  })
})
