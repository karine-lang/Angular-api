import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reativo-form',
  templateUrl: './reativo-form.component.html',
  styleUrls: ['./reativo-form.component.scss']
})
export class ReativoFormComponent implements OnInit {

  meuForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

this.meuForm = this.formBuilder.group({
  email: [null,[ Validators.required, Validators.email ]],
  password: [null, [Validators.required] ]


});

    console.log(this.meuForm);
  }

}

