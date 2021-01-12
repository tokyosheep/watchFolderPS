(function(){
    //charIDToTypeID  Converts from a four character code (character ID) to a runtime ID ??イベントのidと同じもの??
    //2017/10/25　これでPhotoshopからアクションを読み込めるが中身がよくわからない

    var gClassActionSet = charIDToTypeID( 'ASet' );
    var gClassAction = charIDToTypeID( 'Actn' );
    var gKeyName = charIDToTypeID( 'Nm  ' );
    var gKeyNumberOfChildren = charIDToTypeID( 'NmbC' );


    function ActionData() {//アクションセット内のアクションを読み込んでいる？
    	this.name = "";
    	this.children = undefined;
    	this.toString = function () {
    		var strTemp = this.name;
    		if ( undefined != this.children ) {
    			for ( var i = 0; i < this.children.length; i++ ) {
    				strTemp += " " + this.children[i].toString();
    			}
    		}
    		return strTemp;
    	}
    }    




        function GetActionInfo( setIndex, numChildren ) {
    	var actionInfo = new Array();
    	for ( var i = 1; i <= numChildren; i++ ) {
    		var ref = new ActionReference();
    		ref.putIndex( gClassAction, i );
    		ref.putIndex( gClassActionSet, setIndex );
    		var desc = undefined;
    		desc = executeActionGet( ref );
    		var actionData = new ActionData();
    		if ( desc.hasKey( gKeyName ) ) {
    			actionData.name = desc.getString( gKeyName );
    		}
    		var numberChildren = 0;
    		if ( desc.hasKey( gKeyNumberOfChildren ) ) {
    			numberChildren = desc.getInteger( gKeyNumberOfChildren );
    		}
    		actionInfo.push( actionData );
    	}
    	return actionInfo;
    }



    function GetActionSetInfo() {//大本の関数でおそらくこれでアクションセットを読み込む   
    	var actionSetInfo = new Array();
    	var setCounter = 1;
      	while ( true ) {
    		var ref = new ActionReference();
    		ref.putIndex( gClassActionSet, setCounter );
    		var desc = undefined;
    		try { desc = executeActionGet( ref ); }
    		catch( e ) { break; }
    		var actionData = new ActionData();
    		if ( desc.hasKey( gKeyName ) ) {
    			actionData.name = desc.getString( gKeyName );
    		}
    		var numberChildren = 0;
    		if ( desc.hasKey( gKeyNumberOfChildren ) ) {
    			numberChildren = desc.getInteger( gKeyNumberOfChildren );
    		}
    		if ( numberChildren ) {
    			actionData.children = GetActionInfo( setCounter, numberChildren );
    			actionSetInfo.push( actionData );
    		}
    		setCounter++;
    	}
    
    
    	return actionSetInfo;
    }

        var obj = GetActionSetInfo();
        return JSON.stringify(obj);
})();