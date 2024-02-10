import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
      pColor = "choclate-color";

      addHandler(event){
            let element = this.template.querySelector("p");
            element.classList.add('green-border');
      }

      removeHandler(event){
            let element = this.template.querySelector("p");
            element.classList.remove('green-border');
      }

      toggleHandler(event){
            let element = this.template.querySelector("p");
            element.classList.toggle('green-border');
      }
}