import {Component} from "angular2/core";
import { ContactComponent } from "./contact.component";

@Component({
    selector: "contact-list",
    template: `
    <ul>
        <li *ngFor="#contact of contacts"
            (click)="onSelect(contact)"
            [class.clicked]="showDetail === true" 
        >
        {{contact.firstName}} {{contact.lastName}}
        </li>
    </ul>
    <contact [contact]="selectedContact"></contact>
    `,
    directives: [ContactComponent]
})
export class ContactListComponent {
    public contacts = [
        {
            firstName: "Raul",
            lastName: "Maquez",
            phone: "345920349",
            email: "marq@gmail.com"
        },
        {
            firstName: "Joseph",
            lastName: "Garcia",
            phone: "345920349",
            email: "jj@gmail.com"
        },
        {
            firstName: "Mark",
            lastName: "Anthony",
            phone: "345920349",
            email: "anthonie@gmail.com"
        },
        {
            firstName: "Javier",
            lastName: "Hernandez",
            phone: "3349920349",
            email: "chicha@gmail.com"
        }
    ];

    public selectedContact = {};

    onSelect(contact) {
        this.selectedContact = contact;
    }
}