import { Component, inject, OnInit } from '@angular/core';
import { ToursService } from '../../services/tours.service';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tours',
  imports: [NgFor, MatCardModule, MatButtonModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss',
  standalone: true,

})
export class ToursComponent implements OnInit{
  private tourService = inject(ToursService);
  tours: any;

  ngOnInit(): void {
    this.tourService.getTours().subscribe((data: any) => {
      this.tours = data.tours; //добавить типы
    })
  }
}
