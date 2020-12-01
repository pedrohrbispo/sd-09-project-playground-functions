const assert = require("assert")
const challenges = require('../src/challenges')

assert(challenges.compareTrue(true, true))
assert(!challenges.compareTrue(true, false))
console.log('1° OK');

assert.strictEqual(challenges.calcArea(10, 10), 50)
assert.strictEqual(challenges.calcArea(15, 30), 225)
console.log('2° OK');

assert.deepStrictEqual(challenges.splitSentence('go Trybe'), ['go', 'Trybe'])
assert.deepStrictEqual(challenges.splitSentence('testando split function'), ['testando', 'split', 'function'])
console.log('3° OK');

assert.deepStrictEqual(challenges.concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']), 'Paolillo, Lucas')
assert.deepStrictEqual(challenges.concatName(['teste', 'ze', 'api', 'passou']), 'passou, teste')
console.log('4° OK');

assert.deepStrictEqual(challenges.footballPoints(4, 7), 19)
assert.deepStrictEqual(challenges.footballPoints(9, 9), 36)
console.log('5° OK');

assert.deepStrictEqual(challenges.highestCount([9, 1, 2, 3, 9, 5, 7]), 2)
assert.deepStrictEqual(challenges.highestCount([9, 1, 2, 3, 9, 5, 7, 7, 3, 8, 7, 4, 12, 12, 8, 12]), 3)
console.log('6° OK');

assert.deepStrictEqual(challenges.catAndMouse(5, 9, 1), 'os gatos trombam e o rato foge')
assert.deepStrictEqual(challenges.catAndMouse(-5, -9, -1), 'os gatos trombam e o rato foge')
assert.deepStrictEqual(challenges.catAndMouse(-5, -4, 9), 'cat1')
assert.deepStrictEqual(challenges.catAndMouse(-5, 9, -1), 'cat2')
console.log('7° OK');
