import { LightningElement, track } from 'lwc';

export default class TrackDec extends LightningElement {
    greeting = "Hello";
   @track greeting2 = "Welcome";
   @track person = {
    fname  : "Tushar",
    lname : "Negi",
    Age : 60,
}
    @track mySub = ["JS","LWC","CSS"];

   handleClick(event){
     this.person.fname = "King";
     this.person.lname = "Arthur";
     this.person.Age = 100;
   }

   taskClick(event){
    this.mySub.push("Html");
   }

   resfreshClick(){
    this.person = {fname : 'X',lname : 'Y' }
    this.mySub = [...this.mySub,'Typescript']
   }
  
}