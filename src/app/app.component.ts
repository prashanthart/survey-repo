import { UserFoodService } from './user-food.service';
import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'survey';
  items=["Chicken","Mutton","Fish","Others"];

  constructor(private us:UserFoodService,private router:Router){}
  // submit:any = [];
  formsubmit(ref:any){
    let formObj:any;
    formObj = ref.value;
    // console.log(formObj);
    this.us.createdata(formObj).subscribe(
      res=>{
        if(res["message"]=="success"){
          alert("Thanks for submitting");
          // this.router.navigateByUrl("/");
        }
      },
      err=>{
        alert("error in submitting");
        console.log(err);
      }
    );
    ref.reset();
  }
  haserrors=false;
  inputField=false;
  validate(value:string){
    if(value==''){
      this.haserrors=true;
    }
    else if(value=='Others'){
      this.inputField=true;
      this.haserrors = false;

    }
    else{
      this.inputField = false;
      this.haserrors = false;
      
    }
  }

}
