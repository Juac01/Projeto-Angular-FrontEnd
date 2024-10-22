
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../entities/Aluno';
import { AlunoService } from '../../services/aluno.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent implements OnInit {
  aluno: Aluno = {
    nome: '',
    ra: '', // Adicione o RA se for necessário
    cep: '',
    numero: 0,
    complemento: '',
    notaAdo1: 0,
    notaPI: 0,
    ativo: true,
  };

  constructor(private router: Router, private servico: AlunoService) { }
  ngOnInit(): void { }
  cancelar(): void {
    this.router.navigate(['']);
  }



  cadastrar(): void {
    console.log(this.aluno);
    this.servico.cadastrar(this.aluno).subscribe(
      (resposta) => {
        this.servico.message('Aluno Cadastrado com sucesso!!!');
      },
      (err) => {
        this.servico.message('Erro ao cadastrar o Aluno!');
      }
    );
  }

}
