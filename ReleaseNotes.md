---
layout: home
title: OpenCollar Release Notes
---
OpenCollar V 8.2.2 is current ! Thanks to many contributors, including Scripters Medea Destiny, Kristen Mynx,Phidoux (Taya Maruti), and Yosty7B3.  Builder/compilers Ping Duffield and ròan (Silkie Sabra); Testers Ping Duffield, Trinkitz and Omnia (animavenator); and many many more who posted issues and pull requests and provided feedback.  Thanks to Medea Destiny for this comprehensive changelog. 
_______________________________________________________    

# V 8.2.3 Release:  Changelog  

## Summary

This was an opportunistic minor release because a mistake was made compiling the updater that was distributed to the groups, which when discovered, necessitated a version change to avoid confusion.  We too advantage of it to include a few things that missed the 8.2.2 release.

## Changelog

All changes were contributed by Medea Destiny.    
1) Updated Installer to use "keep" instead of "skip" for retaining optional scripts. 
2) Fixed version comparisons to ensure full versions supersede betas and improve reporting text.   
3) Changed "RLV Ready!" text to "RLV Active!" to avoid confusion during boot process.  

# Previous Releases  

## V 8.2.2 Release:  Changelog

## Summary
The biggest changes that are noticeable to the user or fix a major issue:  
1) **ADDONS** is less verbose and does not send false disconnect messages.  
2) **WEARER TRUSTED ACCESS** Fixes loophole where adding wearer to Trusted removed abilities not available to Trusted.  
3) **Outfits** is now more compatible with RLV Viewers as well as RLVa.
4) **Exceptions** are no longer cleared by traps or Clear All. This fixes the Force Teleport exception failure.

## Complete Changelog 

## ---COLLAR---  

