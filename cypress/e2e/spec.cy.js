/*describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214340@mhs.dinus.ac.id")
      .should("have.value", "111202214340@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav");

    cy.get("header");
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214340@mhs.dinus.ac.id")
      .should("have.value", "111202214340@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Wrong Password");
  }); 
});*/

describe('Dashboard End-to-End Test', () => {
  const email = '111202214340@mhs.dinus.ac.id';
  const password = '123456';

  // Step 1: Login
  it('Login, refresh, ubah tema, dan logout', () => {
    // Kunjungi halaman login
    cy.visit('http://localhost:5173/');
    cy.url().should("include", "/login");

    // Masukkan kredensial
    cy.get('input[name="email"]').type(email); // Input email
    cy.get('input[name="password"]').type(password); // Input password
    cy.get('button[type="submit"]').click(); // Klik tombol login

    // Verifikasi login berhasil
    cy.url().should('include', '/'); // Pastikan URL dashboard

    cy.wait(5000);

    // Step 4: Logout
    cy.get('[data-testid="logout-button"]').click();
    cy.url().should('include', '/login'); 

    cy.wait(5000);

    cy.contains('Switch to Dark Mode').click(); // Klik tombol Dark Mode

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

    // Verifikasi login berhasil
    cy.url().should('include', '/');

    cy.wait(5000);

    // Logout
    cy.get('[data-testid="logout-button"]').click();
    cy.url().should('include', '/login'); // Pastikan kembali ke halaman login

    cy.wait(5000);

    cy.contains('Switch to Light Mode').click();
  });
});
