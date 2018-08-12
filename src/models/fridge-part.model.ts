import { FridgePartFirebase } from "./fridge-part-firebase";

export class FridgePart {
    open: boolean;
    name: "geladeira" | "freezer";
    temperature: number;

    constructor(fbFridge: FridgePartFirebase, name: "geladeira" | "freezer") {
        this.open = fbFridge.open;
        this.temperature = fbFridge.temperature;
        this.name = name;
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