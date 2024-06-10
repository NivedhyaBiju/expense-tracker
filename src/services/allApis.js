import { base_url } from "./baseUrl";
import { commonRequest } from "./commonStructure";

// Add expense = (date, title, description, amount)
export const addExpense = async(bodyData) => {
    return await commonRequest('POST', `${base_url}/addExpense`, bodyData)
}

// access expense
export const accessExpense = async() => {
    return await commonRequest('GET', `${base_url}/addExpense`, {})
}