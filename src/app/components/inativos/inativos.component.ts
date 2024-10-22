import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../entities/Aluno';
import { Router } from '@angular/router';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-inativos',
  templateUrl: './inativos.component.html',
  styleUrl: './inativos.component.css'
})
export class InativosComponent {
  ativo = 0;
  inativo = 0;
  list: Aluno[] = [];
  inativos: Aluno[] = [];

  constructor(private service: AlunoService, private router: Router) { }
  ngOnInit(): void {
    this.findAll();
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
        this.inativos = this.inativos.filter((aluno) => aluno.id != id);
        this.inativo--;
     
      } else {
        this.service.message('Não foi possível excluir o Registro');
      }
    });
  }

  ativar(item: Aluno): void {
    item.ativo = true
    this.service.atualizar(item).subscribe(() => {
      this.service.message('Aluno ativado com sucesso');
      this.inativos = this.inativos.filter(aluno => aluno.id != item.id);
      this.inativo--;
      this.ativo++;
    })
  }
  verAtivos() {
    this.router.navigate(['']);
  }

}
