// //模拟获取异步数据调用接口
// export function getCourses() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve([{ name: '测试1' }, { name: '测试2' }]);
//         }, 2000);
//     });
// }

import axios from 'axios'
//模拟获取异步数据调用接口
export function getCourses() {
    return axios.get('/api/courses').then(res => res.data);
}