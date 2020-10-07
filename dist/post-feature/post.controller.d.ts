import PostService from "./post.service";
import { CreatePostDto } from "./dtos/createPost.dto";
import { UpdatePostDto } from "./dtos/updatePost.dto";
export default class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getAllPosts(): Promise<import("./post.entity").default[]>;
    getPostById(id: string): Promise<import("./post.entity").default>;
    createPost(post: CreatePostDto): Promise<import("./post.entity").default>;
    updatePost(id: string, post: UpdatePostDto): Promise<import("./post.entity").default>;
    deletePost(id: string): Promise<void>;
}
