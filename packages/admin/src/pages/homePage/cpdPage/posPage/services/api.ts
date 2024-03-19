import { http } from "src/common/http";
import { QueryApiParams, QueryApiRespone } from "./modal";

const baseUrl = "/admin-api/usercenter/cpd-pos/";
// 增
function addApi(data: any) {
	return http.request({
		url: baseUrl + "create",
		method: "POST",
		data,
	});
}

// 删
function deleteApi(data: any) {
	return http.request({
		url: baseUrl + "delete",
		method: "POST",
		data,
	});
}

// 改
function upadteApi(data: any) {
	return http.request({
		url: baseUrl + "update",
		method: "POST",
		data,
	});
}
// 查
function queryApi(data: QueryApiParams) {
	return http.request<QueryApiRespone>({
		url: baseUrl + "page?",
		method: "GET",
		params: data,
	});
}

const devApi = {
	addApi,
	deleteApi,
	upadteApi,
	queryApi,
};

export default devApi;
