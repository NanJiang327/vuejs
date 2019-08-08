export default {
  changeCity (ctx, city) {
    // 使用action的commit激活mutations中的changeCity事件
    ctx.commit('changeCity', city)
  }
}
