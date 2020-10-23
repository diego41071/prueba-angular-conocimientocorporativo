import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Perfil',
                items: [{
                    label: 'Usuario1',
                    // icon: 'pi pi-fw pi-plus',
                    //   items: [
                    //       {label: 'Project'},
                    //       {label: 'Other'},
                    //   ]
                },
                { label: 'Ajustes' },
                { label: 'Información' }
                ]
            },
            {
                label: 'Iniciar sesión',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Usuario',
                        //  icon: 'pi pi-fw pi-trash'
                    },
                    {
                        label: 'Contraseña',
                        // icon: 'pi pi-fw pi-refresh' 
                    }
                ]
            }
        ];
    }

}
