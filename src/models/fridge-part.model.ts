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
        let statusStr = "";
        switch (this.name) {
            case "geladeira": {
                statusStr += `Sua ${this.name} está `;
                return statusStr + (this.open ? "aberta" : "fechada");
            }
            case "freezer": {
                statusStr += `Seu ${this.name} está `;
                return statusStr + (this.open ? "aberto" : "fechado");
            }
        }
    }
}