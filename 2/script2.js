let player = {
    registration: {
        login: 'player',
        password: '12345'
    },
    characters:{}
};

let nameChar = 'super Hero',
typeChar = 'warrior';

//player.characters.name = typeChar;
player.characters[nameChar] = typeChar;


nameChar = 'Mego Hero',
typeChar = 'mage';
player.characters[nameChar] = typeChar;
console.log(player);