import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MediaMatcher} from '@angular/cdk/layout';
import { FlexLayoutModule} from '@angular/flex-layout';

/* NgRx */
import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { deviceReducer } from '@app/device/state/device.reducer';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule, MaterialModule, SyncfusionModule} from '@app/shared';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DeviceModule} from '@app/device/device.module';
import { PresentationModule} from '@app/presentation/presentation.module';
import { SchedulingModule} from '@app/scheduling/scheduling.module';
import { DashboardModule} from '@app/dashboard/dashboard.module';
import { MediaLibraryModule} from '@app/media-library/media-library.module';
import { ModulePresenterModule} from '@app/shared/module-presenter/module-presenter.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    StoreModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    HomeModule,
    AboutModule,
    DashboardModule,
    LoginModule,
    DeviceModule,
    PresentationModule,
    SchedulingModule,
    MediaLibraryModule,
    SyncfusionModule,
    AppRoutingModule,
    ModulePresenterModule
  ],
  declarations: [AppComponent],
  providers: [
    MediaMatcher
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
