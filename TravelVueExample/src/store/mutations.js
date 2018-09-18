export default {
  // 通过mutations的changeCity把数据mutate给state
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
