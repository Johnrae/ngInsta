let config = function($stateProvider, $urlRootProvider) {
  
  $stateProvider
    .state('root', {
      abstract: true,
      urlRoot: '/',
    })
    .state('root.home', {
      url: '/home',
      controller: './controllers/home.controller'

    })
    .state('root.add', {
      url: '/add',
      controller: './controllers/add.controller'
      
    })
  ;

};

config.$inject = ['$stateProvider', '$urlRootProvider'];

export default config;