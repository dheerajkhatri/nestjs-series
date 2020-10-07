import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import PostService from "./post.service";
import {CreatePostDto} from "./dtos/createPost.dto";

@Controller('/posts')
export default class PostController {
    constructor(private readonly postService: PostService) {
    }

    @Get()
    getAllPosts() {
       return this.postService.getAllPosts();
    }

    @Get('/:id')
    getPostById(@Param('id') id: string) {
        return this.postService.getPostById(Number(id));
    }

    @Post()
    async createPost(@Body() post: CreatePostDto) {
        return this.postService.createPost(post);
    }

    @Put('/:id')
    async updatePost(@Param('id') id:string, @Body() post: UpdatePostDto) {
        return this.postService.updatePost(Number(id), post);
    }

    @Delete('/:id')
    async deletePost(@Param('id') id:string) {
        return this.postService.deletePost(Number(id));
    }
}
