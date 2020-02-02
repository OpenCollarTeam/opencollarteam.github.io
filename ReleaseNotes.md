---
layout: home
title: OpenCollar Release Notes
---

# V 7.4 Beta   
dateline 08 January 2020   
As always, every old and new script on this list is licensed under the GPL V2.

OC 7.4 is a major release, involving physical changes to the scripted prims.  Rolling back to previous versions is not possible using just an updater.    

There were many bug fixes introduced in the process of the major rewrite for the 7.4 beta / RC 1 that were caught in RC 2, thanks to everyone who contributed.  

## Summary Changelog

### Global Changes   
- All Scripts made compatible with V 7.4 API 
- All Scripts moved to root prim
- Universal checkbox style applied, with a GLOBAL_checkboxes setting that can be set to customize these.   
- Added back the ability to use indicator lights that glow when Access, RLV and Animations are touched.  To utilize these make indicator light prims and put in the Description field ~indicator_anim, ~indicator_auth, ~indicator_rlvsys.

### Changes to oc_anim   
- Fixed indentation   
- Added update jail to move the script and copy-enabled animations back to the root prim  

### Changes to oc_auth   
- Added update jail. This prevents oc_auth from spamming the link messages during an update. Additionally this is used to move the script back to the root prim.
- Removed OwnSelf.  Added the ability to add wearer to owner & trusted using the existing owner / trusted menu buttons.   
- Updated to use new oc_capture settings
- Updated auth check. If user is out of range and not an owner, they will receive the blocked auth level. If however limit range is disabled, this will not happen.

### Changes to oc_capture   
- Totally rewritten capture
- New settings flags to indicate status properly.  

### Changes to oc_detach 
- Rewritten due to oc_rlvsuite rewrite
- Moved to apps menu

### Changes to oc_dialog  
- Added a programming interface so that other scripts can receive the final menu text and button list after dialog has processed them.   
- Added a settings flag that will enable a small debug flag in dialog to show the auth level in menu text:   
`GLOBAL_showlevel=1`   
- Added update jail, which moves this to root prim.  

### oc_exceptions 
- Removed, replaced by oc_rlvextension. 

### Changes to oc_folders
- Added a configuration menu similar to that in oc_outfits, see below. 

### Changes to oc_outfits   
- Rewritten due to oc_rlvsuite rewrite
- Moved to Apps menu
- Added the ability to lock the .core folder (even outside of outfits!)
- Added the ability to configure access to outfits
- Added the ability to browse and change what is worn inside of .core

### Changes to oc_particle   
- Now supports multiple different leashpoints.   
- Compatible interface with OpenCollar Cuffs.   

### oc_presets  
- Contributed by Romka Swallowtail
- This optional app gives the ability to save size presets.  

### Changes to oc_relay   
- Use llGetObjectDetails instead to get information, previously was showing ??? too often.

### oc_resizer   
- Use llScaleByFactor instead of old resizing code.

### oc_rlvextension  
- Handles exceptions and a few other tasks for rlvsuite   

### Changes to oc_rlvsuite     
Fully rewritten from the ground up. Provides:   
- macros (7.3 style) included as default  
- the ability to set and change restrictions individually   
- the ability to save macros as a pre-set   
- the ability to set what level of access can use that restriction   

### Changes to oc_rlvsys   
- Added update jail 

### Changes to oc_settings
- Added a flag to check against, if we’re in update, do not spam linked messages with all settings every time the inventory changes   

### Changes to oc_sys
- Changed update wording from "patch" to "version". 

# Credits  
Aria (Tashia Redrose); Lillith Xue for oc_rlvsuites and many other contributions; Silkie Sabra for supplying coffee and donuts; Romka Swallowtail for contributing oc_presets; and as always Our Benevolent Dictator Nirea for many contributions, checking and approving final versions. 

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
