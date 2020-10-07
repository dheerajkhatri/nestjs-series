"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const post_entity_1 = require("./post.entity");
let PostService = class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    getAllPosts() {
        return this.postRepository.find();
    }
    async getPostById(id) {
        const post = await this.postRepository.findOne(id);
        if (post) {
            return post;
        }
        throw new common_1.HttpException('Post not found', common_1.HttpStatus.NOT_FOUND);
    }
    async createPost(post) {
        const newPost = await this.postRepository.create(post);
        await this.postRepository.save(newPost);
        return newPost;
    }
    async updatePost(id, post) {
        await this.postRepository.update(id, post);
        const updatedPost = this.postRepository.findOne(id);
        if (updatedPost) {
            return updatedPost;
        }
        throw new common_1.HttpException('Post not found', common_1.HttpStatus.NOT_FOUND);
    }
    async deletePost(id) {
        const deleteResponse = await this.postRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new common_1.HttpException('Post not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
PostService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(post_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostService);
exports.default = PostService;
//# sourceMappingURL=post.service.js.map