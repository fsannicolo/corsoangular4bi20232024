import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessaggiComponent } from './messaggi/messaggi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InOutParentComponent } from './child-parent-example/in-out-parent/in-out-parent.component';
import { InChildComponent } from './child-parent-example/in-child/in-child.component';
import { OutChildComponent } from './child-parent-example/out-child/out-child.component';
import { StudenteParentComponent } from './studente-parent-child/studente-parent/studente-parent.component';
import { StudenteInChildComponent } from './studente-parent-child/studente-in-child/studente-in-child.component';
import { StudenteOutChildComponent } from './studente-parent-child/studente-out-child/studente-out-child.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { InComponent } from './test-service/in/in.component';
import { StudenteFormComponent } from './studenti-service/studente-form/studente-form.component';
import { StudenteTableComponent } from './studenti-service/studente-table/studente-table.component';
import { StudenteContainerComponent } from './studenti-service/studente-container/studente-container.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservablesComponent } from './observables/observables/observables.component';
import { ObservablesContainerComponent } from './observables/observables-container/observables-container.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'data-binding', component: DataBindingComponent},
  {path: 'messaggi', component: MessaggiComponent},
  {path: 'in-out-parent', component: InOutParentComponent},
  {path: 'studente-parent', component: StudenteParentComponent},
  {path: 'studente-service', component: StudenteContainerComponent},
  {path: 'observables', component: ObservablesContainerComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    MessaggiComponent,
    DataBindingComponent,
    InOutParentComponent,
    InChildComponent,
    OutChildComponent,
    StudenteParentComponent,
    StudenteInChildComponent,
    StudenteOutChildComponent,
    TestServiceComponent,
    InComponent,
    StudenteFormComponent,
    StudenteTableComponent,
    StudenteContainerComponent,
    HomeComponent,
    ObservablesComponent,
    ObservablesContainerComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
