import apiClient from "../config/apiClient";
import { API_ENDPOINTS } from "../config/apiContants";
import { CreateArticleRequest, CreateArticleResponse, ArticleListResponse } from "@/data/features/article/article.types";

export const articleApi = {
  createArticle: async (data: CreateArticleRequest) => {


    console.log("Create Article Request URLgjgfghfhgghf:", `${API_ENDPOINTS.ARTICLE.CREATE}`);
    console.log("During sending to endpoijnt", data);
    const response = await apiClient.post<CreateArticleResponse>(
      API_ENDPOINTS.ARTICLE.CREATE,
      // data
      {
        "title": data.title,
        "slug": data.slug,
        "content": data.content,
        "subHeadline": data.subHeadline,
        "isPaywalled": false,
        "language": data.language,
        "location": data.location,
        "authors": data.author,
        "file": data.thumbnail,
        "advocateName": data.advocateName,
        "categoryId": "5668ff08-894f-432a-a224-c3b79839b47c"
        // "categoryId": data.category
      }
    );
    console.log("Create Article API Response:", response.data);
    return response;
  },


  fetchArticles: async (params?: any) => {
    console.log("Fetch Articles Request URL:", ` ${API_ENDPOINTS.ARTICLE.FETCH_ALL}`);
    const response = await apiClient.get<ArticleListResponse>(

      API_ENDPOINTS.ARTICLE.FETCH_ALL,
      {
        params,
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      }

    );
    console.log("Fetch Articles API Response:", response.data);
    return response;
  },

};