### OC_ADDONS

    Scripters): Kristen
    
    Testers/Reviewers:  Ping Duffield, Omnia, Medea, Phidoux
    
    CHANGES: Kristen : Less chatty, fixed erroneous disconnection protocol (issues #791 & 792) 
    
### OC_ANIM
 
    Scripters:  Phidoux, K9K8E
    
    Testers/Reviewers: 
    
    * Changes:  Phidoux: Stop the current AO pose, and restart after a collar pose (issue #812)   
    
    K9k8E: Fix mouselook left click (issue #763)
    
### OC_API
    
    Scripters: Medea
    
    Testers/Reviewers: Ping, Omnia
    
    Changes: Multiple access fixes for when wearer is also trusted, fix for possibility of private channel set to zero

    Scripters: Yosty7B3
    
    Testers/Reviewers: Ping, Omnia, Medea
    
    Changes: Only reset script when needed, not on each reboot

### OC_Bookmarks

    Scripters: Medea Destiny
    
    Testers/Reviewers: Omnia, Ping
    
    CHANGES: Medea: Added clickable SLURL link chatted to command issuer to allow quickly following the wearer. (issue #715)
    
    
### OC_CORE
    
    Scripters: Medea Destiny
    
    Testers/Reviewers: Taya phidoux, Silkie Sabra
    
    CHANGES: Modified handling of multiple situations where wearer access is blocked if they are trusted also (issue #774)
    
    Scripters: Yosty7B3
    
    Testers/Reviewers: Ping, Omnia, Medea
    
    CHANGES: Removed Setor() and Bool() functions for efficiency.
    
### OC_FOLDERS

    Scripters: ròan (Silkie Sabra), Medea Destiny
    
    Testers/Reviewers:
    
    CHANGES:  ròan: reworded a menu text to make the lock checkboxes clearer(#829).  
    Medea: Fix string handling in folder searches (issue #775); add notification when folder search returns no results.
    
### OC_OUTFITS

    Scripters: Phidoux, 
    
    Testers/Reviewers:
    
    CHANGES:  added ~ for compatibility with users of RLV.  Fixed RLV/RLVa flip flopping.
    
### OC_RLVEXTENSION:

    Scripter name:  Medea Destiny
    
    Testers/Reviewers: Roan, Acadia Ansar, Nightshade 231, Omnia, Lisle Rossini
    
    CHANGES:   Fix unsit chat command (issue #703), fix to release unsit restriction 
    when strict sit is turned off while wearer is sitting; 
    fix to race condition causing defaults restored for exception values (issues #719, #720, #740).   
    Fix to filtering for changes to exceptions (issues 844 and 848)
    
### OC_RELAY

    Scripters:  Phidoux, Kristen
    
    Testers/Revewers:  Kristen, Ping
    
    CHANGES: RLV restrictions and exceptions persist now over various bugs

### OC_RLVSUITE

    Scripters: Medea Destiny
    
    Testers/Reviewers: Roan, Ping, Omnia
    
    CHANGES: Fixed deletion of all macros breaking macro list (issue #723).   
    Changes to lock behaviour due to changed relay code-- ensure an @detach removed on relay   
    does not actually unlock a locked collar. 

### OC_RLVSYS

    Scripters: TayaPhidoux, Kristen Mynx
    
    Testers/Reviewers:
    
    CHANGES: Kristen: Changes as part of Relay modifications above.   
    Tayaphidoux: Tweaks to RLVa version handling

### OC_STATES

    Scripters: Medea
    
    Testers/Reviewers: Roan
    
    CHANGES: Fixed typo

## V 8.2.1 Release: Changelong 

### Summary 
The most noticeable changes to 8.2.1 are:
1. Restrictions/extensions refactoring: Restriction presets and individual restrictions now under a single menu rather than separated into Restrictions and Macros menus, with a major user interface overhaul including clearer button names, listings of current restrictions in the prompt, restriction settings now accessible directly from restrictions menu, and a button to inform user what restrictions the presets will actually put in place.  
2. Exceptions menu restored to RLV menu, and major efficiency overhaul.  
3. Far faster boot times  
4. STRICT SIT function now no longer clashes with other restrictions.   
5. Titler vastly less fussy about custom colour vectors and responds faster   

There are also numerous efficiency improvements, bug fixes and improvements to user interface and user feedback. 

## Complete Changelog

**Contributor Yosty7B3**
### oc_api:
> Removed unused StrideOfList() function to save memory
    
**Contributor Medea Destiny**
### oc_addons:    
> Provided auth failure mode for menu. Insufficient auth now provides suitable notification to user and respawns main menu. Fixes issue #665 

### oc_core: 
> Added sleep before notify for device name change, issue #672  
> Added confirmation messages when group or public access is toggled and fixed a typo  
> Efficiency pass, inlined majorminor(), docheckupdate() and docheckdevupdate().   
> Removed g_lTestReports, left over from alpha.   
    
### oc_dialog:
> Optimised substitutions by shortcutting no match for % in string after %NOACCESS% and %WEARER%.   
> Replaced GetTruncatedString function with far more optimised function.   
> Restored dialog chatting over-long prompts in local, which seems to have got lost somewhere. Improved version of function now works with prompts of any length and does not break up words.   
> Changed prompt for button descriptions in local chat from "Please check..." to "See..." to trigger it less often.   
> Added warning text to prompt when prompt is trunctated, so menu prompt text will now show "(CONT. IN LOCAL CHAT)".   

### oc_rlvextension:
> Moved Exceptions menu into RLV as a main directory, and folded Menu Settings into RLVSuite menu customize.   
> Refactored Exceptions setting with new functions to allow Exceptions to be applied individually (setUserExceptions() function), replaced ApplyAllExceptions() function with SetAllExes() that allows individual lists to be updated separately, and added list updating. Result is much cleaner setting of exceptions, where exceptions that have previously not been set don't get unset, and changing a single person on a  list doesn't require the entire list to be cleared and reset. One line of correct exceptions issued per user rather than one per exception per user, refreshed whenever anything needs updating. Result at bootup with a test collar with 8 people on owner/trusted list was 8 lines of RLV commands issued to viewer rather than up to 150 depending on timing of settings received.    
> Added list compare function that works.   
> Changed setting save function to allow individual settings to be saved rather than all settings being saved when any are changed.   
> Changed MenuSetValue() function so that the correct values were given for the blur function rather than sharing values with camdist settings, which gave incorrect user feedback. Reformatted handling of dialog response to cast returned string rather  than using list of conditionals.   
> Added remenu timer for force sit menu when unsit used, to delay scan so that object user is unsat from will show up in list rather than being ignored by scan if timing is such that it's still considered the object sat on by sensor.   
> Strict Sit changes: now adds own restriction to RLVsys baked set, which is removed when unsat. This avoids collisions between strict sit and other unsit restrictions. Restriction is now added immediately if user is sat on last force-sit object when setting is added, so that sit followed by strict sit will in fact stop the user standing.   
> UNSIT now uses the RLV_CMD_OVERRIDE function if the commanding user has owner auth. This means that a forced UNSIT by the owner is not stopped by a restriction to the wearer. Owners shouldn't be restricted by restrictions, wearers should. Previously the user would click unsit, be told it didn't work, have to navigate to restrictions, remove the restriction, navigate back to UNSIT, unsit the collar wearer, then navigate back to restrictions and reset it. This does that  automatically for owners.   
> Added explanatory text to exceptions and force sit menus.   
> Renamed Refuse TP to Force TP to reflect what the button actually does.   
    
### oc_rlvsuite: 
> Corrected values for Rummage and Dress restrictions, added @emote=n to Talk restrictions #649.   
> Restored SetDebug, SetEnv and Mouselook restrictions which had gone missing.   
> Added Camera settings & Muffle to restriction settings. Created shortcut to camera settings from camera restrictions category, and support correct BACK button behavior so it returns the user to whichever menu they arrived at that from #649.   
> **Menu Redesign** The individual restrictions subcategory menus are placed below the presets, on the basis that standard UI design principles call for detailed, multi-page functions to go lower in the attention hierarchy that quick, single-click preset functions. Various buttons/terminologies have been changed to try to make the whole thing more user-friendly. Also "macro" terminology has been removed, and preset used only where necessary to differentiate. issues #649 & # 654.   
> Added ListRestrictions() function which converts restriction integer pairs into human-readable lists of restrictions and given chat command "(prefix)restriction list". Also used by List Presets button, which lists what the preset restriction buttons actually do. #649   
> Given extensive explanatory text in menus. ListRestrictions() function is used to print out all restrictions the wearer is currently under, rather than requiring menu user to visit every category menu to find out.  #649   
> "Daze" preset renamed to "Names/Map", "Dazzle" to "Blur", and "Rummage" to "Inventory" because older names were downright confusing.  #649
> Changed some names in g_lRLVlist to be clearer #649.  
> Changed auth for adding/removing presets to CMD_OWNER AND CMD_TRUSTED to match the auth requirements of setting individual restrictions as short-term solution to issue #656.    
> Added Restore function to Customize menu to restore presets to defaults, per issue #663.   
> Rewritten dialog code to set individual restrictions, 'cos it was badly broken. Issue #664

### oc_rlvsys:
> Added RLV_CMD_OVERRIDE function. This allows one shot (=force) commands to be sent that will override any restrictions. This command should only be used where operator has owner permission. The notion behind it is that owners should not be restricted by wearer restictions. They can unset restrictions manually, perform the function, and then reset  the restriction, but that's a lot of hassle. This performs the function automatically. Operator and wearer are notified of  restrictions that have been temporarily restricted to avoid being misled that a restriciton is not present.

### oc_settings: 
> Tightened timings on release of all settings and reduced sleep padding on initialize. (Fix for faster boot)

### oc_states:
> Tighten timings and number of passes on reboot process and reduced sleep padding. (Fix for faster boot)

### oc_titler:
> Refactored SAVE to only save changed settings.   
> Added helpful menu text.   
> Added text2col() function that makes a sensible colour vector out of whatever is thrown at it. 
> Added validvector() function to confirm vectors are valid before setting, used to make "[prefix] title color" command without following vector provide colour menu rather than setting colour to black, and means that "[prefix] title color red" will now pop up the color menu rather than setting the title text to black. 
> Text changes now set instantly rather than after 2.5 second delay.   

# V 8.1 Release:  Changelog

## New Features for V 8.1  
### Global
> Expanded explanatory texts in many menus.  
> Restored menuto function to interface channel for backward compatibility  

### Access
> Wearers can now add to Trusted and Block List if Wearer Trusted is checked in Access.    
> Wearer now gets an accept/deny dialog when owner disables Runaway  

### Settings  
> Limit Range moved to Settings  
> Added warning to Settings print not to copy bookmarks to Settings notecard.  Instead, make a separate .bookmarks notecard.  
> **Listen 0** button added to turn off listening on channel 0 (local chat line).

### RLV > Folders  
> Added **Hide ~** Button to Folders / Configure to hide folders beginning with "~" (Give-to-RLV folders).  

### Undress App  
> Added chat commands: 
 >> `[prefix] undress [layer]` removes system layer. 
 >> `[prefix] undress lock [layer]` locks system layer.  
 >> `[prefix] undress unlock [layer]` unlocks system layer.  
 
## Bug Fixes

### Global  
Restored interface channel listener and Highlander code to disallow wearing multiple collars.
### Access
> Trusted is no longer able to unlock the collar  
> Trusted can no longer set Group or Public access
> Group Setting now clears correctly when changing group mode, and group mode can no longer be set if no group is active.

### Settings
Fixed permissions to print Settings so it is limited to owner and wearer.

### RLV
> Fixed incorrect handling of folder-level permissions for browsing #RLV (this was causing "Access Denied" notices to be sent for other actions).  
> Changing camera settings while restrictions are in place will now update the view in real time.
> Fixed Dazzle restriction not setting.

### Relay
> Corrected Relay so Access Denied -- Out of Range messages are no longer triggered and sent to object owners when an object incidentally chats a collar prefix.  
> Corrected Relay timing to improve recapture and avoid conflicts with internal collar rlv.   

### Undress App
Fixed oc_undress not displaying extended layers (alpha, tattoo, universal)

## V 8.0 Release:  Changelog

### New Features:  
- OpenCollar Remote can now be used by the collar wearer on their own collar
- There is now a "weld" capability.  
- You can add a setting using the Settings editor, useful for settings that have no corresponding menu button.  No need to create a notecard for these.
- "Stealth" is renamed "Hide/Show".
- Added the ability for the owner to disable hiding the collar.
- Included internal relay.
- Undress menu is now included in the standard updater and is found in Apps.  Updated for BOM layers.
- New themes creation ability for creators (only available on full permission collars).
- AddOns: New script makes it easier to connect other worn attachments and HUDs to the collar menu.

### All Scripts
- New startup sequence to fix settings problems. All scripts were updated to utilize the Callback feature, and will attempt to force-load all settings after hearing the initial TIMEOUT_READY signal. This is effectively 1 setting per second per script.
- Add DIALOG_TIMEOUT handling to scripts that were missing this signal handler
- Set memory limits in scripts to reduce the max available memory if a script never actually uses the full amount allowed by the simulator.
- Fix safeword enable/disable
     * Command to disable safeword is now: <prefix> safeword off
     * Command to re-enable safeword is to set the safeword to ANYTHING EXCEPT OFF: <prefix> safeword RED
- **SECURITY PATCH:** The collar now has a few security safeguards. In 7.5 there was an exploit that was discovered which utilized the collar remote to override the access list and even change the owners altogether. This manifested itself as something that would grab your relay then change your owners, masking the true cause of this exploit. This patch requires that all access list changes MUST go through the access menu or its related chat commands. The weld feature is also now safeguarded by a similar protocol, and is easy enough to bypass with legitimate intentions. If you plan to delete anything in the intern namespace, just pass the key value of "origin", and for anything in the auth namespace, same, just pass "origin" as the key value. This same security policy is also applied to the load url command. If the URL contains auth list modifications, it will block it from happening, unless the user reviews the URL contents and consents to said modifications.

### New Scripts  
- oc_api : 
    * New: Addons subsystem
    * Handles auth
    * Handles chat commands
    * Handles safeword  
- oc_core :
    * New: Settings Editor
    * Additional fix: Version checker code fixed
    * New version numbering scheme: MAJOR . MINOR. Build 
- oc_states :
    * Handles Settings Editor  
    * Handles Anti-Crash
    * Handles startup sequence
    * Manages script time by shutting off idle scripts and turning them on when needed.
- DEPRECATED: oc_com, oc_auth, oc_sys  
   * oc_auth, oc_com, oc_sys combined into oc_api, oc_core
        

### Revised Scripts

- oc_anim : 
   * Full rewrite with anti-slide kept in mind. Anti-slide is no longer able to be turned off, it also now attempts to circumvent most AOs that use higher priority animations.
   * Reuploaded animations from github as higher priority due to commercial AOs being improperly imported at priority 3 or 4 .
- oc_bell : Code cleanup  
- oc_capture : 
       * Added on/off chat commands.
       * Added more checks against the Enabled status.
       * Added code to prevent blocked users from capturing
- oc_detach: Added sorting of the attachments alphabetically.
- oc_dialog:  Implemented the ability to sort UUID lists
- oc_folders:  Full rewrite.
- oc_leash:  Added leash start and end movement signals.
- oc_outfits:  
       * Updated default checkboxes.
       * Changed "remove" chat command to "naked".
       * Added a Remove command to the Core Browser.   
- oc_particle: 8.0 specific modifications to settings naming, and leashpoint fixing so leashes dont bounce between targets, take closest target, or leash holder, and prefer leash holder over coffle to a worn collar.
- oc_remote:  Converted to an addon to connect to the Addon subsystem.
- oc_rlvsuite:  
       * Renamed "Accept_Perm" to "Permissions".   
       * Re-organized menus:  Macros appears in the main RLV menu alongside Restrictions, which now leads directly to restrictions by type.
- oc_settings: 
       * Rearranged script and cleaned up.
       * Made oc_settings handle weld
       * Load URL now uses a consent dialog if the policy for auth and intern says to reject
       * All tokens are now lowercase. All plugins need to use case insensitive checks, note: only the token_var portion of the token is forced to lowercase by settings
- oc_themes:
    * Fully Rewritten
    * Old themes format no longer compatible
    * New themes format is fully customizable and works for prims and for mesh with a single script.
- oc_undress:  Fully rewritten to take advantage of the BakesOnMesh universal layer.

-----------------------------------------------------------------------------------------------

## V 7.5  (aka V7.4.1)   
OpenCollar V 7.5 should be named OpenCollar V 7.4.1 but due to naming restrictions left over from V6 days we can't name it that.  So V 7.5 it is.  V 7.5 includes a bug fix to the force sit and could not wait to be released.   
**Dateline 22 April 2020**

As always, every old and new script on this list is licensed under the GPL V2.

## V 7.4   

OC 7.4 is a major release, involving physical changes to the scripted prims.  Rolling back to previous versions is not possible using just an updater.     
**Release Date 07 April 2020**   
Thanks to everyone who contributed to V 7.4, including but not limited to Aria (tashia redrose), Nirea, Medea Destiny, Lillith Xue, Sharie Criss, Toy Wylie, Romka Swallowtail, roan (Silkie Sabra), bunny (emmapais) and many beta testers.  

## Summary Changelog
### Github
- Moved optional apps to src/Apps.
- Updated plugin template to be compatible with V 7.4.
### Global Changes   
1. Moved all scripts badk to the root prim.  
    a. All scripts no longer use LINK_DIALOG, LINK_SAVE, LINK_ANIM, LINK_UPDATE, LINK_RLV  
    b. Replaced instances of LINK_[dialog,save,anim,rlv] instead with LINK_SET or LINK_THIS  
2.  Added new description token: indicator_[anim,dialog,rlv,auth,settings].  This restores the ability to use indicator lights that glow when Access, RLV and Animations are touched.  To utilize these make indicator light prims and put in the Description field ~indicator_anim, ~indicator_auth, ~indicator_rlvsys.  
3.  New Settings tokens
    a.  GLOBAL_checkboxes=<unchecked>,<checked>  
    b.  `SETTINGS_nocomma=<bool>`  
        aa. Append Mode  
        (ex).  
            `TOKEN=var~value`  
            `TOKEN+var~value2`  
            ...
            `TOKEN_var=value,value2`  
        (ex2).  
            `SETTINGS=nocomma~1`  
            `TOKEN=var~value`  
            `TOKEN+var~value2`  
            ...
            `TOKEN_var=valuevalue2`    
    c. `GLOBAL_showlevel=<bool>`  

### Changes to oc_anim   
- Fixed indentation   
- Added update jail to move the script and copy-enabled animations back to the root prim 
- Added a check for the ~stiff anim, if it is not present, it will display text in the menu stating that posture is unavailable.

### Changes to oc_auth   
- Added update jail. This prevents oc_auth from spamming the link messages during an update. Additionally this is used to move the script back to the root prim.
- Moved OwnSelf into the existing add/remove owners and trusted menus.  You can now add the weare
- "OwnSelf" is now "Wearer". Removed leftover chat command "flavor". 
- Updated Name2Key to use the new llRequestUserKey function
- Updated Updated auth to detect the capture status flag (Denies access to the Access menu when captured).
- Updated auth check. If user is out of range and not an owner, they will receive the blocked auth level. If however limit range is disabled, this will not happen.

### Changes to oc_capture   
- Full rewrite of oc_capture.  
- New settings flags to indicate status properly.  

### Changes to oc_detach 
- Full rewrite of oc_detach  
- Moved detach out of rlvsuite to apps menu.  

### Changes to oc_dialog  
- Added a programming interface so that other scripts can receive the final menu text and button list after dialog has processed them.   
- Added a settings flag that will enable a small debug flag in dialog to show the auth level in menu text:   
`GLOBAL_showlevel=1`   
- Added update jail, which moves this to root prim.  

### oc_exceptions 
- Removed, replaced by oc_rlvextension. 

### Changes to oc_folders
- Added a configuration menu similar to that in oc_outfits, see below. 

### Changes to oc_leash
- Removed "park" and "pretty Balloon"

### Changes to oc_outfits   
- Full rewrite of oc_outfits
- Moved to outfits from rlvsuite to Apps menu
- New feature:  Lock Core 
-- when this is enabled, the core folder is locked even outside of the outfits app
-- Fixed old behavior of outfits, Will now lock the core even if lock core is not enabled when changing outfits
- Added the ability to configure access to outfits
- Added the ability to browse and change what is worn inside of .core

### Changes to oc_particle   
- Now supports multiple different leashpoints.   
- Compatible interface with OpenCollar Cuffs.  

### oc_presets  
- Contributed by Romka Swallowtail
- This optional app gives the ability to save size, position, and rotation presets.  

### Changes to oc_relay   
- There is a completely new relay script that bridges with an HUD relay courtesy of Toy Wylie. 
### oc_resizer   
- Use llScaleByFactor instead of old resizing code.
### oc_rlvextension  
- Handles exceptions and a few other tasks for rlvsuite   

### Changes to oc_rlvsuite     
Fully rewritten from the ground up. Provides:   
- macros (7.3 style) included as default  
- the ability to set and change restrictions individually   
- the ability to save and remove macros as a pre-set  
- deprecated terminal since all individual restrictions are now available in the menus.
- deprecated rlvstuff (now incorporated in rlvsuite)

### Changes to oc_rlvsys   
- Added update jail 

### Changes to oc_settings
- Added a flag to check against, if we’re in update, do not spam linked messages with all settings every time the inventory changes   
New Settings tokens
    a. GLOBAL_checkboxes=<unchecked>,<checked>  
    b. SETTINGS_nocomma=<bool>  
        aa. Append Mode  
        (ex).
            TOKEN=var~value
            TOKEN+var~value2   
            ...
            TOKEN_var=value,value2
        (ex2).
            SETTINGS=nocomma~1
            TOKEN=var~value
            TOKEN+var~value2
            ...
            TOKEN_var=valuevalue2
    c. GLOBAL_showlevel=<bool>
    
### Changes to oc_spy
- Full rewrite of oc_spy by Sharie Criss.
### Changes to oc_sys
- Changed update wording from "patch" to "version". 
### Changes to oc_titler
- No longer 'requires' the FloatText prim.
- New Settings flag: `TITLER_plain=<bool>` will prevent titler from storing or reading the active title as base64.

# Credits  
Aria (Tashia Redrose); Lillith Xue for oc_rlvsuites and many other contributions; Silkie Sabra for supplying coffee and donuts; Romka Swallowtail for contributing oc_presets; Toy Wylie for contributing the Turbo Relay; and as always Our Benevolent Dictator Nirea for many contributions, checking and approving final versions. 

_________________________________________________________   

# Current Full Release: V 7.3

Release date: 22 July 2019

## User Summary

OC 7.3 is a maintenance release repairing a bug in V 7.2, improving menus throughout the collar, and adding a sort feature to the detach menu.  

- Repairs a bug in capture where the captor would be unable to release, and safeword was required. Capture now functions as expected.  [Issue #227](https://github.com/OpenCollarTeam/OpenCollar/issues/227), thanks to Ray Zopf for finding the bug and Aria (Tashia Redrose) for fixing it.
- Repairs a bug that required wearers to fix menus after updating.  Menus should now appear reliably after updates. [Issue #230](https://github.com/OpenCollarTeam/OpenCollar/issues/230). Thanks to Medea Destiny for identifying the problem and fixing it.
- Adds a feature that sorts Detach by similar names to make it easier to read the list of attached items. [Issue #226](https://github.com/OpenCollarTeam/OpenCollar/issues/226). Thanks to Minesweeper M for the suggestion and contributing to the code.

-Other Credits:  Nirea for review, fixes and final approval.  

# Older Versions

## V 7.2

Release date: 14 July 2019

## User Summary 

OC 7.2 release is mainly a maintenance release. That's to say that most of the changes are under the hood and won't be all that apparent to the user. We have fixed numerous bugs and improved the efficiency of the collar in various ways. Things you should be aware of: 

- Capture mode now has slightly more restrictive permissions for the captor - they were granted a little too much power. 

- Access denied messages now report what access has actually been denied for - they weren't too helpful before. 

- Leash menu now has a "Give holder" button that will provide a leash holder to use.  New mesh leash holder by Salt(xxsaltandpepperxx)!  

- When sit restrictions are removed, you will be informed that you can stand rather than forced to stand. 

- Relay no longer overrides ASK mode for objects owned by someone with owner permission on your collar if the owner is the collar wearer, or if the owner is not currently in the sim. Similarly, auto accept for landowner setting defaults back to ASK mode if the landowner is the collar wearer, to avoid trouble at home. 

## FOR COLLAR MAKERS:  

- Themes now supports faces and materials.  
- A plugin template script is now available on the github here: https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/spares/oc_plugin_template.lsl

## The Details 

- General
    * Added a versions command. This will output the script versions (May not reflect current collar script version, it will reflect the last version in which the script was updated)
    * Added a debug command. This will output script settings on instant message to the requester, This is READ ONLY. Settings cannot be modified by a debug dump.
    * Removed the hard-to-read tiny numbers used in several version strings and replaced with real easy-to-read numbers
    * Added Toy Wylie animations.
    * General improvements to reporting reasons for insufficient access reporting in many scripts.
    * Leash handle provided by Salt&Pepper
    * Various typos and code clean ups
- oc_anim  
    * Capitalization and misc formatting corrections. 
    * Added Checkbox helper function  
    * Script readability improvements
- oc_auth
    * A fix for capture having too much access, will now prevent certain menus being used if captured
    * Will now prompt to confirm disabling OwnSelf
    * Fix for confusing text
    * Various code tweaks
- oc_bell
    * Only added access denied explanations
- oc_bookmarks 
    * Now ignores group and public access to prevent spam
- oc_capture
    * Added new token: isActive
- oc_com
    * Add in llToLower to make sure that prefix is case-insensitive
- oc_dialog
    * Added ability to add an explanation for what access was denied to
    * Fixed what auth returns for public, group, and everyone who should_not_have_access_to_the_collar!
    * Public/Group will now return NO_ACCESS if you are not within range of the collar.   
 - oc_exceptions
    * Clears exceptions before setting new ones to avoid stale entries
    * Bug fixes & efficiency clean up     
- oc_leash
    * Made it so passing the leash permits new leash holder to either pass it or unleash. Previously they would get an Access Denied message.
    * Floating in air after going down stairs or a hill, etc, has been resolved.
    * Misc settings fix due to new oc_settings behavior to prevent a infinite loop
    * Leash Holder giving ability now implemented.  Thanks to Salt (xxsaltandpepperxx) for the nifty new leash holder !
- oc_relay
    * Safeword will now cause the relay to ignore all requests for 20 seconds, and release all grabbed objects.
    * Landowner trusted now OFF by default
    * Landowner trusted mode simulates ASK mode for when landowner is wearer - people getting trapped by their own stuff too often!
    * ASK mode no longer trumped by owner list in cases where a. the owner is the collar wearer (so you can still be ASK to your own items), or if the owner is not in the sim (as auth generally derives from the object owner, and we shouldn't assume that the relay setting should be trumped by the owner's objects when that owner isn't actually around).
- oc_rlvsuite
    * Terminal now has a way to configure whether public/group/trusted/wearer are allowed or denied access to the terminal. Default is only Owner, Wearer, Trusted.
    * Removed misc. leftover VD references.
- oc_rlvsys
    * Sensors have been removed.
    * Inform wearer when sit restriction is removed rather than force unsitting them.
- oc_settings
    * Will now confirm loading settings from URL
    * [API] On save / delete it will echo back the request
        * for save it will send LM_response, 
        * for delete it will send LM_delete
- oc_sys
    * Changed the update detection URL to point to the right file in github
    * Removed spammy news
    * Added a .settings notecard relay. Enables placing .settings into root prim instead of only in the Settings prim
    * As of 7.2 RC3 / Full Release, if the .settings notecard is not changed, reboot not requested, or load not requested from Settings, the .settings will not be relayed if it has already been read- This is to avoid unnecessary link messages.
    * If an animation is added to the inventory in root prim, it will automatically move the animation.
    * Backwards compatibility fix for legacy "Add-ons" scripts
    * Fixes for proper capture permissions.
- oc_themes
    * Added support for materials textures.
    * Fixed script error.
    * Formatting clean up.
    * Added support for object faces.
- oc_titler
    * Particles now honor the last rank as well as the title.
- .couples notecard
    * Removed reference to 'nom' animation.
    
## Credits !

Many people helped produce this version with their ideas, support, and wits.  Here is the list of contributors:


    Aria (tashia.redrose)
    Niria Metamour
    Medea Destiny
    North Glenwalker
    Restless Swords
    Salt (xxsaltandpepperxx)
    ròan (silkie.sabra)
    Caoimhe (mailani19)
    Riej
    Agesly Danzig
    Toy Wylie

## 7.1

- Remove the limits of 3 owners, 15 trusted, 9 blocked, and 1 tempowner.
  Replace with shared limit of 28 people across all those lists.
- Add new "Detach" button to the RLV menu, and associated "detach" command.
  This feature shows the user a list of the collar wearer's attachments, and
  allows you to detach them.
- Added a new "image" command that uses the titler prim to show an image
  above the wearer's head.  Thank you Mano Nevadan for the pull request.
- Added OPTIONAL bundle type to the installer, for addons like oc_bookmarks that
  users might have intentionally removed.
- Added new STOPPEDSCRIPT item type to bundles, for handling scripts that need to
  be loaded into child prims.  (Replaces hardcoded special treatment of bundle
  "23" in the bundle handler.)
- Use explicit list of scripts in PermsCheck instead of oc_* prefix, reducing
  spam for users of closed source third party plugins that use that prefix.
- Fixed upgradeability of collar versions 3.0 through 3.2.  Thank you
  Nataliaa Wirefly for the bug report and testing.

## 7.0

- Returned to fully GPL version of OpenCollar scripts.
- Returned to license requiring the scripts to remain full perms in Second Life.  (No more no-mod oc_root script.)
- Removed "FailSafe" kill switch function from all scripts.  We found several versions of this function.  All versions would cause the script to silently delete itself if you messed up permissions or renamed the script.  All were somewhat obfuscated, using raw integers instead of the normal constants for permissions masks and inventory types.  Some versions of FailSafe deleted other inventory in the prim, such as notecards and animations.  Some versions were triggerable by a link message.  We have replaced FailSafe with a new PermsCheck function that is de-obfuscated, doesn't delete anything, provides helpful suggestions for users/creators who want to get the permissions right, and allows renaming the script.  Thank you Corwin Davidson for reporting this.
- Returned to pre-6.6 update protocol.  If you provide 3rd party plugins and found that your installer wouldn't work with 6.6/6.7, it should work again with 7.0.
- Removed code that sent IMs to "Shycoconut Resident" if the collar was set no-modify for the current or next owner. Thank you pixelwork for the pull request.
- Removed the "seal" feature, .distributor notecard requirement, and the obfuscated "JB()" code that supported it from oc_sys and oc_com. This was unnecessarily cumbersome for third party creators and provided a false sense of security.  (Given that it was implemented in user-editable code, there was never anything preventing anyone from making their collar claim to be someone else's "official" release.)
- Removed VirtualDisgrace-specific branding and links.
- Renamed "Vanilla" to "OwnSelf"
- Added mechanism for safely updating animations and preventing duplicates.
- Removed dozens of unused variables and functions.
- Fixed problem with oc_couples not re-reading config notecards on change.
- Added support for updating collars as far back as 3.x.
- Add oc_bookmarks back to the default updater.
