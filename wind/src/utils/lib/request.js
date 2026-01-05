/*
 * @Last Modified by: jihy-c
 * @LastEditTime: 2024-07-14 23:10:51
 * @Description: 
 */
import axios from 'axios'
const baseURL = '/api'
const timeout = 1000
const request = axios.create({
  baseURL,
  timeout
})