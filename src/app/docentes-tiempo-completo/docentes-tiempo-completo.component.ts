import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docentes-tiempo-completo',
  templateUrl: './docentes-tiempo-completo.component.html',
  styleUrls: ['./docentes-tiempo-completo.component.css']
})
export class DocentesTiempoCompletoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  docentes = JSON.stringify([
    {
      'foto':'https://ucblpz.com/wp-content/uploads/2020/01/Orlando-Rivera.jpg',
      'trayectoria':[
        'Trayectoria 1',
        'Trayectoria 2',
      ],
    },
    {
      'foto':'https://ucblpz.com/wp-content/uploads/2020/01/Orlando-Rivera.jpg',
      'trayectoria':[
        'Trayectoria 1',
        'Trayectoria 2',
      ],
    },
  ]);
}
