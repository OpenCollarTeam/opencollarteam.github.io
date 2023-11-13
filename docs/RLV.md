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

##  Exceptions 
Here you can set Exceptions to RLV restrictions for Owners and Trusted, and create custom exceptions for specific individuals.   Exceptions allow owners and trusted to communicate with you and teleport you when these are otherwise restricted.  When the boxes are checked the Exceptions are enforced.

To create custom Exceptions, click the custom button, then click +ADD. You will be asked to provide a name for this custom exception, and then a UUID for the individual. For example, you might enter "Bob" as the name, and then Bob's UUID. You'll then get the standard page of exceptions - click the ones you want active for that individual. You will now find a button in the custom submenu of exceptions with the name 'Bob' and can change the exceptions set for that user by clicking this button. Custom exceptions can be removed entirely with the -REM button.<p>
  
**Default Exceptions:** Owner is exempt by default.  

### List of Exceptions:

IM exempts owner/trusted from a block on the wearer's ability to send IMs.  
RcvIM exempts owner/trusted from a block on the wearer's ability to receive IMs.  
RcvChat exempts owner/trusted from a block on the wearer's ability to read local chat.  
RcvEmote exempts owner/trusted from a block on the wearer's ability to read emotes.  
Lure exempts owner/trusted from a block on the wearer's ability to accept a teleport offer.  
ForceTP determines the wearer’s ability to refuse teleport offers from owner/trusted.  When active, the wearer’s viewer automatically accepts a tp offer from an owner.  

# Force Sit
Opens a menu of nearby objects on which the wearer can be forced to sit.  
* **Strict Sit Checkbox** When Strict Sit is checked, a block on Unsit (@unsit=n, previously known in some collar menus as Forbid Stand) will be enforced when Force Sit is used.
* **[UNSIT]** (previously GETUP or STANDNOW) unsits the wearer. Note that this may fail if there is a separate unsit restriction in place, though if this button is pressed by a user with full Owner permission, it will override any unsit restriction placed on the wearer by the collar. 

>[prefix] sit (forces the wearer to sit and forbids stand)

>[prefix] unsit (forces the wearer to stand and allows stand)

# Restrictions
Opens the menu to allow setting restrictions. You will see a list of preset restrictions and buttons for LIST PRESETS, [ADVANCED] and [CUSTOMIZE]. The preset restrictions provide simple to understand groups of restrictions organized by function. Click a preset button to  toggle it on or off - if the box is ticked the restriction is in place, if it's not ticked it isn't. 

You can see exactly what individual restrictions each preset button does by pressing the LIST RESTRICTIONS button. You can use the [ADVANCED] button to access a complete list of all available RLV restrictions, and set them individually. The [CUSTOMIZE] button allows you to create or remove restriction preset buttons (see below) and change certain settings that impact how some restrictions work.

### Presets

Default restriction presets are:  

* Hear: (single restriction) `@rcvchat` restricts wearer's ability to see local chat.  
* Talk: Restricts wearer’s ability to send chat (talk in local), while allowing full length emotes. If the muffle setting is in place, instead of muting the wearer completely, the wearer's speech in local chat will come out muffled.  
* Touch: (single restriction) `@touchworld` restricts wearer's ability to touch rezzed objects and avatars. 
* Stray: Restricts the wearer's ability to accept teleport offers, teleport to landmarks and map locations, sit on an object from a distance greater than 1 meter from the object center; and teleport to a  point on the landscape. 
* Inventory: This group restricts building abilities including: edit, open the inventory window, rez objects, view scripts and textures.
* Dress:  Restricts the wearer's ability to add or remove attachments and clothing layers. [prefix] forbid dress / allow dress
* Blur: uses RLV to enforce the debug setting "RenderResolutionDivisor" and create a blurred vision of the environment on the viewer screen. The amount of blurring can be set from the camera settings within the [CUSTOMIZE] submenu
* Names/Map:  This group restricts navigation data.  When active the wearer cannot see names, hovertext (group tags), minimap, world map, or locations at the viewer top menu. [prefix] forbid daze / allow daze
* IM:  Restricts ability to send and receive IMs.  
 
 Using chat commands to set and unset preset restrictions: (note that you must use the capital letter in the prefix, i.e "Hear" not "hear")
 >[prefix] preset add [button name]  - i.e. "[prefix] preset add Hear" will apply the Hear preset restriction</p>
 >[prefix] preset clear [button name]  - i.e. "[prefix] preset clear Hear" will remove the Hear preset restriction</p>
 


