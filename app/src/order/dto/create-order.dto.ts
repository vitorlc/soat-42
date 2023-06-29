import { IsNotEmpty, IsNumber } from 'class-validator';
import { ItemDto } from './create-item-order-dto';

export enum StatusPedido {
  PENDENTE = 'PENDENTE',
  ENTREGUE = 'ENTREGUE',
  CANCELADO = 'CANCELADO',
}

export class CreateOrderDto {
  @IsNumber()
  cliente_id: number;
  @IsNotEmpty()
  items: ItemDto[];
}
