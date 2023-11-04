import { LightningElement, api, track, wire } from 'lwc';
import addAccounts from '@salesforce/apex/crudSampleExamples.addAccounts';
import { NavigationMixin } from 'lightning/navigation';

export default class CreateAccountsFromApexUsingLWC extends NavigationMixin(LightningElement) {

    @track accountNameValue='';
    @track descripitionValue='';
     myVariable;
    variable1;

    nameChangedValue(event){
        this.name= event.target.value;
    }

    descripitionChange(event){
        this.description = event.target.value;
    }

    onSaveButton(){
        console.log('name value getting for save button' + this.name);
        this.gettingNewlyCreatedId(this.name);
        if(this.myVariable!=null || this.myVariable != undefined){
            console.log("Entered into if condition");
            this.navigateToRecordPage(this.myVariable);
            console.log("if condition closing here");
        }
    }

    gettingNewlyCreatedId(name){
        console.log(name);
        variable1 = addAccounts({accountName:name})
        .then(result=>{
            this.myVariable= result;
            console.log("data from success stage" + this.myVariable + "    " + result);
            this.navigateToRecordPage(this.myVariable);
        })
        .catch(error=>{
            this.erorr = error;
        });
       
    }
    handleSomeEvent() {
        console.log("entered here");
    }

    resetFunctionality(){
        console.log('Value of accountId: ' + this.myVariable);
        this.accountNameValue=" ";
        this.descripitionValue=" ";
    }


    navigateToRecordPage(myVariable) {
        console.log("Entered into method");
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: myVariable,
                objectApiName: 'Account', 
                actionName: 'view',
            },
        });
        console.log("Method closing here");
    }

}