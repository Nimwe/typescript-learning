/**
 * Fonction qui prend en paramètre un tableau d'entiers positifs et retourne le premier.
 * 
 * Retourne -1 si le tableau est vide.
 */
export function getFirstNumber(numbers: number[]): number {
    if (numbers.length === 0) {
        return -1;
    }
    return numbers[0];
}
// Tableau non vide
console.log(getFirstNumber([5, 10, 15])) // affichera 5

// Tableau vide
console.log(getFirstNumber([])) // affichera -1

/**
 * Retourne le dernier élément d'un tableau de string
 * 
 * @param songs Liste de chansons
 * @returns La dernière chaîne de caractères
 */
export function getLastSongPlayed(songs: string[]): string {
    if (songs.length === 0) {
        return ''
    }
    return songs[songs.length - 1]
}

// Test console
const songsList = [
    'Flowers by Miley Cyrus',
    'Resolution by Matt Corby',
    'Green and Gold by Lianne La Havas',
    'The Way Things Were by Isaac Waddington',
    'Breezeblocks by Alt-j',
]

console.log(getLastSongPlayed(songsList))
console.log(getLastSongPlayed(['song1', 'song2', 'song3']))
console.log(getLastSongPlayed([]))

/**
 * Retrouve le mot le plus long d'un tableau de strings.
 * 
 * Afin de retrouver le mot le plus long vous pouvez utiliser une approche basée sur "reduce".
 * 
 * Pour apprendre à vous servir de "reduce" : https://medium.com/free-code-camp/three-ways-to-find-the-longest-word-in-a-string-in-javascript-a2fb04c9757c#720b
 */
export function findLongestWord(): void {
}

/**
 * Crée et initialise un tableau avec une valeur par défaut.
 * 
 * @param length La taille du tableau à créer (number)
 * @param defaultValue La valeur par défaut (string)
 */
export function fillArrayWithDefaultValue(length: number, defaultValue: string): string[] {
    const result = Array(length).fill(defaultValue)

    // Test de vérification 
    console.log('Taille du tableau :', result.length)
    console.log('Contenu du tableau :', result)

    return result
}

// Test des tableaux

fillArrayWithDefaultValue(1, "test")

fillArrayWithDefaultValue(5, "test")

fillArrayWithDefaultValue(3, "hello")

/**
 * Trie un tableau de chaînes de caractères par taille croissante de chaîne.
 * 
 * Pour trier le tableau vous pourrez utiliser la méthode "sort()" associée à une fonction de comparaison : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 
 * 
 * Attention : la fonction doit renvoyer un NOUVEAU TABLEAU (nouvelle instance) et non pas celui passé en paramètre. Comment faire ?
 * 
 * @param arrayToSort Le tableau de chaînes de caractères à trier
 * @returns Le tableau trié
 */
export function sortBySize(arrayToSort: string[]): string[] {
    // Création d'un nouveau tableau pour ne pas modifier l'original
    const sortedArray = [...arrayToSort].sort((a, b) => a.length - b.length)

    // --- Console logs pour vérification ---
    console.log('Tableau original :', arrayToSort)
    console.log('Tableau trié     :', sortedArray)

    return sortedArray
}

// --- Exemples de console.log ---
sortBySize(['hello', 'world'])
// Tableau original : ['hello', 'world']
// Tableau trié     : ['hello', 'world']

sortBySize([
    'bumbling',
    'semiprecious',
    'discombobulated',
    'aaaaaa',
    'giraffe',
    'numbskull',
])

// ----------- TABLEAUX AVEC DES UNIONS -----------

/**
 * Additionne les éléments d'un tableau qu'ils soient de type "number" ou "string".
 * 
 * @param array Utilisation d'un tableau avec types multiples : https://www.geeksforgeeks.org/defining-array-with-multiple-types-in-typescript/
 * @returns Le résultat de la somme de type "number"
 */
export function sumStringsAndNumbers(array: (number | string)[]): number {
    const total = array.reduce((acc: number, val: number | string) => {
        // Convertit val en nombre si c'est une string
        const num = typeof val === 'string' ? parseFloat(val) : val
        return acc + num
    }, 0)

    console.log('Tableau original :', array)
    console.log('Somme totale     :', total)

    return total
}

// Test
sumStringsAndNumbers(['2', 1, '43', 2])
sumStringsAndNumbers(['2', 1, '43', 2, 98, '100'])



/**
 * Traite un tableau pouvant contenir des "string" mais également des éléments "null".
 * Cette fonction est chargée de supprimer toutes les valeurs null et de garder les "srings".
 * 
 * Pro-tip : renseignez vous sur la fonction "filter" : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *  
 * @param array Un tableau pouvant contenir des "string" mais également des éléments "null"
 * @returns Tableau de chaînes de caractères résultat
 */
export function stringsOnly(): void {
}

// ----------- TUPLES -----------

/**
 * Transforme un tuple contenant des informations d'utilisateur en un nom d'utilisateur arbitraire.
 * 
 * Par exemple :
 * - generateUsername(['John', 'Smith', 1980]) doit retourner 'smithjo_1980'
 * - generateUsername(['Bobby', 'Fallon', 1995]) should return 'fallonbo_1995'
 * 
 * @param userInfo Un tuple contenant les informations utilisateur
 * @returns Le nom utilisateur généré.
 */
export function generateUsername(): void {
}

/**
 * Enum utilisée pour définir 4 points cardinaux
 * TODO : à compléter avec {North, South, East, West}
 */
export enum Direction {
}

/**
 * Déplace un point sur un carte 2D (repère orthonormé)
 *
 *        ^ N
 *        |
 *        |
 * W <--[0, 0]--> E 
 *        |
 *        |
 *        S
 * 
 * Par exemple :
 * - getNextMapCoord([0, 0], Direction.North) doit retourner [0, 1]
 * - getNextMapCoord([0, 0], Direction.East)doit retourner [1, 0]
 * 
 * @param coordinates Tuple contenant des coordonnées le premier élément est la position sur l'axe des abscisses, la seconde sur l'axe des ordonnées
 * @param direction Enum présentant une direction (North, South, East, West)
 * @returns Les nouvelles coordonnées (tuple)
 */
export function getNextMapCoord(): void {
}
