const levadura = "mezclar 30 gramos de levadura fresca con 2½ tazas de agua tibia"
const aceite = "añadir 2 cucharadas soperas de aceite de oliva"
const arina = "añadir Harina de fuerza"
const sal = "añadir 1 cucharadita de sal fina"
const amasar = "amasar bien hasta que deje de ser pegajosa"
const formacuatro = "darle forma a la masa para 4 pizzas"
const porciones = "4 porciones obtenidas"
const base = "base para 1 pizza"
const reposar = "Dejar la base para 1 pizza reposar durante 45 min"
const forma = "Base con forma circular obtenida"
const tomate = "añadido Salsa de tomate"
const mozz = "añadido Mozzarella"
const pepp = "añadido Pepperoni"
const aceit = "añadidas 4 Aceitunas Negras"
const hornear = "Horneando la pizza durante 10 min"
const lista = "Pizza lista"
const entregada = "Pizza Entregada"

console.log(levadura)
console.log(aceite)
console.log(arina)
console.log(sal)
console.log(amasar)
console.log(formacuatro)
console.log(porciones)
console.log(base)
console.log(reposar)
console.log(forma)
console.log(tomate)
console.log(mozz)
console.log(pepp)
console.log(aceit)
console.log(hornear)
console.log(lista)
console.log(entregada)

const prepMasa = (pizza) => {
    console.log("Cogiendo la masa");
    console.log("Estirando la masa");
    console.log("Añadiendo tomate");
    console.log("Añadiendo mozzarela");
    console.log("Añadiendo " + (pizza == "mozzarela" ? "Añadiendo mas " + pizza : pizza));
    console.log("Horneando la pizza");
    console.log("Pizza ready");
    console.log("Pizza entregada");
}

const prompt = require('prompt-sync')();

const pizza = prompt('And your pizza is ... (pepperoni, mozzarela, aceituna): ')

if (pizza === 'pepperoni' || pizza === 'mozzarela' || pizza === 'aceituna') {
    prepMasa(pizza)
} else
    console.log("Lo siento esa pizza no existe.");