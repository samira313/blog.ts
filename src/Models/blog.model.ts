import type { IBlog, NewBlog, EditBlog } from "../Types/types.js";

export default class BlogModel {
  private blogs: IBlog[] = []; // temporary in-memory database

  // CREATE
  public NewBlog(data: NewBlog): IBlog {
    const newBlog: IBlog = {
      id: Date.now(),
      ...data,
    };
    this.blogs.push(newBlog);
    return newBlog;
  }

  // READ ALL
  public GetAllBlog(): IBlog[] {
    return this.blogs;
  }

  // READ BY ID
  public GetBlogByID(id: number): IBlog | undefined {
    return this.blogs.find(b => b.id === id);
  }

  // UPDATE
  public EditBlog(id: number, data: EditBlog): IBlog {
    const index = this.blogs.findIndex(b => b.id === id);
    if (index === -1) throw new Error('Blog not found');

    this.blogs[index] = { ...this.blogs[index], ...data } as IBlog;
    return this.blogs[index];
  }

  // DELETE
  public RemoveBlogByID(id: number): string {
    const index = this.blogs.findIndex(b => b.id === id);
    if (index === -1) return "Blog not found!";

    this.blogs.splice(index, 1);
    return "Blog deleted successfully!";
  }
}
