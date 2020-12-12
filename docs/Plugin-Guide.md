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

.

>  &nbsp; | TIMEOUT_READY = 30497
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, TIMEOUT_READY, "", "")
>Received by | ---
>Sent by | oc_states
>
>Announces that queue timing is ready for TIMEOUT_REGISTER calls

.

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

.

>  &nbsp; | TIMEOUT_FIRED = 30499
>---------|----------
>Last Update | 11/01/2020
>Formats | link_message(iSender, TIMEOUT_FIRED, Str, "")
>Received by | ---
>Sent by | oc_states
>
>Call received once a queued timer event has triggered.<br>
>Str is the name of the event that sent with TIMEOUT_REGISTER

.

>  &nbsp; | REBOOT = -1000
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, REBOOT, "reboot", "")
>Received by | ---
>Sent by | oc_states
>
>Scripts should reset when receiving this call<br>
>An additional form of this exists for master script communication. Scripts should not listen for "reboot --f"

.

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

.

>  &nbsp; | READY = -56
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, READY, "", "")
>Received by | oc_states
>Sent by | ---
>
>Call from oc_states requesting the script to respond with an ALIVE call<br>
>This only needs to be listened for during the startup phase. After receiving a STARTUP message, this is no longer required<br>

.

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

.

>  &nbsp; | CMD_ZERO = 0
>---------|----------
>Reviewed | 11/01/2020
>Formats | llMessageLinked(LINK_SET,CMD_ZERO,Str,Key);
>Received by | oc_API
>Sent by | ---
>
>Calculates auth for Key, then rebroadcasts Str on the appropriate CMD call<br>
>If Str == "initialize" this triggers several executive tasks. Plugins should not call initialize<br>

.

>  &nbsp; | MENUNAME_REQUEST = 3000
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, MENUNAME_REQUEST, Str, "")
>Received by | ---
>Sent by | oc_core
>
>Sent when the collar is ready to register plugins for the menu system<br>
>Str is the parent menu that is being requested, either "Apps" or "Main"<br>

.

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

.

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

.

>  &nbsp; | AUTH_REQUEST = 600
>---------|----------
>Reviewed | 11/01/2020
>Formats | llMessageLinked(LINK_SET, AUTH_REQUEST , Str, Key);
>Received by | oc_API
>Sent by | ---
>
>Message sent by a plugin to check the auth level of Key<br>
>Triggers an AUTH_REPLY event with Str as the key<br>
>Str is a value identifying this request/reply pair<br>

.

>  &nbsp; | AUTH_REPLY=601
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, AUTH_REPLY, "AuthReply"|kID|iAuth, Key)
>Received by | ---
>Sent by | oc_API
>
>Call triggered in response to AUTH_REQUEST<br>
>kID is the key being checked<br>
>iAuth is the calculated auth level<br>
>Key is the identifier for this request/reply pair. It copies the Str value in the AUTH_REQUEST call<br>

.

>  &nbsp; | CMD_SAFEWORD = 510
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, CMD_SAFEWORD, Str, "")<br>llMessageLinked(LINK_SET, CMD_SAFEWORD, Str,"")
>Received by | oc_rlvsuite, oc_rlvsys
>Sent by | Multiple
>
>Sent or received by the plugin to signify a safeword has been triggered<br>
>Str can be empty and currently does not impact functionality, if Str == "safeword" this signifies it was sent by oc_API<br>
>Will clear RLV restrictions in oc_rlvsuite and oc_rlvsys. Will trigger a CMD_RELAY_SAFEWORD event<br>

.

>  &nbsp; | CMD_RELAY_SAFEWORD = 511
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, CMD_RELAY_SAFEWORD, Str, "")<br>llMessageLinked(LINK_SET, CMD_RELAY_SAFEWORD, Str,"")
>Received by | oc_rlvsys, oc_relay
>Sent by | ---
>
>Message sent or received by the plugin to signify a safeword has been called.<br>
>Str can be empty and currently does not impact functionality, if Str == "safeword" this signifies it was triggered by a CMD_SAFEWORD call<br>

.

>  &nbsp; | CMD_RLV_RELAY = 507
>---------|----------
>Reviewed | 11/01/2020
>Formats | llMessageLinked(LINK_SET, CMD_RLV_RELAY, Str, key)
>Received by | oc_rlvsys
>Sent by | ---
>
>When sent a relay !pong event, will sit on a previously stored object for force sitting<br>
>Key is the key of the object to be sat upon<br>
>Str is a relay call ending in "," + wearer's UUID + ",!pong"<br>
>Note: This call may be deprecated<br>

.

>  &nbsp; | RLV_CMD = 6000
>---------|----------
>Reviewed | 12/4/2020
>Formats | llMessageLinked(LINK_SET, RLV_CMD, Str, Key);
>Received by | oc_rlvsys
>Sent by | ---
>
>Applies restrictions if RLV is enabled in the collar<br>
>Key is a value identifying the set of restrictions being modified. The restrictions of an identifier can be modified dynamically and are not static<br>
>Str is a set of RLV restrictions in standard RLV format, except the leading @ symbol is dropped<br>
>If Str == "clear" then the restrictions for a given identifier are removed, but not other restrictions<br>


