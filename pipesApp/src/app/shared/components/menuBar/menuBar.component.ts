import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'shared-menu-bar',
    templateUrl: './menuBar.component.html',
})
export class MenuBarComponent {
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Pipes de Angular',
                icon: 'pi pi-desktop',
                items: [
                  {
                    label: 'Textos y fechas',
                    icon: 'pi pi-align-left',
                  },
                  {
                    label: 'Numeros',
                    icon: 'pi pi-dollar',
                  },
                  {
                    label: 'No comunes',
                    icon: 'pi pi-globe',
                  }
                ]
            },
            {
                label: 'Pipes personalizados',
                icon: 'pi pi-cog',
                items: [
                  {
                    label: 'Otro elemento',
                    icon: 'pi pi-cog',
                  }
                ]
            }
        ]
    }
 }
