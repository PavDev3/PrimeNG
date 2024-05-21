import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@Component({
  standalone: true,
  selector: 'app-uncommon-page',
  templateUrl: 'uncommon-page.component.html',
  imports: [PanelModule, CommonModule, FieldsetModule, ButtonModule],
})
export class UncommonPageComponent implements OnInit {
  //i18n select
  public name: string = 'Pablo';
  public gender: 'male' | 'female' = 'male';
  public welcomeMap = {
    male: 'bienvenido',
    female: 'bienvenida',
  };

  changeClient() {
    this.name = 'Maria';
    this.gender = 'female';
  }
  constructor() {}

  ngOnInit() {}
}
