export default {
    component: require('../router/App').default,
    childRoutes: [{
            path: '/logout',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../router/Logout'))
                })
            }
        }, {
            path: '/about',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../router/About'))
                })
            }
        }, {
            path: '/landing',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../router/Landing'))
                })
            }
        }, {
            path: '/buttonPage',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('../pages/buttonPage').default)
                })
            }
        }, {
            path: '/',
            indexRoute: {
                getComponent: (nextState, cb) => {
                    return require.ensure([], (require) => {
                        cb(null, require('../router/Home').default)
                    })
                }
            }

        }

    ]
}
