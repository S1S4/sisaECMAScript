const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Orange, Apple, etc, etc';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
} 