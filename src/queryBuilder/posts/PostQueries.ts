import { PostsSelectQueryBuilder } from './SelectQueryBuilder';

export class PostQueries {
  private postsSelectQueryBuilder: PostsSelectQueryBuilder;

  constructor() {
    this.postsSelectQueryBuilder = new PostsSelectQueryBuilder();
  }

  async run() {
    try {
      const result = await this.runSelectQuries();
      console.log(result);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async runSelectQuries() {
    try {
      const getOneById = await this.postsSelectQueryBuilder.getOneById(1);
      return {
        getOneById,
      };
    } catch (e) {
      console.error('runSelectQueries Error: ', e);
      throw new Error(e.message);
    }
  }
}