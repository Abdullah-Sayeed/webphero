const lyrics = 'I take everyting from the inside and throw it all away';


const doesExist = lyrics.includes('from');
console.log(doesExist);
const indexFind = lyrics.indexOf('the');
console.log(indexFind);
const startCheck = lyrics.startsWith('I');
console.log(startCheck);
const endCheck = lyrics.endsWith('.');
console.log(endCheck);

const parts = lyrics.split(' ');
console.log(parts);
