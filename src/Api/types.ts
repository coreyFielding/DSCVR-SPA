type method = "GET" | "PUT" | "POST" | "DELETE";

export default interface IPayload {
  id: string;
  type: string;
  mtime?: string;
  [key: string]: any;
}

export interface ApiRequest {
  url: string;
  id: string;
  method: method;
  context?: string[];
  lest?: boolean;
}

export interface IRequest {
  endpoint: string;
  query?: {
    limit: number;
    page: number;
    [key: string]: any;
  };
}

export interface IResponse<T> {
  [key: string]: T;
}

export interface IListResponse {
  total: number;
  type: "list";
  items: IPayload[];
}
