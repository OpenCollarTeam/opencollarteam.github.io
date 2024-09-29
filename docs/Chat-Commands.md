---
layout: home
title: Chat Commands
---
# List Chat Commands

(markup work in progress-- thanks to Medea Destiny for compiling and writing most of this)   

Below is the complete list of chat commands.  What's listed are the calls after the prefix.  See [Prefixes, Chat Commands and Other Non-Menu Functions](/docs/Prefixes,-Chat-Commands-and-Other-Non-Menu-Functions) for how to learn, use, and change the wearer's prefix.
Help us make this list complete ! Please submit any chat commands you find that are not listed here, or ones that are listed here that no longer work, via pull request to this page.

**IMPORTANT:** 
* Many chat commands do not *need* a space after the prefix but some do, especially chat commands with more than a single term.  All chat commands do work with a space after the prefix.  
* Not all chat commands are case-insensitive (i.e some will require you to capitalize things correctly). If you see a command in the list below with a capital letter, you have to use it in that form. When you're referring to a specific function (for example the name of an animation or a restriction preset), use the capitalization of that animation, function, etc. There are a few places where we've made things case-insensitive, but not everywhere. If something doesn't work as expected, check your capitalization.
  
## MENU SHORTCUTS

### Primary menus:

`menu` calls the Main Menu   
   
`access`  calls the Access (formerly "auth") Menu  
`animations` or `menu animations` calls the Animations Menu   
`apps`  calls the Apps Menu  
`exceptions` calls the Exceptions Menu in RLV  
`help/about`  calls the Help/about Menu    
`leashmenu` calls the Leash Menu   
`relay` calls the Relay Menu  in RLV   
`restrictions`  calls the Restrictions Menu   
`rlv`  calls the main RLV Menu   
`settings` calls the Settings Menu 

### Submenus:
`pose` calls the pose menu in Animations   
`couples`  calls the couples menu in Animations   
   
`leash configure`  calls the leash configuration menu in Leash  

`customize`  calls the Customize menu in Restrictions   
`menu managecamera` and `menu managecamera2` call the camera control menus in Restrictions > Customize   
`menu managechat` calls the muffle menu in Restrictions > Customize   
`sit` calls the menu to pick a target for force sit in the RLV menu     
`advanced` calls the Advanced menu in Restrictions   

#### Clothing/attachments:
`undress`  calls the undress menu in Apps   
`detach` or `menu detach` calls the Detach menu in Apps   
`outfits` or `menu outfits` calls the Outfits menu in Apps   
`folders`  calls the Folders menu in RLV   

#### Apps menus:
`appearance` calls the main resizer menu in Settings   
`badwords` calls the badwords menu in Apps (if installed)   
`themes` calls the themes menu in Apps   
`menu Capture` calls the capture menu in Apps   
`menu bell`  calls the bell menu in Apps   
`tp`  calls the bookmarks menu   
`titler` or `menu titler` calls the titler menu in Apps   
`label` or `menu label`  calls the label menu in Apps   
timer / menu timer  calls the timer menu in APps   


## GENERAL FUNCTIONS

`lock` locks the collar   
`unlock` unlocks the collar   
    
`fix` or `fix menus` repairs missing menus and reboots the collar.  Button in Settings.  
`update` searches for an updater owned by the wearer, and runs the update.  Button in the Help/About menu.   
`help`  sends a help notecard and a link to the web manual.  Button in Help/About.  
`touchnotify` toggles notification of collar touches on/off.   
`allowhide`  toggles allowing collar wearer to hide collar on/off. Button in Settings.   
`channel [number]` - changes the listen channel to a chosen number.   
`getauth` tells you your access level in private chat.   
`print auth` lists all users auth levels (owners, trusted, block) etc. in private chat.  Button in access, available to wearer and owner only.   
`info` prints channel, safeword, prefix and collar version in private chat.   
`reboot`  reboots the collar. Button in Help/About.    

`prefix` reports the current prefix.  Owner only.   
`prefix [newprefix]` changes the prefix to desired string.  Owner only.   
`prefix reset` resets prefix to default (first two letters of user name). Owner only.   

`[safeword]` **Does not require a prefix.**  Clears all restrictions in the collar excluding the collar lock and including the leash. Default is RED.   
`safeword` prints the current safeword or tells if the safeword is disabled.   
`safeword off` disables the safeword.   
`safeword [newsafeword]` resets the safeword to the desired word and enables it if it is disabled.   

