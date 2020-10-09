import { IRequest } from "./types";
import { get } from "./services";

const createQueryFromObj = (obj: any) => {
  return new URLSearchParams(obj).toString();
};

class ApiClient {
  async fetch({ endpoint, query }: Partial<IRequest>) {
    try {
      const queryStr = createQueryFromObj(query);
      return await get(`/${endpoint}?${queryStr}`);
    } catch (err) {
      console.error(err);
    }
  }
}

export function fetchPayload(params: any): IRequest {
  const __default = {
    limit: 30,
    page: 1,
  };

  const query = Object.assign({}, __default, params.query);
  return {
    endpoint: params.type,
    query,
  };
}

export default new ApiClient();
