import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'; // Importando FooterComponent
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReadAllComponent } from './components/read-all/read-all.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { InativosComponent } from './components/inativos/inativos.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    ReadAllComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InativosComponent,
    CadastroComponent
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
