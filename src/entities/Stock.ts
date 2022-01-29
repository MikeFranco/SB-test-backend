import { Column, Entity, CreateDateColumn, UpdateDateColumn, BaseEntity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('stock')
export class Stock extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ticker: string;

  @Column()
  stock_name: string;

  @Column()
  price: number;

  @Column()
  category: string

  @Column()
  times_queried: number

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}