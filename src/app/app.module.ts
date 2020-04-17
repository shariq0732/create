import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule , MatSidenavModule , MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule, MatCardModule, MatListModule  } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu'
import { SidenavComponent } from './sidenav/sidenav.component';
import { DatapopupComponent } from './datapopup/datapopup.component';
import { HttpClientModule } from '@angular/common/http';
import { RbUiComponentsModule } from '@inst-iot/bosch-angular-ui-components';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ReadComponent } from './read/read.component';
import { NewentryComponent } from './newentry/newentry.component';
import { InformationscreenComponent, SafeHtmlPipe } from './informationscreen/informationscreen.component';
import { MasterComponentComponent } from './master-component/master-component.component';
import { MasterbuttonComponent } from './masterbutton/masterbutton.component';
//import { Childtable1Component } from './childtable1/childtable1.component';
import { Child1buttonComponent } from './child1button/child1button.component';
import { QuillModule } from 'ngx-quill';
import { RichtexteditorComponent } from './richtexteditor/richtexteditor.component'
import {MatSelectModule} from '@angular/material/select';
import { LayoutModule } from '@angular/cdk/layout';
import { NewsidenavComponent } from './newsidenav/newsidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DatapopupComponent,
    HeaderComponent,
    FooterComponent,
    AgGridComponent,
    UpdateComponent,
    DeleteComponent,
    ReadComponent,
    NewentryComponent,
    InformationscreenComponent,
    MasterComponentComponent,
    MasterbuttonComponent,
    //Childtable1Component,
    Child1buttonComponent,
    RichtexteditorComponent,
    SafeHtmlPipe,
    NewsidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    HttpClientModule,
    RbUiComponentsModule,
    AgGridModule.withComponents([ReadComponent , MasterbuttonComponent , Child1buttonComponent]),
    RouterModule,
    QuillModule.forRoot(),
    MatSelectModule,
    LayoutModule,
    MatListModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule
    
  ],
  providers: [],
  entryComponents:[DatapopupComponent ,RichtexteditorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
