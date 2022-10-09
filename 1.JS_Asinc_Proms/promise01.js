/** Promise */

let aceitar = true

console.log('pedir uber')

const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve('pedido aceito!')
  }
  return reject('pedido negado')
})

promessa
  .then(result => console.log(result)) //resultado caso de certo
  .catch(erro => console.log(erro)) //resultado caso erro ou rejeitada
  .finally(() => console.log('promessa finalizada')) //finalização da promessa independente do resultado

console.log('aguardando')
