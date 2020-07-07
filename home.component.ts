import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
     home = new FormGroup ({

      firstname: new FormControl(''),
      lastname: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl('')
    
    })

constructor () {

}

ngOnInit () {

}
doHome(FormData: FormGroup){
  console.log(FormData);
}
  
}
  


