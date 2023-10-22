import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { IInsegnante } from 'src/app/common/insegnante.interface';
import { InsegnantiService } from '../insegnanti.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-localstorage-form',
  templateUrl: './reactive-form-localstorage-form.component.html',
  styleUrls: ['./reactive-form-localstorage-form.component.css']
})
export class ReactiveFormLocalstorageFormComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChildren('inputMateria') inputMateria!: QueryList<ElementRef>;
  @ViewChildren('inputNome') inputNome!: QueryList<ElementRef>;

  insegnante!: IInsegnante;
  editMode: boolean = false;
  indiceInsegnante: number = -1;

  editSubscription!: Subscription;
  formInsegnante!: FormGroup;

  constructor(private insegnantiService: InsegnantiService, private fb: FormBuilder) { };

  ngOnInit(): void {
    this.editSubscription = this.insegnantiService.editInsegnanteObervable.subscribe(index => {
      this.editMode = true;
      this.indiceInsegnante = index;
      let insegnante = this.insegnantiService.getInsegnante(index);
      this.formInsegnante = this.fb.group({
        'nome': [insegnante.nome, Validators.required],
        'cognome': [insegnante.cognome, Validators.required],
        'materie': this.fb.array(insegnante.materie)
      });
    });

    this.formInsegnante = this.fb.group({
      'nome': [null, Validators.required],
      'cognome': [null, Validators.required],
      'materie': this.fb.array([])
    });
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    if (this.inputNome && this.inputNome.first) {
      this.inputNome.first.nativeElement.focus();
    }
  }

  onSubmit(): void {
    if (this.editMode) {
      this.insegnantiService.updateInsegnante(this.indiceInsegnante, this.formInsegnante.value);
      this.editMode = false;
    }
    else {
      this.insegnantiService.addInsegnante(this.formInsegnante.value);
    }
    let materieArray = this.formInsegnante.controls['materie'] as FormArray;
    materieArray.clear();
    this.formInsegnante.reset();
    if (this.inputNome && this.inputNome.first) {
      this.inputNome.first.nativeElement.focus();
    }
  }

  get materie(): FormArray {
    return this.formInsegnante.get('materie') as FormArray;
  }

  get materieControls(): FormControl[] {
    return this.materie.controls as FormControl[];
  }

  nuovaMateria(): void {
    this.materie.push(new FormControl());
    this.inputMateria.changes.pipe(take(1)).subscribe({
      next: changes => changes.last.nativeElement.focus()
    });
  }

  eliminaMateria(index: number): void {
    this.materie.removeAt(index);
  }
}
