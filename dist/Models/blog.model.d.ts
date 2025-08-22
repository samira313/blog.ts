import type { IBlog, NewBlog, EditBlog } from "../Types/types.js";
export default class BlogModel {
    private blogs;
    NewBlog(data: NewBlog): IBlog;
    GetAllBlog(): IBlog[];
    GetBlogByID(id: number): IBlog | undefined;
    EditBlog(id: number, data: EditBlog): IBlog;
    RemoveBlogByID(id: number): string;
}
//# sourceMappingURL=blog.model.d.ts.map