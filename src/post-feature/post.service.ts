import {CreatePostDto} from "./dtos/createPost.dto";
import {Post} from "./post.interface";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";

@Injectable()
export default class PostService {
    private lastPostId = 0;
    private posts: Post[] = [];

    getAllPosts() {
        return this.posts;
    }

    getPostById(id: number) {
        const post = this.posts.find(post => post.id === id);
        if (post) {
            return post;
        }
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    createPost(post: CreatePostDto) {
        const newPost = {
            id: ++this.lastPostId,
            ...post
        }
        this.posts.push(newPost);
        return newPost;
    }

    updatePost(id: number, post: UpdatePostDto) {
        const postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex > -1) {
            this.posts[postIndex] = post;
            return post;
        }
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    deletePost(id: number) {
        const postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex > -1) {
            this.posts.splice(postIndex);
        }
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }
}
