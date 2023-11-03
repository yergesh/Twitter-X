export class Post {
    id?: number;
    publicationDate!: Date;
    htmlView:string="";
    username: string="";
    commentCount: number=0;
    likeCount: number=0;
    replyCount: number=0;
    constructor(id: number | undefined, publicationDate: Date, htmlView: string, username: string, commentCount: number, likeCount: number, replyCount: number) {
        this.id = id;
        this.publicationDate = publicationDate;
        this.htmlView = htmlView;
        this.username = username;
        this.commentCount = commentCount;
        this.likeCount = likeCount;
        this.replyCount = replyCount;
      }
}
