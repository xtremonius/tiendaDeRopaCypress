describe("Search elements", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("search for elements with multiple results", () => {
    cy.search("dress");
    cy.fixture("searchResult").then((searchResult) => {
      cy.get(searchResult.title).should("contain", "dress");
    });
  });
  it("search for elements with no results", () => {
    cy.search("qwerty");
    cy.fixture("searchResult").then((searchResult) => {
      cy.get(searchResult.alert).should(
        "contain",
        "No results were found for your search"
      );
    });
  });
  it("search for elements with special code", () => {
    cy.readFile("cypress/support/text/search.txt").then((text) => {
      cy.search(text);
    });
    cy.fixture("searchResult").then((searchResult) => {
      cy.get(searchResult.alert).should(
        "contain",
        "No results were found for your search"
      );
    });
  });
});
