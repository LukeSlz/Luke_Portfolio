import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  currentYear: number = new Date().getFullYear();
  gitHub: string = "https://github.com/LukeSlz";
  linkedIn: string = "https://www.linkedin.com/in/lukeslz/";
  email: string = "lucassy07@outlook.com"
}
