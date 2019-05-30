 //画像hoverの時のコメントをつける
        $(function () {
            $('#js-workImg').hover(function () {
                //ここにクラスをつけるh処理  
                  //クラスをつけるとcssで
                console.log('fafsa');
                // $(this).attr('id', 'js-workImg__comment');
            }, function () {
                    console.log('inoue');
            }); 
        });