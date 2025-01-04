---
layout: home
title: Prefixes, Chat Commands and Other non-Menu Functions
---

# Using Chat Commands
**see also** [Complete List of Chat Commands](/docs/Chat-Commands.md)    
In Second Life, the local chat line is also the channel used for scripting calls. Calls are sent on channels.  Any channel number can be used; the channel that is visible as local chat is channel 0 and is used in the collar by default.  Channel 1 is also turned on by default.  You can change these settings.  OpenCollar calls include a prefix to direct the call, plus the call name. To call a menu directly, you can use the chat command with your prefix plus the menu name: 

> [prefix] menu : calls the main menu in local chat.
> /1 [prefix] menu : calls the main menu on channel 1.
 
For instance:  If your username or your sub's is joe zipcode, and you want the call to appear in local chat, type:  jo menu

# Prefixes

The wearer's default prefix is the first two letters of their user name.  It can be changed by the collar owner only.  Wearers who have set an owner cannot change the prefix unless they are also an owner.   
To change the prefix (owner access only), type: 

> [prefix] prefix [newprefix]

For instance:  Suppose your user name is joezipcode and you want to change jo to jz, type:  jo prefix jz   

To reset the prefix to default:  

> [prefix] prefix reset  
 

### Global Prefixes

There are two global prefixes. * issues commands to everyone in range with the required level of access, and # issues commands to everyone in range with the required level of access except yourself. 

 For instance: 
 
 > \* menu : calls the main menu for every wearer to whom you have access in range of the call (20m by default) 

Please use this with care.  Just because someone is set to public or group access does not mean they have given you blanket permission to mess with their collar without engaging them in play or conversation first.

## Channel

The Channel number can also be changed this way (owner access only).  To change the channel number, type

> `[prefix] channel [new number]` or for instance:  jo channel 3   

Public chat is channel 0.  You can turn this off so the collar doesn't listen to chat commands in local chat.  Go to Settings and uncheck Listen 0.  
**Note** It is advisable to turn off channel 0 to reduce script time!

> [prefix] channel 0 : enables the collar to listen to commands in local chat.  
> [prefix] channel -0 : disables the collar from listening to commands in local chat.

# Safeword
The collar safeword is a powerful global tool that will revoke all collar settings and return the collar to default, with the exception of the lock, the weld feature, the access list, and the relay settings.  It will release you from traps set through the relay.  If you don't want all your settings changed when you are trapped through the relay, use the relay safeword button instead (see Relay).
The default collar safeword is RED, all caps.  You can also type it on channel 1 [ /1 RED ] or in ooc brackets which cannot be blocked by an RLV command [ ((RED)) ].

You can change your safeword (owner access only): 

> [prefix] safeword [new safeword] : or for instance: jo safeword BLUE

# Some Useful Chat Commands 

> [prefix] touchnotify : turns on or off touch notification: your collar will report when it is touched. 

> [prefix] getauth  :  reports what your current authorization level is on the collar.

> [prefix] help : delivers the .help notecard from the collar.

> [prefix] info : dumps info from Help / About into the local chat line.

> [prefix] name [newname] : changes the name of the wearer in collar chat messages such as couples animations.

> [prefix] device name [newname] changes the name of the collar in menus and chat messages.   

> [prefix] safeword off/on : disables or re-enables the collar safeword.
