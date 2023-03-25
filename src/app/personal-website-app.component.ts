import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
	selector: 'personal-website-app-root',
	templateUrl: './personal-website-app.component.html',
	styleUrls: ['./personal-website-app.component.scss']
})

export class PersonalWebsiteAppComponent {
	constructor(public viewportScroller: ViewportScroller){}
	

	public anchorScroll(elementId: string) {
		this.viewportScroller.scrollToAnchor(elementId);
	}
}
