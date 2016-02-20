({
	handleContactSearchComplete : function(component, event, helper) {
		helper.refreshContactList(component, event.getParam("contacts"));
	}
})