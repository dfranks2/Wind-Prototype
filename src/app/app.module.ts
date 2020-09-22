import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";

import { AppComponent } from "./app.component";
import { GlobalHeader } from "./global-header/global-header.component";
import { MiniDashboard } from "./mini-dashboard/mini-dashboard.component";

@NgModule({
  declarations: [AppComponent, GlobalHeader, MiniDashboard],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent, GlobalHeader, MiniDashboard]
})
export class AppModule {}
