import { SortByName, ContinentsFilter } from "../store/actions/index.js";

 let sortBy = 'asc'
 let continents = 'South America'

describe("Actions", () => {
  it('Debería retornar una action con el type SORT_BY que recibe su pyload por argumento:', () => {
    expect(SortByName(sortBy)).toEqual({
      type: "SORT_BY",
      payload: sortBy,
    });
  });
  it('Debería retornar una action con el type CONTINENTS para filtrar por continentes, que recibe su payload por argumento', () => {
    expect(ContinentsFilter(continents)).toEqual({
      type: "CONTINENTS",
      payload: continents,
    });
  });
});