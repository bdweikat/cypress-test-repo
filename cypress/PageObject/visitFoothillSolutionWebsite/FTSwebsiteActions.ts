class FTSAction{
    visitURLWebsite(){
        cy.visit("https://www.foothillsolutions.com/");
    }
    clickOnHomeTab(){
        cy.contains("a","Home").click();
    }
    clickOnAboutTab(){
        cy.contains("a","About Us").click();
    }
    clickOnCareersTab(){
        cy.contains("a","Careers").click();
    }
    clickOnContactUSTab(){
        cy.contains("a","Contact Us").click();
    }
}
export default FTSAction