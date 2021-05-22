describe("Login",function(){
    it("Should be logged into Foodmandu", function(){
        cy.request({
            url: "https://foodmandu.com/Account/Login",
            header : "Content-Type: application/x-www-form-urlencoded",
            method: 'POST',
            body: { __RequestVerificationToken: "3foZWlKNNtSfTjJO53kXmY07SJiIydGNFUstOyzLNYn2NN1mfZ70XUpSyRJqje3bT725IRFgaZeQEuLV303K8T7LwP01", returnUrl: "/", email:"qaninja06@gmail.com", password: "Prese", RememberMe: "false"}
        })   
    })
})


