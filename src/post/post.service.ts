import {CreatePostDto} from "./dtos/createPost.dto";
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import Post from "./post.entity";
import {UpdatePostDto} from "./dtos/updatePost.dto";

@Injectable()
export default class PostService {
    constructor(@InjectRepository(Post) private postRepository: Repository<Post>) {
    }

    getAllPosts() {
        return this.postRepository.find();
    }

    async getPostById(id: number) {
        const post = await this.postRepository.findOne(id);
        if (post) {
            return post;
        }
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    async createPost(post: CreatePostDto) {
        const newPost = await this.postRepository.create(post);
        await this.postRepository.save(newPost);
        return newPost;
    }

    async updatePost(id: number, post: UpdatePostDto) {
        await this.postRepository.update(id, post);
        const updatedPost = this.postRepository.findOne(id);
        if (updatedPost) {
            return updatedPost;
        }
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    }

    async deletePost(id: number) {
        const deleteResponse = await this.postRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
        }
    }
}
