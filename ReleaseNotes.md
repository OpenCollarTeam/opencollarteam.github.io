---
layout: home
title: OpenCollar Release Notes
---

# V 8.0 Pre-Release, Beta, Alpha  

## V8.0 Release Candidate 2
- Fixed bugs or implemented features (Ticket List) #455, 453, PR452, 451, PR450, 447, 458, 457, 462, 460, PR465, PR466, 461, 454  
- Finish full implementation of the optin/update  
        * Removed a deprecated oc_dialog link message (DIALOG+1) (DIALOG+2)  
        * Added settings menu toggles  
            * WearerAddons  
            * AddonLimited (This will only affect wearer owned addons, it limits the ability to write to auth_ or intern_ namespaces in settings).
- Code Cleanup: Addon signal for approve/deny in listen event was sending to all instead of targetting the addon
- Fix: OC_Remote was disallowing public configuration menu access
- Fixes to oc_anim per ticket, the page number was not persistent
- Also fixed a potential for memory overflow by making the pose list temporary, and at the same time, enabling case-insensitive addons
- Fixed pose hover heights
- Updater now properly restores all settings (Fix specific to RC1).
- Improve post-update finalizing since the new startup sequence no longer needs to be waited upon to complete.
- Highlander fixed
- Linter ran on ALL scripts
- Major fix to oc_themes after a report that the script was not working to apply themes.
    
        
## V 8.0 Release Candidate 1  
- Fixed bugs or implemented features (Ticket List) PR444, 441, 443
- Implement a addon link message filtering list, see addon API doc for information on this change.
        * New packet type: update
        * New online field: optin
- Github: Added a quick load URL file for changing checkboxes to an ASCII type checkbox
- Update to oc_remote
- Re-added missing chat command: POSE
    
## V 8.0 Beta Version 3
- Fixed bugs or implemented features (Ticket List) 439 (DUP 392), Poll437, 430, 392 (DUP 439), 436, 435
- Addons feature: Addons that are owned by the collar owner or a trusted user will now automatically be granted collar access. This opens the door for the remote control to finally be created.
- Reimplement the load url chat command
- **SECURITY PATCH:** The collar now has a few security safeguards. In 7.5 there was an exploit that was discovered which utilized the collar remote to override the access list and even change the owners altogether. This manifested itself as something that would grab your relay then change your owners, masking the true cause of this exploit. This patch requires that all access list changes MUST go through the access menu or its related chat commands. The weld feature is also now safeguarded by a similar protocol, and is easy enough to bypass with legitimate intentions. If you plan to delete anything in the intern namespace, just pass the key value of "origin", and for anything in the auth namespace, same, just pass "origin" as the key value. This same security policy is also applied to the load url command. If the URL contains auth list modifications, it will block it from happening, unless the user reviews the URL contents and consents to said modifications.
- Update the menu tester script in the development test script folder on github.
- Fix an unreported infinite loop caused by the relay being off. This would continually send out a request to the collar that in turn triggered a reboot, and a rescan of settings. This will manifest as the collar giving multiple menu prompts or as it just being slow.
## V 8.0 Beta Version 2   
- Fixed bugs or implemented features (Ticket List) 431, 426  
- Fixes to the addons API. (See addon API documentation for more information)  
- Rewrite of oc_themes. (New themes file format.)  
        * Each theme must be placed in the collar as its own notecard. Naming is: ThemeName DOT theme (TestTheme.theme)
        * Advised to use search and replace to copy the output of the theme creator into a notecard. Building experience is required so you know what you can leave out of this notecard
        * The theme creator will only be available on a full perm object, just look for the "New" button in the theme app menu.
        * DO NOT USE ON LARGE LINKSETS
-  Deprecate oc_meshthemes, and oc_themes in favor of rewrite.
## V 8.0 Beta Version 1
- Fixed bugs or implemented features (Ticket List) PR428, 427, 425, 424, 423, 422, PR417, 338        
- Fix to the startup sequence / post-update sequence. This fix allows the collar to more accurately know when all scripts are ready and therefore should receive settings and have the startup / menu generation code run.
- Fix addons being removed incorrectly after 120 seconds due to a typo.
- Fix the bug where the collar reports it is newer than the updater
- Fix safeword enable/disable
        * Command to disable safeword is now: <prefix> safeword off
        * Command to re-enable safeword is to set the safeword to ANYTHING EXCEPT OFF: <prefix> safeword RED

        
Alpha 9
______
    * Fixed bugs or implemented features (Ticket List)
        411
        410
        409
        421
        420
        415
        418
        PR410
        PR411
        PR412
    * Finished script API for a "call me back" system, where a script can now register on the TIMEOUT_REGISTER signal, and it will call the script back with kID in sStr amount of time.
    * All scripts were updated to utilize the Callback feature, and will attempt to force-load all settings after hearing the initial TIMEOUT_READY signal. This is effectively 1 setting per second per script.
    * Special thanks to Madman Magnifico for his contributions in pull requests that sped along several high priority issues, as well as fixed the couples feature in OC 8
    * Fixed bug where OC Updater may not properly remove the OC 3.x scripts
        -> The script was not resetting the increment count, or the total item count, resulting in it skipping over items
    * Full rewrite of oc_undress, which is now included as a default script in the updater
    * Fixed an issue where the detach menu items were not properly triggering the selected item
        -> This was actually triggering the "right" item, but only the pre-sorted item. The menu list was not being saved as the sorted version

        
