import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';

@Component({
  standalone: true,
  selector: 'app-numbers-page',
  templateUrl: 'numbers-page.component.html',
  imports: [PanelModule, CommonModule, CardModule],
})
export class NumbersPageComponent implements OnInit {
  public totalSells: number = 123456.789;
  public percent: number = 0.1234;
  constructor() {}

  ngOnInit() {}
}
