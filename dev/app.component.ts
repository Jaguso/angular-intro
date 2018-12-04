import {Component} from 'angular2/core';
import { ContactListComponent } from './contacts/contact-list.component';

@Component({
    selector: 'my-app',
    template: ` 
        <contact-list></contact-list>       
    `,
    directives: [ContactListComponent],
    styleUrls: ["../src/css/app.css"]
})
export class AppComponent {
    
}