import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { Color, Hero } from '../../../interface/hero.interface';
import { CanFlyPipe } from '../../../pipes/canFly.pipe';
import { ColorPipe } from '../../../pipes/color.pipe';
import { ToggleCasePipe } from '../../../pipes/toggle-case.pipe';
import { SortByPipe } from './../../../pipes/sortBy.pipe';

@Component({
  standalone: true,
  selector: 'order-page',
  templateUrl: 'order-page.component.html',
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    SplitButtonModule,
    TableModule,
    //Pipes
    ToggleCasePipe,
    CanFlyPipe,
    ColorPipe,
    SortByPipe,
  ],
})
export class OrderPageComponent {
  public isUpper: boolean = false;

  public sortBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.Red,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.Black,
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.Red,
    },
    {
      name: 'Wonder',
      canFly: true,
      color: Color.Blue,
    },
    {
      name: 'Aquaman',
      canFly: false,
      color: Color.Green,
    },
  ];

  toogleUpperCase() {
    this.isUpper = !this.isUpper;
  }

  changeOrder(sortBy: keyof Hero) {
    this.sortBy = sortBy;
  }

  getColorName(colorValue: Color): string {
    return Color[colorValue];
  }
}
