function a() {
  return "Fucntion A"
}

function b() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("function B")
    }, 2000)
  })
}

function c() {
  return "Fucntion C";
}

// console.log(a())
// b().then((v) => {
//   console.log(v);
//   console.log(c())
// })

async function app() {
  console.log(a())
  console.log(await b())
  console.log(c())
}

app()