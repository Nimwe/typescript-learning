/**
 * TODO définir l'interface qui représente un contact.
 * 
 * Informations :
 * - id
 * - name
 * - address
 */
// Interface
interface Contact {
    id: number
    name: string
    address: string
}
// Objets contacts
const contacts = [
    { id: 1, name: 'John', address: '123 Main St' },
    { id: 2, name: 'Batman', address: 'Wayne Manor' },
    { id: 3, name: 'Minnie Mouse', address: 'Disneyland' },
    { id: 4, name: 'Kermit the Frog', address: 'Sesame St or the Swamp' },
]
/**
 * Renvoie l'adresse d'un contact.
 * 
 * @param contact Le contact à traiter
 * @returns l'adress du contact
 */
export function getAddress(contact: Contact): string {
    return contact.address;
} -
    // Affichage console
    contacts.forEach(c => console.log(getAddress(c)));


/**
 * Renvoie le nombre d'amis d'une liste de contacts
 * 
 * @param friends La liste de contact concernée
 * @returns Le nombre d'amis
 */
export function howManyFriends(friends: Contact[]): number {
    return friends.length;
}
console.log(howManyFriends(contacts));

/**
 * Renvoie l'adresse de "Batman" si celui-ci est présent dans le tableau.
 * Renvoie "null" si "Batman" n'est pas dans le tableau.
 * 
 * @param contacts Tableau de contacts à traiter 
 * @returns Une adresse ou "null"
 */

export function findTheBat(contacts: Contact[]): string | null {
    const batman = contacts.find(contact => contact.name === "Batman");
    return batman ? batman.address : null;
}
console.log(findTheBat(contacts));

// ----------- CLEF OPTIONNELLES -----------

/**
 * TODO définir l'interface qui représente un utilisateur.
 * 
 * Documentation : https://www.typescriptlang.org/docs/handbook/interfaces.html#optional-properties
 * 
 * Informations :
 * - name (obligatoire)
 * - verified : indique si le compte utilisateur a été vérifié, booléen. Obligatoire et par défaut à "false" (obligatoire)
 * - address (optionnel)
 * - picture : url vers une image (optionnel)
 * - email : email de l'utilisateur (optionnel)
 */
interface User {
    name: string;          // obligatoire
    verified: boolean;     // obligatoire, par défaut à false (à gérer à l'initialisation)
    address?: string;      // optionnel
    picture?: string;      // optionnel
    email?: string;        // optionnel
}

const user1 = {
    1: { name: 'John', verified: true, picture: 'https://example.com/john.jpg' },
    2: { name: 'Batman', verified: false },
    3: { name: 'Minnie Mouse', verified: true, email: 'thebaddestintown@dis.ney' },
    4: { name: 'Kermit the Frog', verified: true },
}
console.log(user1);


/**
 * Crée un objet "User" non vérifié à partir d'un nom.
 * 
 * @param name Le nom de l'utilisateur
 * @returns Nouvel objet "User"
 */
export function generateNewUser(name: string): User {
    return {
        name: name,
        verified: false
        // picture, email et address restent optionnels et donc undefined
    };
}
const user2 = generateNewUser('John')
console.log(user2.name);
console.log(user2.verified);
console.log(user2.picture);
console.log(user2.email);
console.log(generateNewUser("John"));

/**
 * Crée un nouvel objet "User" et :
 * - met à jour son email avec celui passé en paramètre
 * - passe le nouvel utilisateur en "vérifié"
 * 
 * Pour copier et mettre à jour l'objet passé en paramètre il vous est conseillé
 * d'adopter une approche basée sur le "spread operator" de JS.
 * 
 * Plus d'informations sur cette opérateur : 
 * https://dev.to/abhay_yt_52a8e72b213be229/mastering-the-spread-operator-for-objects-and-arrays-in-javascript-4efp#adding-new-properties-to-an-object
 * 
 * @param user L'objet utilisateur initial
 * @param email Nouvel email en chaîne de caractères
 * @returns Nouvel objet "User" avec les informations à jour
 */
export function verifyUser(user: User, email: string): User {
    return {
        ...user,       // copie des propriétés existantes
        verified: true, // met à jour verified
        email: email    // overwrite email
    };
}
// Test manuel console
const user3: User = { name: 'Amy', verified: false };
const verifiedUser = verifyUser(user3, 'amy@hello.com');

console.log(user3);        // original 
console.log(verifiedUser); // ajout de l'email et verified

/**
 * Met à jour un objet "User" avec l'url vers une photo de profile.
 * 
 * @param user L'objet "User" à modifier
 * @param pictureUrl L'URL vers la photo de l'utilisateur
 * @returns Nouvel objet "User" avec les informations à jour
 */
export function updateUserPhoto(user: User, pictureUrl: string): User {
    return {
        ...user,          // copie toutes les propriétés de l’utilisateur
        picture: pictureUrl // écrase ou ajoute picture
    };
}
const user4: User = { name: "Amy", verified: false };
const updated = updateUserPhoto(user4, "https://example.com/amy.jpg");

console.log(user4);
console.log(updated);


/**
 * Renvoie l'url vers l'image de l'utilisateur.
 * 
 * Si cette URL n'est pas présente dans l'objet, renvoyer une URL vers une photo de chien -> https://place.dog/300/200 
 * 
 * @param user L'objet "User" concerné par l'opération
 * @returns La chaîne de caractères attendue
 */
export function getUserPhoto(user: User): string {
    return user.picture ?? "https://place.dog/300/200";
}

// Test manuel
const userWithPhoto: User = { name: "Amy", verified: false, picture: "https://example.com/amy.jpg" };
const userWithoutPhoto: User = { name: "Amy", verified: false };

console.log(getUserPhoto(userWithPhoto));
console.log(getUserPhoto(userWithoutPhoto));


/**
 * Retrouve un objet "User" situé dans un Json qui liste plusieurs utilisateurs.
 * 
 * Pour plus d'information sur la structure du Json à traiter veillez vous référer au fichier de test "getUser.test.ts"
 * 
 * Vous pouvez vous servir de la ressource suivante pour boucler sur les objets :
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 * 
 * @param id La valeur de la clef dans le Json à traiter
 * @param users Le Json comprenant plusieurs objets "User"
 * @returns L'objet "User" retrouvé ou "null" si aucun utilisateur associé à la clef
 */
export function getUser(id: number, users: Record<number, User>): User | null {
    return users[id] ?? null;
}

// Test manuel
const users: Record<number, User> = {
    1: { name: 'John', verified: true, picture: 'https://example.com/john.jpg' },
    2: { name: 'Batman', verified: false },
    3: { name: 'Minnie Mouse', verified: true, email: 'thebaddestintown@dis.ney' },
    4: { name: 'Kermit the Frog', verified: true },
};

console.log(getUser(3, users));
console.log(getUser(5, users)); 