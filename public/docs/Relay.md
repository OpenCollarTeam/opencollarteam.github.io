# What Does the Relay Do?

What is a relay?  The RLV permissions in your viewer are inactive until they are called by a scripted object you own.  The relay works to "translate" calls from objects you don't own through the relay, which you do own.  It's a handshake between these scripted objects and the RLV permissions in your viewer.

There are many different RLV relays.  Most are independent attachments.  Since HUDs have been possible, most relays are HUDs.  OpenCollar is one of a small number of RLV scripted objects that have included an internal relay.  This page is updated for the Integrated Relay that can be installed in V 7.5

# Turbo Relay vs. Integrated Relay

The Turbo Relay attached HUD ships with V 7.5.  Get the Relay HUD from the collar Relay menu, it is an object inside the collar and updater that you add to an HUD point.  The actual HUD does not need to be visible, you can set it to transparent or slide it off screen.

The Integrated relay is a slim, lower script relay with minimal settings.  It is single source.  It will not cover messages from more than one RLV device at a time.

# Integrated Relay Menu

## Mode
 - **Off** When the Off checkbox is selected or white, the relay is off.
 - **Ask** When Ask is selected or white, you will get a permission request from the Relay before the trap is sprung.
 - **Auto** When Auto is selected or white, you will not get a permission request and will be trapped automatically.

 ## Wearer  
 This button toggles the wearer's ability to change the relay settings.  On by default.  
 ## REFUSE
 This button will release the wearer from an unwanted trap, without releasing other collar restrictions not initated by the relay.

# Turbo Relay

## Mode

### Ask
Requires scripted objects to send a request before applying restrictions.   
### Semi-Auto  
Allows objects to apply force sit automatically without a prior request.  Sends a request to apply restrictions.
### Off  
Turns the relay off.  
### Auto (w/Blocks).
The relay is on auto but includes a blacklist.   
### Auto (w/oBlocks).
The relay is on auto and has no blacklist.

## Safeword  
When restrictions are enforced by an object through the relay, they may be lifted by pressing this button.  
* Helpless:  When active, turns off the wearer's access to the relay safeword.
* Smart: Activates smart strip in the relay.  
