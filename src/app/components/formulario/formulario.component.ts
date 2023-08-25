import { Component, Output, EventEmitter } from '@angular/core';
import { SelectedCC } from 'src/app/interfaces/selection';

interface Option {
  value: string;
  name: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output('categories') categoriesSelectemitter = new EventEmitter<SelectedCC>();
  paises: Option[];
  categorias: Option[];

  categotia_seleccionada: string = 'general';
  pais_seleccionado: string = 'cu';

  constructor() {
    this.paises = [
      { value: "cu", name: "Cuba" },
      { value: "ar", name: "Argentina" },
      { value: "us", name: "Estados Unidos" },
      { value: "co", name: "Colombia" },
      { value: "fr", name: "Francia" },
      { value: "br", name: "Brazil" },
      { value: "mx", name: "Mexico" },
      { value: "gb", name: "Reino Unido" },
    ]
    this.categorias = [
      { value: "general", name: "General" },
      { value: "business", name: "Negocios" },
      { value: "sports", name: "Deportes" },
      { value: "enterteiment", name: "Entretenimiento" },
      { value: "health", name: "Salud" },
      { value: "science", name: "Ciencia" },
      { value: "technology", name: "Tecnologia" },
    ]
  }

  enviarInformacion() {
    this.categoriesSelectemitter.emit({
      country: this.pais_seleccionado,
      category: this.categotia_seleccionada
    });
  }
}
