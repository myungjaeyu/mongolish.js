var Mongolish;
(function (Mongolish) {
    Mongolish.alphabet = {
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
    };
    function conversion(text) {
        return text
            .replace(/ts/g, 'ц')
            .replace(/sh/g, 'ш')
            .replace(/ch/g, 'ч')
            .split('')
            .map(function (char) {
            var lowerChar = char.toLowerCase();
            return Mongolish.alphabet[lowerChar] || char;
        })
            .join('');
    }
    Mongolish.conversion = conversion;
})(Mongolish || (Mongolish = {}));
//# sourceMappingURL=mongolish.js.map