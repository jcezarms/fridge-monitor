import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../../models/item.model';

@Injectable()
export class GroceryProvider {
  private groceries: Item[] = [
    {
      "name": "Leite",
      "unity": "caixa",
      "filterCount": null,
      "stored": null
    },
    {
      "name": "Carne",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Linguiça",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Hambúrguer",
      "unity": "pacote",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Ricota",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Manteiga",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Presunto",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Iogurte",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Suco",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Vinho",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Leite condensado",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Polpa de tomate",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Leite de coco",
      "unity": "garrafa",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Creme de leite",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Azeitona",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Chocolate",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Mostarda",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Ketchup",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Maionese",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Queijo",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Cerveja",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Morango",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Abacaxi",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Nata",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Margarina",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Abobrinha",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Abóbora",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Chuchu",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Couve",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Goiaba",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Laranja",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Ovos",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Pimentão",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Repolho",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Alface",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Brócolis",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Cenoura",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Uva",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      },
    {
      "name": "Milho",
      "unity": "unidade",
      "filterCount": null,
      "stored": null
      }
  ]

  constructor() { }

  getDefaultGroceryList(): Item[] {
    return this.groceries;
  }
}
