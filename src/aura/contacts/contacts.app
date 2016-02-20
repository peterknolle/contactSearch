<aura:application >
    <aura:attribute name="appContacts" type="Contact[]"/>
    <aura:handler event="c:contactSearchCompleteEvent" action="{!c.handleContactSearchComplete}"/>
   	<div class="app">
        <c:contactSearch />
 	 
        <div class="list">
            <c:contactList aura:id="contactList" contacts="{!v.appContacts}"/>
        </div>
    </div>
</aura:application>