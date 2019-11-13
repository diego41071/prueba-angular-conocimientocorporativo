import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {FileUploadModule} from 'primeng/fileupload';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserService } from './user.service';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MenubarModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        FileUploadModule,
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
