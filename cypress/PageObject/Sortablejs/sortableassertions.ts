class sortableassertion{
    listtitles=["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"];
    CheckListSize(){   
        cy.get('#example1 [class*=list-group-item]').should('have.length',6); 
        }
    checkListItems(){
        cy.get('#example1 [class*=list-group-item]')
        .each( (items,index)=>{
            cy.wrap(items).should('contain.text',this.listtitles[index]);
        })
    }

}
export default sortableassertion