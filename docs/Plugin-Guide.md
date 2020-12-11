---
layout: home
title: OpenCollar Plugin Guide
---

This document is a guide to  the creation, distribution and sale of third party plugins and addons for OpenCollar products.  

## LICENSES

Scripts of completely original material, derived only from OpenCollar public domain scripts--such as the plugin template--or that only use code designed to interface with OpenCollar scripts--such as the Plugin API defined in this document--may be released by creators under any license they wish without restriction.

Any script derived from the OpenCollar open source scripts, in whole or in part, must retain the same permissions as the scripts they are derived from--namely full permissions to copy modify and transfer; with the exception of the plugin template itself or similar listener code whose sole purpose is to link your plugin to the OpenCollar object.

Any resource licensed under the Creative Commons Attribution-ShareAlike 4.0 International Public License [https://creativecommons.org/licenses/by-sa/4.0/legalcode](https://creativecommons.org/licenses/by-sa/4.0/legalcode) must retain the permssions you received.  Resources include models, animations, sounds, textures, images and particle effects.

Any OpenCollar resource or script you distribute along with your plugin must include a copy of the respective OpenCollar license. The OpenCollar GPL maybe be found here:  https://github.com/OpenCollarTeam/OpenCollar/blob/master/LICENSE. 

## BEST PRACTICES

Creators are free to set Second Life share permissions for their creations however they wish within the confines of the above license. However, for end user convenience it is advised that separate copy/modify and modify/transfer versions of the script be made available to avoid the end user having a no copy/no transfer object.

The prefix "oc_" and the word "OpenCollar" and its derivatives are reserved for use in only official OpenCollar script names. To prevent end user confusion, plugins should use their own prefix and/or brand name.

Scripts that use RLV may send their own @commands, but must honor all RLV_* management calls sent from the OpenCollar scripts. Using OpenCollar's built-in RLV management will provide automated enablement/disablement, as well as viewer compliance checking, and integration with other OpenCollar RLV features.

## LINK MESSAGE CALLS:

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | TIMEOUT_READY = 30497
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, TIMEOUT_READY, "", "")
>Received by | ---
>Sent by | oc_states
>
>Announces that queue timing is ready for TIMEOUT_REGISTER calls

>  &nbsp; | TIMEOUT_REGISTER = 30498
>---------|----------
>Reviewed | 11/01/2020
>Format | llMessageLinked(LINK_SET, TIMEOUT_REGISTER, Str, Key);
>Received by | oc_states
>Sent by | ---
>
>Adds a timer to the timer queue<br>
>Str is how long the timer should be for in seconds<br>
>Key is the event's identifier and will be returned once the TIMEOUT_FIRED call generates<br>
>Queue timing is subject to time dilation, approximating 1 second accuracy at no dilation<br>

>  &nbsp; | TIMEOUT_FIRED = 30499
>---------|----------
>Last Update | 11/01/2020
>Formats | link_message(iSender, TIMEOUT_FIRED, Str, "")
>Received by | ---
>Sent by | oc_states
>
>Call received once a queued timer event has triggered.<br>
>Str is the name of the event that sent with TIMEOUT_REGISTER

>  &nbsp; | REBOOT = -1000
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, REBOOT, "reboot", "")
>Received by | ---
>Sent by | oc_states
>
>Scripts should reset when receiving this call<br>
>An additional form of this exists for master script communication. Scripts should not listen for "reboot --f"

>  &nbsp; | ALIVE = -55
>---------|----------
>Reviewed | 11/01/2020
>Formats | llMessageLinked(LINK_SET, ALIVE, llGetScriptName(),"");
>Received by | oc_states
>Sent by | ---
>
>Notifies oc_scripts that the script is active in the collar<br>
>Causes oc_scripts to register the script for anti-crash checking<br>
>This should be sent automatically on reset, and any time a READY message is received<br>
>No longer needed after a STARTUP message is received<br>

