---
layout: home
title: Relay
---
# What Does the Relay Do?

What is a relay?  The RLV permissions in your viewer are inactive until they are called by a scripted object you own.  The relay works to "translate" calls from objects you don't own through the relay, which you do own.  It's a handshake between these scripted objects and the RLV permissions in your viewer. 

There are many different RLV relays.  Most are independent attachments.  Since HUDs have been possible, most relays are HUDs.  OpenCollar is one of a small number of RLV scripted objects that have included an internal relay.  This can cause conflicts with the RLV restrictions in the collar itself.  For instance, if the Relay safeword clears a restriction, how is it to know that the same restriction was previously set by a collar owner in the collar itself?  

## Turbo Relay

The OpenCollar Turbo relay is an integrated HUD attachment. It is linked to the collar to give collar owners access to the Relay settings and prevent the collar wearer from changing those settings. This is now considered a temporary fix until a new integrated RLV relay is produced.

# Mode
  
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
