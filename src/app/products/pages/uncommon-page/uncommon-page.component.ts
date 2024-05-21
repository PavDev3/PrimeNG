import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@Component({
  standalone: true,
  selector: 'app-uncommon-page',
  templateUrl: 'uncommon-page.component.html',
  imports: [PanelModule, CommonModule, FieldsetModule],
})
export class UncommonPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
