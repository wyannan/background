import http from './index'

// 登录
export function login(a,b) {
    return http({
        url: "/login",
        method: "post",
        data: {
            username: a,
            password: b,
        },
    })
}

//左边侧边栏
export function menus() {
    return http({
        url: '/menus',
        method:'get'
    })
}