import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  titulo = "Clientes DAW 2"

  selectedCliente?: Cliente;
  clientes: Cliente[] = [];

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
  }

  getClientes(): void {
    this.clienteService.getClientes()
        .subscribe(clientes => this.clientes = clientes);
  }
}
