import { LightningElement, wire, track } from 'lwc';
import pickListValueDynamically from '@salesforce/apex/lwcPicklistController.pickListValueDynamically';
export default class Picklist extends LightningElement {
    @track picklistVal;

    @wire(pickListValueDynamically, {customObjInfo: {'sobjectType' : 'Case'},
    selectPicklistApi: 'Status'}) selectTargetValues;
        
      selectOptionChanveValue(event){       
           this.picklistVal = event.target.value;
       }  
   
}