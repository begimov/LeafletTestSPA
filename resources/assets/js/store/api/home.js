export default {
    getCategories() {
      return new Promise((resolve, reject) => {
        axios.get(`/webapi/categories`).then(res => {
          resolve(res)
        })
      })
    }
  }