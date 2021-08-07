describe("Form Test", () => {
  it("should visit home page", () => {
    cy.visit("/home-page");
  });

  it("should visit home page and click start", () => {
    cy.visit("/home-page");
    cy.get("#startButton").click();
    cy.get("h1").should("contain", "Learn Cypress");
  });

  it("should go to the forms page and enter login information", () => {
    // cy.visit("/home-page");
    // cy.get("#startButton").click();
    // cy.get("h1").should("contain", "Learn Cypress");

    before(() => {
      cy.start();
    });

    cy.get("#formsButton").click();
    cy.get("#email").type("HanSolo@gmail.com");
    cy.get("#password").type("password");
    cy.get("#submitButton").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "successfully entered input with email HanSolo@gmail.com and password password"
      );
    });
  });
});
