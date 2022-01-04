import { Component } from '@angular/core';
interface USERS {
  id: Number;
  first_name: String;
  last_name: String;
  emailId: String;
  gender:String;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  email:String="";
  aa:Number=0;

  users=[{
    id: '1',
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    emailId: 'jpenddreth0@census.gov',
    gender: 'Female'
  }, {
    id: '2',
    first_name: 'Giavani',
    last_name: 'Frediani',
    emailId: 'gfrediani1@senate.gov',
    gender: 'Male'
  }, {
    id: '3',
    first_name: 'Noell',
    last_name: 'Bea',
    emailId: 'nbea2@imageshack.us',
    gender: 'Female'
  }, {
    id: '4',
    first_name: 'Willard',
    last_name: 'Valek',
    emailId: 'wvalek3@vk.com',
    gender: 'Male'
  }
];

  setIndex(ii){
    this.aa=ii;
    console.log
  }
  public saveUsername:boolean;
public saveFemale:boolean;

public onSaveUsernameChanged(value:boolean){
    this.saveUsername = value;
}

public onSaveFemaleChanged(value:boolean){
    this.saveFemale = value;
}
  onSubmit(formValue) {
    
    console.log(this.aa);
    formValue.id=4111;
    console.log(formValue);
    this.users=this.users.concat(formValue);
  }
}
