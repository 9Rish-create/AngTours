import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SettingsComponent } from '../../../pages/settings/settings.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnChanges {
  @Input() items: any[] = [
    {
      route: 'settings', Component: SettingsComponent,
      title: 'Настройки'
    },
    {
      route: 'home',
      title: "Главная"
    },

  ]; //hw
  @Input() label: string;

  ngOnChanges(changes: SimpleChanges): void {
    
      console.log('changes', changes);
    
  }
}
