import BlogModel from "../Models/blog.model.js";
import type { IBlog, NewBlog, EditBlog } from "../Types/types";

export default class BlogService {
  private db = new BlogModel();

  // CREATE
  public async Create(data: NewBlog): Promise<IBlog> {
    return this.db.NewBlog(data);
  }

  // READ ALL
  public async FetchBlogs(): Promise<IBlog[]> {
    return this.db.GetAllBlog();
  }

  // READ BY ID
  public async FetchBlogByID(id: number): Promise<IBlog | undefined> {
    return this.db.GetBlogByID(id);
  }

  // UPDATE
  public async EditBlog(id: number, data: EditBlog): Promise<IBlog> {
    return this.db.EditBlog(id, data);
  }

  // DELETE
  public async DeleteBlogByID(id: number): Promise<string> {
    return this.db.RemoveBlogByID(id);
  }
}
