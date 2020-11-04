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
        meta: {
          auth: true,
          verified:true
        },
        children: [
            {
                path: 'dashboard',
                component: require('@/view/Admin/Dashboard').default,
                name: 'admin-dashboard',

            },

            {
                path: 'users',
                component: require('@/view/Admin/User/UserIndex').default,
                name: 'admin-user-index',
            },
            {
                path: 'users/create',
                component: require('@/view/Admin/User/UserCreateOrUpdate').default,
                name: 'admin-user-create',
            },

            {
                path: 'users/:id',
                component: require('@/view/Admin/User/UserCreateOrUpdate').default,
                name: 'admin-user-edit',
            },

            {
                path: 'posts',
                component: require('@/view/Admin/Post/PostIndex').default,
                name: 'admin-post-index',
            },

            {
                path: 'drafts',
                component: require('@/view/Admin/Draft/DraftIndex').default,
                name: 'admin-draft-index',
            },
            {
                path: 'categories',
                component: require('@/view/Admin/Category/CategoryIndex').default,
                name: 'admin-category-index',
            },
            {
                path: 'categories/create',
                component: require('@/view/Admin/Category/CategoryCreateOrUpdate').default,
                name: 'admin-category-create',
            },
            {
                path: 'categories/:id',
                component: require('@/view/Admin/Category/CategoryCreateOrUpdate').default,
                name: 'admin-category-edit',
            },

            {
                path: 'comments',
                component: require('@/view/Admin/Comment/CommentIndex').default,
                name: 'admin-comment-index',
            },

            {
                path: 'roles',
                component: require('@/view/Admin/Role/RoleIndex').default,
                name: 'admin-role-index',
            },

            {
                path: 'roles/create',
                component: require('@/view/Admin/Role/RoleCreateOrEdit').default,
                name: 'admin-role-create',
            },
            {
                path: 'roles/:id',
                component: require('@/view/Admin/Role/RoleCreateOrEdit').default,
                name: 'admin-role-edit',
            },


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
