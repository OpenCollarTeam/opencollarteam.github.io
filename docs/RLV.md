---
layout: home
title: RLV
---

See in this page:  [Exceptions](#exceptions) | [Force Sit](#force-sit) | [Restrictions](#restrictions) | [Folders](#folders) 

To call the RLV menu: 
>[prefix] rlv

**NOTE**: RLV (Restrained Love Viewer) is a set of permissions coded into the viewer, that allows other avatars limited control over some viewer functions.  There are several approved [third party viewers](http://wiki.secondlife.com/wiki/Third_Party_Viewer_Directory) that allow you to enable / disable RLV. Among the most popular for many users are Firestorm, Restrained Love Viewer, and Singularity.

Please remember that one of the most basic safety features about RLV is your ability to turn it off and on in the viewer.  Any RLV restriction can be cleared by turning off RLV and relogging; or logging on in the official SL Viewer.

## On / Off
Toggles RLV on and off in the collar (not in the viewer).  The collar lock is not affected. Turning RLV Off in the collar does disable the collar relay and turns off access to the RLV menu.
>[prefix] rlv on/off

## Clear All
Clears all collar RLV restrictions, including those enforced by the relay.  Available to anyone with collar access but the wearer unless self owned.
>[prefix] clear

# RLV SETTINGS (new in V 7.4)  
This menu contains Exceptions, which lets you set Exceptions to RLV restrictions for Owners and Trusted; plus allows you to set values for Camera and Chat Restrictions.

##  Exceptions 
Here you can set Exceptions to RLV restrictions for Owners and Trusted.   Exceptions allow owners and trusted to communicate with you and teleport you when these are otherwise restricted.  When the boxes are checked the Exceptions are enforced.   
**Default Exceptions:** Owner is exempt by default.  

### List of Exceptions:

IM exempts owner/trusted from a block on the wearer's ability to send IMs.  
RcvIM exempts owner/trusted from a block on the wearer's ability to receive IMs.  
RcvChat exempts owner/trusted from a block on the wearer's ability to read local chat.  
RcvEmote exempts owner/trusted from a block on the wearer's ability to read emotes.  
Lure exempts owner/trusted from a block on the wearer's ability to accept a teleport offer.  
refuseTP exempts owner/trusted from the wearer's ability to refuse teleport offers.  When active, the wearer's viewer automatically accepts a tp offer from an owner.  More commonly known as "force TP."  On by default for owners, must be set for trust.

# Force Sit
Opens a menu of nearby objects on which the wearer can be forced to sit. When the wearer is force sat, forbid stand is also enforced. **(in V 7.3 the Strict setting did this)**  `[UNSIT]` **(previously GETUP)** unsits the wearer and also revokes forbid stand. 

>[prefix] sit (forces the wearer to sit and forbids stand)

>[prefix] unsit (forces the wearer to stand and allows stand)

# Restrictions
Opens a menu of restrictions and macros which are shortcuts to apply groups of restrictions.  When the boxes are checked, the restrictions are active.  **Ability to manage macros is new in V 7.4**.  Each button gives you the option to add, replace, or clear the restriction or macro.  Add will add the restriction to your existing restrictions if any.  Replace will replace existing restrictions with the one on the button.  Clear will end the restriction.
>[prefix] restrictions  
 
Frequently used restrictions are on the same page as the macros.  They include:   
* Hear: (single restriction) `@rcvchat` restricts wearer's ability to receive chat.  
* Talk: (single restriction) `@sendchat` restricts wearer's ability to send chat.  
* Touch: (single restriction) `@touchworld` restricts wearer's ability to touch rezzed objects and avatars.  

Macros include:  
* Dress:  Restricts the wearer's ability to add or remove attachments and clothing layers. [prefix] forbid dress / allow dress
* Stray: Restricts the wearer's ability to accept teleport offers, teleport to landmarks and map locations, sit on an object from a distance greater than 1 meter from the object center; and teleport to a  point on the landscape. [prefix] forbid stray / allow stray
* Rummage: This group restricts building abilities including: edit, open the inventory window, rez objects, view scripts and textures. [prefix] forbid rummage / allow rummage
* Dazzle: uses RLV to enforce the debug setting "RenderResolutionDivisor" and create a blurred vision of the environment on the viewer screen. [prefix] forbid dazzle / allow dazzle
* Daze:  This group restricts navigation data.  When active the wearer cannot see names, hovertext (group tags), minimap, world map, or locations at the viewer top menu. [prefix] forbid daze / allow daze
* IM:  Restricts ability to send and receive IMs.  

### Manage
Here you can save a group of restrictions as a new macro, and Delete an existing macro.

### Individual

List of individual restrictions are also grouped categorically for convenience but are applied individually. These can be applied and removed by toggling the button.  
* Chat: Includes individual restrictions having to do with local chat, IMs and gestures:   
> emote, sendchat, rcvchat, rcvemote, whisper, normal, shout, sendim, rcvim, starim, sendgesture  
* Show/Hide: Includes individual restrictions that hide Locations, Maps, and hovertext:  
> showinv, showminmap, showworldmap, showlock, shownames, shownametags, shownearby, showhovertext, showhovertexthud, showhovertextworld, showhovertextall  
* Teleport: Includes individual restrictions involving teleportation:   
> tplm, tploc, tplocal, tplure, tprequest  
* Misc:  At the moment just one miscellaneous individual restriction, `@acceptpermission` which automatically accepts all attach and take control permission requests.
* Edit/Mod: Includes individual restrictions having to do with rezzing and editing objects, textures, scripts, and notecards. 
> edit, editobj, rez, viewnote, viewscript, viewtexture   
* Interact:  Includes individual restrictions having to do with touch:   
> fartouch, interact, touchattach, touchattachself, touchattachother, touchhud, touchworld, touchall   
* Movement:  Includes individual restrictions having to do with Running, Flying, Jumping, Sitting and Standing:  
> fly, jump, unsit, sit, sittp, standtip, alwaysrun, temprun  
* Camera:  Includes blurring view, unlock camera, camera minimum and maximum distance:  
> camunlock, blur view, setcam_avdistmax:2 (default value), setcam_avdistmin:1 (default value)
* Outfit:  Includes individual restrictions on adding and removing clothing and attachments:   
> addattach, remattach, addoutfit, remoutfit

## Relay
This button in RLV brings up the relay menu.  See [Relay](/docs/Relay) for more.
To call the relay menu:
>[prefix] relay

# Folders
Folders is used to add, and detach individual items to and from existing worn outfits.  To add and detach items, the items or links to them must be in an #RLV folder.

To call this menu:
> [prefix] folders

**Making the #RLV Folder**: The wearer creates a top folder in inventory named #RLV for this menu to work. The name must be exactly these four characters [#RLV] and it *must* be a top folder, *not* a sub folder of any other folder in the inventory. It allows users and scripted objects to force wear the clothing and attachments contained in those folders.  

Once you have your #RLV folder set up, make folders in #RLV for attachments you want to allow other avatars to force you to wear.  These usually include items like cuffs and gags (to force wear complete outfits, see .outfits below). Group them in an easy to read, intuitive way so users can find them without paging through dozens of unrelated folders.  

>Sample folder arrangement:  #RLV > Gags > Ringgag | Ballgag where the ringgag and the ballgag are each in their own folder, inside the "gags" folder, inside #RLV.  

## Configure
The front page of the Folders menu includes the **Configure** button and your first level of folders in #RLV.  
In **Configure** you can set the desired level of access to your folders to Trusted, Group, or Public in addition to Owner (Owner is always on).  

## Actions

When you select one of your folders buttons you will get to your first level of subfolders.  There you will see the **Actions** button.  Actions to apply to each folder or subfolder include:

- Add all : adds the entire contents of the folder including its subfolders.  
- Detach All : detaches the entire contents of the folder including its subfolders.
- x/vLock att. / all:  Prevents the wearer from attaching the contents of this folder and its subfolders.  

When you get to the bottom folder that has only items in it, not subfolders, the remaining choices are:  
- Detach this
- x/vLock Detach this  

Folders and subfolders may be worn by chat command, for instance:

>[prefix] &ringgag adds the contents of the folder named ringgag to the wearer.  
>[prefix] &&gags adds the contents of the folder named gags and all its subfolders.  
>[prefix] +ringgag wears the contents of the folder named ringgag  
>[prefix] ++gags wears the contents of the folder named gags and all its subfolders  
>[prefix] -ringgag removes the contents of the folder named ringgag.  
>[prefix] --gags removes the contents of the folder named gags and its subfolders  


### Using a (nostrip) tag:

Appending a tag to the end of a folder name in inventory blocks RLV devices from stripping the contents of the folder. It does not work on a top folder, only the folder immediately containing the item you don't want stripped, or on the name of that item itself. **You will not need to use (nostrip) if your folders are set up for V 7.4 with a lock on the .core folder.**  When locked, .core already prevents its contents from being removed.

## More on RLV

Davros Harkness' RLV folders walkthrough [here](https://davrosharkness.wordpress.com/2018/01/31/rlv-folders/)  

