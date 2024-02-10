import { LightningElement } from 'lwc';

export default class ForEachRendering extends LightningElement {
      pokemons = ['pikachu','eve','charizard','ratata'];

      contactList = [{
            id:1,
            fname :'mark',
            lname : 'bennet',
      },
      {
            id:2,
            fname :'mark2',
            lname : 'bennet2',
      },
      {
            id:3,
            fname :'mark3',
            lname : 'bennet3',
      },
      {
            id:4,
            fname :'mark4',
            lname : 'bennet4',
      },
                    ];
}