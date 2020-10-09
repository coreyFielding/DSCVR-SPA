interface IPayload {
  id: string;
  type: string;
  mtime?: string;
  [key: string]: any;
}

interface IResource {
  loading: boolean;
  cache?: IPayload | null;
  item?: IPayload | null;
  type: string;
  name: string;
  id: string;
}

interface IResources {
  loading: boolean;
  items: IPayload[];
  type: string;
  total: number;
  name: string;
  query: any;
}

type ResourceType = IResource | IResources;

const initialState: ResourceType = {
  loading: false,
  cache: null,
  item: null,
  type: "",
  name: "",
  id: "",
};

const GenericReducer = (state = initialState, action: any) => {
  switch (action.type) {
  }
};

export default GenericReducer;
