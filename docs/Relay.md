---
layout: home
title: Relay
---
# What Does the Relay Do?

What is a relay?  The RLV permissions in your viewer are inactive until they are called by a scripted object you own.  The relay works to "translate" calls from objects you don't own through the relay, which you do own.  It's a handshake between these scripted objects and the RLV permissions in your viewer. 

There are many different RLV relays.  Most are independent attachments.  Since HUDs have been possible, most relays are HUDs.  OpenCollar is one of a small number of RLV scripted objects that have included an internal relay.  
# Relay Menu  
 - **Off** When the Off checkbox is selected or white, the relay is off.
 - **Ask** When Ask is selected or white, you will get a permission request from the Relay before the trap is sprung.
 - **Auto** When Auto is selected or white, you will not get a permission request and will be trapped automatically.
 - **Trust Owner** When Trust Owner is checked, the relay will respond automatically to a trap owned by a collar owner.
 - **Trust Trusted** When Trust Trusted is checked, the relay will respond automatically to a trap owned by anyone with Trusted access on the collar.
 - **Wearer** This button toggles the wearer's ability to change the relay settings.  On by default. 
 - **Helpless** This button turns off the wearer's ability to escape a trap by pushing "Refuse" in the relay menu (see below).
## REFUSE
 This button appears when the wearer is trapped and will release them from an unwanted trap, without releasing other collar restrictions not initated by the relay.  The OpenCollar relay also responds to the global collar safeword.
 

