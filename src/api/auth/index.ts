import { AxiosPromise } from "axios";
import Endpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { ILoginResponse, ILoginRequest } from "./types";

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
	axiosInstance.post(Endpoints.AUTH.LOGIN, params)

export const logout = (): AxiosPromise => axiosInstance.get(Endpoints.AUTH.LOGOUT)