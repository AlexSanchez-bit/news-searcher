import { Component } from '@angular/core';
import { SelectedCC } from './interfaces/selection';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buscador de Noticias';
  newsList: any[];
  errormsg = '';
  loading = false;
  constructor(private newsWatcher: NoticiaService) {
    this.newsList = [];
  }

  searchNews(data: SelectedCC) {
    this.loading = true;
    this.newsWatcher.getNews(data).subscribe(
      (data) => {
        this.errormsg = ''
        this.loading = false;
        this.newsList = data.articles;
        console.log(this.newsList[0]);
        if (this.newsList.length == 0) {
          this.showError('no hay noticias que mostrar')
        }
      },
      (err) => {
        this.showError('por favor revisa tu conexion a internet')
      }
    )
  }

  showError(msg: string) {
    this.errormsg = msg;
    this.loading = false;
    setTimeout(() => { this.errormsg = '' }, 3000);
  }
}
