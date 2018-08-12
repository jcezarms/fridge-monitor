export class FridgePart {
    open: boolean;
    name: "geladeira" | "freezer";
    temperature: number;

    constructor(open: boolean, name: "geladeira" | "freezer", temperature: number) {
        this.open = open;
        this.name = name;
        this.temperature = temperature;
    }

    get status(): string {
        switch (this.name) {
            case "geladeira": {
                return `Sua ${this.name} está ${this.open ? 'aberta!' : 'fechada.'}`;
            }
            case "freezer": {
                return `Seu ${this.name} está ${this.open ? 'aberto!' : 'fechado.'}`;
            }
        }
    }
}