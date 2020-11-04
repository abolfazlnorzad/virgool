const FrontLayout = () => import(/* webpackChunkName:'js/chunk/FrontLayout' */'@/view/layout/FrontLayout');
const Home = () => import(/* webpackChunkName:'js/chunk/Home' */'@/view/Home');
const MyPosts = () => import(/* webpackChunkName:'js/chunk/MyPosts' */'@/view/Post/MyPosts');
const Create = () => import(/* webpackChunkName:'js/chunk/Create' */'@/view/Post/Create');
const Edit = () => import(/* webpackChunkName:'js/chunk/Edit' */'@/view/Post/Edit');
const SavePost = () => import(/* webpackChunkName:'js/chunk/SavePost' */'@/view/Post/SavePost');
const UpdatePost = () => import(/* webpackChunkName:'js/chunk/UpdatePost' */'@/view/Post/UpdatePost');
const PostCategory = () => import(/* webpackChunkName:'js/chunk/PostCategory' */'@/view/Post/PostCategory');
const PostShow = () => import(/* webpackChunkName:'js/chunk/PostShow' */'@/view/Post/PostShow');
const Profile = () => import(/* webpackChunkName:'js/chunk/Profile' */'@/view/User/Profile');
const UserPosts = () => import(/* webpackChunkName:'js/chunk/UserPosts' */'@/view/User/UserPosts');
const UserLikedPost = () => import(/* webpackChunkName:'js/chunk/UserLikedPost' */'@/view/User/UserLikedPost');
const Index = () => import(/* webpackChunkName:'js/chunk/Index' */'@/view/Search/Index');
const UserBookmarkedPost = () => import(/* webpackChunkName:'js/chunk/UserBookmarkedPost' */'@/view/User/UserBookmarkedPost');
const AdminLayout = () => import(/* webpackChunkName:'js/chunk/AdminLayout' */'@/view/Layout/AdminLayout');
const Dashboard = () => import(/* webpackChunkName:'js/chunk/Dashboard' */'@/view/Admin/Dashboard');
const UserIndex = () => import(/* webpackChunkName:'js/chunk/UserIndex' */'@/view/Admin/User/UserIndex');
const UserCreateOrUpdate = () => import(/* webpackChunkName:'js/chunk/UserCreateOrUpdate' */'@/view/Admin/User/UserCreateOrUpdate');
const PostIndex = () => import(/* webpackChunkName:'js/chunk/PostIndex' */'@/view/Admin/Post/PostIndex');
const DraftIndex = () => import(/* webpackChunkName:'js/chunk/DraftIndex' */'@/view/Admin/Draft/DraftIndex');
const CategoryIndex = () => import(/* webpackChunkName:'js/chunk/CategoryIndex' */'@/view/Admin/Category/CategoryIndex');
const CategoryCreateOrUpdate = () => import(/* webpackChunkName:'js/chunk/CategoryCreateOrUpdate' */'@/view/Admin/Category/CategoryCreateOrUpdate');
const CommentIndex = () => import(/* webpackChunkName:'js/chunk/CommentIndex' */'@/view/Admin/Comment/CommentIndex');
const RoleIndex = () => import(/* webpackChunkName:'js/chunk/RoleIndex' */'@/view/Admin/Role/RoleIndex');
const RoleCreateOrEdit = () => import(/* webpackChunkName:'js/chunk/RoleCreateOrEdit' */'@/view/Admin/Role/RoleCreateOrEdit');
const Login = () => import(/* webpackChunkName:'js/chunk/Login' */'@/view/Auth/Login');
const Register = () => import(/* webpackChunkName:'js/chunk/Register' */'@/view/Auth/Register');
const Verify = () => import(/* webpackChunkName:'js/chunk/Verify' */'@/view/Auth/Verify');
const ResetEmailPassword = () => import(/* webpackChunkName:'js/chunk/ResetEmailPassword' */'@/view/Auth/ResetEmailPassword');
const ResetPassword = () => import(/* webpackChunkName:'js/chunk/ResetPassword' */'@/view/Auth/ResetPassword');
const NotFound = () => import(/* webpackChunkName:'js/chunk/NotFound' */'@/view/Error/NotFound');
const AccessDenied = () => import(/* webpackChunkName:'js/chunk/NotFound' */'@/view/Error/AccessDenied');

