import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  forma: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.forma = this.fb.group({
      texto: ['']
    });
  }

  saveForm() {
    console.log(this.forma);
    // this.loadDataToForm();

    // this.forma.reset();
    // this.forma.reset({
    //   nombre: 'Juan',
    //   apellido: 'Marciaaaal'
    // });
  }
}
