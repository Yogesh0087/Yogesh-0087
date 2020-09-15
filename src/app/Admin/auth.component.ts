import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from "@angular/core";





@Component(
    {
        templateUrl: "auth.component.html"
    })

    export class AuthComponent
    {
        public username : string;
        public password : string;
        public errorMessage : string;

        constructor(private router : Router)
        {

        }

        authenticate(form: NgForm)
        {
            if(form.valid)
            {
                    // will perform validation here
                    this.router.navigateByUrl("/Admin/main ")
            }
            else
            {
                this.errorMessage = "Form Data Invalid";
            }
        }
    }