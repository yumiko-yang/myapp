/**
 * Created by hxsd on 2016/11/26.
 */
angular.module('myapp').controller('hCCtrl',function($scope,$ionicModal){
//出现模版
    $ionicModal.fromTemplateUrl('views/modal.html', {
        scope: $scope,       // 作用域使用父作用域
        animation: 'slide-in-up'

    }).then(function(modal) {
        // 将这个模态对话框保存到一个变量中，方便以后再使用
        $scope.modal = modal;   // 传入的参数model就是构造好的对话框
    });
    //出现反馈的模版
    $scope.openModal=function(){
        $scope.modal.show();
    }
    $scope.closeModal = function() {

        $scope.modal.hide();        // 隐藏对话框(隐藏不是销毁)
        $scope.addArry.length=0
        $scope.showMy=false

    };
    $scope.reduce =function (item){
        item.number--
        if(item.number<=0){
            var n= $scope.addArry.indexOf(item)
            $scope.addArry.splice(n,1)
            alert("您确定要删除"+item.product.desc+'吗？')
        }

    }

    $scope.plus =function (item){
        item.number++
    }

})