import {Component} from "angular2/core";
// import construct = Reflect.construct;
import { ContactService } from "./contact.service";
import {Router, RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";
import { Contact } from "./contact";
import {ControlGroup, FormBuilder} from "angular2/common";
import {Validators} from "angular2/common";

@Component({
    template: `
    <form (ngSubmit)="onSubmit()">
        <div>
            <label for="first-name">First Name:</label>  
            <input type="text" id="first-name" 
            >
        </div>
        <div>
            <label for="last-name">Last Name:</label> 
            <input type="text" id="last-name"
            
            >
        </div>
        <div>
            <label for="phone">Phone Number:</label> 
            <input type="text" id="phone" 
               
            >
        </div>
        <div>
            <label for="email">E-mail:</label> 
            <input type="text" id="email" 
                
            >
        </div>
        <button type="submit">Create Contact</button>
    </form> 
    `,
    providers: [ContactService],
    styles: [`
        label {
            display: inline-block;
            width: 140px;
        }
        
        input {
            width: 250px;
        }

        .ng-invalid {
            border: 1px solid red;
        }
    `]
})
export class NewContactComponent implements OnInit
{   
    myForm: ControlGroup;

    constructor(
        private _contactService: ContactService, 
        private _router: Router, 
        private _routeParams: RouteParams,
        private _formBuilder: FormBuilder
    ) {}

    onSubmit() {
        this._contactService.insertContact(this.myForm.value);
        this._router.navigate(['Contacts']);
    }

    ngOnInit():any {
        this.myForm = this._formBuilder.group({
            'firstName': ['', Validators.required],
            'lastName': [this._routeParams.get('lastName'), Validators.required],
            'phone': ['', Validators.required],
            'email': ['', Validators.required]
        });
    }
}