export default [
    {
        path: '/',
        component: FrontLayout,
        children: [
            {
                path: '',
                component: Home,
                name: 'home'
            },
            {
                path: 'posts/draft',
                component: MyPosts,
                name: 'my-posts',
                meta: {
                    auth: true
                }
            },
            {
                path: 'posts/create',
                component: Create,
                name: 'create-posts',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: 'posts/:slug/edit',
                component: Edit,
                name: 'edit-posts',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: 'drafts/:link',
                component: Create,
                name: 'update-draft',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: 'drafts/:link/save',
                component: SavePost,
                name: 'save-post',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: 'posts/:slug/update',
                component: UpdatePost,
                name: 'update-post',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: 'posts/category/:slug',
                component: PostCategory,
                name: 'post-category',
            },
            {
                path: 'post/:slug',
                component: PostShow,
                name: 'post-show'
            },
            {
                path: 'profile',
                component: Profile,
                name: 'profile',
                meta: {
                    auth: true,
                    verified: true
                }
            },
            {
                path: '@:username',
                component:UserPosts,
                name: 'user-posts',
            },
            {
                path: 'liked-posts',
                component: UserLikedPost,
                name: 'liked-posts',
                meta: {
                    auth: true,
                    verified: true,
                }
            },
            {
                path: 'search/:type',
                component: Index,
                name: 'search'
            },
            {
                path: 'bookmarked-posts',
                component: UserBookmarkedPost,
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
        component: AdminLayout,
        meta: {
            auth: true,
            verified: true
        },
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                name: 'admin-dashboard',

            },
            {
                path: 'users',
                component:UserIndex,
                name: 'admin-user-index',
            },
            {
                path: 'users/create',
                component: UserCreateOrUpdate,
                name: 'admin-user-create',
            },
            {
                path: 'users/:id',
                component: UserCreateOrUpdate,
                name: 'admin-user-edit',
            },
            {
                path: 'posts',
                component:PostIndex,
                name: 'admin-post-index',
            },
            {
                path: 'drafts',
                component: DraftIndex,
                name: 'admin-draft-index',
            },
            {
                path: 'categories',
                component: CategoryIndex,
                name: 'admin-category-index',
            },
            {
                path: 'categories/create',
                component: CategoryCreateOrUpdate,
                name: 'admin-category-create',
            },
            {
                path: 'categories/:id',
                component: CategoryCreateOrUpdate,
                name: 'admin-category-edit',
            },
            {
                path: 'comments',
                component: CommentIndex,
                name: 'admin-comment-index',
            },
            {
                path: 'roles',
                component: RoleIndex,
                name: 'admin-role-index',
            },
            {
                path: 'roles/create',
                component: RoleCreateOrEdit,
                name: 'admin-role-create',
            },
            {
                path: 'roles/:id',
                component: RoleCreateOrEdit,
                name: 'admin-role-edit',
            },


        ]
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            guest: true
        }
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {
            guest: true
        }
    },
    {
        path: '/email/verify',
        component: Verify,
        name: 'email-verify',
        meta: {
            auth: true
        }
    },
    {
        path: '/reset/password',
        component:ResetEmailPassword,
        name: 'reset-email-password',
        meta: {
            guest: true
        }
    },
    {
        path: '/reset/password/:token',
        component: ResetPassword,
        name: 'reset-password',
        meta: {
            guest: true
        }
    },
    {
        path: '/404',
        component: NotFound,
        name: 'not-found'
    },
    {
        path: '/403',
        component: AccessDenied,
        name: 'access-denied'
    },
    {
        path: '*',
        component:NotFound,
        redirect: '/404'
    },
]
