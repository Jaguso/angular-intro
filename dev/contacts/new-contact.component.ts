import {Component} from "angular2/core";
// import construct = Reflect.construct;
import { ContactService } from "./contact.service";
import {Router, RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";
import { Contact } from "./contact";

@Component({
    template: `
    <form #myForm="ngForm" (ngSubmit)="onSubmit()">
        <div>
            <label for="first-name">First Name:</label>  
            <input type="text" id="first-name" 
                ngControl="firstName"
                [(ngModel)]="newContact.firstName"
                required 
            >
        </div>
        <div>
            <label for="last-name">Last Name:</label> 
            <input type="text" id="last-name"
                ngControl="lastName"
                [(ngModel)]="newContact.lastName"
                required 
            >
        </div>
        <div>
            <label for="phone">Phone Number:</label> 
            <input type="text" id="phone" 
                ngControl="phone"
                [(ngModel)]="newContact.phone"
                required 
            >
        </div>
        <div>
            <label for="email">E-mail:</label> 
            <input type="text" id="email" 
                ngControl="email"
                [(ngModel)]="newContact.email"
                required 
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
    newContact: Contact; 

    constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams) {}

    onSubmit() {
        this._contactService.insertContact(this.newContact);
        this._router.navigate(['Contacts']);
    }

    ngOnInit():any {
        this.newContact = { 
            firstName: '',
            lastName: this._routeParams.get('lastName'),
            phone: '' ,
            email: ''
        };
    }
}