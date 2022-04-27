"use strict";

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let post = new AttachedPost("Иван", "Всем привет!", "27.04.22");
console.log(post);
post.edit("Никому не здрасти");
post.makeTextHighlighted();
console.log(post);