import { CreatePostDto } from "./dtos/createPost.dto";
import { Repository } from "typeorm";
import Post from "./post.entity";
import { UpdatePostDto } from "./dtos/updatePost.dto";
export default class PostService {
    private postRepository;
    constructor(postRepository: Repository<Post>);
    getAllPosts(): Promise<Post[]>;
    getPostById(id: number): Promise<Post>;
    createPost(post: CreatePostDto): Promise<Post>;
    updatePost(id: number, post: UpdatePostDto): Promise<Post>;
    deletePost(id: number): Promise<void>;
}
