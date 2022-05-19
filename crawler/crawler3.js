
 const axios = require('axios');
//const fs = require('fs');



async function main (){

  try{
   const res = await axios
    .get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
      params: {
       
        response: 'json',
        date: '20220301',
        stockNo: 2330,
      }
    })
    const data = res.data;
      console.log(`resolved: ${data}`);
  }catch(e){

      console.log(e);
  }


 }
 main();