### Advanced
This submenu allows individual restrictions to be put in place. Restrictions are grouped in submenus for convenience but are applied individually. Navigate to the appropriate submenu for the restriction you are looking for and click the button to togge it on or off - checked means it's on, unchecked means it's off. 

Chat commands (use the button name for restrictions, not the internal RLV restriction name, and follow capitalization):
>[prefix] restriction add (button) - adds the restriction as if the button had been toggled on.
>
>[prefix] restriction rem (button)  - removes the restriction as if the button had been toggled off.
>
>[prefix] restriction list - lists all current restrictions.

The individual restrictions are grouped in submenus for convenience but are applied individually. These can be applied and removed by toggling the button.  
* Chat: Includes individual restrictions having to do with local chat, IMs and gestures:   
>"Emote Trunc" (emote restriction, stops emotes being truncated by sendchat) , sendchat, rcvchat, rcvemote, whisper, normal, shout, sendim, rcvim, startim, sendgesture and "Send emote" (redirects emotes to private channel to stop emotes). 
* Show/Hide: Includes individual restrictions that hide Locations, Maps, and hovertext:  
> showinv, showminmap, showworldmap, showlock, shownames, shownametags, shownearby, showhovertext, showhovertexthud, showhovertextworld, showhovertextall  
* Teleport: Includes individual restrictions involving teleportation:   
> tplm, tploc, tplocal, tplure, tprequest  
* Misc: Misc restrictions which you probably shouldn't use unless you know what you're doing!
> acceptpermission, setenv, setdebug
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

### Customize
The [CUSTOMIZE] button in the Restrictions menu allows you to edit presets and change settings for some restrictions. The Camera button allows you to set the minimum and maximum camera distance values and the amount of blurring to be applied when those particular restrictions (or the Blur preset) are applied. The Muffle button allows you to toggle speech muffling on or off - this comes into effect when the TALK preset is applied. With Muffle unticked, the Talk restriction preset stops the wearer chatting in local chat altogether, while with it ticked their speech will be muffled instead.

From this menu, you can also edit the preset buttons. To create a new preset button, go to the [ADVANCED] menu and select the individual restrictions you want to make up this preset. The restrictions you have currently selected will be shown in the menu prompt text. Once you have the set of restrictions you want to save as a preset, go to the [CUSTOMIZE] menu and click Save Preset. You will be asked to name this preset. Pick something memorable but short (buttons only show about 12 letters). Your new preset will now show up as a button with the name you picked in the Restrictions menu, and clicking this button will toggle the set of restrictions you defined on and off, working just like the default preset buttons work.

You can delete a custom preset or remove one of the default presets by clicking Del. Preset and then selecting the preset button you want to remove. If you wish to restore the presets to the default set (for example if you removed a preset and want it back), click the Restore button.

# Relay
This button in RLV brings up the relay menu.  See [Relay](/docs/Relay) for more.
To call the relay menu:
>[prefix] relay

# Folders
Folders is used to add, and detach individual items to and from existing worn outfits.  To add and detach items, the items or links to them must be in an #RLV folder.

To call this menu:
> [prefix] folders

**Making the #RLV Folder**: The wearer creates a top folder in inventory named #RLV for this menu to work. The name must be exactly these four characters [#RLV] and it *must* be a top folder, *not* a sub folder of any other folder in the inventory. It allows users and scripted objects to force wear the clothing and attachments contained in those folders.  

Once you have your #RLV folder set up, make folders in #RLV for attachments you want to allow other avatars to force you to wear.  These usually include items like cuffs and gags (to force wear complete outfits, see .outfits below). Group them in an easy to read, intuitive way so users can find them without paging through dozens of unrelated folders.  

**Links or Original?** Links will work, *but* if you want to lock folders on or off using Lock Attach or Lock Detach in Actions (see below), the original to which the link points must be inside #RLV.  

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
>[prefix] -ringgag removes the contents of the folder named ringgag.  
>[prefix] --gags removes the contents of the folder named gags and its subfolders  


### Using a (nostrip) tag:

Appending a tag to the end of a folder name in inventory blocks RLV devices from stripping the contents of the folder. It does not work on a top folder, only the folder immediately containing the item you don't want stripped, or on the name of that item itself. **You will not need to use (nostrip) if your folders are set up for V 8 with a lock on the .core folder.**  When locked, .core already prevents its contents from being removed by collar Outfits, Detach, Undress, and Relay.


