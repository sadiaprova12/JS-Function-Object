var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

// console.log(shoppingCart);

// when you know the property name, use dot notation
var penCount = shoppingCart.pen;
// alternative system
// when you know the property name, use dot notation
// dynamic way te joto properties ase sob array akare peye jacchi
var penCount2 = shoppingCart['pen'];

var properties = Object.keys(shoppingCart);
console.log(properties);