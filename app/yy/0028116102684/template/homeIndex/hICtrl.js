/**
 * Created by hxsd on 2016/11/25.
 */
angular.module('myapp').controller('hICtrl',function($scope,$state){
    //首页轮播图
    $scope.silderBox=[
        {"imgUrl":"images/nut1.jpg",nowPrice:50.9,state:"home.slideBox1",
            desc:"【三只松鼠_开心果225gx2袋】休闲零食坚果炒货干果原味无漂白",
            text:[
                {word:'三只松鼠_开心果好吃',imgUrl:"images/strawberry1.jpg",nikename:'田小姐的美丽时光'},
                {word:'三只松鼠_开心果棒',imgUrl:"images/bg3.jpeg",nikename:'穿上西装的小新'},
                {word:'三只松鼠_开心果减肥',imgUrl:"images/bg4.jpeg",nikename:'某某某'}
            ]

        },
        {"imgUrl":"images/nut2.jpg",nowPrice:20.9,state:"home.slideBox2",desc:"【三只松鼠】休闲零食坚果炒货腰果",
            text:[
                {word:'三只松鼠】休闲零食坚果炒货腰果 好吃',imgUrl:"images/strawberry1.jpg",nikename:'田小姐的美丽时光'},
                {word:'三只松鼠】休闲零食坚果炒货腰果 棒',imgUrl:"images/bg3.jpeg",nikename:'穿上西装的小新'},
                {word:'三只松鼠】休闲零食坚果炒货腰果 减肥',imgUrl:"images/bg2.jpeg",nikename:'某某某'}
            ]
        },
        {"imgUrl":"images/news.jpg",state:"home.slideBox3"},
    ]
    $scope.recommend=[
        {   title:'电视佳侣',
            products:[
                {number:1,desc:"童年记南瓜子子500g独立小包","imgUrl":"images/guaz.jpg","nowPrice":19.90,"oriPrice":25,
                    text:[
                        {word:'南瓜子好吃。朋友喜欢',imgUrl:"images/bg1.jpeg",nikename:'田小姐的美丽时光'},
                        {word:'量多的南瓜子，聚会电视很棒',imgUrl:"images/bg2.jpeg",nikename:'穿上西装的小新'},
                        {word:'童年记的南瓜子，童年的味道',imgUrl:"images/bg3.jpeg",nikename:'某某某'}
                    ]
                },
                {number:1,desc:"口口福口口福焦糖瓜子600g ","imgUrl":"images/guazi1.jpg","nowPrice":16.90,"oriPrice":20,
                    text:[
                        {word:'口口福好吃。朋友喜欢',imgUrl:"images/header1.jpg",nikename:'田小姐的美丽时光'},
                        {word:'口口福，聚会电视很棒',imgUrl:"images/header2.jpg",nikename:'穿上西装的小新'},
                        {word:'口口福的南瓜子，童年的味道',imgUrl:"images/header3.jpg",nikename:'某某某'}
                    ]
                },
                {number:1,desc:"非核桃味多味瓜子500g*4袋 ","imgUrl":"images/guazi2.jpg","nowPrice":36.90,"oriPrice":40,
                    text:[
                        {word:'非核桃味好吃。朋友喜欢',imgUrl:"images/header4.jpg",nikename:'田小姐的美丽时光'},
                        {word:'非核桃味，聚会电视很棒',imgUrl:"images/header5.jpg",nikename:'穿上西装的小新'},
                        {word:'非核桃味南瓜子，童年的味道',imgUrl:"images/header6.jpg",nikename:'某某某'}
                    ]
                },
                {number:1,desc:"奶油味瓜子168g炒货香葵花籽 ","imgUrl":"images/guazi3.jpg","nowPrice":16.8,"oriPrice":20,
                    text:[
                        {word:'奶油味瓜子好吃。朋友喜欢',imgUrl:"images/header4.jpg",nikename:'田小姐的美丽时光'},
                        {word:'奶油味瓜子，聚会电视很棒',imgUrl:"images/header5.jpg",nikename:'穿上西装的小新'},
                        {word:'奶油味瓜子南瓜子，童年的味道',imgUrl:"images/header6.jpg",nikename:'某某某'}
                    ]
                },
                {number:1,desc:"洽洽山核桃味瓜子10袋*108g ","imgUrl":"images/guazi4.jpg","nowPrice":46.8,"oriPrice":50,
                    text:[
                        {word:'洽洽山核桃味瓜瓜子好吃。朋友喜欢',imgUrl:"images/strawberry1.jpg",nikename:'田小姐的美丽时光'},
                        {word:'洽洽山核桃味瓜，聚会电视很棒',imgUrl:"images/bg3.jpeg",nikename:'穿上西装的小新'},
                        {word:'洽洽山核桃味南瓜子，童年的味道',imgUrl:"images/bg1.jpeg",nikename:'某某某'}
                    ]
                },
                {number:1,desc:"奈萌妈山核桃大颗粒葵花籽500g  ","imgUrl":"images/guazi5.jpg","nowPrice":9.9,"oriPrice":50,
                    text:[
                        {word:'奈萌妈山核桃味瓜瓜子好吃。朋友喜欢',imgUrl:"images/strawberry1.jpg",nikename:'田小姐的美丽时光'},
                        {word:'奈萌妈山核桃味瓜，聚会电视很棒',imgUrl:"images/bg3.jpeg",nikename:'穿上西装的小新'},
                        {word:'奈萌妈山核桃南瓜子，童年的味道',imgUrl:"images/bg2.jpeg",nikename:'某某某'}
                    ]

                }
            ],

        },
        {title:'聚会必备',products:[
                {number:1,desc:"意大利进口起泡酒气泡恋爱季甜葡萄桃 ","imgUrl":"images/party1.jpg","nowPrice":59.90,"oriPrice":65,
                    text:[
                        {word:'起泡酒气泡。老少爷们的最爱',imgUrl:"images/bg5.jpg",nikename:'老少爷们'},
                        {word:'起泡酒气泡，聚会电视很棒',imgUrl:"images/bg6.jpg",nikename:'X先生'},
                        {word:'起泡酒气泡，一直喝',imgUrl:"images/bg7.jpeg",nikename:'某某某小姐'}
                    ]
                },
                {number:1,desc:"RIO锐澳微醺系列3.8度蓝玫瑰味355ml/罐  ","imgUrl":"images/party2.jpg","nowPrice":9.90,"oriPrice":15,
                    text:[
                        {word:'老少爷们的最爱,RIO锐澳微醺系列3.8度蓝玫瑰味',imgUrl:"images/bg5.jpg",nikename:'老少爷们'},
                        {word:'RIO锐澳微醺系列3.8度蓝玫瑰味,聚会电视很棒',imgUrl:"images/bg6.jpg",nikename:'X先生'},
                        {word:'RIO锐澳微醺系列3.8度蓝玫瑰味,一直喝',imgUrl:"images/bg7.jpeg",nikename:'某某某小姐'}
                    ]
                },
                {number:1,desc:"克里丝塔法国动物奶油多拼多口味蛋糕","imgUrl":"images/party3.jpg","nowPrice":288,"oriPrice":300,
                    text:[
                        {word:'克里丝塔法国动物奶油多拼多口味蛋糕,初恋的味道',imgUrl:"images/bg5.jpg",nikename:'老少爷们'},
                        {word:'克里丝塔法国动物奶油多拼多口味蛋糕,不长胖',imgUrl:"images/bg6.jpg",nikename:'X先生'},
                        {word:'一直喜欢克里丝塔法国动物奶油多拼多口味蛋糕，生日快乐',imgUrl:"images/bg7.jpeg",nikename:'某某某小姐'}
                    ]
                },
                {number:1,desc:"湘霸王香辣鱿鱼15克铁板烧30邮包邮","imgUrl":"images/party4.jpg","nowPrice":"0.95","oriPrice":"1.00",
                    text:[
                        {word:'湘霸王香辣鱿鱼15克,初恋的味道',imgUrl:"images/bg5.jpg",nikename:'老少爷们'},
                        {word:'湘霸王香辣鱿鱼15克不长胖',imgUrl:"images/bg6.jpg",nikename:'X先生'},
                        {word:'一直喜欢湘霸王香辣鱿鱼15克',imgUrl:"images/bg7.jpeg",nikename:'某某某小姐'}
                    ]
                },
                {number:1,desc:"小姜澳洲直邮爆米花焦糖活动零食","imgUrl":"images/party5.jpg","nowPrice":28.8,"oriPrice":38,
                    text:[
                        {word:'小姜澳洲直邮爆米花,初恋的味道',imgUrl:"images/bg5.jpg",nikename:'老少爷们'},
                        {word:'小姜澳洲直邮爆米花不长胖',imgUrl:"images/bg6.jpg",nikename:'X先生'},
                        {word:'一直喜欢小姜澳洲直邮爆米花',imgUrl:"images/bg7.jpeg",nikename:'某某某小姐'}
                    ]
                },
                {number:1,desc:"魔术8000 奥利奥饼干还原魔术道具","imgUrl":"images/party6.jpg","nowPrice":12.00,"oriPrice":15,
                    text:[
                        {word:'魔术8000 奥利奥饼干还原魔术道具,好神奇',imgUrl:"images/bg5.jpg",nikename:'老少爷们'},
                        {word:'魔术8000 奥利奥饼干还原魔术道具，好好玩',imgUrl:"images/bg6.jpg",nikename:'X先生'},
                        {word:'魔术8000 奥利奥饼干还原魔术道具。好喜欢',imgUrl:"images/bg7.jpeg",nikename:'某某某小姐'}
                    ]

                }
            ]
        }
    ]
    $scope.slideBox=[
        {"imgUrl":"images/sb1.jpg",
            desc:" 金鹏 软烤孜然鱿鱼鱿足片碳烤章鱼足片500g海鲜特产 副食品零食 ",
            nowPrice:30.9,
            text:[
                {word:'金鹏 软烤孜然鱿鱼鱿足片碳烤章鱼足片好吃。朋友喜欢',imgUrl:"images/strawberry1.jpg",nikename:'田小姐的美丽时光'},
                {word:'金鹏 软烤孜然鱿鱼鱿足片碳烤章鱼足片，',imgUrl:"images/bg3.jpeg",nikename:'穿上西装的小新'},
                {word:'金鹏 软烤孜然鱿鱼鱿足片碳烤章鱼足片，童年的味道',imgUrl:"images/bg3.jpeg",nikename:'某某某'}
            ]

        },
        {"imgUrl":"images/sb2.jpg",
            desc:"俏嘴巴清水鱼 湖南特产小鱼仔 零食熟食 毛毛鱼仔 ",
            nowPrice:13.9,
            text:[
                {word:'俏嘴巴清水鱼 湖南特产小鱼仔好吃。朋友喜欢',imgUrl:"images/strawberry1.jpg",nikename:'田小姐的美丽时光'},
                {word:'俏嘴巴清水鱼 湖南特产小鱼仔，家人朋友赞不绝口',imgUrl:"images/bg3.jpeg",nikename:'穿上西装的小新'},
                {word:'俏嘴巴清水鱼 湖南特产小鱼仔，童年的味道',imgUrl:"images/bg2.jpeg",nikename:'某某某'}
            ]

        },
        {"imgUrl":"images/sb3.jpg",
            desc:"包邮重庆特产陈吉旺福小麻花零食800g礼盒装黑糖味",
            nowPrice:20.9,
            text:[
                {word:'陈吉旺福小麻花零食800g。朋友喜欢',imgUrl:"images/strawberry1.jpg",nikename:'田小姐的美丽时光'},
                {word:'陈吉旺福小麻花零食800g，家人朋友赞不绝口',imgUrl:"images/bg3.jpeg",nikename:'穿上西装的小新'},
                {word:'陈吉旺福小麻花零食800g，童年的味道',imgUrl:"images/milk.jpg",nikename:'某某某'}
            ]
        },
        {"imgUrl":"images/sb4.jpg",
            desc:"一定红燕麦巧克力500g营养麦片巧克力喜糖棒酥糖果批发零食大礼包 ",
            nowPrice:9.9,
            text:[
                {word:'红燕麦巧克力500g营养麦片。朋友喜欢',imgUrl:"images/strawberry1.jpg",nikename:'田小姐的美丽时光'},
                {word:'红燕麦巧克力500g营养麦片，家人朋友赞不绝口',imgUrl:"images/bg3.jpeg",nikename:'穿上西装的小新'},
                {word:'红燕麦巧克力500g营养麦片，童年的味道',imgUrl:"images/bg3.jpeg",nikename:'某某某'}
            ]

        },
        {"imgUrl":"images/sb4.jpg",
            desc:"抢【三只松鼠_牛嘎牛轧糖188gx2袋】休闲零食特产",
            nowPrice:23.9,
            text:[
                {word:'三只松鼠_牛嘎牛轧糖，好吃',imgUrl:"images/strawberry1.jpg",nikename:'田小姐的美丽时光'},
                {word:'三只松鼠_牛嘎牛轧糖.喜欢',imgUrl:"images/bg3.jpeg",nikename:'穿上西装的小新'},
                {word:'三只松鼠_牛嘎牛轧糖，棒棒棒',imgUrl:"images/bg1.jpeg",nikename:'某某某'}
            ]

        },
        {"imgUrl":"images/sb6.jpg",
            desc:"荣欣堂太谷饼2100g整箱山西特产早餐美食传统零食",
            nowPrice:24.9,
            text:[
                {word:'荣欣堂太谷饼，好吃',imgUrl:"images/strawberry1.jpg",nikename:'田小姐的美丽时光'},
                {word:'荣欣堂太谷饼，棒',imgUrl:"images/bg3.jpeg",nikename:'穿上西装的小新'},
                {word:'荣欣堂太谷饼，减肥',imgUrl:"images/bg2.jpeg",nikename:'某某某'}
            ]


        },
    ]
    $scope.firends=[]
    angular.forEach($scope.recommend,function(item){
      Array.prototype.push.apply( $scope.firends,item.products)
    })
    $scope.target=function(state){
        $state.go(state)
    }

})