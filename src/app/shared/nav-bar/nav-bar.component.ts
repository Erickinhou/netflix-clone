import {OnInit, Component} from '@angular/core'

@Component({
  selector: 'app-nav-bar', /*what is the name of component in html */
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'] /* array because can exists more than one style */
})

export class NavBarComponent implements OnInit{
  constructor(){

  }

  ngOnInit(): void {

  }
}