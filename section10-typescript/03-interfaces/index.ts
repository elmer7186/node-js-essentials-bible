interface IAnimal {
    name: string;
    color: string;
}

const dog: IAnimal = {
    name: "Snoopy",
    color: "White"
};

interface OnInit {
    ngOnInit(): void;
}

class MyComponent implements OnInit {
    ngOnInit(): void {
        console.log('init');
    }

}