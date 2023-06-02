
describe("validate bank app",()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.get("button[ng-click='manager()']").click()

    })
    it("create a customer",()=>{
        cy.fixture("user").then((sel)=>{
        cy.get('[ng-class="btnClass1"]').click()
        cy.get(sel.addCustomerFname).type(sel.fName)
        cy.get(sel.addCustomerLname).type(sel.lName)
        cy.get(sel.addCustomerPcode).type(sel.pCode)
        cy.get(sel.addCustomerBtn).click()
        cy.on("window:alert",(message)=>{
            expect(["Customer added successfully with customer id :6","Account created successfully with account Number :1016"]).to.contains(message)
        })
        cy.get(sel.openAccount).click()
        cy.get(sel.selFullName).select(sel.fName + ' ' + sel.lName)
        cy.get(sel.selCurrency).select("Pound")
        cy.get(sel.openCustomerBtn).click()
        cy.get('[ng-class="btnClass3"]').click()
        cy.get("input[placeholder='Search Customer']").type("Taiwo{enter}")
        cy.get(':nth-child(5) > button').click()
        // cy.on("window:alert",(text)=>{
        //     expect(text).to.eql("Account created successfully with account Number :1016")
        // })
    })
})
   /* it("create an acct",()=>{
        cy.fixture("user").then((sel)=>{
        cy.get('[ng-class="btnClass2"]').click()
        cy.get("#userSelect").select(sel.fName + ' ' + sel.lName)
    })
    
})*/
})
/**   "addCustomerFname":"input[placeholder='First Name']",
    "addCustomerLname":"input[placeholder='Last Name']",
    "addCustomerPcode":"input[placeholder='Post Code']",
    "addCustomerBtn":"button[type='submit']" */