import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgePipe } from './pipes/age.pipe';
import { MarksPipe } from './pipes/marks.pipe';
import { TodosComponent } from './Components/todos/todos.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateTodoComponent } from './Components/create-todo/create-todo.component';
import { TodosService } from './Services/todos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MyDialogComponent } from './Components/my-dialog/my-dialog.component';
import { UserMgmtComponent } from './Components/user-mgmt/user-mgmt.component';
import { MatTableModule } from '@angular/material/table';
import { AuthTokenInterceptorService } from './Services/auth-token-interceptor.service';
import { AuthService } from './Services/auth.service';
import { UserSettingsFormComponent } from './Components/user-settings-form/user-settings-form.component';
import { FormsModule } from '@angular/forms';
import { TestingSchematicsComponent } from './Components/testing-schematics/testing-schematics.component';

@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    MarksPipe,
    TodosComponent,
    DashboardComponent,
    CreateTodoComponent,
    MyDialogComponent,
    UserMgmtComponent,
    UserSettingsFormComponent,
    TestingSchematicsComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TodosService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
