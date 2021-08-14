import { PostQueries } from './queryBuilder/posts/PostQueries';

export class Run {
  private postQueries: PostQueries;

  constructor() {
    this.postQueries = new PostQueries();
  }

  async run() {
    try {
      await this.postQueries.run();
    } catch (e) {
      throw new Error(e);
    }
  }
}