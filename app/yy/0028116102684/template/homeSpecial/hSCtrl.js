/**
 * Created by hxsd on 2016/11/26.
 */
angular.module('myapp').controller('hSCtrl',function($scope){
$scope.data=[
    {number:1,anumber:1,num:0,low:0,headUrl:"images/header1.jpg","rem":"刘掌柜倾心推荐",
        imgUrl:"images/special1.jpg",nowPrice:"22.8",original:'50.8',
        limTime:"仅限一天",desc:"送食大礼包童年怀旧办公室盒装小零食"},
    {number:1,anumber:1,num:0,low:0,headUrl:"images/header2.jpg","rem":"杨小妹倾心推荐",
        imgUrl:"images/special2.jpg",nowPrice:"49.9",original:'150.8',
        limTime:"仅限二天",desc:"70袋零食大礼包膨化食品送女友生日礼物"},
    {number:1,anumber:1,num:0,low:0,headUrl:"images/header3.jpg","rem":"张美女吐血推荐",
        imgUrl:"images/special3.jpg",nowPrice:"78.8",original:'200.8',
        limTime:"仅限三天",desc:"台湾包邮百年糕饼宝泉凤梨酥12入480g礼盒"},
    {number:1,anumber:1,num:0,low:0,headUrl:"images/header4.jpg","rem":"X-话说 真心推荐",
        imgUrl:"images/special4.jpg",nowPrice:"49.8",original:'100.8',
        limTime:"仅限一天",desc:"进口零食大礼包一箱的组合送女友生日礼物"},
    {number:1,anumber:1,num:0,low:0,headUrl:"images/header5.jpg","rem":"nskd 推荐5星好评",
        imgUrl:"images/special5.jpg",nowPrice:"58.8",original:'70.8',
        limTime:"仅限一天",desc:" 【三只松鼠_坚果大礼包1208g】零食干果特产礼盒坚"},
    {number:1,anumber:1,num:0,low:0,headUrl:"images/header6.jpg","rem":"阿斯加德 推荐",
        imgUrl:"images/special6.jpg",nowPrice:"30.9",original:'50.8',
        limTime:"仅限一天",desc:" 慕丝妮肉松饼干2000g整箱约60个 零食品大礼包面"}

]

    $scope.zan=function(item){

        if(item.number=='assertive'){
            item.number=''
            item.num=0
        }else {
            item.number='assertive'
            item.num=1
        }
    };
    $scope.cai=function(item){

        if(item.anumber=='assertive'){
            item.anumber=''
            item.low=0
        }else {
            item.anumber='assertive'
            item.low=1
        }
    };

})