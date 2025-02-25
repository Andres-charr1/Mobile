import { Component, OnInit } from '@angular/core';
import {HttpsService} from 'src/app/services/https.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [SharedModule]
})
export class HomePage implements OnInit {

  products: any[] = [];
  params = {} as any;
  filteredProducts: any[] = [];

  constructor(
    private http: HttpsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.params.page = 0
    console.log('ngOnInit ejecutando, llamando a getCharacters')
    this.getCharacters();
    console.log('productosngOnInit',this.products)
  }
    getCharacters(event?:any){
      console.log('ejecutando getCharacters')
      this.params.page += 1;
      this.http.getCharacters(this.params).subscribe({
        next: (rest: any) => {
            console.log("Respuesta de la API:", rest); // Verifica si hay datos aquí
            if (!rest || rest.length === 0) {
                console.warn("La API devolvió una lista vacía");
                return;
            }
            this.products = [...rest];
            this.filteredProducts = [...this.products];
            console.log("Productos después de cargar:", this.products);
        },
        error: (error: any) => {
            console.error("Error al obtener productos:", error);
        }
    });
    }
    searchCharacters(event: any) {
      console.log('productos antes de buscar',this.products)
      if(this.products.length===0){
        console.warn('No hay productos para filtrar')
        return;
      }
      const searchTerm = event.target?.value?.toLowerCase() || '';
    
      if (!searchTerm.trim()) {
        this.filteredProducts = [...this.products]; // Restaurar la lista si está vacío 
      } else{
        this.filteredProducts = this.products.filter((character: any) => 
        
        character.title?.toLowerCase().includes(searchTerm))

      }

      this.cdr.detectChanges();
    
      /*this.filteredProducts = this.products.filter((character: any) => 
        character.name && character.name.toLowerCase().includes(searchTerm) // Validar que `name` exista
      );*/
    }

    }
  
