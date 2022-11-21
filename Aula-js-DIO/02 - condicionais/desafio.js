const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina'

const litrosConsumidos = distanciaEmKm / kmPorLitros

if (tipoCombustivel === 'Gasolina') {
   const valorGasolina = litrosConsumidos * precoGasolina
   console.log (valorGasolina)
}
  else if (tipoCombustivel === 'Etanol'){
    const valorEtanol = litrosConsumidos * precoEtanol
    console.log(valorEtanol)
} else {
    ('Valor insuficiente para viagem.')
}
