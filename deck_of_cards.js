// Card class
class Card {
	constructor(suit, rank){
		this.suit = suit
		this.rank = rank
	}
}

// Deck class
// It will have cards in it, shuffle, deal card, reset
function Deck(){
	let cards = []

	this.shuffle = () => {
		for(let i=0; i<cards.length; i++){
			let random_index = Math.floor(Math.random()*cards.length)
			let temp = cards[i]
			cards[i] = cards[random_index]
			cards[random_index] = temp
		}
	}

	this.deal = () => cards.pop()

	this.reset = () => {
		cards = []

		let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
		let suits = ["Hearts", "Spades", "Diamonds", "Clubs"]

		for(let suit of suits){
			for(let rank of ranks){
				cards.push(new Card(suit, rank))
			}
		}
	}

	this.reset()

	this.show_deck = () => cards.slice()
	
}

let my_deck = new Deck()
my_deck.shuffle()
console.log(my_deck.cards)

for(let i=0; i<4; i++){
	console.log(my_deck.deal())
}

// console.log(my_deck.cards[my_deck.cards.length - 1])