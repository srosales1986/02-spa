import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from './../services/heroes.service'


@Component({
  selector: 'app-heroe-buscado',
  templateUrl: './heroe-buscado.component.html'
})
export class HeroeBuscadoComponent implements OnInit {
  heroes: Heroe[];
  @Input() index: number;
  termino: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {
    
    this.activatedRoute.params.subscribe(params => {
      
      this.termino = params['nombre'];      
      this.heroes = heroesService.buscarHeroes(params['nombre']);

    });
  }

  ngOnInit(): void {}

  verHeroe(idx: number) {
    this.router.navigate(['/heroe',this.index]);
  }
}
