import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessoresModel } from '../professores.model';
import { ProfessoresService } from '../professores.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

@Input()
  empresaFilho :string = '';

professores: Array<ProfessoresModel> = [];
//private activatedRoute : ActivatedRoute
// modificador de acesso, nome da variável e Classe do objeto a ser injetado
constructor(private activatedRoute: ActivatedRoute,
            private professoresService: ProfessoresService


  ) {
  // this.activatedRoute = new ActivatedRoute();
}


ngOnInit(): void {

  this.getall()

  this.activatedRoute.params.subscribe(
    (data) => {
      console.log(data);
    }
  );
}
  onDelete(id: number){
    this.professoresService.delete(id).subscribe(()=> { console.log(`deletou registo com id${id}`)});
    this.getall();
}
  onEdit(id: number){

  }

private getall(){
this.professoresService.getAll().subscribe( (data) => {
  console.log(data);
  this.professores = data;
}
)
}
}
