{
    console.log("ЗАДАНИЕ 1");

    let a = 1, b = 1, c, d;

    c = ++a; // a=1 сначала инкрементируется, потом результат присваивается в c (a=2)
    console.log(c); // c=2

    d = b++; // значение b присваивается в d, затем b инкрементируется (b=2)
    console.log(d); // d=1

    c = 2 + ++a; // значение a инкрементируется, затем складывается с 2 и результат присваивается в c (a=3)
    console.log(c); // c=5

    d = 2 + b++; // b инкрементируется, ее прежнее значение складывается с 2 и присваивается в d (b=3)
    console.log(d); // d=4

    console.log(a); // a=3

    console.log(b); // b=3
}