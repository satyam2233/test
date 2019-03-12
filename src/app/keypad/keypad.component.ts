import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {


  value: string[] = [];
  namebind: string = "";
  spacebar:string = "";

  constructor(private router:Router) { }

  ngOnInit() {
   
  }
  clickEvent(event){
    console.log('res',event.target.innerText);
    const text  = event.target.innerText;
    this.value.push(text);
    // console.log(this.value);
    this.namebind = this.value.join("");
      // console.log(this.namebind)
      this.spacebar = this.namebind.split(" ").pop();
      // console.log("soave",this.spacebar)
      
  }

  navigate(){
    this.router.navigate(["/gallery"])
      }
  
}
