import {Component} from "angular2/core";
import { ContactService } from "./contact.service";

@Component({
    template: `
    <div>
        <div>
            <label for="first-name">First Name:</label>  
            <input type="text" id="first-name" #firstName>
        </div>
        <div>
            <label for="last-name">Last Name:</label> 
            <input type="text" id="last-name" #lastName>
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
export class NewContactComponent 
{   
    constructor(private _contactService: ContactService) {}
    
    onAddContact(firstName, lastName, phone, email) {
        let contact: Contact = {firstName: firstName, lastName: lastName, phone: phone, email: email};
        this._contactService.insertContact(contact);
    }
}