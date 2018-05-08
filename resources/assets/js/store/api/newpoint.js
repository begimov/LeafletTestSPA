export default {
    savePoint() {
      return new Promise((resolve, reject) => {
        axios.post(`/webapi/points`).then(res => {
          console.log(res);
          // resolve(res)
        })
      })
    }
  }