module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            {
                text: '案例',
                items: [
                    {
                        text: 'WordPress', items: [
                            { text: '个人博客', link: '/backend/wordpress/blog/' }
                        ]
                    }
                ]
            },
            {
                text: '前端',
                items: [
                    {
                        text: '基础', items: [
                            { text: 'CSS3', link: '/frontend/php/core/' }
                        ]
                    }
                ]
            },
            {
                text: '后端',
                items: [
                    {
                        text: 'PHP', items: [
                            { text: 'PHP源码', link: '/backend/php/core/' }
                        ]
                    },
                    {
                        text: 'Go', items: [
                            { text: 'GOPL笔记', link: '/backend/go/gopl/' }
                        ]
                    }
                ]
            },
            {
                text: '中间件',
                items: [
                    {
                        text: 'PHP', items: [
                            { text: 'PHP源码', link: '/backend/php/core/' }
                        ]
                    }
                ]
            },
            {
                text: '云原生',
                items: [
                    {
                        text: 'PHP', items: [
                            { text: 'PHP源码', link: '/backend/php/core/' }
                        ]
                    }
                ]
            }
        ],
        sidebar: {
            '/backend/php/core/': [
                '',
                'a',
                'b'
            ]
        }
    }
}