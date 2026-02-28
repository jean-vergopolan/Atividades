//exercício 1 - Resolvendo a fórmula de Bháskara
//autor: Jeanluca Vergopolan

let a = 1
let b = 2
let c = -3

//Calculando delta
let delta = (b**2) - ( 4 * a * c)

//Calculando os resultados
let x1 = (-b + delta ** 0.5) / ( 2 * a )
let x2 = (-b - delta ** 0.5) / ( 2 * a )

//Apresentando o resultado
console.log ("O resuldado de x1 é:" + x1)
console.log ("O resuldado de x2 é:" + x2)