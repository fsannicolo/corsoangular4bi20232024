import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit{
  message: string = 'Hello world';
  nrStudents: number = 16;
  timer: any;
  nome: string = 'Pietro';

  textColor: string = 'blue';

  ngOnInit(): void {
   
  }

  reset(): void {
    clearInterval(this.timer);
    this.nrStudents = 15;
    this.textColor = 'blue';
  }

  avvia(): void {
    this.timer = setInterval(() => {
      this.nrStudents--;
      if (this.nrStudents < 8) {
        this.textColor = 'red';
      }
    }, 1000);
  }
}