>  &nbsp; | READY = -56
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, READY, "", "")
>Received by | oc_states
>Sent by | ---
>
>Call from oc_states requesting the script to respond with an ALIVE call<br>
>This only needs to be listened for during the startup phase. After receiving a STARTUP message, this is no longer required<br>

>  &nbsp; | STARTUP = -57
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, STARTUP, Str, "")
>Received by | ---
>Sent by | ---
>
>Call signaling for plugin to enter active state<br>
>Plugins do not need to check Str to accept this message<br>
>Plugins no longer have to send ALIVE or listen for READY after receiving this call<br>
>Str is a list of all scripts that succesfully registered during READY phase<br>

>  &nbsp; | CMD_ZERO = 0
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | MENUNAME_REQUEST = 3000
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, MENUNAME_REQUEST, Str, "")
>Received by | ---
>Sent by | oc_core
>
>Sent when the collar is ready to register plugins for the menu system<br>
>Str is the parent menu that is being requested, either "Apps" or "Main"<br>

>  &nbsp; | MENUNAME_RESPONSE = 3001
>---------|----------
>Reviewed | 11/01/2020
>Formats | llMessageLinked(iSender, MENUNAME_RESPONSE, ParentMenu|SubMenu, "");
>Received by | oc_core
>Sent by | ---
>
>Call sent in reply to a MENUNAME_REQUEST event<br>
>ParentMenu is the parent menu to register this plugin's menus under. This can be either "Apps" or "Main"<br>
>SubMenu is the name of the button for entering this plugin's menus<br>

>  &nbsp; | MENUNAME_REMOVE = 3003
>---------|----------
>Reviewed | 11/01/2020
>Formats | llMessageLinked(LINK_SET, MENUNAME_REMOVE , ParentMenu|SubMenu, "");
>Received by | oc_core
>Sent by | ---
>
>Sent when a plugin what's to remove itself from the collar's menu system<br>
>ParentMenu is the parent menu to register this plugin's menus under. This can be either "Apps" or "Main"<br>
>SubMenu is the name of the button for entering this plugin's menus<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

## OC_ SCRIPT SETTINGS:

TODO: Add data types, like titler_show=<integer> ?

Script | Settings
---------|-------------
oc_anim | anim_pose, offset_standhover, offset_hovers, anim_animlock
oc_API | auth_owner, auth_trust, auth_block, auth_owner, auth_trust, auth_block, global_channel, global_prefix, AUTH_runawaydisable
oc_bell | bell_vol, bell_show, bell_on, bell_sound
oc_bookmarks | bookmarks_<NAME>
oc_core | global_safeword, global_safeworddisable, global_touchnotify, global_wearername, global_devicename, global_allowhide, global_locked, intern_weld, auth_group,  auth_public, auth_limitrange, global_hide, global_locked
oc_couples | coupleanim_verbose, coupleanim_timeout
oc_folders | folders_accessflags
oc_label | label_font, label_color, label_show, label_scroll, label_text
oc_leash | leash_leashedtoname, leash_leashedto, leash_strict, leash_turn, leash_leashlength
oc_meshlabel | label_font, label_color, label_show, label_scroll, label_<line#>text
oc_particle | particle_L_GLOW, particle_L_COLOR, particle_L_GRAVITY,  particle_L_SIZE, particle_rtexture, particle_ctexture, particle_particlemode
oc_relay | relay_wearer, relay_helpless, relay_mode, relay_trustowner, relay_trusttrust
oc_resizer | No settings
oc_rlvextension | rlvext_mincamdist, rlvext_maxcamdist, rlvext_bluramount, rlvext_muffle, rlvext_owner, rlvext_trusted, rlvext_custom, rlvext_strict
oc_rlvsuite | rlvsuite_masks, rlvsuite_macros
oc_rlvsys | rlvsys_on, rlvsys_handshakes
oc_settings | settings_nocomma
oc_states | No settings
oc_themes | global_hide
oc_titler | titler_plain, titler_show, titler_offset, titler_title, titler_color
