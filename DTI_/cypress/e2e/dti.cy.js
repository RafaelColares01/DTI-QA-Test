describe("Entradas", () => {
  beforeEach(function () {
    cy.fixture("example").then((data) => {
      this.data = data;
    });
  });
  it("Testes de email inválido", function () {
    cy.visit(
      "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account"
    );

    // Utilizando o dado do fixture para testar um e-mail inválido
    cy.get("#email_create").type(this.data.invalidEmail.email);
    cy.get("#SubmitCreate").click();

    // Valida que uma mensagem de erro apropriada aparece
    cy.contains("Invalid email address").should("be.visible");
  });

  it("Criação de login com e-mail válido", function () {
    cy.visit(
      "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account"
    );

    // Utilizando o dado do fixture para criar um login com um e-mail válido
    cy.get("#email_create").type(this.data.validEmailForCreation.email);
    cy.get("#SubmitCreate").click();

    // Aguarde o redirecionamento e valide se a próxima etapa aparece
    cy.contains("Create an account").should("be.visible");
  });

  it("Login com credenciais válidas", function () {
    cy.visit(
      "http://www.automationpractice.pl/index.php?controller=authentication&back=my-account"
    );

    // Utilizando o dado do fixture para login
    cy.get("#email").type(this.data.validLogin.email);
    cy.get("#passwd").type(this.data.validLogin.password);
    cy.get("#SubmitLogin").click();

    // Valida se o usuário foi redirecionado para a conta
    cy.url().should("include", "controller=my-account");
    cy.contains("My account").should("be.visible");
  });
});
