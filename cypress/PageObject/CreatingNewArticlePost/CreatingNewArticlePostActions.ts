class createpostActions{
    clickNewPostBtn(){
        cy.get('[href="#editor"]').click();
    }
    FillArticleTitle(Title){
        cy.get("input").eq(0).clear().type(Title);
    }
    FillAbout(about){
        cy.get("input").eq(1).clear().type(about);
    }
    FillArticle(Article){
        cy.get("textarea").clear().type(Article);
    }
    FillTags(tags){
        cy.get("input").eq(2).clear().type(tags);
    }
    clickpublishArticle(){
        cy.get('[type="button"]').click();
    }

}
export default createpostActions