import conf from "../conf/conf"
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class PostService {

    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                { title, content, featuredImage, status, userId } // Actual data
            );
        } catch (error) {
            console.log("Appwrite Service: create post: Error: ", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {

        try {
            const result = await this.databases.updateDocument(
                conf.appwriteDatabaseId, // databaseId
                conf.appwriteCollectionId, // collectionId
                slug, // documentId
                {title, content, featuredImage, status}, // data
            );

            return result;
        } catch (error) {
            console.log("Appwrite Service: update post: Error: ", error);
        }
    }

    async deletePost(slug) {
        try {
            const result = await this.databases.deleteDocument(
                conf.appwriteDatabaseId, // databaseId
                conf.appwriteCollectionId, // collectionId
                slug // documentId
            );

            return true;
        } catch (error) {
            console.log("Appwrite Service: delete post: Error: ", error);

            return false;
        }
    }

    async getPost(slug) {
        try {
            const result = await this.databases.getDocument(
                conf.appwriteDatabaseId, // databaseId
                conf.appwriteCollectionId, // collectionId
                slug, // documentId
            );

            return result;
        } catch (error) {
            console.log("Appwrite Service: get post: Error: ", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            const result = await this.databases.listDocuments(
                conf.appwriteDatabaseId, // databaseId
                conf.appwriteCollectionId, // collectionId
                queries // queries (optional)
            );

            return result;
        } catch (error) {
            console.log("Appwrite Service: get posts: Error: ", error);
            return false;
        }
    }

    // file upload
    async uploadFile(file) {

        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique() ,file)
        } catch (error) {
            console.log("Appwrite Service: uploadFile: Error: ", error);
            return false;
        }

    }

    async deleteFile(fileId) {
        try {
            const result = await this.bucket.deleteFile(
                conf.appwriteBucketId, // bucketId
                fileId // fileId
            );

            return true;
        } catch (error) {
            console.log("Appwrite Service: deleteFile: Error: ", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    }
}


const postService = new PostService();

export default postService;
