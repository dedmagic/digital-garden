class Boy {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Girl {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let boy: Boy = new Girl('Мерелин Монро');

console.log(boy.name);



// const BoyType = Symbol();

// class Boy {
//     name: string;
//     [BoyType]: void;

//     constructor(name: string) {
//         this.name = name;
//     }
// }

// const GirlType = Symbol();

// class Girl {
//     name: string;
//     [GirlType]: void;

//     constructor(name: string) {
//         this.name = name;
//     }
// }

// let boy: Boy = new Girl('Мерелин Монро');

// console.log(boy.name);
