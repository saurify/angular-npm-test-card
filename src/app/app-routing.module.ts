import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardContainerComponent } from './card-container/card-container.component';

const routes: Routes = [

	{
		path: 'dev-card', component: CardComponent
	},
	{
		path: 'dev-container', component: CardContainerComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

