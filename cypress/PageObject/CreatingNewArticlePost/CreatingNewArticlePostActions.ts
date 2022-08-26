class createpostActions{
    clickNewPostBtn(){
        cy.get('[href="#editor"]').click();
    }
    FillArticleTitle(Title){
        cy.get('[placeholder="Article Title"]').clear().type(Title);
    }
    FillAbout(about){
        cy.get(':nth-child(2) > .form-control').clear().type(about);
    }
    FillArticle(Article){
        cy.get('[placeholder="Write your article (in markdown)"]').clear().type(Article);
    }
    FillTags(tags){
        cy.get('[placeholder="Enter tags"]').clear().type(tags);
    }
    clickpublishArticle(){
        cy.get('[type="button"]').click();
    }

}
export default createpostActions