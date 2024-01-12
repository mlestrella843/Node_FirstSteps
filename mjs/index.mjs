//.js por default utiliza commonJs cjs
//.mjs utiliza ES modules.
//.cjs se forza o se especifica a usar el commonJs
//* cuando usamos ES mosules the files extension must be required

import { sum, sub, mult } from './sum.mjs'

console.log(sum(1,3));
console.log(sub(1,3));
console.log(mult(1,3));