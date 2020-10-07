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
const post_service_1 = require("./post.service");
const createPost_dto_1 = require("./dtos/createPost.dto");
const updatePost_dto_1 = require("./dtos/updatePost.dto");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    getAllPosts() {
        return this.postService.getAllPosts();
    }
    getPostById(id) {
        return this.postService.getPostById(Number(id));
    }
    async createPost(post) {
        return this.postService.createPost(post);
    }
    async updatePost(id, post) {
        return this.postService.updatePost(Number(id), post);
    }
    async deletePost(id) {
        return this.postService.deletePost(Number(id));
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getAllPosts", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "getPostById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPost_dto_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createPost", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updatePost_dto_1.UpdatePostDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "updatePost", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deletePost", null);
PostController = __decorate([
    common_1.Controller('/posts'),
    __metadata("design:paramtypes", [post_service_1.default])
], PostController);
exports.default = PostController;
//# sourceMappingURL=post.controller.js.map