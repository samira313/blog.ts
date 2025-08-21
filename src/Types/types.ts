export interface BlogPost {
  id: "number";
  title: "string";
  content: "string";
}

export interface NewBlogPost {
  title: "string";
  content: "string";

}
export interface UpdateBlogPost {
  id: "number";
  title?: "string";
  content?: "string";
}