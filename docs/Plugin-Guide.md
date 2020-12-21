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
>Formats | llMessageLinked(iSender, MENUNAME_RESPONSE, ParentMenu\|SubMenu, "");
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
>Formats | llMessageLinked(LINK_SET, MENUNAME_REMOVE , ParentMenu\|SubMenu, "");
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
>Formats | link_message(iSender, AUTH_REPLY, "AuthReply"\|kID\|iAuth, Key)
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
>Formats | link_message(iSender, CMD_SAFEWORD, Str, "")<br>llMessageLinked(LINK_SET, CMD_SAFEWORD, Str,"");
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
>Formats | link_message(iSender, CMD_RELAY_SAFEWORD, Str, "")<br>llMessageLinked(LINK_SET, CMD_RELAY_SAFEWORD, Str,"");
>Received by | oc_rlvsys, oc_relay
>Sent by | ---
>
>Message sent or received by the plugin to signify a safeword has been called.<br>
>Str can be empty and currently does not impact functionality, if Str == "safeword" this signifies it was triggered by a CMD_SAFEWORD call<br>

.

>  &nbsp; | CMD_RLV_RELAY = 507
>---------|----------
>Reviewed | 11/01/2020
>Formats | llMessageLinked(LINK_SET, CMD_RLV_RELAY, Str, key);
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
>Formats | llMessageLinked(LINK_SET, RLV_QUERY, "", "");
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

>  &nbsp; | LEASH_START_MOVEMENT = 6200
>---------|----------
>Reviewed | 12/7/2020
>Formats | link_message(iSender, LEASH_START_MOVEMENT, "", "")
>Received by | ---
>Sent by | oc_leash
>
>Communication call between oc_anim and oc_leash signaling the start of movement redirect by the collar when user is leashed<br>
>Does not generate call on yank<br>

.

>  &nbsp; | LEASH_END_MOVEMENT = 6201
>---------|----------
>Reviewed | 12/7/2020
>Formats | link_message(iSender, LEASH_END_MOVEMENT, "", "")
>Received by | ---
>Sent by | oc_leash
>
>Communication call between oc_anim and oc_leash signaling the end of movement redirect by the collar when user is leashed<br>
>Does not generate call on yank<br>

.

>  &nbsp; | ANIM_START = 7000
>---------|----------
>Reviewed | 12/12/2020
>Formats | llMessageLinked(LINK_SET, ANIM_START, Str,"");
>Received by | oc_anim
>Sent by | ---
>
>Plays an animation<br>
>Str must be an animation in the same prim as the oc_anim script<br>
>This does not provide a success or fail response<br>

.

>  &nbsp; | ANIM_STOP = 7001
>---------|----------
>Reviewed | 12/12/2020
>Formats | llMessageLinked(LINK_SET, ANIM_STOP, Str,"");
>Received by | oc_anim
>Sent by | ---
>
>Stops an active animation<br>
>Str must be an active animation started by oc_anim
>This does not provide a success or fail response<br>

.

>  &nbsp; | ANIM_LIST_REQ = 7002
>---------|----------
>Reviewed | 12/12/2020
>Formats | llMessageLinked(LINK_SET, ANIM_LIST_REQ, "","");
>Received by | oc_anim
>Sent by | ---
>
>Requests a list of available animations<br>
>List sent as ANIM_LIST_RES response<br>

.

>  &nbsp; | ANIM_LIST_RES = 7003
>---------|----------
>Reviewed | 12/12/2020
>Formats | link_message(iSender, ANIM_LIST_RES, anim1\|anim2\|..., "")
>Received by | oc_anim
>Sent by | ---
>
>List of animations sent in response to a ANIM_LIST_REQ call<br>
>List is a | (pipe) delimited list of animations in the same prim as the oc_anim script<br>

.