`runaway`  starts the runaway process to clear the Access settings, removing all owners/trusted/block/public/group.   

`weld` starts the weld process. Requires wearer consent.   

`name`  prints the name of the collar wearer.   
`name [newname]` changes the name of the collar wearer in collar messages.  
`device name` prints the current collar name.   
`device name [newname]` changes the name of the collar in collar messages.   

`print settings` prints out all stored settings.  Button in Settings menu.  
`load` loads settings from .settings notecard.  Button in Settings.   
`load url [url]` loads settings from a text file on the web.   

## ADDING OR REMOVING OWNERS, ETC.

`add owner` `add trust` `add block` Opens a selection menu to add nearby avatars to owner / trust /block lists.       
`rem owner` `rem trust` `rem block` opens a selection menu to remove names from owner / trust / block list.      
`add owner [uuid]` `add trust [uuid]` `add block [uuid]` adds an owner/trusted/blocked to list by key, remotely.      
`rem owner [uuid]` `rem trust [uuid]` rem block [uuid]`  removes an owner/trusted/blocked from list by key.        

## ANIMATIONS
`[pose name]` plays a collar pose.   
`stop` or `release` stops a collar pose.   
`up / down` moves pose offset up or down. Only use while the desired collar pose is active.   
`standoffset on / standoffset off` switches offsets for standing (no pose active) on or off.   
`animlock`  toggles animlock on or off.   
`posture on / posture off` switches posture collar anim (stiff neck) on or off.   
`[couple anim]` animates the wearer in a couple animation with command issuer.  Insert the name of the couple animation in the brackets.   
`[couple anim] [nearby avatar name]` animates the wearer in a couple animation with a nearby avatar.   
`stop couples`  stops playing a couple animation.   
`couples verbose on / couples verbose off` toggles verbose chat for couple animations on or off.   

## LEASHING

`yank` or `beckon` Pulls the wearer closer, unseating them if seated if they are leashed.  
`grab` or `leash` takes the leash.  Ranked:  Owners can take the leash even if the wearer is already leashed by another avatar with access.  
`post` or `anchor` opens a menu to select an object to leash wearer to.  
`anchor [uuid]` leashes the wearer to object with key uuid.    
`follow me` engages an invisible leash, making the collar wearer follow the command issuer.  
`follow [uuid]` makes the collar wearer follow an avatar by avatar key.  
`follow` opens a selection menu from nearby chat to select who to follow.  
`unleash` or `unfollow` stops leashing / following.  
`stay` disallows movement unless pulled by leash.  Not in leash menu but still available as a chat command.  
`unstay` or `move` revokes stay, allowing movement again.  
`strict on` / `strict off` turns leash strict mode on or off.     
`turn on` / `turn off` turns the wearer in the direction of the leasher and stops it again.   
`pass` opens a menu to select an avatar in nearby chat to pass the leash to.   
`pass [uuid]` passes the leash to a uuid where UUID can be a person or object.   
`length` opens the leash length menu.   
`length [value]` - sets the length of the leash to a whole number value from 1 - 60.   
`give holder` gives a leash holder to the command issuer.   
`particle reset` resets the leash particle settings.   

## CLOTHES/ATTACHMENTS

#### Folders
`-[foldername]` removes first #RLV folder found with the name that matches the command name.  Buttons in RLV > Folders.   
`--[foldername] removes first #RLV folder found  with the matching name and all its subfolders.   
`&[foldername]` Adds first #RLV folder found with the matching name.   
`&&[foldername]` Adds first #RLV folder found with the matching name and its subfolders.    
`+[foldername]` Wears first #RLV folder found with the matching name.    
`++[foldername]` Adds first #RLV folder found with the matching name.   

