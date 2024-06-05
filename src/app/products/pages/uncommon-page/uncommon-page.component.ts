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
  changeGender() {
    this.name = 'Pablo';
    this.gender = 'male';
  }

  //i18n plural
  public clients: string[] = [
    'Pablo',
    'Juan',
    'Pedro',
    'Maria',
    'Ana',
    'Lucia',
    'Laura',
    'Carlos',
  ];
  public clientsMap = {
    '=0': 'no tenemos clientes',
    '=1': 'tenemos 1 cliente',
    other: 'tenemos # clientes',
  };

  deleteClient() {
    this.clients.shift();
  }

  addClient() {
    this.clients.push('Nuevo cliente');
  }

  constructor() {}

  ngOnInit() {}
}
