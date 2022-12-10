import { Dispatch } from "@reduxjs/toolkit"
import api from "../../api";
import { ILoginRequest, ILoginResponse } from "../../api/auth/types"
import { loginStart, loginSucess, loginFailure, logoutSuccess, loadProfileStart, loadProfileFailure, loadProfileSucess } from "./authReducer"
import { history } from '../../utils/history';
import { store } from ".."
import { AxiosPromise } from "axios"

export const loginUser =
	(data: ILoginRequest) =>
		async (dispatch: Dispatch<any>): Promise<void> => {
			try {
				dispatch(loginStart())

				const res = await api.auth.login(data)

				dispatch(loginSucess(res.data.accessToken))
				dispatch(loadProfileSucess(res.data.checkUser))

			} catch (e: any) {
				console.error(e)

				dispatch(loginFailure(e.message))
			}
		}

export const logoutUser =
	() =>
		async (dispatch: Dispatch): Promise<void> => {
			try {
				await dispatch(logoutSuccess())
				history.push('/')
			} catch (e) {
				console.error(e)
			}
		}

// переменная для хранения запроса токена (для избежания race condition)
let refreshTokenRequest: AxiosPromise<ILoginResponse> | null = null

export const getAccessToken =
	() =>
		async (dispatch: Dispatch<any>): Promise<string | null> => {
			try {
				const accessToken = store.getState().auth.authData.accessToken

				return accessToken
			} catch (e) {
				console.error(e)

				return null
			}
		}