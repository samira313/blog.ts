import BlogService from "./Services/blogService.js";

async function main() {
  const service = new BlogService();

  // Create new blog
  const blog1 = await service.Create({ title: "My first post", text: "Hello world!" });
  console.log("Created:", blog1);

  // Fetch all blogs
  console.log("All blogs:", await service.FetchBlogs());

  // Fetch single blog
  console.log("Find blog by ID:", await service.FetchBlogByID(blog1.id));

  // Update blog
  console.log("Update blog:", await service.EditBlog(blog1.id, { text: "Updated text!" }));

  // Delete blog
  console.log("Delete blog:", await service.DeleteBlogByID(blog1.id));
}

main();
