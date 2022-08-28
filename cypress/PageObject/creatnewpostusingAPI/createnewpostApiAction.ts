class createpostByAPI {
    getrequest(){
        cy.request("/api/articles/feed?limit=10&offset=0").then((response)=>{
            expect(response.body).to.have.property('code',200);
        })
    }
}
export default createpostByAPI