---
layout: home
title: Prefixes, Chat Commands and Other non-Menu Functions
---

# Using Chat Commands
In Second Life, the local chat line is also the line used for scripting calls. Any channel can be used; the channel that is visible as local chat is channel 0 and is used by default.  OpenCollar script calls include a prefix to direct the call, plus the call name. For instance, to call a menu directly, you can use the chat command with your prefix plus the menu name: 

> [prefix] menu 

calls the main menu.

# Prefixes

Your default prefix is the first two letters of your user name.  It can be changed by the collar owner only.  Wearers who have set an owner cannot change the prefix unless OwnSelf is checked.

To change the prefix, type: 

> [prefix] prefix [newprefix].

For instance:  Suppose your user name is joezipcode and you want to change jo to jz, type:  jo prefix jz.  

To reset the prefix to default:  

> [prefix] prefix reset  
 

### Global Prefixes

There are two global prefixes. * issues commands to everyone in range with the required level of access, and # issues commands to everyone in range with the required level of access except yourself. 

 For instance: * menu 

calls the main menu for every wearer to whom you have access in range of the call (20m by default) 

Please use this with care.  Just because someone is set to public or group access does not mean they have given you blanket permission to mess with their collar without engaging them in play or conversation first.

## Channel

The Channel number can also be changed this way. To change the channel number, type

> [prefix] channel [new number] or for instance:  jo channel 3 .  

Public chat is channel 0.  You can turn this off so the collar doesn't listen to chat commands in local chat.

> [prefix] channel 0 : enables the collar to listen to commands in local chat.  
[prefix] channel -1 : disables the collar from listening to commands in local chat.

# Safeword
The collar safeword is a powerful global tool that will revoke all collar settings and return the collar to default, with the exception of the lock, the access list and the relay settings.  It will release you from traps set through the relay.  If you don't want all your settings changed when you are trapped through the relay, use the relay safeword button instead (see Relay).
The default collar safeword is RED, all caps.  You can also type it on channel 1 [ /1 RED ] or in ooc brackets which cannot be blocked by an RLV command [ ((RED)) ].

You can change your safeword: 

[prefix] safeword [new safeword] or for instance: jo safeword BLUE.

# Some Useful Chat Commands 

[prefix] busted turns on touch notification: your collar will report when it is touched.  
[prefix] busted on/off toggles touch notification.  

[prefix] help : delivers the .help notecard from the collar.

[prefix] info : dumps info from Help / About into the local chat line

[prefix] name [newname] : changes the name of the wearer in collar chat messages such as couples animations.

[prefix] device name [newname] changes the name of the collar in menus and chat messages.   

[prefix] safeword off/on : disables or re-enables the collar safeword.
