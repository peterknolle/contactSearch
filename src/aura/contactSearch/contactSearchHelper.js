({
	doSearch : function(component) {
		var action = component.get("c.getContacts"); 
 		
        action.setParams({
            searchTerm: component.find("searchTerm").get("v.value")
        });
 
        action.setCallback(this, function(a) {
            if (a.getState() === "SUCCESS") {
                var searchCompleteEvent = $A.get("e.c:contactSearchCompleteEvent");
                searchCompleteEvent.setParams({
                    contacts: a.getReturnValue()
                }).fire();
            } else if (a.getState() === "ERROR") {
                $A.log("errors", a.getError());
            }
        });
            
        $A.enqueueAction(action); 
	}
})