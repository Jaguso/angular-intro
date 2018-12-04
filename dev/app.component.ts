import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: ` 
        <h3 
        (click)="onSelect()"
        >{{contact.firstName}} {{contact.lastName}}</h3>
        <div *ngIf="showDetail === true">
            Phone Number: {{contact.phone}}<br>
            Email: {{contact.email}}
        </div>        
    `,
})
export class AppComponent {
    public contact = {
        firstName: "Jaime",
        lastName: "Garcia",
        phone: "345920349",
        email: "jj@gmail.com"
    };

    public showDetail = false;

    onSelect() {
        this.showDetail = true;
    }
}