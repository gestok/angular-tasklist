import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { invalidEmailDomain } from './invalidEmailDomain';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  MIN_MESSAGE_LENGTH = 20;
  textAreaContent: string = '';

  constructor() {}

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(this.MIN_MESSAGE_LENGTH)]),
  });

  submitForm(): void {
    console.log(this.contactForm.valid);
  }
}
