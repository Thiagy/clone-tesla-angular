import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { Model3Component } from './components/model3/model3.component';
import { ModelsComponent } from './components/models/models.component';
import { ModelyComponent } from './components/modely/modely.component';
import { ModelxComponent } from './components/modelx/modelx.component';
import { SolarroofComponent } from './components/solarroof/solarroof.component';
import { SolarpanelsComponent } from './components/solarpanels/solarpanels.component';

const routes: Routes = [

  {path: '', component: MainComponent},
  {path: 'model3', component: Model3Component},
  {path: 'models', component: ModelsComponent},
  {path: 'modely', component: ModelyComponent},
  {path: 'modelx', component: ModelxComponent},
  {path: 'solarroof', component: SolarroofComponent},
  {path: 'solarpanels', component: SolarpanelsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
