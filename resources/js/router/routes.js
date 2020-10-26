export default [
    {
        path: '/',
        component: require('@/view/layout/FrontLayout').default,
        children: [
            {
                path: '',
                component: require('@/view/Home').default,
                name: 'home'
            },
            {
                path: 'posts/draft',
                component: require('@/view/Post/MyPosts').default,
                name: 'my-posts',
                meta: {
                    auth: true
                }
            },
            {
                path: 'posts/create',
                component: require('@/view/Post/Create').default,
                name: 'create-posts',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: 'posts/:slug/edit',
                component: require('@/view/Post/Edit').default,
                name: 'edit-posts',
                meta: {
                    auth: true,
                    verified: true
                }
            },

            {
                path: 'drafts/:link',
                component: require('@/view/Post/Create').default,
                name: 'update-draft',
                meta: {
                    auth: true,
                    verified: true
                }
            },


            {
                path: 'drafts/:link/save',
                component: require('@/view/Post/SavePost').default,
                name: 'save-post',
                meta: {
                    auth: true,
                    verified: true
                }
            },

            {
                path: 'posts/:slug/update',
                component: require('@/view/Post/UpdatePost').default,
                name: 'update-post',
                meta: {
                    auth: true,
                    verified: true
                }
            },

            {
                path: 'posts/category/:slug',
                component: require('@/view/Post/PostCategory').default,
                name: 'post-category',
            },


            {
                path: 'post/:slug',
                component: require('@/view/Post/PostShow').default,
                name: 'post-show'
            },
            {
                path: 'profile',
                component: require('@/view/User/Profile').default,
                name: 'profile',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: '@:username',
                component: require('@/view/User/UserPosts').default,
                name: 'user-posts',
            },
            {
                path: 'liked-posts',
                component: require('@/view/User/UserLikedPost').default,
                name: 'liked-posts',
                meta: {
                    auth: true,
                    verified: true,
                }
            },

            {
                path: 'search/:type',
                component: require('@/view/Search/Index').default,
                name:'search'
            },


            {
                path: 'bookmarked-posts',
                component: require('@/view/User/UserBookmarkedPost').default,
                name: 'bookmarked-posts',
                meta: {
                    auth: true,
                    verified: true,
                }
            },
        ]
    },
    {
        path: '/admin',
        component: require('@/view/Layout/AdminLayout').default,
        children: [
            {
                path: 'dashboard',
                component: require('@/view/Admin/Dashboard').default,
                name: 'admin-dashboard'
            }
        ]
    },
    {
        path: '/login',
        component: require('@/view/Auth/Login').default,
        name: 'login',
        meta: {
            guest: true
        }
    },
    {
        path: '/register',
        component: require('@/view/Auth/Register').default,
        name: 'register',
        meta: {
            guest: true
        }
    },
    {
        path: '/email/verify',
        component: require('@/view/Auth/Verify').default,
        name: 'email-verify',
        meta: {
            auth: true
        }
    },
    {
        path: '/reset/password',
        component: require('@/view/Auth/ResetEmailPassword').default,
        name: 'reset-email-password',
        meta: {
            guest: true
        }
    },
    {
        path: '/reset/password/:token',
        component: require('@/view/Auth/ResetPassword').default,
        name: 'reset-password',
        meta: {
            guest: true
        }
    },
    {
        path: '/404',
        component: require('@/view/Error/NotFound').default,
        name: 'not-found'
    },
    {
        path: '/403',
        component: require('@/view/Error/AccessDenied').default,
        name: 'access-denied'
    },
    {
        path: '*',
        component: require('@/view/Error/NotFound').default,
        redirect: '/404'
    },
]
