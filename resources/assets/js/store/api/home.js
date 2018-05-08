export default {
    getCategories() {
      return new Promise((resolve, reject) => {
        axios.get(`/webapi/categories`).then(res => {
          resolve(res)
        })
      })
    },
    getPoints() {
      return new Promise((resolve, reject) => {
        axios.get(`/webapi/points`).then(res => {
          resolve(res)
        })
      })
    }
  }