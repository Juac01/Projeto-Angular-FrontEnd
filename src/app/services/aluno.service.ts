
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../entities/Aluno';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class AlunoService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient, private snack: MatSnackBar) {
  }
  findAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.baseUrl);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, `OK`, {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 5000
    })
  }

  apagar(id: any): Observable<void> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url);
  }

  atualizar(aluno: Aluno): Observable<Aluno> {
    const url = `${this.baseUrl}/${aluno.id}`
    return this.http.put<Aluno>(url, aluno);
  }

  cadastrar(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.baseUrl, aluno);
  }
  
}

