import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ClienteModule } from './cliente/cliente.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [
    ClienteModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ProdutoModule,
    PedidoModule,
    QueueModule,
  ],

  providers: [],
})
export class AppModule { }
