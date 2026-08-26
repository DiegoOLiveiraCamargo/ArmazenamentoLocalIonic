import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';

interface Contato {
  nome: string;
  email: string;
  telefone: string;
}

@Injectable ({
  providedIn: 'root'
})
export class ContatosService {
  private storageInicializado = false;

  constructor(private storage: Storage) {
    this.inicializarStorage();
  }

  private async inicializarStorage(){
    await this.storage.create();
    this.storageInicializado = true;
  }

  // Função para obter todos os contatos armazenados
  async obterContatos(): Promise<Contato[]> {
    if(!this.storageInicializado) await this.inicializarStorage();
    return (await this.storage.get('contatos')) || [];
  }

  async adicionarContato(contato: Contato): Promise<void> {
    const contatos = await this.obterContatos();
    contatos.push(contato);
    await this.storage.set('contatos', contatos);
  }

  async atualizarContato(indice: number, contato: Contato): Promise<void> {
    const contatos = await this.obterContatos();
     contatos[indice] = contato;
     await this.storage.set('contatos', contatos);
  }

  async excluirContato(indice: number): Promise<void>{
    const contatos = await this.obterContatos();
    contatos.splice(indice, 1);
    await this.storage.set('contatos', contatos)
  }
}   