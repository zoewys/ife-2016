/**
 * Created by zoe on 3/29/16.
 */

(function(){
    /**
     * aqiData，存储用户输入的空气指数数据
     * 示例格式：
     * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
     */
    var aqiData = {};

    /**
     * 从用户输入中获取数据，向aqiData中增加一条数据
     * 然后渲染aqi-list列表，增加新增的数据
     */
    var addAqiData = function(){

    };

    /**
     * 渲染aqi-table表格
     */
    var renderAqiList = function(){

    };

    /**
     * 点击add-btn时的处理逻辑
     * 获取用户输入，更新数据，并进行页面呈现的更新
     */
    var addBtnHandle = function(){
        addAqiData();
        renderAqiList();
    };

    /**
     * 点击各个删除按钮的时候的处理逻辑
     * 获取哪个城市数据被删，删除数据，更新表格显示
     */
    var delBtnHandle = function(e){
        // do sth.
        var btn = e.target;
        var table = e.currentTarget;
        var tr = getParentByTag(btn,'tr',e.currentTarget);

        table.deleteRow(tr.rowIndex);
        // renderAqiList();
    };

    var getParentByTag = function(element,tag,container){
        var parent;
        while(element.parentElement || element != container){
            if(element.parentElement.tagName == tag.toUpperCase()){
                parent = element.parentElement;
                break;
            }
            element = element.parentElement;
        }
        return parent;
    };

    var init = function(){

        // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

        // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
        var table = document.getElementById('aqi-table');
        table.onclick = function(e){
            e.preventDefault();
            if(e.target.tagName = 'BUTTON'){
                delBtnHandle(e);
            }
        }
    };

    init();
})();