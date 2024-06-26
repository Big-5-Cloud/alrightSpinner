# Alright Alright Alright Spinner

Matthew McConaughey is a national treasure. Why not have a spinner in your Salesforce org that pays homage to him? There's no better way to celebrate the body of work of one of Salesforce's most important figures than by having his head spin on-screen while awaiting server-side processing.

## Delight Your Users

Surprise and delight your user base with the Alright Alright Alright Spinner. Don't be surprised if your levels of adoption and user engagement increase once Mr. McConaughey's noggin starts spinning about on your screen.

## Enhance Org Happiness

Scientists, clinical psychologists and Salesforce MVPs might have agreed had we actually asked them that your org's happiness levels will increase by at least 5% with every rotation of Matthew's head. Install it and see for yourself!

## But Really... What is this?

It's just an alternative to the lightning-spinner base component that spins Matthew McConaughey's head around in place of the standard spinning circle image. I wish it were more than that, but isn't that enough?

## How to Use

In your LWC implementation, reference this component instead of the lightning-spinner base component.

### Example
```html
<template>
    <div class="slds-align-middle slds-align_absolute-center">
        <template if:true={showModal}>
            <div>
                <c-alright-spinner size="large"></c-alright-spinner>
            </div>
        </template>

        <lightning-button label="Click Me" onclick={handleClick} class="slds-m-around_small"></lightning-button>
    </div>
</template>
```

```javascript
import {LightningElement, track} from 'lwc';

export default class TestComponent extends LightningElement {

    @track showModal = false;

    handleClick(event) {
        this.showModal = true;

        setTimeout(() => {
            this.showModal = false;
        }, 5000);
    }

}
```