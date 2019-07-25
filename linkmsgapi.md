# Summary
This document will go over the linked message APIs only. If you need a document that goes over chat command APIs, please wait until v8.0 is finished as some parts relating to chat commands may change!


# Linked Messages

## Links

| Var Name | Value | Default | Example |
| -------- | ----- | ------- | ------- |
| [LINK_SAVE](#oc-links) | **Location of oc_settings prim** | [LINK_SET](#link_set) | ``` llMessageLinked(LINK_SAVE, LM_SETTING_*, .....) ``` |
| [LINK_DIALOG](#link_dialog) | **Location of oc_dialog prim** | [LINK_SET](#link_set) | ``` llMessageLinked(LINK_DIALOG, {SAY, NOTIFY, NOTIFY_OWNERS, DIALOG, SENSORDIALOG}, ....., ...) ``` |
| [LINK_AUTH](#oc-links) | **Location of oc_auth prim** | [LINK_SET](#link_set) | ``` llMessageLinked(LINK_AUTH, AUTH_REQUEST, UUID-requester, UUID-to-check); ``` |
| [LINK_ANIM](#oc-links) | **Location of oc_anim prim** | [LINK_SET](#link_set) | ``` llMessageLinked(LINK_ANIM, {ANIM_START, ANIM_STOP, ANIM_LIST_REQUEST, MVANIM_ANNOUNCE}, ..., ....); ``` |
| [LINK_RLV](#oc-links) | **Location of oc_rlvsys prim** | [LINK_SET](#link_set) | ``` llMessageLinked(LINK_RLV, {RLV_QUERY, RLV_CMD, CMD_RLV_RELAY}, ..., ...); ``` |


## Setting Messages
| Var Name | Value | Example |
| -------- | ----- | ------- |
| [LM_SETTING_SAVE](#lm_setting) | 2000 | ``` llMessageLinked(LINK_SAVE, LM_SETTING_SAVE, "token_key=value", ""); ``` |
| [LM_SETTING_DELETE](#lm_setting) | 2003 | ``` llMessageLinked(LINK_SAVE, LM_SETTING_DELETE, "token_key", ""); ``` |
| [LM_SETTING_REQUEST](#lm_setting) | 2001 | ``` llMessageLinked(LINK_SAVE, LM_SETTING_REQUEST, {"ALL", "token_value"}, ""); ``` **SEE DETAILS FOR LM_SETTING_REQUEST!** |
| [LM_SETTING_RESPONSE](#lm_setting) | 2002 | ``` llMessageLinked(LINK_SAVE, LM_SETTING_RESPONSE, "token_key=value", ""); ``` **SEE [LM_SETTING_RESPONSE](#lm_setting_response)** |
| [LM_SETTING_EMPTY](#lm_setting) | 2004 | ``` llMessageLinked(LINK_SAVE, LM_SETTING_EMPTY, "token_key", ""); ``` **SENT IN REPLY TO NO DATA ON LM_SETTING_REQUEST** |
| [LM_SETTING_RELAY_LOAD](#setting-relay) | 2101 | ``` llMessageLinked(LINK_ROOT, LM_SETTING_RELAY_LOAD, "", ""); ``` |
| [LM_SETTING_RELAY_CONTENT](#setting-relay) | 2100 | ``` llMessageLinked(LINK_SAVE, LM_SETTING_RELAY_CONTENT, "TOKEN=key~value", ""); ``` |
| [LINK_CMD_DEBUG](#oc-debug) | 1999 | ``` llMessageLinked(LINK_SET, LINK_CMD_DEBUG, ""|"ver", UUID-requesterAVATAR); ``` **See details!** |


### OC Links

`LINK_SAVE, LINK_DIALOG, LINK_AUTH, LINK_RLV, LINK_UPDATE` are all values which point to a destination linked prim. `LINK_UPDATE` will typically have the prim number attached to it's link message

### LINK_SET

LINK_SET is one of the Linden linked destinations with a default value of `-1`


### LM_SETTING

The various LM_SETTING requests all serve a purpose, but are mainly handled by the oc_settings script.
` LM_SETTING_SAVE, LM_SETTING_DELETE, LM_SETTING_REQUEST, LM_SETTING_EMPTY, LM_SETTING_RELAY_LOAD, LM_SETTING_RELAY_CONTENT `
As of version **7.2** `LM_SETTING_RELAY_CONTENT, and LM_SETTING_RELAY_LOAD` were implemented to allow for .settings to reside in the main prim. `oc_sys` additionally handles the settings loader.
<details>
<summary>LM_SETTING_REQUEST</summary>

#### LM_SETTING_REQUEST
**Please note that the segment below was copied from oc_settings and as such is licensed under GPLv2**
```lsl
        else if (iNum == LM_SETTING_REQUEST) {
             //check the cache for the token
            if (SettingExists(sStr)) llMessageLinked(LINK_ALL_OTHERS, LM_SETTING_RESPONSE, sStr + "=" + GetSetting(sStr), "");
            else if (sStr == "ALL") {
                g_iCheckNews = FALSE;
                llSetTimerEvent(2.0);
            } else llMessageLinked(LINK_ALL_OTHERS, LM_SETTING_EMPTY, sStr, "");
        }
```
</details>


#### LM_SETTING_RESPONSE
*NOTE: THIS LINKED MESSAGE IS TYPICALLY ONLY SENT FROM OC_SETTINGS TO OTHER SCRIPTS!*


### Setting Relay

`oc_sys` contains the .settings relay for the root prim. When a user requests the collar reload the .settings notecard, or the collar is reset, the ```LM_SETTING_RELAY_LOAD``` signal will be sent to oc_sys, in response, as it reads the notecard, it will send a ```LM_SETTING_RELAY_CONTENT``` with the raw content of a notecard line.

### OC Debug

**PLEASE NOTE THAT ANY DEBUG REQUESTS MUST HAVE A VALID UUID ATTACHED TO THE REQUEST TO A VALID AVATAR OR ELSE THERE WILL BE SCRIPT ERRORS**
To get a full debug output, just use a blank value on the `string` parameter. However if you only want the versions, then put only `ver` as the parameter. 
<details>
<summary>Sample output from versions command</summary>

```
[23:27:34] Animator: oc_anim SCRIPT VERSION: 7.3
[23:27:34] OpenCollar: oc_leash SCRIPT VERSION: 7.3
[23:27:34] OpenCollar: oc_dialog SCRIPT VERSION: 7.3
[23:27:34] OpenCollar: oc_relay SCRIPT VERSION: 7.3
[23:27:34] Animator: oc_couples SCRIPT VERSION: 7.3
[23:27:34] OpenCollar: oc_meshthemes SCRIPT VERSION: 7.3
[23:27:34] OpenCollar: oc_folders SCRIPT VERSION: 7.3
[23:27:34] OpenCollar: oc_exceptions SCRIPT VERSION: 7.3
[23:27:34] OpenCollar: oc_capture SCRIPT VERSION: 7.3
[23:27:34] OpenCollar: oc_rlvsuite SCRIPT VERSION: 7.3
[23:27:34] OpenCollar: oc_particle SCRIPT VERSION: 7.3
[23:27:34] OpenCollar: oc_resizer SCRIPT VERSION: 7.3
[23:27:34] OpenCollar: oc_bell SCRIPT VERSION: 7.3, APPVERSION: 1.1
[23:27:34] OpenCollar: oc_sys SCRIPT VERSION: 7.3 
[23:27:34] Settings: oc_settings SCRIPT VERSION: 7.3
[23:27:34] OpenCollar: oc_com SCRIPT VERSION: 7.3
[23:27:34] Auth: oc_auth SCRIPT VERSION: 7.3
[23:27:34] OpenCollar: oc_titler SCRIPT VERSION: 7.3
[23:27:34] OpenCollar: oc_themes2 SCRIPT VERSION: 7.2 
[23:27:34] OpenCollar: oc_bookmarks SCRIPT VERSION: 7.3
[23:27:36] RLV: oc_rlvsys SCRIPT VERSION: 7.3
```
</details>

<details>
<summary>Sample output of full debug</summary>

```
[23:28:31] Animator: oc_anim SCRIPT VERSION: 7.3
[23:28:31] OpenCollar: oc_leash SCRIPT VERSION: 7.3
[23:28:31] Animator: oc_couples SCRIPT VERSION: 7.3
[23:28:31] OpenCollar: oc_dialog SCRIPT VERSION: 7.3
[23:28:31] OpenCollar: oc_relay SCRIPT VERSION: 7.3
[23:28:31] OpenCollar: oc_titler SCRIPT VERSION: 7.3
[23:28:31] OpenCollar: oc_meshthemes SCRIPT VERSION: 7.3
[23:28:31] OpenCollar: oc_folders SCRIPT VERSION: 7.3
[23:28:31] OpenCollar: oc_exceptions SCRIPT VERSION: 7.3
[23:28:31] OpenCollar: oc_capture SCRIPT VERSION: 7.3
[23:28:31] OpenCollar: oc_rlvsuite SCRIPT VERSION: 7.3
[23:28:31] OpenCollar: oc_particle SCRIPT VERSION: 7.3
[23:28:31] OpenCollar: oc_resizer SCRIPT VERSION: 7.3
[23:28:31] OpenCollar: oc_bell SCRIPT VERSION: 7.3, APPVERSION: 1.1
[23:28:31] OpenCollar: oc_sys SCRIPT VERSION: 7.3 
[23:28:31] Settings: oc_settings SCRIPT VERSION: 7.3
[23:28:31] OpenCollar: oc_bookmarks SCRIPT VERSION: 7.3
[23:28:31] OpenCollar: oc_com SCRIPT VERSION: 7.3
[23:28:31] Auth: oc_auth SCRIPT VERSION: 7.3
[23:28:31] RLV: oc_rlvsys SCRIPT VERSION: 7.3
[23:28:33] OpenCollar: oc_titler TITLE TEXT: 
[23:28:33] OpenCollar: oc_meshthemes THEMES: 
[23:28:33] OpenCollar: oc_rlvsuite RESTRICTIONS: 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
[23:28:33] OpenCollar: oc_resizer SIZED BY SCRIPT: 0
[23:28:33] OpenCollar: oc_sys FREE MEMORY: 7998 bytes
[23:28:33] Settings: oc_settings FREE MEMORY: 28298 bytes
[23:28:33] Animator: oc_anim ANIM LOCK: 0 
[23:28:33] OpenCollar: oc_relay SOURCES: 
[23:28:33] OpenCollar: oc_exceptions SETTINGS: 
[23:28:33] OpenCollar: oc_capture CAPTURE ENABLED: 1 
[23:28:33] OpenCollar: oc_leash LEASHED TO: 00000000-0000-0000-0000-000000000000 
[23:28:33] Animator: oc_couples PARTNER:  
[23:28:33] OpenCollar: oc_bell HAS BELL PRIMS: 0 
[23:28:33] OpenCollar: oc_bookmarks DESTINATIONS: 
[23:28:33] RLV: oc_rlvsys FREE MEMORY: 23554 bytes
[23:28:33] OpenCollar: oc_particle SETTINGS: Shine 1 Turn 0 Strict 0 ParticleMode Ribbon R_Texture Silk C_Texture Chain Color <1.0,1.0,1.0> Size <0.04,0.04,1.0> Gravity -1.0 
[23:28:33] OpenCollar: oc_com PRIVATE CHANNEL: 1 
[23:28:33] Auth: oc_auth CAPTURE ACTIVE: 0 
[23:28:35] OpenCollar: oc_titler ON: 0
[23:28:35] OpenCollar: oc_meshthemes HIDDEN: 0
[23:28:35] OpenCollar: oc_rlvsuite TERMINAL ACCESS: 0
[23:28:35] OpenCollar: oc_resizer SIZE FACTOR: 100
[23:28:35] OpenCollar: oc_sys LOCKED: 0
[23:28:35] Settings: oc_settings lSettings length: 18
[23:28:35] OpenCollar: oc_capture CAPTOR:  
[23:28:35] Animator: oc_anim CURRENT POSE:  
[23:28:35] OpenCollar: oc_relay AUTH PENDING: 0 
[23:28:35] OpenCollar: oc_leash LENGTH: 3 
[23:28:35] OpenCollar: oc_bell BELL VISIBLE: 0 
[23:28:35] RLV: oc_rlvsys RLV_ON: 1
[23:28:35] OpenCollar: oc_particle LEASHED TO:   
[23:28:35] OpenCollar: oc_bookmarks TEMPORARY DESTINATIONS: 
[23:28:35] OpenCollar: oc_com PUBLIC CHANNEL ON: 1 
[23:28:35] Auth: oc_auth LIMIT ACCESS: 1 
[23:28:37] OpenCollar: oc_titler PARTICLE: 
[23:28:37] OpenCollar: oc_sys HIDDEN: 0
[23:28:37] Animator: oc_anim POSE LIST: back beautystand belly booty bop bracelets cutie display doggie kneel nadu naduserve obeissance1 rise shy submit table tower tower2 towerbracelets towerserve 
[23:28:37] OpenCollar: oc_bell BELL ON: 0 
[23:28:37] OpenCollar: oc_leash STAY: 0 
[23:28:37] OpenCollar: oc_particle LEASH ACTIVE: 0 
[23:28:38] OpenCollar: oc_com HUD LISTEN CHANNEL: -215206662 
[23:28:38] Auth: oc_auth OWN SELF: 1 
[23:28:38] OpenCollar Settings:

INTERN=dist~5556d037-3990-4204-a949-73e56cd3cb06
RLVSYS=on~1
GLOBAL=touchnotify~1~DeviceName~OpenCollar
AUTH=owner~5556d037-3990-4204-a949-73e56cd3cb06~public~1
CAPTURE=capture~1
[23:28:39] OpenCollar: oc_titler LAST AUTH: 504
[23:28:39] OpenCollar: oc_sys DETACHED WHILE LOCKED: 0
[23:28:40] OpenCollar: oc_themes2 LAST PARSED:  
[23:28:40] OpenCollar: oc_leash LEASHER IN RANGE: 0 
[23:28:40] OpenCollar: oc_particle STRICT MODE: 0 
[23:28:40] Auth: oc_auth OPEN ACCESS: 1 
[23:28:42] OpenCollar: oc_leash STRICT MODE: 0 
[23:28:42] OpenCollar: oc_particle LEASH PRIMS: leashpoint 3 1 leashpoint 8 1 
[23:28:42] Auth: oc_auth FIRST RUN: 0 
[23:28:44] OpenCollar: oc_leash FOLLOW MODE: 0 
[23:28:44] Auth: oc_auth DISABLE RUNAWAY: 0 
[23:28:46] OpenCollar: oc_leash COMMAND GIVER: 5556d037-3990-4204-a949-73e56cd3cb06 
[23:28:46] Auth: oc_auth GROUP: 0 
[23:28:48] OpenCollar: oc_leash LEASH COMMANDER ID:  
[23:28:50] OpenCollar: oc_leash LEASHED TO AVI: 0 
[23:28:52] OpenCollar: oc_leash LEASH HOLDER: s&p_leashholder 
```
</details>

<details>
<summary>Sample LINK_CMD_DEBUG section</summary>

**Please note the below segment is copied from oc_sys and is licensed under the GPLv2**
```lsl
        } else if(iNum == LINK_CMD_DEBUG){
            integer onlyver=0;
            if(sStr == "ver")onlyver=1;
            llInstantMessage(kID, llGetScriptName() +" SCRIPT VERSION: "+g_sCollarVersion+" "+g_sDevStage);
            if(onlyver)return; // basically this command was: <prefix> versions
            // The rest of this command can be access by <prefix> debug
            llInstantMessage(kID, llGetScriptName() +" FREE MEMORY: "+(string)llGetFreeMemory()+" bytes");
            llInstantMessage(kID, llGetScriptName()+" LOCKED: "+(string)g_iLocked);
            llInstantMessage(kID, llGetScriptName()+" HIDDEN: "+(string)g_iHide);
            llInstantMessage(kID, llGetScriptName()+" DETACHED WHILE LOCKED: "+(string)g_bDetached);
            
            
        }
```
</details>