>  &nbsp; | LOADPIN = -1904
>---------|----------
>Reviewed | 12/16/2020
>Formats | llMessageLinked(LINK_SET, LOADPIN, "oc_couple","");<br>link_message(iSender, LOADPIN, Pin + "@oc_couple", Key)
>Received by | oc_couples
>Sent by | oc_couples
>
>Confirmed deprecated and slated for removal<br>
>Sets the access pin for new scripts to be generated in the oc_couples prim<br>
>Pin is the access pin<br>
>Key is the UUID for the object oc_couple is in<br>

.

>  &nbsp; | CMD_PARTICLE = 20000
>---------|----------
>Reviewed | 12/18/2020
>Formats | llMessageLinked(LINK_SET, CMD_PARTICLE, Action + "|" + IsAvatar, Key)
>Received by | oc_particle
>Sent by | ---
>
>This call generates a leash particle effect from the collar's leash point prim to the specified Key<br>
>Key is the item to be be the leash particle target<br>
>If Action == "unleash" then we're removing a leash particle. Any other value and we're creating a particle target<br>
>IsAvatar is an integer defining if we're leashing to an avatar. If this is "1" then we are and this enabled such things as leash target redirect using the lockmeister<br>

.

>  &nbsp; | CMD_OWNER = 500<br>CMD_TRUSTED = 501<br>CMD_GROUP = 502<br>CMD_WEARER = 503<br>CMD_EVERYONE = 504<br>CMD_BLOCKED = 520<br>CMD_NOACCESS=599
>---------|----------
>Reviewed | 12/20/2020
>Formats | llMessageLinked(LINK_SET, CMD_\*, Str, Key);<br>link_message(iSender, CMD_\*, Str, Key
>Received by | ---
>Sent by | oc_API
>
>Defines the auth level of a calculated command that was broadcast on CMD_ZERO<br>
>Key is the UUID of the person who sent the message. For internally generated calls, this can be "" or wearer<br>
>Str is the command being issued, such as "clear", "safeword", "runaway", or submenu + " menu"<br>
>CMD_\* is the call where \* represents the auth level name<br>

.

>  &nbsp; | NOTIFY = 1002
>---------|----------
>Reviewed | 11/01/2020
>Formats | llMessageLinked(LINK_SET, NOTIFY, i + Str, Key);
>Received by | oc_dialog
>Sent by | ---
>
>Sends Str as a message to avatar Key if they're within the region<br>
>If i == 0, then the wearer is not given the message, otherwise both the Key specified and the wearer get the message<br>


.

>  &nbsp; | NOTIFY_OWNERS = 1003
>---------|----------
>Reviewed | 11/01/2020
>Formats | llMessageLinked(LINK_SET, NOTIFY_OWNERS, Str, Key);
>Received by | oc_dialog
>Sent by | ---
>
>Sends a message to the owners of the wearer who are within the current region<br>
>If Key == "ignoreNearby", then any owner within 20 meters of the wearer will not be notified<br>

.

>  &nbsp; | SAY = 1004
>---------|----------
>Reviewed | 11/01/2020
>Formats | llMessageLinked(LINK_SET, SAY, i + Str, "");
>Received by | oc_dialog
>Sent by | ---
>
>Has the collar say Str to local as a pose and with a blank string as the name<br>
>If i == 0, then this is a normal say, otherwise a whisper<br>

.

>  &nbsp; | DIALOG = -9000
>---------|----------
>Reviewed | 11/01/2020
>Formats | llMessageLinked(LINK_SET, DIALOG, kRecipient\|sPrompt\|iPage\|lButtons\|lUtilityButtons\|iAuth\|iSorted, Key);
>Received by | oc_dialog
>Sent by | ---
>
>Sends a dialog prompt to the specified user.<br>
>Will automatically generate paged dialogs when there are more than 12 buttons to be displayed. Page turning events will not generate a DIALOG_RESPONSE<br>
>If a string of UUID's is passed, collar will automatically attempt to resolve them to 1) a named URI link for avatars, 2: format of 'displayname (legacyname)', or 3) legacyname<br>
>If any one button name is too long, the buttons will be numbered and a non-truncated button list generated in the dialog text<br>
>iAuth and iSorted are optional<br>
>kRecipient is the key of the recipient of the dialog box<br>
>sPrompt The message text at the top of the dialog box<br>
>iPage If the list of buttons would generate multiple pages, this will generate the dialog box on the specified page. First page is page 0<br>
>lButtons is list of buttons delimited by \` (back quote)<br>
>If the first option in lButtons is "colormenu please", then the list of buttons will be replaced with a list of colors. The return value if a color is selected is the color's vector.<br>
>lUtilityButtons is a list of buttons to be displayed on every page. delimited by \` (back quote)<br>
>iAuth will tag the dialog with a numerical value that will be returned as the iAuth on DIALOG_RESPONSE. When first entering the plugin's menu system, this represents the authorization level of the user. This should only ever be used to reflect true authorization levels of the user. iAuth is reassed if the plugin's dialog system is exited but not while the dialog calls are directed at the plugin.<br>
>If setting global_showlevel is non-zero, then iAuth will display in the dialog text<br>
>Key is a value identifying this specific menu request. This will be returned as the Key of the link message when a response is received<br>
>iSorted if true will attempt to sort the buttons. If the buttons are object or avatar UUID's this will attempt to sort by name.<br>

.

>  &nbsp; | DIALOG_RESPONSE = -9001
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, DIALOG_RESPONSE, kUser\|sButton\|iPage\|iAuth, Key)
>Received by | ---
>Sent by | oc_dialog
>
>Call received when user clicks a dialog button<br>
>Does not generate if user clicks the page turn buttons<br>
>kUser is the key of the user who clicked the button<br>
>sButton is the button clicked<br>
>iPage is the page of the dialog menu that was clicked<br>
>iAuth is the auth level of the user. On initial plugin menu entry this is the auth level reported by the collar. Subsequent menus are the auth level returned in DIALOG message or CMD_ZERO if iAuth was not supplied<br>
>Key is the Key provided by the DIALOG message. Otherwise this is a random key generated by the collar script<br>
>Every DIALOG_RESPONSE call generated by the collar (including page turns) generates one of two events even if no DIALOG_RESPONSE is generated:<br>
>DIALOG + 1 (-8999) == if a dialog is generated that contains buttons, sStr has structure sPrompt|lButtons|iAuth<br>
>DIALOG + 2 (-8988) == if a dialog is generated that contains no buttons. sStr has structure sPrompt|iAuth<br>

.

>  &nbsp; | DIALOG_TIMEOUT = -9002
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, DIALOG_RESPONSE, "", Key)
>Received by | ---
>Sent by | oc_dialog
>
>Key received when a dialog prompt has timed out<br>
>Key is the key associated with the timed out menu<br>
>By default, the time for a dialog to time out is 5 minutes<br>

.

>  &nbsp; | SENSORDIALOG = -9003
>---------|----------
>Reviewed | 11/01/2020
>Formats | llMessageLinked(LINK_SET, SENSORDIALOG, kRCPT|sPrompt|fndName\`fndKey\`fndType\`radius\`arc\`match\`rtrnResponse\|utilityButtons\|iAuth, Key);
>Received by | oc_dialog
>Sent by | ---
>
>Generates a DIALOG call for kRCPT with a list of things found via a sensor event<br>
>If nothing matching the described search is found, a DIALOG call is generated with the only buttons being the utilityButtons<br>
>kRCPT is the person to send the dialog to<br>
>sPrompt is the dialog text<br>
>fndName is the llSensor name field<br>
>fndKey is the llSensor id field<br>
>fndType is the llSensor type field<br>
>radius is the llSensor radius field<br>
>arc is the llsensor arc field<br>
>match is optional string, if included will return the first instance of a search result that starts with the given text. IE, 'jo' would return 'joseph' if joseph is the first result starting with 'jo' returned by the search<br>
>rtrnResponse is optional integer, if TRUE will generate a DIALOG_RESPONSE instead of a DIALOG<br>

.

>  &nbsp; | LM_SETTING_SAVE = 2000
>---------|----------
>Reviewed | 12/12/2020
>Formats | llMessageLinked(LINK_SET, LM_SETTING_SAVE, ScriptID_Token=Value, Key);
>Received by | oc_settings
>Sent by | ---
>
>Call used by plugins to save settings<br>
>Token is the name of the setting<br>
>ScriptID is a prepended string to identify settings specific to this script<br>
>Global and intern are reserved scriptID's<br>
>Value is the value of the token<br>
>Key is a value to authorize modifying auth and intern scriptID's. To modify these, pass the Key "origin"<br>
>An LM_SETTING_RESPONSE where sStr == scriptID_token=value is sent upon completion of this save<br>

.

>  &nbsp; | LM_SETTING_REQUEST = 2001
>---------|----------
>Reviewed | 11/01/2020
>Formats | llMessageLinked(LINK_SET, LM_SETTING_REQUEST, ScriptID_Token, "");
>Received by | oc_settings
>Sent by | ---
>
>Message sent by scripts to request the value of a given ScriptID_Token<br>
>Token is the name of the setting to request<br>
>ScriptID is the prepended ID for the script the setting belongs to<br>
>If ScriptID = "ALL" then rhe response will be all the settings, one at a time every 1/4 seconde<br>
>Any script can request the settings of any other script
>This triggers an LM_SETTING_RESPONSE call

.

>  &nbsp; | LM_SETTING_RESPONSE = 2002
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, DIALOG_RESPONSE, ScriptID_Token=Value, "")
>Received by | ---
>Sent by | oc_settings
>
>Message received by scripts in response to LM_SETTING_REQUEST events<br>
>Token is the name of the setting to request<br>
>ScriptID is the prepended ID for the script the setting belongs to<br>
>Value is the value stored for this token<br>

.

>  &nbsp; | LM_SETTING_DELETE = 2003
>---------|----------
>Reviewed | 11/01/2020
>Formats | llMessageLinked(LINK_SET, LM_SETTING_DELETE,  scriptID_token, Key);
>Received by | oc_settings
>Sent by | ---
>
>Sent by scripts to delete saved settings<br>
>Token is the name of the setting to request<br>
>ScriptID is the prepended ID for the script the setting belongs to<br>
>Key is a value used to check if certain internal and authorization settings may be modified by the request. This will normally be "". To modify protected values, pass "origin"
>Note: There is no check to prevent a script from deleting settings by other scripts. The plugin should sanity check itself to prevent this

.

>  &nbsp; | LM_SETTING_EMPTY = 2004
>---------|----------
>Reviewed | 11/01/2020
>Formats | link_message(iSender, DIALOG_RESPONSE, ScriptID_Token, "")
>Received by | ---
>Sent by | oc_settings
>
>Response to an LM_SETTING_REQUEST when the requested ScriptID_Token does not exist<br>
>Token is the name of the setting to request<br>
>ScriptID is the prepended ID for the script the setting belongs to<br>

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


## CALL ERRATA:

Substitutions for SAY, NOTIFY_OWNERS, NOTIFY, DIALOG, SESORDIALOG text:
   - %NOACCESS% replaced with "Access Denied"
   - %PREFIX% replaced with the wearer's prefix. By default first two letters of their legacy name
   - %CHANNEL% replaced with the non-local chat channel that the collar will accept commands on. By default "1"
   - %DEVICETYPE% replaced with the type of this device. By default, "collar"
   - %WEARERNAME% replaced with the name of the wearer. By default a URI for the wearer
   - %DEVICENAME% replaced with the name of the collar. By default either the description of the root prim or the name of the root prim


## OC_ SCRIPT SETTINGS:

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
