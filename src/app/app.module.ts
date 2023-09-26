import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { SectioncarhomepageComponent } from './components/sectioncarhomepage/sectioncarhomepage.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ListFooterComponent } from './components/list-footer/list-footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Model3Component } from './components/model3/model3.component';
import { ModelsComponent } from './components/models/models.component';
import { ModelyComponent } from './components/modely/modely.component';
import { ModelxComponent } from './components/modelx/modelx.component';
import { SolarroofComponent } from './components/solarroof/solarroof.component';
import { SolarpanelsComponent } from './components/solarpanels/solarpanels.component';
import { HightlightComponent } from './components/hightlight/hightlight.component';
import { InteriorcarComponent } from './components/interiorcar/interiorcar.component';
import { SlidevideointeriorcarComponent } from './components/slidevideointeriorcar/slidevideointeriorcar.component';
import { DetailscarComponent } from './components/detailscar/detailscar.component';
import { CommonsectionComponent } from './components/commonsection/commonsection.component';
import { DetailscarexteriorComponent } from './components/detailscarexterior/detailscarexterior.component';
import { ElectricpowertrainComponent } from './components/electricpowertrain/electricpowertrain.component';
import { VideoflexreverseComponent } from './components/videoflexreverse/videoflexreverse.component';
import { SpecsComponent } from './components/specs/specs.component';
import { OrderComponent } from './components/order/order.component';
import { FooterpanelsComponent } from './components/footerpanels/footerpanels.component';
import { CardemoComponent } from './components/cardemo/cardemo.component';
import { FreedomtotravelComponent } from './components/freedomtotravel/freedomtotravel.component';
import { AutopilotComponent } from './components/autopilot/autopilot.component';
import { InteriorComponent } from './components/interior/interior.component';
import { UtilityComponent } from './components/utility/utility.component';
import { DesigninstallationpowervideoComponent } from './components/designinstallationpowervideo/designinstallationpowervideo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MenuComponent,
    SectioncarhomepageComponent,
    CheckoutComponent,
    ListFooterComponent,
    HomepageComponent,
    Model3Component,
    ModelsComponent,
    ModelyComponent,
    ModelxComponent,
    SolarroofComponent,
    SolarpanelsComponent,
    HightlightComponent,
    InteriorcarComponent,
    SlidevideointeriorcarComponent,
    DetailscarComponent,
    CommonsectionComponent,
    DetailscarexteriorComponent,
    ElectricpowertrainComponent,
    VideoflexreverseComponent,
    SpecsComponent,
    OrderComponent,
    FooterpanelsComponent,
    CardemoComponent,
    FreedomtotravelComponent,
    AutopilotComponent,
    InteriorComponent,
    UtilityComponent,
    DesigninstallationpowervideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
