import {LightningElement, api} from 'lwc';
import mattSpinner from '@salesforce/resourceUrl/mattSpinner';

export default class AlrightSpinner extends LightningElement {

    @api size = 'large';
    spinnerImage = mattSpinner;

    get spinnerClass() {
        return `spinner ${this.size}`;
    }

    handleKeyDown(event) {
        if (event.keyCode === 9) {
            event.preventDefault();
        }
    }

    connectedCallback() {
        this.template.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    disconnectedCallback() {
        this.template.removeEventListener('keydown', this.handleKeyDown.bind(this));
    }

}