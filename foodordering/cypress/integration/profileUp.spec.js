describe("Profile" , function()
{
    it("profile " , function(){
        cy.visit('http://localhost:3000/');
        cy.get('button').contains('SignIn').click();
        cy.get('input[placeholder="Username"]').type('bvek11');
        cy.get('input[placeholder="Password"]').type('1234');
        cy.get('button').contains('Submit').click();
        cy.get('#togs').click();
        // cy.visit('http://localhost:3000/home/');
 
        
    

   
        });
})