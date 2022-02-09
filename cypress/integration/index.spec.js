describe("test calculator", () => {
  it("it can add two numbers", () => {
    cy.visit("/");
    cy.get(".digit").eq(0).click();
    cy.get(".operation").eq(3).click();
    cy.get(".digit").eq(3).click();
    cy.get(".operation").eq(4).click();
    cy.get("#total").contains("15")
  });

  it("it can subtract two numbers", () => {
    cy.visit("/");
    cy.get(".digit").eq(0).click();
    cy.get(".digit").eq(9).click();
    cy.get(".operation").eq(2).click();
    cy.get(".digit").eq(8).click();
    cy.get(".digit").eq(9).click();
    cy.get(".operation").eq(4).click();
    cy.get("#total").contains("80")
  });

  it("it can multiply two numbers", () => {
    cy.visit("/");
    cy.get(".digit").eq(1).click();
    cy.get(".operation").eq(1).click();
    cy.get(".digit").eq(2).click();
    cy.get(".operation").eq(4).click();
    cy.get("#total").contains("56")
  })

  it("it can divide two numbers, without remainder", () => {
    cy.visit("/");
    cy.get(".digit").eq(2).click();
    cy.get(".digit").eq(8).click();
    cy.get(".operation").eq(0).click();
    cy.get(".digit").eq(8).click();
    cy.get(".digit").eq(6).click();
    cy.get(".operation").eq(4).click();
    cy.get("#total").contains("5")
  })

  it("it can type only 3number at once, and AC can make 0", () => {
    cy.visit("/");
    cy.get(".digit").eq(1).click();
    cy.get(".digit").eq(2).click();
    cy.get(".digit").eq(5).click();
    cy.get("#total").contains("874");
    cy.get(".digit").eq(3).click();
    cy.get("#total").contains("874");
    cy.get(".digit").eq(7).click();
    cy.get(".digit").eq(6).click();
    cy.get(".digit").eq(4).click();
    cy.get(".digit").eq(8).click();
    cy.get(".digit").eq(9).click();
    cy.get("#total").contains("874");
    cy.get(".modifier").click();
    cy.get("#total").contains("0");
  })
})