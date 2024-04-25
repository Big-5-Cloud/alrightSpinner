import {LightningElement, api} from 'lwc';
import mattSpinner from '@salesforce/resourceUrl/mattSpinner';

export default class AlrightSpinner extends LightningElement {

    @api size = 'large';
    @api mode = 'spinner';
    spinnerImage = mattSpinner;

    get spinnerClass() {
        let mode = this.mode.toLowerCase() === 'throbber' ? 'throbber' : 'spinner';
        return `${mode} ${this.size}`;
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