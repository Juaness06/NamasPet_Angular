import { NgModel } from "@angular/forms";
import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [AppModule, 
        AppServerModule
    ],
    bootstrap: [AppComponent],
})
export class AppServerModule {}