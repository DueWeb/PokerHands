const Hand = require('../Hand');
const CompareHands = require('../CompareHands');
const suits = '♥♦♣♠';

test('check that isStraight returns truthy if straight', () => {
  let hand = new Hand('♥9', '♦8', '♣7', '♥5', '♦6');
  expect(CompareHands.isStraight(hand)).toBeTruthy();
});

test('Check that isStraight returns falsy is not straight', () => {
	let hand = new Hand('♥6','♦3','♣7','♠4','♣2');
	expect(CompareHands.isStraight(hand)).toBeFalsy();
}) ;