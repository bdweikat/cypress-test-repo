import '@testing-library/cypress/add-commands';
import { expect } from 'chai';
import { ApiPayload } from './payload';
import{userInfo} from './payload'


class R365Apis{

    createR365User (userInfo){
        cy.request({method :"POST",
        url :'https://qaintazugg.restaurant365.com/ServiceStack/Users',
        body:ApiPayload(userInfo),failOnStatusCode: false}
        ) };

    
} export default R365Apis;