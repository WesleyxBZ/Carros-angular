import {Component, OnInit} from '@angular/core';
import {CarroService} from '../../core/service/carro.service';
import {Carro} from '../../core/model/carro.model';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  carro: Carro;
  form: FormGroup;

  constructor(private carroService: CarroService, private toastr: ToastrService, private fb: FormBuilder) {
    this.carro = new Carro();
    this.handleFormBuilder();
  }

  ngOnInit() {

  }

  salvarCarro() {
    if (this.form.valid) {
      console.log(this.carro);
      this.carroService.save(this.carro).subscribe(result => {
        if (result) {
          this.toastr.success('Carro cadastrado com sucesso.');
          this.form.reset();
        } else {
          this.toastr.error('Erro ao cadastrar o carro');
        }
      });
    } else {
      this.toastr.error('Campos Inválidos');
    }
  }

  handleFormBuilder() {
    this.form = this.fb.group({
      nome: this.fb.control(this.carro.nome, [Validators.required]),
      marca: this.fb.control(this.carro.marca, [Validators.required])
    });
  }

}
