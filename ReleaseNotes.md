# OpenCollar Release Notes

## 7.2

- oc_anim  
    * Capitalization and misc formatting corrections. 
    * Added Checkbox helper function   
- oc_auth
    * A fix for capture having too much access, will now prevent certain menus being used if captured
    * Will now prompt to confirm disabling OwnSelf
- oc_dialog
    * Added ability to add a explanation for what access was denied to
    * Fixed what auth returns for public, group, and everyone who should_not_have_access_to_the_collar!
    * Public/Group will now return NO_ACCESS if you are not within range of the collar.
- oc_bell
    * Only added access denied explanations
- oc_bookmarks 
    * Now ignores group and public access to prevent spam
- oc_capture
    * Added new token: isActive
- oc_com
    * Add in llToLower to make sure that prefix is case-insensitive
- oc_leash
    * Made it so passing the leash permits new leash holder to either pass it or unleash. Previously they would get an Access Denied message.
    * Floating in air after going down stairs or a hill, etc, has been resolved.
    * Misc settings fix due to new oc_settings behavior to prevent a infinite loop
    * Leash Holder giving ability now implemented
- oc_relay
    * Safeword will now cause the relay to ignore all requests for 20 seconds, and release all grabbed objects.
- oc_rlvsuite
    * Terminal now has a way to configure whether public/group/trusted/wearer are allowed or denied access to the terminal. Default is only Owner, Wearer, Trusted.
    * Removed misc. leftover VD references.
- oc_rlvsys
    * Sensors have been removed  
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
    * If a animation is added to the inventory in root prim, it will automatically move the animation.
- oc_titler
    * Particles now honor the last rank as well as the title.

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
