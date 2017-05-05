import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule
    ],
    exports: [
        MaterialModule,
        BrowserAnimationsModule
    ],
    declarations: [],
    providers: [],
    entryComponents: [],
})
export class AppMaterialModule { }