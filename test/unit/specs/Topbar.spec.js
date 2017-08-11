import Vue from 'vue'
import Topbar from '@/components/Topbar'

describe('Topbar.vue', () => {
  it('should have four navigation links in correct order', () => {
    const Constructor = Vue.extend(Topbar)
    const vm = new Constructor().$mount()
    expect(Array.prototype.map.call(vm.$el.querySelectorAll('.main-nav a.nav-link'), element => element.textContent))
      .to.deep.equal(['主頁', '題目', '狀態', '排名'])
  })

  it('should be initialized with empty value', () => {
    const Constructor = Vue.extend(Topbar)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.search input').value)
      .to.equal('')
  })

  it('should have two user dropdown items in correct order', () => {
    const Constructor = Vue.extend(Topbar)
    const vm = new Constructor().$mount()
    expect(Array.prototype.map.call(vm.$el.querySelectorAll('.dropdown-item'), element => element.textContent))
      .to.deep.equal(['Profile', 'Signout'])
  })
})
