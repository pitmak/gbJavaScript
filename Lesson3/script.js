console.log("ЗАДАНИЕ 1");
console.log("0 - это ноль");
for (i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i + " - четное число");
    } else {
        console.log(i + " - нечетное число");
    }
}

console.log("ЗАДАНИЕ 2");
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

console.log("ЗАДАНИЕ 3");
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(e => e.price *= 0.85);
console.log(products);

console.log("ЗАДАНИЕ 4");
const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
console.log(products2.filter(e => e.photos && e.photos.length));
console.log(products2.sort((a, b) => a.price - b.price));

console.log("ЗАДАНИЕ 5");
for (i = 0; i <= 9; console.log(i++));

console.log("ЗАДАНИЕ 6");
for (i = 1; i <= 20; i++) {
    console.log("x".repeat(i));
}