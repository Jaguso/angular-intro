import {Component} from "angular2/core";
// import construct = Reflect.construct;
import { ContactService } from "./contact.service";
import {Router, RouteParams} from "angular2/router";

@Component({
    template: `
    <div>
        <div>
            <label for="first-name">First Name:</label>  
            <input type="text" id="first-name" #firstName>
        </div>
        <div>
            <label for="last-name">Last Name:</label> 
            <input type="text" id="last-name" #lastName value="{{passedLastName}}">
        </div>
        <div>
            <label for="phone">Phone Number:</label> 
            <input type="text" id="phone" #phone>
        </div>
        <div>
            <label for="email">E-mail:</label> 
            <input type="text" id="email" #email>
        </div>
        <button (click)="onAddContact(firstName.value, lastName.value, phone.value, email.value)">Create Contact</button>
    </div> 
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
    `]
})
export class NewContactComponent implements OnInit
{   
    public passedLastName = "";

    constructor(private _contactService: ContactService, private _router: Router, private _routeParams: RouteParams) {}
    
    onAddContact(firstName, lastName, phone, email) {
        let contact: Contact = {firstName: firstName, lastName: lastName, phone: phone, email: email};
        this._contactService.insertContact(contact);
        this._router.navigate(['Contacts']);
    }

    ngOnInit():any {
        this.passedLastName = this._routeParams.get('lastName');
    }
}