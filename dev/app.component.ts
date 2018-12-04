import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: ` 
        <ul>
            <li *ngFor="#contact of contacts"
                (click)="onSelect()"
                [class.clicked]="showDetail === true" 
            >
            {{contact.firstName}} {{contact.lastName}}
            </li>
        </ul>
                
    `,
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
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

    public showDetail = false;

    onSelect() {
        this.showDetail = true;
    }
}