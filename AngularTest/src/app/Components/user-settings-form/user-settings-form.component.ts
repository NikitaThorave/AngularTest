import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface UserSettings {
  name: string;
  emailOffers: boolean;
  interfaceStyle: string;
  subscriptionType: string;
  notes: string;
}

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings: UserSettings= {
    name: 'Vivek Kumar',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'I like Angular framework',
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) 
  {
    console.log('form: ', f);
  }

}
