import {OnInit, Component, Output, EventEmitter, Input} from '@angular/core'

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
  @Input() opened= false /* está falando que essa variável pode vir de fora e começa com falso */
  openMenu(){
    if(this.opened){
      this.opened = false
    } 
    else{
      this.opened = true
    } 
    this.menuToogle.emit(this.opened)
  }
  @Output() menuToogle: EventEmitter<boolean> = new EventEmitter() /* Estou mandando exportar  */
}
