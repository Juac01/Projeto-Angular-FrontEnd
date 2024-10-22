import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../entities/Aluno';
import { AlunoService } from '../../services/aluno.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrl: './read-all.component.css'
})
export class ReadAllComponent implements OnInit {
  qtd = 0;
  ativo = 0;
  inativo = 0;
  list: Aluno[] = [];
  inativos: Aluno[] = [];

  constructor(private service: AlunoService, private router: Router) { }
  ngOnInit(): void {
    this.findAll();
  }

  qtdAlunos(): void {
    for (let aluno of this.list) {
      if (aluno.ra)
        this.qtd++;
    }
  }
  contarAtivos(): void {
    for (let aluno of this.list) {
      if (aluno.ativo) this.ativo++;
    }
  }
  contarInativos(): void {
    for (let aluno of this.inativos) {
      if (!aluno.ativo) this.inativo++;
    }
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.qtd = resposta.length;
      resposta.forEach((aluno) => {
        if (aluno.ativo) {
          this.list.push(aluno);
          this.ativo++;
        } else {
          this.inativos.push(aluno);
          this.inativo++;
        }
      });
    });
  }
  apagar(id: any): void {
    this.service.apagar(id).subscribe((resposta) => {
      if (resposta === null) {
        this.service.message('Registro excluído com sucesso');
        this.list = this.list.filter((aluno) => aluno.id != id);
        this.ativo--;
      } else {
        this.service.message('Não foi possível excluir o Registro');
      }
    });
  }

  inativar(item: Aluno): void {
    item.ativo = false
    this.service.atualizar(item).subscribe(() => {
      this.service.message('Aluno inativado com sucesso');
      this.list = this.list.filter(aluno => aluno.id != item.id);
      this.inativo++;
      this.ativo--;
    })
  }
  verInativos() {
    this.router.navigate(['inativos'])
  }
}
