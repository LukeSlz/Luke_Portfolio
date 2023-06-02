import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeTab = 'home';

  setActiveTab(tab: string){
    this.activeTab = tab;
  }
}
