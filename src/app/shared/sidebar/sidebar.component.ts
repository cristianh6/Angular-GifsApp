import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private GifsService: GifsService ) { 
    this.GifsService.buscarGifs();
  }

  
  buscar(termino: string) {
    this.GifsService.buscarGifs(termino);
  }
  history: string[] = [];

  get historial() {
    return this.GifsService.historial;
  }
  

  

}
