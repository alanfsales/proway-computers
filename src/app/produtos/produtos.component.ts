import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void{
    const produtos = this.produtoService.getAll();
    this.route.queryParamMap.subscribe(parans => {
      const descricao = parans.get("descricao")?.toLowerCase();
      if(descricao){
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }

      this.produtos = produtos;
    });
  }
}
