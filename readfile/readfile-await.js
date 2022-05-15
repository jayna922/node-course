
const fs = require('fs');

let p=new Promise ((resolve, reject) =>{
    fs.readFile('test.txt', 'utf-8', (err, data) => {
        if (err) {
          // 錯誤了
        //   console.log('喔喔喔，發生錯誤了');
        //   console.error(err);
        reject(err);
        } else {
          // 因為沒有 err，所以是正確的
        //   console.log(data);
        resolve(data);
        }
      });
});

async function main (){

    try{
        let result = await p;
        console.log(`resolved: ${result}`);
    }catch{
        let error = await p;
    
        console.log('喔喔喔，發生錯誤了');
    }
   

   }
   main();

// p.then((result) =>{
//     console.log(`resolved: ${result}`);
// })
// .catch((error) =>{
//     console.log('喔喔喔，發生錯誤了');
// })

