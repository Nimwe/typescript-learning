// Pour run le fichier test : npm test nomFonction
// Pour voir le console.log dans le terminal : npx ts-node src/functions/1-types.ts

// ----------- FONCTIONS ET PARAMETRES -----------
//  Plus d'informations sur les types primitifs utilisable pour les paramètres : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

/**
 * Fonction qui prend en paramètre une chaîne de caractère correspondant à un nom et qui retourne une chaîne saluant l'utilisateur.
 * 
 * Exemple : nom passé en paramètre -> "Bob"
 * Retour attendu : "Hello Bob"
 * 
 * @param name Le nom à utiliser
 */
export function getGreeting(name: string): string {
    return `Hello ${name}`
}
console.log(getGreeting("Bob"));

/**
* Fonction qui concatène plusieurs nom pour obtenir le nom complet.
 * 
 * Exemple :
 * getFullName("Ada", "Lovelace") doit retourner "Ada Lovelace"
 * 
 * @param firstName Prénom
 * @param lastName Nom
 * @returns Le nom complet
 */
export function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}
console.log(getFullName("Bob", "l'éponge"));

/**
 * Fonction qui retourne la somme de deux nombres.
 */
export function addNumbers(a: number, b: number): number {
    return a + b;
}
console.log(addNumbers(10, 5))
// ----------- PARAMETRES OPTIONNELS -----------

/**
 * Calcule la somme de deux ou trois nombres.
 * 
 * Les deux premiers nombres sont obligatoires et le dernier optionnel.
 * 
 * Plus d'informations sur les paramètres optionnels : https://www.typescripttutorial.net/typescript-tutorial/typescript-optional-parameters/
 *  
 * @param a 1er nomnre, obligatoire
 * @param b 2ème nombre, obligatoire
 * @param c 3ème nombre, optionnel
 */
export function sumNumbers(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}
console.log(sumNumbers(5, 15, 12))
/**
* Retourne une chaîne de caractères correspondant au nom complet de l'utilisateur.
 * 
 * Exemple :
 * greetFullName("Ada", "Lovelace", "Augusta") doit retourner "Hello Ada Augusta Lovelace"
 *  
 * @param firstName Prénom
 * @param lastName Nom
 * @param middleName "middle name" (optionnel)
 */
export function greetFullName(firstName: string, lastName: string, middleName?: string): string {
    if (middleName) {
        return `Hello ${firstName} ${middleName} ${lastName}`;
    }
    return `Hello ${firstName} ${lastName}`;
}
console.log(greetFullName("Ada", "Lovelace", "Augusta"));
console.log(greetFullName("Ada", "Lovelace"));

// ----------- UNIONS -----------

/**
 * Additionne les valeurs de deux paramètres qui peuvent être des nombre OU des chaînes de caractères
 * 
 * Dans le cas de chaîne de caractère il faudra les transformer en nombre.
 * 
 * Pour vérifier le type d'une variable il est possible d'utiliser "typeof" comme présenté par la réponse stackoverflow suivante : https://stackoverflow.com/a/35546468
 * 
 * Documentation : https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
 */
export function addNumbersOrStrings(a: string | number, b: string | number): number {
    const numA = typeof a === "string" ? parseFloat(a) : a;
    const numB = typeof b === "string" ? parseFloat(b) : b;
    return numA + numB;
}

console.log(addNumbersOrStrings(1, 3));
console.log(addNumbersOrStrings("12", 5));
console.log(addNumbersOrStrings("17", "33"));
/** Alias pouvant être utilisé pour la fonction "addNumbersOrStringsAlias" */
type StringOrNumber = string | number

/**
 * Reprenez la fonction fonction précédente et utilisez un alias en tant que type des paramètres.
 */
export function addNumbersOrStringsAlias(a: StringOrNumber, b: StringOrNumber): number {
    const numA = typeof a === "string" ? parseFloat(a) : a;
    const numB = typeof b === "string" ? parseFloat(b) : b;
    return numA + numB;
}

console.log(addNumbersOrStringsAlias(2, 4));
console.log(addNumbersOrStringsAlias("10", 15));
console.log(addNumbersOrStringsAlias(7, "8"));
console.log(addNumbersOrStringsAlias("100", "200"));

/**
 * Fonction fizzbuzz qui prend un nombre en paramètre.
 * 
 * Si le nombre en paramètre est divisible par 3, retourne "fizz"
 * Si le nombre en paramètre est divisible par 5, retourne "buzz"
 * Si le nombre en paramètre est divisible par 3 ET 5, retourne "fizzbuzz"
 * Si aucune des condition n'est atteinte, retourne le nombre original (et pas une chaîne de caractères)
 *  
 * @param a La valeur sur laquelle fizzbuzz va se baser.
 * @returns Le résultat attendu
 */
export function fizzbuzz(a: number): string | number {
    if (a % 3 === 0 && a % 5 === 0) return "fizzbuzz";
    if (a % 3 === 0) return "fizz";
    if (a % 5 === 0) return "buzz";
    return a;
}
console.log(fizzbuzz(3));   // "fizz" (divisible par 3)
console.log(fizzbuzz(5));   // "buzz" (divisible par 5)
console.log(fizzbuzz(15));  // "fizzbuzz" (divisible par 3 et 5)
console.log(fizzbuzz(1));   // 1 (ni divisible par 3 ni par 5)