#### Outfits
`wear` opens list of outfits to wear. Corresponds to Browse button in Outfits.   
`wear` [outfitname]` wears outfit with the matching name   
`naked` removes all contents of outfits folders except for contents of core folder (and everything outside .core if strip all mode is on)   
#### Other Apps
`undress lock [systemlayername]` locks a system clothing layer by the name of the layer, for instance, shirt, undershirt, etc.   
`undress unlock [systemlayername]` a system clothing layer by the name of the layer   

`detach` opens a list of attachments to remove by the name of the attachment.  

## RLV RESTRICTIONS/EXCEPTIONS & FUNCTIONS

`rlv on` `rlv off` - switches RLV functions in the collar on or off.    
`clear` clears all RLV restrictions except the collar lock.  Not available to owned wearers.   
`rlv handshakes [number]` sets the number of times the collar will attempt to confirm RLV is active in the viewer. Default is 3 and if this isn't enough there's probably something badly wrong with your connection, but you can increase it here if your collar is not recognizing RLV on attach / logon.   
`show restrictions` lists all restrictions from all sources that are handled by the collar, including the relay.   
`garble on` activates garbling when talk restriction is set.   
`garble off` deactivates garbling.   
`sit [UUID]` force sits the wearer on an object via object key (UUID).   
`unsit` forces the wearer to stand.   

#### Relay
`relay off` `relay ask` `relay auto` set the relay mode to the desired state.   
`relay helpless` toggles helpless mode on / off.   
`relay wearer` toggles wearer lockout for relay options.   

#### Presets 
`list presets` shows current restriction presets and what they do.   
`preset add [presetname]` activates the named preset.   
`preset replace [presetname]` removes current presets and adds the named preset in place of them.   
`preset clear [presetname]` removes the named preset.   


### Restrictions
`rlv list` lists all current restrictions.   
`rlv add [restrictionname]` adds the named individual restriction (see list below).   
`rlv rem [restrictionname]` removes individual restricion (see below).   

#### INDIVIDUAL RESTRICTIONS:
The following individual restrictions can be added or cleared with the above commands, using either the prettified button name for the restriction or its actual internal RLV command. Note that where a command requires a value (such as the camera max distance) it will apply the value that has been set in the relevant configuration menus. For more information on what each command does, consult the RLV API document at (https://wiki.secondlife.com/wiki/LSL_Protocol/RestrainedLoveAPI) and look up the individual internal command.   
>EXAMPLE: "/1 [prefix] rlv add fly"

Button command   =  internal RLV command
------------------------------------------------------
    EmoteTrunc    =    emote
    Send Chat    =    sendchat
    See Chat    =    recvchat
    See Emote    =    recvemote
    Whisper    =    chatwhisper
    Normal Chat    =    chatnormal
    Shout    =    chatshout
    Send IM    =    sendim
    See IM    =    recvim
    Start IM    =    startim
    Gesture    =    sendgesture
    Inventory    =    showinv
    Minimap    =    showminimap
    Worldmap    =    showworldmap
    Location    =    showloc
    Names    =    shownames
    Nametags    =    shownametags
    Nearby    =    shownearby
    Text    =    showhovertext
    Text HUD    =    showhovertexthud
    Text World    =    showhovertextworld
    Text All    =    showhovertextall
    Landmark    =    tplm
    TP Location    =    tploc
    TP Local    =    tplocal
    Accept TP    =    tplure
    Offer TP    =    prequest
    Permissions    =    acceptpermission
    Edit    =    edit
    Edit Object    =    editobj
    Rez"    =    rez
    Add Attach    =    "addattach
    Rem Attach    =    remattach
    Add Cloth    =    addoutfit
    Rem Cloth    =    remoutfit
    Notecard    =    viewnote
    Script    =    viewscript
    Texture    =    viewtexture
    Touch Far    =    fartouch
    Interact    =    interact
    Attachment    =    touchattach
    Own Attach    =    touchattachself
    Other Attach    =    touchattachother
    Touch HUD    =    touchhud
    Touch World    =    touchworld
    Touch All    =    touchall
    Fly    =    fly
    Jump    =    jump
    Stand Up    =    unsit
    Sit Down    =    sit
    Sit TP    =    sittp
    Stand TP    =    standtp
    Always Run    =    alwaysrun
    Temp Run    =    temprun
    Unlock Cam    =    camunlock
    Blur View    =    setdebug_renderresolutiondivisor
    MaxDistance    =    setcam_avdistmax
    MinDistance    =    setcam_avdistmin
    Send Emote    =    rediremote
    Set Debug    =    setdebug
    Environment    =    setenv
    Mouselook    =    camdistmax:0
    
### Exceptions (Experts only!)
`rlvex modify owner [value]` / `rlvex modify trust [value]` sets owner and trust exceptions to a value where the value is the bitmask of exceptions.   
`rlvex modify [custom] [value]` as above but changes custom value.   
`rlvex listmasks` lists  bitmasks values.   
`rlvex help`  lists valid commands for changing bitmasks.   
`rlvex listcustom` lists custom exceptions and their bitmasks.   

## APPS

### BELL
`bell volume [number from 1-10]` sets the bell volume.   
`bell on` / `bell off` turns the bell on or off.   
`bell nextsound` changes to the next available bell sound.   
`bell ring` rings the bell once
`rm bell` Uninstalls the bell script.

### BOOKMARKS
`tp save` opens the dialog to save the current location.   
`tp save [name]` saves a bookmark of that name to the current location.
`tp remove` opens the list of bookmarks to remove.
`tp remove [name]` removes the named bookmark.
`tp [name]` teleports the wearer to the location of the named bookmark.
`rm bookmarks` uninstalls the bookmarks app.

### LABEL/MESHLABEL
label font - open font picker menu
label font (name) - set font to (name). Default values are "Andale 1", "Andale 2", "Serif 1", "Serif 2", "LCD".
label color (vector) - sets label color to (vector) - i.e <1,1,1> for white
label on - show label
label off - hide label
label scroll on - scroll label text
label scroll off - stop scrolling
label (text) - set label to (text)
rm label - uninstall label app

RESIZER
rotation - open rotation menu
position - open position menu
size - open size menu
rm resizer  - uninstall resizer app

THEMES
newtheme - lists current properties to save into a new theme notecard
hide - sets collar invisible
show - unhides collar

TITLER
title  - opens textbox to type in new title
title (text) / titler title (text) - sets title to (text)
titler color - opens color menu
titler color (vector) - sets title color to (vector)
titler show - shows title
titler hide - hides title
titler up - moves title higher
titler down - moves title lower
titler plain  - toggles plaintext mode that saves title as either plaintext or base64 encoded

BADWORDS
badwords add - opens text box to enter new phrase to add to bad words list
badwords add (phrase) - adds (phrase) to bad words list
badwords animation (anim) - sets the animation to trigger when a bad word is spoken
badwords animation default - restores animation to the default shock animation
badwords sound (name) - changes the sound triggered when a bad word is spoken to (name)
badwords sound silent - disables badword sounds
badwords penance - open textbox to add new penance phrase
badwords penance (phrase) - change the penance phrase to (phrase)
badwords remove - open list of badwords to remove
badwords remove (phrase) - removes (phrase) from badwords list
badwords on / badwords off - switch on or off
badwords clear - clear all bad words from list

CAPTURE
capture dump - print capture status
capture on - activate capture mode
capture off - deactivate capture mode
capture - attempt to capture

TIMER
timer permissive on / timer permissive off - set timer permissive mode on or off
timer endnow - end active timer instantly
timer cancel  - cancels active timer, does not issue end of timer commands
timer start - starts timer
timer time -  opens time menu
timer time (time) - sets timer to (time), where (time) is in hours, minutes and seconds (e.g 2hrs 10m). Function will read most sensible ways of writing time, don't worry.
timer customs - opens text box to add custom commands (a list of chat commands separated by commas) that will be issued when timer expires
timer customs (commands) - sets (commands) as a comma separated list of chat commands that will be issued when timer expires
timer lockout on / timer lockout off - switches wearer lockout while timer active on or off
timer unleash on / timer unleash off - switches unleash when timer expires on or off
timer unpose on / timer unpose off - switches ending poses when timer expires on or off
timer clearrlv on / timer clearrlv off - switches clearing rlv restrictions when timer expires on or off
timer unsit on / timer unsit off - switches unsitting collar wearer when timer expires on or off
timer titler on / timer titler off  - switches time left titler on or off

CAGEHOME
ch here  -sets current location as cagehome "cage"
ch arm  - activates cage home, with setter marked as primary
ch disarm - deactivates cagehome if armed but sub not caged
ch release - release sub
ch settings - list cagehome settings
ch commands - list cagehome chat commands
ch warntime <seconds> - amount of time before caging where sub is given warning it's about to happen
ch radius <meters> - distance sub can move from "cage" location
ch cagetime <minutes> - timer for caging. At 0, there's no timer.
ch notifychannel <channel number> - sends notification on specified channel on capture and release (will not use channel 0).
ch notifyarrive <arrive string> - phrase said on capture
ch notifyrelease <release string> - phrase said on release
ch warnmessage <warning message> - phrase in local chat said when sub is being summoned. "@" will be replaced by sub's name. # will be replaced by number of seconds of cagetime set.
