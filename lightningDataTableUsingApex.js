import { LightningElement, api, wire ,track} from 'lwc';
import getAccounts from '@salesforce/apex/crudSampleExamples.getAccounts';

export default class LightningDataTableUsingApex extends LightningElement {

    @track columns=[
        {label:'Name', fieldName:'Name'},
        {label:'phone Number', fieldName:'Phone'},
        {label:'ID', fieldName:'Id'},
        {label:'Industry', fieldName:'Industry'},
        {label:'Rating', fieldName:'Rating'}
    ]
   

    @track error;
    @track accList ;
    @wire(getAccounts)
    wiredAccounts({
        error,
        data
    }) {
        if (data) {
            this.accList = data;
        } else if (error) {
            this.error = error;
        }
    }
}