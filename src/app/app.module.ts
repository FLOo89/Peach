import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';
import { BarcodeScanner} from '@ionic-native/barcode-scanner' 

//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NprofilPage } from '../pages/Nprofil/Nprofil';
import { SeconnecterPage } from '../pages/Seconnecter/Seconnecter';
import { ScannerPage} from '../pages/Scanner/Scanner';
import { ProfilPage} from '../pages/Profil/Profil'
 
import { PeachApiService } from '../services/peachApi.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NprofilPage,
    SeconnecterPage,
    ScannerPage,
    ProfilPage

   

  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NprofilPage,
    SeconnecterPage,
    ScannerPage,
    ProfilPage
    

    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    BarcodeScanner,
    PeachApiService
   
   
  ]
})
export class AppModule {}
