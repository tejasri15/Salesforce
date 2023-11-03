import { LightningElement, api, track, wire } from 'lwc';
import addAccounts from '@salesforce/apex/crudSampleExamples.addAccounts'

export default class CreateAccountsFromApexUsingLWC extends LightningElement {

    @track accountNameValue='';
    @track descripitionValue='';
    @track accountId;

    nameChangedValue(event){
        this.name= event.target.value;
    }

    descripitionChange(event){
        this.description = event.target.value;
    }

    onSaveButton(){
        console.log('name value getting for save button' + this.name);
        addAccounts({accountName:this.name})
        .then(result=>{
            this.accountId= result;
            console.log("data from success stage" + this.accountId + "    " + result);
            resetFunctionality();
        })
        .catch(error=>{
            this.erorr = error;
        });
        handleSomeEvent();
    }

    handleSomeEvent() {
        console.log("entered here");
        console.log('Value of accountId: ' + this.accountId);
    }

    resetFunctionality(){
        this.accountNameValue=" ";
        this.descripitionValue=" ";
    }


}