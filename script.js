function getSat1(){
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 5000)
  });
}

function getSat2(){
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(6), 5000)
  });
}

async function func(){
  console.log('1');
  let result1 = await getSat1();
  console.log('2');
  let result2 = await getSat2();
  console.log('3');
  alert(result1 * result2);
}

func();
