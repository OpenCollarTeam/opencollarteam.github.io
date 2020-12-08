---
layout: home
title: OpenCollar Plugin Guide
---

This document is a guide to  the creation, distribution and sale of third party plugins and addons for OpenCollar products.  

## Permissions and Licences

When creating a plugin or addon for OpenCollar, you are free to set the permissions on your own work as you choose.

However, any script derived from the OpenCollar open source scripts, in whole or in part, and therefore subject to their public 
license must retain the same permissions as the scripts you received: namely full permissions to copy modify and transfer; with 
the exception of the plugin template itself or similar listener code whose sole purpose is to link your plugin to the OpenCollar
object.

Any resource licensed under the Creative Commons Attribution-ShareAlike 4.0 International Public License 
[https://creativecommons.org/licenses/by-sa/4.0/legalcode](https://creativecommons.org/licenses/by-sa/4.0/legalcode) must retain the permssions you received.  Resources include models, 
animations, sounds, textures, images and particle effects.

It is advisable to make available separate versions set to copy-modify and modify-transfer respectively, so that users can choose the version that corresponds to the permissions on their collar object and do not end up with an object that is neither copy nor transfer.
 Any OpenCollar resource or script you distribute along with your plugin must include a copy of the respective OpenCollar license.  The OpenCollar GPL maybe be found here:  https://github.com/OpenCollarTeam/OpenCollar/blob/master/LICENSE.

## BRANDING

Users should be able to clearly see which scripts are yours and which scripts are from the OpenCollar project.  
To prevent confusion, do not use the "oc_" prefix or the word "OpenCollar" in your script name. 
Use your own prefix and/or brand name instead. 

## LINK MESSAGE CALLS:

TBW

TIMEOUT_READY | 30497
---------|----------
Last Update | ---
Formats | link_message(iSender, TIMEOUT_READY, "", "")
Received By | ---
Sent By | oc_states
Description | Announces that queue timing is ready for TIMEOUT_REGISTER events

## OC_ SCRIPT SETTINGS:

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
