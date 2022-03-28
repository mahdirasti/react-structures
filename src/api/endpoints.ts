/**
 * Place all endpoints here
 */

type ParamsType = string | number | boolean;
type NoParamKeys = "auth-otp-step-one" | "auth-otp-step-two";
type ParamKeys = "hasParam";

type EndpointsType = {
  [k in NoParamKeys]: {
    endpoint: string;
  };
} & {
  [k in ParamKeys]: {
    endpoint: string;
    params: string[];
  };
};

type ParamsGenerator<T extends ParamKeys> = {
  [k in typeof endpoints[T]["params"][number]]: ParamsType;
};

type FunctionOverload = {
  <T extends NoParamKeys>(key: T): string;
  <T extends ParamKeys>(key: T, params: ParamsGenerator<T>): string;
};

/**
 * endpoints must have the following naming
 * @example ```js
 * const endpoints = {
 *    "endpoint-key": {
 *      endpoint: "path/to/my/endpoint/" or "path/to/:my/endpoint/:params",
 *      params: false or ["my", "params"]
 *    }
 * }
 * This way typescript will suggest you with required params
 * ```
 */
export const endpoints = {
  "auth-otp-step-one": {
    endpoint: "/auth/login/via-otp/step-one",
  },
  "auth-otp-step-two": {
    endpoint: "/auth/login/via-otp/step-one",
  },
  hasParam: {
    endpoint: "/param/:myParam",
    params: ["myParam"],
  },
} as const;

/**
 * this function returns an endpoint based on panel, key, and params
 * @param key endpoint key inside that panel
 * @param params if the selected endpoint had any params(for example /details/:id), the keys in this argument must match the params of that endpoint({ id: 2 } in this example)
 * @returns the endpoint of the API
 */
const getEndpoint: FunctionOverload = (...args: any[]) => {
  const key = args[0] as keyof typeof endpoints;
  const params: any = args?.[1];
  let selectedEndpoint: string = endpoints[key].endpoint;
  if (params) {
    for (let key in params) {
      let regex = new RegExp(`\/:${key}`);
      selectedEndpoint = selectedEndpoint.replace(regex, "/" + params[key]);
    }
  }
  return selectedEndpoint;
};

export default getEndpoint;
