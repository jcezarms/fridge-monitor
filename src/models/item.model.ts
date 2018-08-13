export class Item {
    name: string;
    unity: "pacote" | "garrafa" | "caixa" | "unidade";
    filterCount: number;
    stored: number;

    constructor(name: string, unity: "pacote" | "garrafa" | "caixa" | "unidade", filterCount: number, stored: number) {
        this.name = name;
        this.unity = unity;
        this.filterCount = filterCount;
        this.stored = stored;
    }

}