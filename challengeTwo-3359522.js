class SearchSuggestionSystem {
  constructor(products) {
    this.products = products.slice().sort();
  }

  getSuggestions(searchWord) {
    const prefixes = searchWord
      .split("")
      .map((_, i, arr) => arr.slice(0, i + 1).join(""));

    return prefixes.map((prefix) =>
      this.products
        .filter(
          (product) => product.startsWith(prefix) || product.includes(prefix)
        )
        .slice(0, 3)
    );
  }
}

const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
const searchWord = "mouse";

const system = new SearchSuggestionSystem(products);
console.log(system.getSuggestions(searchWord));
