/**
 * Created by zoe on 4/6/16.
 */
(function(){
    var timeInput = document.getElementById('time');
    var root = document.getElementById('root');

    var nodeArray = [];

    var preOrder = function(node){
        nodeArray.push(node);

        if(node.firstElementChild){
            preOrder(node.firstElementChild);
        }
        if(node.lastElementChild){
            preOrder(node.lastElementChild);
        }
    };

    var inOrder = function(node){
        if(node.firstElementChild){
            inOrder(node.firstElementChild);
        }

        nodeArray.push(node);

        if(node.lastElementChild){
            inOrder(node.lastElementChild);
        }
    };

    var postOrder = function(node){
        if(node.firstElementChild){
            postOrder(node.firstElementChild);
        }
        if(node.lastElementChild){
            postOrder(node.lastElementChild);
        }

        nodeArray.push(node);
    };

    var animation = function(){
        var time = timeInput.value;
        var i = 0;
        var changeCss = function(){
            if(i>0){
                removeActive(nodeArray[i-1]);
            }
            if(i<nodeArray.length){
                addActive(nodeArray[i]);
                i++;
                setTimeout(function(){
                    changeCss();
                },time);
            }
        };
        changeCss();
    };

    var addActive = function(element){
        element.className = element.className + ' active';
    };

    var removeActive = function(element){
        element.className = element.className.replace('active','');
    };

    var main = function(){
        var preBtn = document.getElementById('pre-btn');
        var inBtn = document.getElementById('in-btn');
        var postBtn = document.getElementById('post-btn');

        preBtn.onclick = function(){
            nodeArray = [];
            preOrder(root);
            animation();
        };

        inBtn.onclick = function(){
            nodeArray = [];
            inOrder(root);
            animation();
        };

        postBtn.onclick = function(){
            nodeArray = [];
            postOrder(root);
            animation();
        }
    };

    main();

})();