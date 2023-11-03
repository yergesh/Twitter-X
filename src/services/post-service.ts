import { Post } from "@/types/Post";
import http from "@/services/http-common";
//const api = "https://contester.azurewebsites.net/";
const api = "https://localhost:7211/";

export async function getPostsAsync(): Promise<Array<Post>> {
  return (await http.get<Array<Post>>("post/all")).data    
}



export async function addPostAsync(post: Post) {

    var id = (await http.post("post", {
            "publicationDate": (new Date()).toISOString(),
            "htmlView": post.htmlView
          
    })).data;

    console.log("Adding post");
    
}

