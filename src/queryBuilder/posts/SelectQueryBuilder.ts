import { Post } from '../../entities/Post.model';
import { createQueryBuilder } from 'typeorm';

export class PostsSelectQueryBuilder {
  getOneById(id): Promise<Post> {
    return createQueryBuilder<Post>()
      .select('*')
      .from(Post, 'posts')
      .where('id = :id', { id })
      .getRawOne();
  }
}