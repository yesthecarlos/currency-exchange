export default class Exchanger {
  static async getUSDRates() {
    try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }catch(error) {
      return error.message;
    }
  }
}

// export default class Exchanger {
//   static exchanger() {
//     return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
//       .then(function(response) {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         return response.json();
        
//       })
//       .catch(function(error) {
//         return error;
//       });
//   }
// }