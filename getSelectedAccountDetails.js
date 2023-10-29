import { LightningElement, api, track, wire } from 'lwc';
import SearchingSelectedValue from '@salesforce/apex/crudSampleExamples.SearchingSelectedValue' 

export default class GetSelectedAccountDetails extends LightningElement {

    columns=[
        {field:'id',label:'ID'},
        {field:'name',label:'Name'},
        {field:'industry',label:'Industry'}
    ]

    @track searchValue;
    @track accounts = [];
    @track error;
    
    enteredSearchKey(event){
        console.log('search key in input field method' + event.target.value);
        this.searchValue= event.target.value;
    }
 //here calling the apex class & passing the search value:
 @wire(SearchingSelectedValue,{searchWord:'$searchValue'}) 
 wiredAccountsList({data,error}){
    if(data){
        console.log(data+'verifying the data');
        this.accounts=data;
        this.error= undefined;
    }else if(error){
        this.accounts= undefined;
        this.error = error;
    }
 }

    searchButtonOnClick(){
        console.log(this.searchValue + 'entered data displaing here');  
        console.log(this.accounts +' Accounts data displaying here');
    }
}