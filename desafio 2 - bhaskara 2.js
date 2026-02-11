//exercício 2 - Fórmula de Bháskara com validações
//autor: Jeanluca Vergopolan

let a = 1
let b = 2
let c = -3

//verificando se "a" é válido
if (a === 0) {
    console.log ("Inválido, variável 'a' não pode ser 0!")
    }

else {
        let delta = (b ** 2) - ( 4 * a * c)

        //Verificando se existem, e quantidade de raízes reais:

        //Delta negativo? 0 raíz!
        if (delta < 0) {
            console.log ("Inválido, delta negativo, não existem raízes reais!")
        }
        //Delta igual a 0? 1 raíz!
        else if (delta === 0 ) {
            let x = -b / (2 * a)
            console.log ("Delta igual a 0, apenas uma raíz real:" + " " + x)
        }    

        //Delta positivo! 2 raízes!
        else {
            let x1 = (-b + delta ** 0.5) / ( 2 * a )
            let x2 = (-b - delta ** 0.5) / ( 2 * a )

        //Apresentando os resultados:
        console.log ("O resuldado de x1 é:" + x1)
        console.log ("O resuldado de x2 é:" + x2)
        }
    }