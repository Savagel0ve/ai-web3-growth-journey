// test-proxy.js (已更新为 ES Module 语法)

// 使用 import 代替 require
import axios from 'axios';
// const axios = require('axios');

const url = 'https://c-z0-api-01.hash070.com';
const apiKey = 'sk-Aw505Jn682Cb15c99A90T3BlbKFJ2b470d3D115C42b58E5d';

async function callOpenAPI(message) {
  try {
    const response = await axios.post(url, {
      message: message
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    console.log('返回数据:', response.data);
  } catch (error) {
    console.error('调用出错:', error.response?.data || error.message);
  }
}

callOpenAPI('你好');
