export default {
    savePoint(payload) {
      return new Promise((resolve, reject) => {
        axios.post(`/webapi/points`, payload).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
      });
    }
  }