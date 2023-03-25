import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { PersonalWebsiteAppComponent } from './personal-website-app.component';
import { AboutMeComponent } from './about-me-component/about-me-component';
import { ResumeComponent } from './resume-component/resume-component';
import { ContactMeComponent } from './contact-component/contact-me.component';
import { PortfolioComponent } from './portfolio-component/portfolio.component';

const routes: Routes = [
	{path: 'home', component: PersonalWebsiteAppComponent},
	{path: 'resume', component: ResumeComponent},
	{path: 'about-me', component: AboutMeComponent},
	{path: 'contact-me', component: ContactMeComponent},
	{path: 'portfolio', component: PortfolioComponent}
]

@NgModule({
	declarations: [
		PersonalWebsiteAppComponent,
		AboutMeComponent,
		ResumeComponent,
		ContactMeComponent,
		PortfolioComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })
	],
	providers: [],
	bootstrap: [PersonalWebsiteAppComponent]
})
export class AppModule { }