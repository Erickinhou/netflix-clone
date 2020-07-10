import { Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() title: any
  @ViewChild('trailer', {static : true  /* fala de sofre alguma mudança do DOM */}) trailer: ElementRef<HTMLVideoElement>;
  
  constructor() { }

  ngOnInit(): void {
  }

  playVideo() {
    this.trailer.nativeElement.play()
  }

  stopVideo(){
    this.trailer.nativeElement.currentTime = 0 /* Tá rodando o vídeo do início */
    this.trailer.nativeElement.pause()
  }

  getMuted(): boolean /* significa que ele retorna um boolean */{

    return this.trailer.nativeElement.muted

  }

  toggleSound(){
    this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted
  }
}
