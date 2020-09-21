import '@testing-library/cypress/add-commands';
import { expect } from 'chai';
import { stringify } from 'querystring';
import { parseJsonText } from 'typescript';
import { ApiPayload, searchApiPayload } from './payload';



class R365Apis{
  createR365User = (userInfo): Cypress.Chainable<string> => {
     this.deleteUser(userInfo.userLoginName);
     return cy.request({
          method: "POST",
          url: 'https://qaintazugg.restaurant365.com/ServiceStack/Users',
          body: ApiPayload(userInfo), failOnStatusCode: false
      }
      ).then((res) => res.body.model.Id)};


    deleteUser (username:string){
       this.getUserIdByName(username).then((res)=>{
        cy.request({method :"DELETE",
        url :`https://qaintazugg.restaurant365.com/ServiceStack/Users/${res}`,
        failOnStatusCode: false}
            )

       });
         };


     getUserIdByName = (usernameValue:string) => {
         return         cy.request({method :"POST",
         url :'https://qaintazugg.restaurant365.com/ServiceStack/GridSourceRequest',
         body:searchApiPayload(usernameValue),failOnStatusCode: false}).then(res =>res.body.results[0]!= undefined?res.body.results[0].UserId:null);
    
        
    };

    
} export default R365Apis;