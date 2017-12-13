To call this menu:
>[prefix] relay

The relay is not an integrated part of the collar.  It may be turned off or the script deleted from the root prim without affecting other collar functions.  It is embedded in the collar to give collar owners access to the Relay settings and prevent the collar wearer from changing those settings.

What is a relay?  The RLV permissions in your viewer are inactive until they are called by a scripted object you own.  The relay works to "translate" calls from objects you don't own through the relay, which you do own.  It's a handshake between scripted objects and the RLV permissions in your viewer.  

# Settings

### Trusted  
Restricts use of the relay to avatars on the Access List.  Toggles with Ask and Auto.
>To add avatars to the Trusted list:  Set your relay to Ask. Then trigger a request from the desired object.  The Ask dialog will give an option to add the source or its owner to the Trusted or Block List.  
### Ask 
Requires scripted objects to send a request before applying restrictions.  Toggles with Trusted and Auto.
### Auto  
Allows objects to apply restrictions automatically without a prior request.  Toggles with Trusted and Ask.
### Off  
Unchecking Trusted, Ask, and Auto effectively turns the relay off.  Use this setting if you are wearing another relay.  
### Lite  
Permits only undressing and stripping by objects without a prior request.
### Land
When checked, permits restrictions from objects owned by the landowner to be applied without a prior request.  
### Pending  
Lists the names of objects from which the wearer still has pending requests.  Be careful when set to ask to clear requests by actively declining them to avoid a script memory overload in the relay.
### Sources
Lists the sources of current RLV restrictions.  
>To add sources to the Trusted / Blocked list:  First set your relay to Ask.  Then trigger a request.  The dialog will give you an option to add the Source or its Owner to the Trusted or Block List.

### Access Lists 
Lists Trusted and Blocked Objects and Avatars.

## Safeword  
When restrictions are enforced by an object through the relay, they may be lifted by pressing this button.  
* Helpless:  When active, turns off the wearer's access to the relay safeword.
* Smart: Activates smart strip in the relay.  