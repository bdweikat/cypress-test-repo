class FTSassertion{
    Hometabsappear(){
        cy.contains("a","Home").should("be.visible");
    }
    Aboutusappear(){
        cy.contains("a","About Us").should("be.visible");
    }
    Carreersappear(){
        cy.contains("a","Careers").should("be.visible");
    }
    Contactusappear(){
        cy.contains("a","Contact Us").should("be.visible");
    }
    WhoweAreAppearance(){
        cy.contains("div","Who We Are").should("be.visible");
    }
    GrowwithUsAppearance(){
        cy.contains("div","Grow with Us").should("be.visible");
    }
    GetInTouchWithUs(){
        cy.contains("div","Get In Touch With Us").should("be.visible");
    }
}
export default FTSassertion