.

>  &nbsp; | RLV_REFRESH = 6001
>---------|----------
>Reviewed | 12/4/2020
>Formats | link_message(iSender, RLV_REFRESH, "", "")
>Received by | ---
>Sent by | oc_rlvsys
>
>RLV plugins should reinstate/refresh their restrictions upon receiving this call.<br>

.

>  &nbsp; | DO_RLV_REFRESH = 26001
>---------|----------
>Reviewed | 12/4/2020
>Formats | link_message(iSender, DO_RLV_REFRESH, "", "")
>Received by | ---
>Sent by | oc_relay
>
>RLV plugins should reinstate/refresh their restrictions upon receiving this call.<br>
>TODO: Check if this is listened to for anything outside relay comms? Why does this duplicate RLV_REFRESH?

.

>  &nbsp; | RLV_CLEAR = 6002
>---------|----------
>Reviewed | 12/4/2020
>Formats | link_message(iSender, RLV_CLEAR, "", "")
>Received by | ---
>Sent by | oc_rlvsys
>
>RLV plugins should clear their restriction lists upon receiving this call.<br>

.

>  &nbsp; | RLV_OFF = 6100
>---------|----------
>Reviewed | 12/4/2020
>Formats | link_message(iSender, RLV_OFF, "", "")
>Received by | ---
>Sent by | oc_rlvsys
>
>RLV plugins should disable RLV activity upon receiving this call<br>

.

>  &nbsp; | RLV_ON = 6101
>---------|----------
>Reviewed | 12/4/2020
>Formats | link_message(iSender, RLV_ON, "", "")
>Received by | ---
>Sent by | oc_rlvsys
>
>RLV plugins should enable RLV activity upon receiving this call<br>

.

>  &nbsp; | POPUP_HELP = 1001
>---------|----------
>Reviewed | 12/5/2020
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Not in use. Commented out in oc_rlvsys, oc_particle<br>
>Note: This call may be deprecated<br>

.

>  &nbsp; | RLV_VERSION = 6003
>---------|----------
>Reviewed | 12/5/2020
>Formats | link_message(iSender, RLV_VERSION, Str, "")
>Received by | ---
>Sent by | oc_rlvsys
>
>Provides the RLV version of the wearer's viewer<br>
>Str is the numerical version string<br>
>Sent when RLV is turned on and when the collar rezzes or is reset and RLV is on<br>

.

>  &nbsp; | RLVA_VERSION = 6004
>---------|----------
>Reviewed | 12/5/2020
>Formats | link_message(iSender, RLVA_VERSION, Str, "")
>Received by | ---
>Sent by | oc_rlvsys
>
>Provides the RLVa version of the wearer's viewer<br>
>Str is the numerical version string<br>
>Sent when RLV is turned on and when the collar rezzes or is reset and RLV is on<br>

.

>  &nbsp; | RLV_QUERY = 6102
>---------|----------
>Reviewed | 12/5/2020
>Formats | llMessageLinked(LINK_SET, RLV_QUERY, "", "")
>Received by | oc_rlvsys
>Sent by | ---
>
>Call for plugins to query whether RLV is on or off<br>
>Generates an RLV_RESPONSE call<br>

.

>  &nbsp; | RLV_RESPONSE = 6103
>---------|----------
>Reviewed | 12/5/2020
>Formats | link_message(iSender, RLV_RESPONSE, Str, "")
>Received by | ---
>Sent by | oc_rlvsys
>
>Response to an RLV_QUERY call<br>
>Str is either "ON" or "OFF" depending on current RLV status<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | CALL
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | LINK_CMD_RESTDATA = -2577
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | LINK_CMD_RESTRICTIONS = -2576
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

.

>  &nbsp; | LINK_CMD_DEBUG=1999
>---------|----------
>Reviewed | ---
>Formats | ---
>Received by | ---
>Sent by | ---
>
>Description<br>

## OC_ SCRIPT SETTINGS:

TODO: Add data types, like titler_show={i} ?
key = k, integer = i, float = f, string = s, rot = r, vector = v

Script | Settings
---------|-------------
oc_anim | anim_pose, offset_standhover, offset_hovers, anim_animlock
oc_API | auth_owner, auth_trust, auth_block, auth_owner, auth_trust, auth_block, global_channel, global_prefix, AUTH_runawaydisable
oc_bell | bell_vol, bell_show, bell_on, bell_sound
oc_bookmarks | bookmarks_{NAME}
oc_core | global_safeword, global_safeworddisable, global_touchnotify, global_wearername, global_devicename, global_allowhide, global_locked, intern_weld, auth_group,  auth_public, auth_limitrange, global_hide, global_locked
oc_couples | coupleanim_verbose, coupleanim_timeout
oc_folders | folders_accessflags
oc_label | label_font, label_color, label_show, label_scroll, label_text
oc_leash | leash_leashedtoname, leash_leashedto, leash_strict, leash_turn, leash_leashlength
oc_meshlabel | label_font, label_color, label_show, label_scroll, label_{line#}text
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
