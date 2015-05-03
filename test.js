E.use( 'drag', function(){
    // 在回调中实例化拖拽
});

var drag1 = new E.ui.Drag( '#box1' );
 
// 绑定拖拽开始时的事件
drag1.on( 'dragstart', function( e ){
        E( e.drag ).css( 'backgroundColor', '#666' );
    })
    // 支持链式调用，绑定结束时的事件
    .on( 'dragend', function( e ){
        E( e.drag ).css( 'backgroundColor', '#333' );
    });