import { Component, OnInit } from '@angular/core';
import { IStudente } from '../common/studente.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  studente!: IStudente;
  formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'cognome': new FormControl(null, Validators.required),
      'classe': new FormControl(null)
    })
  }

  onSubmit(): void {
    this.studente = this.formGroup.value;
  }
}
