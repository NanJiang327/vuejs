// 在外读取localstorage以防用户关闭本地储存抛出异常
let defaultCity = 'Auckland'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
