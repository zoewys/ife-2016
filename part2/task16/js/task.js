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

    var table = document.getElementById('aqi-table');
    var cityInput = document.getElementById('aqi-city-input');
    var aqiValueInput = document.getElementById('aqi-value-input');
    /**
     * 从用户输入中获取数据，向aqiData中增加一条数据
     * 然后渲染aqi-list列表，增加新增的数据
     */
    var addAqiData = function(){
        var city = cityInput.value.trim();
        var aqiValue = aqiValueInput.value.trim();

        checkAddedData(city,aqiValue) && (aqiData[city] = aqiValue);
    };

    var checkAddedData = function(city,value){

        if(!city.match(/^[\u4e00-\u9fa5A-Za-z]+$/)){
            alert('城市名必须是中英文字');
            return false;
        }
        if(!value.match(/^[0-9]+$/)){
            alert('空气质量必须是整数');
            return false;
        }

        return true;
    };

    /**
     * 渲染aqi-table表格
     */
    var renderAqiList = function(){
        var trHtml = '' +
            '<tr>' +
                '<td>城市</td>' +
                '<td>空气质量</td>' +
                '<td>操作</td>' +
            '</tr>';

        for(var i in aqiData) {
            trHtml = trHtml +
                '<tr>' +
                    '<td>' + i + '</td>' +
                    '<td>' + aqiData[i] + '</td>' +
                    '<td><button data-city="' + i + '">删除</button></td>' +
                '</tr>';
        }

        table.innerHTML = trHtml;
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
    var delBtnHandle = function(city){
        // do sth.
        aqiData[city] && (delete aqiData[city]);

        renderAqiList();
    };

    var init = function(){

        // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
        var addBtn = document.getElementById('add-btn');
        addBtn.onclick = addBtnHandle;

        // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
        table.onclick = function(e){
            e.preventDefault();
            if(e.target.tagName = 'BUTTON'){
                var city = e.target.getAttribute('data-city');

                delBtnHandle(city);
            }
        }
    };

    init();
})();