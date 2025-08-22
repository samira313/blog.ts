import type { IBlog, NewBlog, EditBlog } from "../Types/types";
export default class BlogService {
    private db;
    Create(data: NewBlog): Promise<IBlog>;
    FetchBlogs(): Promise<IBlog[]>;
    FetchBlogByID(id: number): Promise<IBlog | undefined>;
    EditBlog(id: number, data: EditBlog): Promise<IBlog>;
    DeleteBlogByID(id: number): Promise<string>;
}
//# sourceMappingURL=blogService.d.ts.map