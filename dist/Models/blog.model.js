export default class BlogModel {
    constructor() {
        this.blogs = []; // temporary in-memory database
    }
    // CREATE
    NewBlog(data) {
        const newBlog = {
            id: Date.now(),
            ...data,
        };
        this.blogs.push(newBlog);
        return newBlog;
    }
    // READ ALL
    GetAllBlog() {
        return this.blogs;
    }
    // READ BY ID
    GetBlogByID(id) {
        return this.blogs.find(b => b.id === id);
    }
    // UPDATE
    EditBlog(id, data) {
        const index = this.blogs.findIndex(b => b.id === id);
        if (index === -1)
            throw new Error('Blog not found');
        this.blogs[index] = { ...this.blogs[index], ...data };
        return this.blogs[index];
    }
    // DELETE
    RemoveBlogByID(id) {
        const index = this.blogs.findIndex(b => b.id === id);
        if (index === -1)
            return "Blog not found!";
        this.blogs.splice(index, 1);
        return "Blog deleted successfully!";
    }
}
//# sourceMappingURL=blog.model.js.map