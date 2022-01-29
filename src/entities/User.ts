import { Column, Entity, CreateDateColumn, UpdateDateColumn, BaseEntity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('user')
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;
 
  @Column()
  lastName: string;
 
  @Column({
    generatedType: 'STORED',
    asExpression: `'firstName' || ' ' || 'lastName'`
  })
  fullName: string;

  @Column()
  email: string;

  @Column()
  role: number; 
  /*
    To be scalable 
    0: normal user,
    1: admin user
  */

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}