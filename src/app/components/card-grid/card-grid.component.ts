import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/core/models/card.model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent {
  numOfColumns = 6;

  cards: Card[] = [
    { name: 'Card 1', id: '1' },
    { name: 'Card 2', id: '2' },
    { name: 'Card 3', id: '3' },
    { name: 'Card 4', id: '4' },
    { name: 'Card 5', id: '5' },
    { name: 'Card 6', id: '6' },
    { name: 'Card 6', id: '6' },
    { name: 'Card 6', id: '6' },
    { name: 'Card 6', id: '6' },
    { name: 'Card 6', id: '6' },
    { name: 'Card 6', id: '6' },
    { name: 'Card 6', id: '6' },
    { name: 'Card 6', id: '6' },
    { name: 'Card 6', id: '6' },
    { name: 'Card 6', id: '6' },
    { name: 'Card 6', id: '6' },
  ];
}
