namespace Mongolish {

    export const alphabet : Object = {
        'a': 'а',
        'e': 'э',
        'i': 'й',
        'o': 'о',
        'u': 'у',
        'y': 'ү',
        'f': 'ф', 
        'j': 'ж', 
        'n': 'н', 
        'g': 'г', 
        'z': 'з', 
        'k': 'к', 
        'b': 'б', 
        'x': 'х', 
        'r': 'р', 
        'l': 'л', 
        'd': 'д', 
        'p': 'п',
        's': 'с', 
        'm': 'м', 
        't': 'т', 
        'v': 'в'
    }

    export function conversion(text : string) : string {

        return text
            .replace(/ts/g, 'ц')
            .replace(/sh/g, 'ш')
            .replace(/ch/g, 'ч')
            .split('')
            .map((char : string) => {

                const lowerChar : string = char.toLowerCase()

                return alphabet[lowerChar] || char

            })
            .join('')

    }

}