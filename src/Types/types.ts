// Define the main Blog structure
export interface IBlog {
  id: number;       // unique identifier
  title: string;    // blog title
  text: string;     // blog content
}

// Simulated database interface
export interface IDatabase {
  blogs: IBlog[];   // list of blog posts
}

// Type for creating a new blog post (without id)
// Because when creating, the 'id' is generated automatically
export type NewBlog = Omit<IBlog, "id">;

// Type for editing a blog post (all fields optional)
// Because when updating, you might only change title OR text
export type EditBlog = Partial<NewBlog>;
