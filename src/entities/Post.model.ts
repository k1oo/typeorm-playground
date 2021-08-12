import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column({ type: 'varchar', nullable: false })
  public title: string;

  @Column({ type: 'text', nullable: false })
  public body: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  public isPublished: boolean;

  @Column({ type: 'timestamptz', nullable: false })
  @CreateDateColumn()
  public createdAt: Date;

  static create(title: Post['title'], body: Post['body']) {
    let post = new Post();
    post.title = title;
    post.body = body;
    post.isPublished = false;
    return post;
  }

  publish() {
    this.isPublished = true;
  }
}
