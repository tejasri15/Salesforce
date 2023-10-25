import { LightningElement, api, wire } from 'lwc';
import getAccounts from '@salesforce/apex/crudSampleExamples.getAccounts';

export default class AccountDetails extends LightningElement {
    @api records; // This is the Account record ID passed from a Lightning Record Page

   
    @wire(getAccounts,{ })
   wiredCases({data,error}){
   if(data){
        console.log(data);
       this.records = data;
       this.errors = undefined;
   }
   if(error){
        console.log(error);
       this.errors = error;
       this.records = undefined;
       }
   }



}