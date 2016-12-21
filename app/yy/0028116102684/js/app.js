/**
 * Created by hxsd on 2016/11/24.
 */
    var myshop=angular.module('myshop',[])
var myapp=angular.module('myapp',['ionic','myshop'])
//全局的控制器.控制购物车。结算
myapp.controller('myctrl',function($scope){

    $scope.addArry=[]

    $scope.showMy=false
    if($scope.addArry.length==0){
        $scope.showMy=false
    }else {
        $scope.showMy=true
    }

    $scope.add=function(product){

        $scope.showMy=true

        for(var i=0;i<$scope.addArry.length;i++){
            var item = $scope.addArry[i];
            // 判断购物车中是否已经有了该商品
            if(item.product.desc == product.desc){

                // 说明购物车中已经有了该商品，将该商品的购买数量+1
                item.number++;

                return; // 添加商品过程结束
            }
        }

        // 如果代码执行到这里，说明购物车中没有要添加的商品
        // 构造一个购买项item，加入到购物筐中
        $scope.addArry.push({product:product,number:1});
        //判断购物车里面是否添加相同的东西
        $scope.total=function(){
            var total=0
            angular.forEach($scope.addArry,function(item){
                total+=item.number
            })

            return total
        }


    }

    $scope.detail=function(item){
        $scope.newarry={}
        $scope.newarry=item
    }


})




//路由各个页面
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('tour',{
        url:'/tour',
        templateUrl:'template/tour/tour.html'
    })
        .state('home',{
            url:'/home',
            abstract:true,
            templateUrl:'template/home/home.html'
        })
        //首页的子选项
        .state('home.homeIndex',{
            url:'/homeIndex',
            views:{'homeIndex':{templateUrl:'template/homeIndex/homeIndex.html',controller:'hICtrl'}}
        })
        .state('home.homeSpecial',{
            url:'/homeSpecial',
            views:{'homeSpecial':{templateUrl:'template/homeSpecial/homeSpecial.html',controller:'hSCtrl'}}
        })
        .state('home.homeMyself',{
            url:'/homeMyself',
            views:{'homeMyself':{templateUrl:'template/homeMyself/homeMyself.html',controller:'hMCtrl'}}
        })
        .state('home.homeCart',{
            url:'/homeCart',
            views:{'homeCart':{templateUrl:'template/homeCart/homeCart.html',controller:'hCCtrl'}}
        })
        .state('home.slideBox1',{
            url:'/slideBox1',
            views:{'homeIndex':{templateUrl:'template/detail/slideBox1.html',controller:'hICtrl'}}


        })
        .state('home.slideBox2',{
            url:'/slideBox2',
            views:{'homeIndex':{templateUrl:'template/detail/slideBox2.html',controller:'hICtrl'}}

        })
        .state('home.slideBox3',{
            url:'/slideBox1',
            views:{'homeIndex':{templateUrl:'template/detail/slideBox3.html',controller:'hICtrl'}}

        })
        .state('home.firends',{
            url:'/firends',
            views:{'homeIndex':{templateUrl:'template/detail/firends.html',controller:'hICtrl'}}

        })

    $urlRouterProvider.otherwise('/tour')
})