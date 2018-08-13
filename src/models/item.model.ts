export class Item {
    name: string;
    unity: "pacote" | "garrafa" | "caixa" | "unidade";
    filterCount: number;
    stored: number;

    constructor(item: Item) {
        this.name = item.name;
        this.unity = item.unity;
        if (typeof item.filterCount == 'string') {
            this.filterCount = +item.filterCount;
        }
        if (typeof item.stored == 'string') {
            this.stored = +item.stored;
        }
        if (!item.stored) {
            this.stored = 0;
        }
    }

}