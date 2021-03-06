import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {NewEntryPage} from '../pages/new-entry/new-entry';
import {ContactPage} from '../pages/contact/contact';
import {MomentModule} from 'angular2-moment';
import 'moment/locale/fr';
import {EntriesPage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {ImagePicker} from "@ionic-native/image-picker";
import {IonicStorageModule} from "@ionic/storage";
import {StoreService} from "../providers/storage";
import {FormsModule} from "@angular/forms";
import {DatePicker} from '@ionic-native/date-picker';
import {Contacts} from '@ionic-native/contacts';
import { Camera } from '@ionic-native/camera';
import {EntryPage} from "../pages/entry/entry";
import {Dotdotdot} from '../pipes/dotdotdot'
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';

@NgModule({
  declarations: [
    MyApp,
    NewEntryPage,
    ContactPage,
    EntriesPage,
    TabsPage,
    EntryPage,
    Dotdotdot
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewEntryPage,
    ContactPage,
    EntriesPage,
    TabsPage,
    EntryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ImagePicker, StoreService, Camera, DatePicker, Contacts, Base64ToGallery]
})
export class AppModule {
}