Alpha 8
______
    * Fix major bug where oc_core was incorrectly seeing the collar being welded
    * Fix minor bug in oc_titler where it would not accept more than one word from the chat command
    * Fixed bugs or implemented features (Ticket List)
        408
        
        
Alpha 7
______
    * Fix to oc_bell script errors about spamming too many sound requests if you press keys too frequently
    * Fix to oc_settings where intern_weld did not get saved in a persistent way
    * Added 'welded by' to show who welded the collar. To have this show you will need to redo the weld. Use the debug-unweld chat command to see this
    * Fix bug where oc_anim was not listening for the REBOOT signal and thus would not rescan animations ever
    * Implemented color selection menu to oc_titler - now uses the oc_dialog's colormenu
    * Several bugs in relay fixed
    * Fixed bugs or implemented features (Ticket List)
        404
        397
        405
        406
        
        
Alpha 6
______
    * Minor rewrite to oc_settings to clean the script up
        * All tokens are now lowercase. All plugins need to use case insensitive checks, note: only the token_var portion of the token is forced to lowercase by settings
    * Updated a few misc scripts to be compatible with the new settings changes
    * Fixed unsit bug
    * Began setting some memory limits in scripts to reduce the max available memory if a script never actually uses the full amount allowed by the simulator.
    * Recreated some animations per ticket #370, as the github is missing some of the important animations, and our copies are lower priority in 7.5 and below.
    * Fixed a misc bug where no chat commands for the oc_core script were actually being executed.
    * Fix oc_anim loop issue
    * Fix oc_anim script errors
    * Fix oc_anim automatic antislide
    * Fix bug where if you pressed a movement key while a pose is active and leash was causing movement, you would resume the pose unless you continues pressing a movement key
    * Repair addons - SL apparently rolled back my previous fixes when i uploaded the code last time
    * Modify installer to send out the full version string instead of first two numbers only. 
        * Further modify to make for a 7.x or below, send the version as: AppInstall, due to a bug where the version number is not being handled properly in 7.5 and below
    * Fixed bugs or implemented features (Ticket List)
        398
        395
        396
        390
        393
        374
        
        
Alpha 5
______
    * Full rewrite of oc_folders, potentially fixing all former issues with the script, including but not limited to stack heap collisions.
    * Added feature to oc_dialog: Sorting, this is enabled by passing a 1 after the AUTH level in the Dialog snippet code. Presently this only works for buttons that require numbers, so any menu with buttons longer than 24 digits, or  UUIDs which get passed to the Key2Name function, then sorted, then numbers get added.
    * Fix unreported bug where updating a development version would result in the "same or newer" message appearing incorrectly.
    * Fixed bugs or implemented features (Ticket List)
        358
        388
        165
        
    
Alpha 4
______
    * Removed oc_states and rewrote it to be a anti-crash and interactive settings editor, instead of being a script state manager due to too many bugs arising from the use of it, and not enough benefits gained.
    * Fixed bug reported by notecard from Trinkitz where anim lock if enabled would spam the wearer when doing unrelated tasks.
    * Added: Interactive Settings Editor
    * Fixed bugs or implemented features (Ticket list)
        387
        388 (partial - see note about trinkitz' bug)
        
        
Alpha 3
______
    * Added oc_states: This is a state manager, designed to shut off idle scripts, and turn them back on when needed. 
    * Fixed bugs or implemented features (Ticket list)
        386
        385
        384
        383
        382
        381
        380
        379
        378
        377
        376
        375
        373
        110
        79
    * Added the ability for the owner to disable hiding the collar
    * Attempt to fix more bugs with the new oc_anim script
    
        
Alpha 2
______
    * Rewrite of oc_anim
        * Fixed historical anti-slide bug
        * Reuploaded animations from github as higher priority due to AOs all being 3 or 4 improperly
    * Added weld feature (Use with caution, no current way to unweld except to reset all scripts)
    * Fixed bugs or implemented features (Ticket list)
        369
        365
        363
        362
        360
        361
        359
        356
    * Added a in-menu FEEDBACK / BUG button as a experimental alternative to GitHub. This button only works if you are on the newest Alpha/Beta/RC, and if it is newer than the release version. This shouldn't be used as a alternative to GitHub, but maybe hoping if reporting is more accessible, more might report issues.


        
Alpha 1
______
    * Rewrite of oc_auth, oc_com, oc_sys
        * Combined into oc_core and oc_api

# V 7.5  (aka V7.4.1)   
OpenCollar V 7.5 should be named OpenCollar V 7.4.1 but due to naming restrictions left over from V6 days we can't name it that.  So V 7.5 it is.  V 7.5 includes a bug fix to the force sit and could not wait to be released.   
**Dateline 22 April 2020**

As always, every old and new script on this list is licensed under the GPL V2.

# V 7.4   

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
