/**
 * Created by zoe on 3/30/16.
 */

(function(){

    // node status "selected" "expanded" "unexpanded" "searched"




    /*** Private Methods ****/

    var _tools = {
        // string format
        format:function(){
            var args = Array.prototype.slice.call(arguments, 1);
            return format.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
                    ;
            });
        },
        copyObject:function(data){
            return JSON.parse(JSON.stringify(data));
        }
    };

    var _setData = function(data){
        var self = this;
        self.data = data;
        self.raw = self.copyObject(data);

        // rerender tree menu
    };

    var _getData = function(){
        return this.raw;
    };

    var _init = function(){
        
    };

    // render tree menu html
    var _render = function(){

    };

    // define constructor
    this.TreeMenu = function(config){

        // default config
        var defaults = {
            
            // document.querySelector "required"
            itemSelector:'#tree',
            
            // menu data
            data:null,
            
            iconCls:{
                expanded:'fa fa-chevron-down',
                unexpanded:'fa fa-chevron-right'
            }
        };
        
        _init(config);

    };


    /*** Public Methods ****/
    
    // set data to tree menu
    TreeMenu.prototype.setData = function(){
        return _setData.apply(this,arguments);
    };
    // get data from tree menu
    TreeMenu.prototype.getData = function(){
        return _getData.apply(this,arguments);
    };
    // add a node under selected node and change data
    TreeMenu.prototype.addNode = function(){
        
    };
    // remove selected node and change data
    TreeMenu.prototype.removeNode = function(){

    };
    // search node by name/id/
    TreeMenu.prototype.getNodeByParams = function(){

    };

})();