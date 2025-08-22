import BlogModel from "../Models/blog.model.js";
export default class BlogService {
    constructor() {
        this.db = new BlogModel();
    }
    // CREATE
    async Create(data) {
        return this.db.NewBlog(data);
    }
    // READ ALL
    async FetchBlogs() {
        return this.db.GetAllBlog();
    }
    // READ BY ID
    async FetchBlogByID(id) {
        return this.db.GetBlogByID(id);
    }
    // UPDATE
    async EditBlog(id, data) {
        return this.db.EditBlog(id, data);
    }
    // DELETE
    async DeleteBlogByID(id) {
        return this.db.RemoveBlogByID(id);
    }
}
//# sourceMappingURL=blogService.js.map