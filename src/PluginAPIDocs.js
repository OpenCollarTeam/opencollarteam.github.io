import React from "react";
import { Card, Table } from "react-bootstrap";
import Highlight from "react-highlight";

const PluginAPIDocs = (props) => {
  const Codes = [
    {
      Number: -55,
      ID: "ALIVE",
      Description: "A part of the synchronized startup sequence",
      Example: 'llMessageLinked(LINK_SET, ALIVE, llGetScriptName(), "");',
      Response: "",
    },
    {
      Number: -56,
      ID: "READY",
      Description:
        "A part of the synchronized startup sequence. This is automatically sent out every second during the startup process.",
      Example: 'llMessageLinked(LINK_SET, READY, llGetScriptName(), "");',
      Response: "ALIVE",
    },
    {
      Number: -57,
      ID: "STARTUP",
      Description:
        "A part of the synchronized startup sequence. This is automatically sent after no new unique ALIVE signals are detected for at least 5 seconds. The script responsible for sending this is oc_states.",
      Example: 'llMessageLinked(LINK_SET, STARTUP, "", "");',
      Response: "",
    },
    {
      Number: -1000,
      ID: "REBOOT",
      Description: "This is the reboot signal to restart scripts",
      Example:
        'llMessageLinked(LINK_SET, REBOOT, "", "");\nllMessageLinked(LINK_SET, REBOOT, "reboot --f", "");',

      Response: "",
    },
    {
      Number: -1904,
      ID: "LOADPIN",
      Description:
        "*DEPRECATED SIGNAL*. Former purpose: Requests and sends the pin for the scripts that are loaded in linked prims. This is both the request and response signal.",
      Example:
        'llMessageLinked(LINK_SET, LOADPIN, "oc_rlvsys", "");\nllMessageLinked(LINK_SET, LOADPIN, "pinCode@oc_rlvsys", "");',
      Response: "LOADPIN",
    },
    {
      Number: -2576,
      ID: "LINK_CMD_RESTRICTIONS",
      Description:
        "A signal exchanged by rlvsuite and rlvextension to indicate active restrictions",
      Example:
        'llMessageLinked(LINK_SET, LINK_CMD_RESTRICTIONS, "unsit=n=-1", "");',
      Response: "",
    },
    {
      Number: -2577,
      ID: "LINK_CMD_RESTDATA",
      Description:
        "A signal exchanged by rlvsuite and rlvextension to indicate active exceptions",
      Example:
        'llMessageLinked(LINK_SET, LINK_CMD_RESTDATA, "MinCamDist=0.328", kMenuUser);',
      Response: "",
    },
    {
      Number: -9000,
      ID: "DIALOG",
      Description:
        "This signal is used to generate a dialog. The format is as follows, and uses a pipe delimiter. The dialog will automatically translate full UUID menus into the correct names, and will add utility buttons when there is multiple pages. The menu text supports the same substitutions as NOTIFY.  RecipientID|Prompt Text|Page Number|ButtonList`Buttons..`Buttons|UtilityButtons`Utility|AuthLevel|SortFlag",
      Example:
        'llMessageLinked(LINK_SET, DIALOG, kAvatar+"|Hello\\n\\nPlease select an option!|0|OK`Button2|BACK|500|0", kDialogSessionID);\n// for the color menu see below\nllMessageLinked(LINK_SET, DIALOG, kAvatar+"|Hello\\n\\nPlease select an option!|0|colormenu please|BACK|500|0", kDialogSessionID);',

      Response: "DIALOG_RENDER",
    },
    {
      Number: -9001,
      ID: "DIALOG_RESPONSE",
      Description:
        "This signal is used to send what button the avatar has clicked on! The format is: AvatarID|Button Name|Page|Auth Level",
      Example:
        'llMessageLinked(LINK_SET, DIALOG_RESPONSE, kAvatar+"|BACK|0|500", kDialogSessionID);',

      Response: "",
    },
    {
      Number: -9002,
      ID: "DIALOG_TIMEOUT",
      Description:
        "This signal tells relevant scripts that a dialog has timed out.",
      Example:
        'llMessageLinked(LINK_SET, DIALOG_TIMEOUT, "", kDialogSessionID);',

      Response: "",
    },
    {
      Number: -9003,
      ID: "SENSORDIALOG",
      Description:
        "This requests oc_dialog to generate a dialog based on a sensor. The format for this LM is undocumented, and is scheduled to be cleaned up in a more... obvious way",
      Example: "//TODO",

      Response: "DIALOG_RENDER",
    },
    {
      Number: -9013,
      ID: "DIALOG_RENDER",
      Description:
        "This is a special signal which is unused by the core scripts, but can be used by plugins or addons.  This consists of the final menu text and the final menu buttons after value substitutions have completed.",
      Example:
        'llMessageLinked(LINK_SET, DIALOG_RENDER, PromptText+"|"+FinalButtonList`Buttons|AuthLevel, "");',

      Response: "",
    },
    {
      Number: -9100,
      ID: "QUERY_FOLDER_LOCKS",
      Description: "Signal to the folder locks to check if a lock is active",
      Example: 'llMessageLinked(LINK_SET, QUERY_FOLDER_LOCKS, FolderPath, "");',
      Response: "REPLY_FOLDER_LOCKS",
    },
    {
      Number: -9101,
      ID: "REPLY_FOLDER_LOCKS",
      Description: "Folder locks response",
      Example:
        "llMessageLinked(LINK_SET, REPLY_FOLDER_LOCKS, FolderPath, (string)BitMask);\n//1 = detachallthis\n//2 = attachallthis\n//4 = detachthis\n//8 = attachthis\n\n0 = no locks active",
      Response: "",
    },
    {
      Number: -9102,
      ID: "SET_FOLDER_LOCKS",
      Description: "Set a Folder lock",
      Example:
        "llMessageLinked(LINK_SET, SET_FOLDER_LOCKS, FolderPath, (string)BitMask);\n//1 = detachallthis\n//2 = attachallthis\n//4 = detachthis\n//8 = attachthis\n\n0 = no locks active",
      Response: "RLV_CMD",
    },
    {
      Number: -9103,
      ID: "CLEAR_FOLDER_LOCKS",
      Description: "Reset all folder locks",
      Example: 'llMessageLinked(LINK_SET, CLEAR_FOLDER_LOCKS, "", "");',
      Response: "RLV_CMD",
    },
    {
      Number: -99999,
      ID: "UPDATE",
      Description:
        "This is a signal sent only by the update_shim. It indicates that a update is active.",
      Example: 'llMessageLinked(LINK_SET, UPDATE, "update_active", "");',
      Response: "",
    },
    {
      Number: -999901,
      ID: "OUTFITS_ADD",
      Description: "Applies an outfit",
      Example:
        'llMessageLinked(LINK_SET, OUTFITS_ADD, "Outfit 1", g_kMenuUser);',
      Response: "DIALOG",
    },
    {
      Number: -999902,
      ID: "OUTFITS_REM",
      Description:
        "Runs the naked command, removes everything but the core folder",
      Example: 'llMessageLinked(LINK_SET, OUTFITS_REM, "", g_kMenuUser);',
      Response: "DIALOG",
    },
    {
      Number: 0,
      ID: "CMD_ZERO",
      Description:
        "Recalculates authorization level, this LM requires two parameters, the callback message, and the UUID to check for authorization",
      Example: 'llMessageLinked(LINK_SET, CMD_ZERO, "menu", g_kWearer);',
      Response:
        "CMD_OWNER, CMD_TRUSTED, CMD_GROUP, CMD_WEARER, CMD_BLOCKED, CMD_NOACCESS",
    },
    {
      Number: 500,
      ID: "CMD_OWNER",
      Description:
        "This Link ID indicates that the command passed in sMsg should be executed with the highest authority level. This is autogenerated by CMD_ZERO.",
      Example: 'llMessageLinked(LINK_SET, CMD_OWNER, "lock", kAv);',
      Response: "",
    },
    {
      Number: 501,
      ID: "CMD_TRUSTED",
      Description:
        "This ID indicates the command should be executed with the trusted access level. This is autogenerated by CMD_ZERO.",
      Example: 'llMessageLinked(LINK_SET, CMD_TRUSTED, "menu Access", kID);',
      Response: "",
    },
    {
      Number: 502,
      ID: "CMD_GROUP",
      Description:
        "This ID indicates group access. This ID is autogenerated by CMD_ZERO and will NOT be generated if group access is disabled, or if the avatar is out of range, if limit range is enabled.",
      Example: 'llMessageLinked(LINK_SET, CMD_GROUP, "menu RLV", kID);',
      Response: "",
    },
    {
      Number: 503,
      ID: "CMD_WEARER",
      Description:
        "This ID indicates wearer access. This ID will only ever be used if the wearer is not blocked, and is not owner or trusted. This ID is autogenerated by CMD_ZERO",
      Example: 'llMessageLinked(LINK_SET, CMD_WEARER, "menu Addons", kID);',
      Response: "",
    },
    {
      Number: 504,
      ID: "CMD_EVERYONE",
      Description:
        "This ID is used only for public access. This ID is autogenerated by CMD_ZERO and will NOT be generated if public access is disabled, or if the avatar is out of range, if limit range is enabled.",
      Example: 'llMessageLinked(LINK_SET, CMD_EVERYONE, "menu Detach", kID);',
      Response: "",
    },
    {
      Number: 510,
      ID: "CMD_SAFEWORD",
      Description: "This ID indicates that a safeword has been invoked",
      Example: 'llMessageLinked(LINK_SET, CMD_SAFEWORD, "", "");',
      Response: "",
    },
    {
      Number: 511,
      ID: "CMD_RELAY_SAFEWORD",
      Description:
        "This ID indicates that a safeword has been invoked for the relay",
      Example: 'llMessageLinked(LINK_SET, CMD_RELAY_SAFEWORD, "", "");',
      Response: "",
    },
    {
      Number: 598,
      ID: "CMD_BLOCKED",
      Description:
        "The avatar requesting action is on the blocked list, and therefore is denied & ignored. This is autogenerated by the CMD_ZERO signal.",
      Example: 'llMessageLinked(LINK_SET, CMD_BLOCKED, "menu", kID);',
      Response: "",
    },
    {
      Number: 599,
      ID: "CMD_NOACCESS",
      Description:
        "The avatar requesting access is not allowed to run commands. This is autogenerated by CMD_ZERO.  However, this is also detected by the oc_capture script to start capture!",
      Example:
        'llMessageLinked(LINK_SET, CMD_NOACCESS, "menu", kID);\nllMessageLinked(LINK_SET, CMD_NOACCESS, "capture", kID);',
      Response: "",
    },
    {
      Number: 600,
      ID: "AUTH_REQUEST",
      Description:
        "This command is very similar to CMD_ZERO, except that it silently calculates without sending an access denied signal. The reply signal is capable of including a callback specified by the script.",
      Example:
        'llMessageLinked(LINK_SET, AUTH_REQUEST, "random_auth_check", kID);',
      Response: "AUTH_REPLY",
    },
    {
      Number: 601,
      ID: "AUTH_REPLY",
      Description: "This is the reply signal to AUTH_REQUEST",
      Example:
        'llMessageLinked(LINK_SET, AUTH_REQUEST, "AuthReply|"+(string)kID+"|"+Authorization, "random_auth_check");',
      Response: "",
    },
    {
      Number: 1002,
      ID: "NOTIFY",
      Description:
        "Notifies the ID passed a specified string.  There are a few valid auto-replace values that can be passed to this LM. There are multiple examples for this LM for this reason.  The first digit of NOTIFY's message parameter must be a zero or a one.  This will specify if the wearer should also be sent the message (if the message is going elsewhere).  %NOACCESS%, %PREFIX%, %CHANNEL%,  %DEVICETYPE%, %WEARERNAME%, %DEVICENAME%",
      Example:
        'llMessageLinked(LINK_SET, NOTIFY, "0%NOACCESS% to the requested menu", kID);\nllMessageLinked(LINK_SET, NOTIFY, "1%PREFIX% is now the new prefix", kID);',
      Response: "",
    },
    {
      Number: 1003,
      ID: "NOTIFY_OWNERS",
      Description:
        "This LM will send out a notification to all owners. If the key value is set to 'ignoreNearby' then owners that are within 20 meters will not get the message. The replace values are the same as for NOTIFY, however, the first digit does not need to be a zero or a one as it does not say anything to the wearer.  %NOACCESS%, %PREFIX%, %CHANNEL%,  %DEVICETYPE%, %WEARERNAME%, %DEVICENAME%",
      Example:
        'llMessageLinked(LINK_SET, NOTIFY_OWNERS, "%NOACCESS% to the requested menu", "");\nllMessageLinked(LINK_SET, NOTIFY_OWNERS, "%PREFIX% is now the new prefix", "ignoreNearby");',
      Response: "",
    },
    {
      Number: 1004,
      ID: "SAY",
      Description:
        "This LM says in local the message you want it to, the same replace values are available, however, if you use the whisper mode it will come out as a emote whispered with /me prepended. The first digit in the string is used to determine if it should whisper!  %NOACCESS%, %PREFIX%, %CHANNEL%,  %DEVICETYPE%, %WEARERNAME%, %DEVICENAME%",
      Example:
        'llMessageLinked(LINK_SET, SAY, "0%NOACCESS% to the requested menu", "");\nllMessageLinked(LINK_SET, SAY, "1%PREFIX% is now the new prefix", "");',
      Response: "",
    },
    {
      Number: 1999,
      ID: "LINK_CMD_DEBUG",
      Description:
        "A deprecated link message signal that was previously used in 7.5's days to output script debug",
      Example:
        'llMessageLinked(LINK_SET, LINK_CMD_DEBUG, "", "");\nllMessageLinked(LINK_SET, LINK_CMD_DEBUG, "ver", "");',
      Response: "",
    },
    {
      Number: 2000,
      ID: "LM_SETTING_SAVE",
      Description:
        "This saves a script's settings into the oc_settings script. NOTE: There is a security protocol on two of the tokens, this requires the key value to be set to 'origin' in order to save these within the protected tokens. See examples. The format for the internal settings is different from that of a notecard's settings.",
      Example:
        'llMessageLinked(LINK_SET, LM_SETTING_SAVE, "token_variable=value", "");\nllMessageLinked(LINK_SET, LM_SETTING_SAVE, "auth_variable=val", "origin");\nllMessageLinked(LINK_SET, LM_SETTING_SAVE, "intern_variable=val", "origin");',
      Response: "LM_SETTING_RESPONSE",
    },
    {
      Number: 2001,
      ID: "LM_SETTING_REQUEST",
      Description:
        "This requests settings from oc_settings. The format for the internal settings is different from that of a notecard's settings. If you pass the message parameter of ALL, then all settings will be sent out",
      Example:
        'llMessageLinked(LINK_SET, LM_SETTING_REQUEST, "token_variable", "");\nllMessageLinked(LINK_SET, LM_SETTING_REQUEST, "auth_variable", "");\nllMessageLinked(LINK_SET, LM_SETTING_REQUEST, "intern_variable", "");\nllMessageLinked(LINK_SET, LM_SETTING_REQUEST, "ALL", "");',
      Response: "LM_SETTING_RESPONSE, LM_SETTING_EMPTY",
    },
    {
      Number: 2002,
      ID: "LM_SETTING_RESPONSE",
      Description: "This is the response signal from oc_settings",
      Example:
        'llMessageLinked(LINK_SET, LM_SETTING_RESPONSE, "token_variable=value", "");',
      Response: "",
    },
    {
      Number: 2003,
      ID: "LM_SETTING_DELETE",
      Description:
        "This signal deletes a setting from oc_settings. Per the security protocol, to delete from a protected token, you must specify 'origin' in the key value",
      Example:
        'llMessageLinked(LINK_SET, LM_SETTING_DELETE, "token_variable", "");\nllMessageLinked(LINK_SET, LM_SETTING_DELETE, "auth_variable", "origin");\nllMessageLinked(LINK_SET, LM_SETTING_DELETE, "intern_variable", "origin");',
      Response: "",
    },
    {
      Number: 2004,
      ID: "LM_SETTING_EMPTY",
      Description: "This signal indicates a settings token_variable is empty.",
      Example:
        'llMessageLinked(LINK_SET, LM_SETTING_EMPTY, "token_variable", "");',
      Response: "",
    },
    {
      Number: 3000,
      ID: "MENUNAME_REQUEST",
      Description:
        "This is a part of the initial startup sequence as it will build the menu structures.",
      Example: 'llMessageLinked(LINK_SET, MENUNAME_REQUEST, "Main", "");',
      Response: "MENUNAME_RESPONSE",
    },
    {
      Number: 3001,
      ID: "MENUNAME_RESPONSE",
      Description:
        "This is a part of the initial startup sequence as it will build the menu structures.",
      Example:
        'llMessageLinked(LINK_SET, MENUNAME_RESPONSE, "Main|Addons", "");',
      Response: "",
    },
    {
      Number: 3003,
      ID: "MENUNAME_REMOVE",
      Description:
        "This is a mostly unused signal, but it can be used to de-register a menu button if your plugin needs to do so for some reason.",
      Example: 'llMessageLinked(LINK_SET, MENUNAME_REMOVE, "Main|Addons", "");',
      Response: "",
    },
    {
      Number: 6000,
      ID: "RLV_CMD",
      Description:
        "Execute a RLV Command. The string argument is the restriction",
      Example: 'llMessageLinked(LINK_SET, RLV_CMD, "showminimap=n", "");',
      Response: "",
    },
    {
      Number: 6001,
      ID: "RLV_REFRESH",
      Description: "Reassert all RLV restrictions",
      Example: 'llMessageLinked(LINK_SET, RLV_REFRESH, "", "");',
      Response: "",
    },
    {
      Number: 6002,
      ID: "RLV_CLEAR",
      Description:
        "Indicates to clear all RLV restrictions (except lock, and exceptions)",
      Example: 'llMessageLinked(LINK_SET, RLV_CLEAR, "", "");',
      Response: "",
    },
    {
      Number: 6100,
      ID: "RLV_OFF",
      Description: "RLV NOT AVAILABLE",
      Example: 'llMessageLinked(LINK_SET, RLV_OFF, "", "");',
      Response: "",
    },
    {
      Number: 6101,
      ID: "RLV_ON",
      Description: "RLV is available!",
      Example: 'llMessageLinked(LINK_SET, RLV_ON, "", "");',
      Response: "",
    },
    {
      Number: 6200,
      ID: "LEASH_START_MOVEMENT",
      Description:
        "Automatic signal sent by the leash script when movement begins while leashed (drag movement)",
      Example: 'llMessageLinked(LINK_SET, LEASH_START_MOVEMENT, "", "");',
      Response: "",
    },
    {
      Number: 6201,
      ID: "LEASH_END_MOVEMENT",
      Description:
        "Automatic signal sent by the leash script when scripted movement ends while leashed (drag movement)",
      Example: 'llMessageLinked(LINK_SET, LEASH_END_MOVEMENT, "", "");',
      Response: "",
    },
    {
      Number: 7000,
      ID: "ANIM_START",
      Description: "An animation has begun playing",
      Example: 'llMessageLinked(LINK_SET, ANIM_START, sAnimationName, "");',
      Response: "",
    },
    {
      Number: 7001,
      ID: "ANIM_STOP",
      Description: "An animation has stopped playing!",
      Example: 'llMessageLinked(LINK_SET, ANIM_STOP, sAnimationName, "");',
      Response: "",
    },
    {
      Number: 7002,
      ID: "ANIM_LIST_REQ",
      Description: "Requests the entire list of animations",
      Example: 'llMessageLinked(LINK_SET, ANIM_LIST_REQ, "", "");',
      Response: "ANIM_LIST_RES",
    },
    {
      Number: 7003,
      ID: "ANIM_LIST_RES",
      Description: "The entire animation list",
      Example:
        'llMessageLinked(LINK_SET, ANIM_LIST_RES, llDumpList2String(GetPoseList(0), "|"), "");',
      Response: "",
    },
    {
      Number: 20000,
      ID: "CMD_PARTICLE",
      Description:
        "Starts or stops particles.  The key value is the leash target, and the message does indicate whether to leash to a avatar with a 1, or by saying unleash. See examples.",
      Example:
        'llMessageLinked(LINK_SET, CMD_PARTICLE, "unleash", g_kParticleTarget);\nllMessageLinked(LINK_SET, CMD_PARTICLE, "leash|1", g_kParticleTarget);',
      Response: "",
    },
    {
      Number: 26001,
      ID: "DO_RLV_REFRESH",
      Description:
        "Sent by the relay to refresh RLV restrictions after the relay restrictions have been lifted. This is also sent whenever a object utilizing the relay requests restrictions to be lifted, even if not cleared.",
      Example: 'llMessageLinked(LINK_SET, DO_RLV_REFRESH, "", "");',
      Response: "RLV_REFRESH",
    },
    {
      Number: 30497,
      ID: "TIMEOUT_READY",
      Description: "The oc_states timeout callback system is now ready",
      Example: 'llMessageLinked(LINK_SET, TIMEOUT_READY, "", "");',
      Response: "",
    },
    {
      Number: 30498,
      ID: "TIMEOUT_REGISTER",
      Description: "Register a callback.",
      Example:
        "llMessageLinked(LINK_SET, TIMEOUT_REGISTER, sNumberOfSeconds, sCallbackLabel);",
      Response: "TIMEOUT_FIRED *after sNumberOfSeconds",
    },
    {
      Number: 30499,
      ID: "TIMEOUT_FIRED",
      Description: "Callback signal",
      Example: 'llMessageLinked(LINK_SET, TIMEOUT_FIRED, sCallbackLabel, "");',
      Response: "",
    },
  ];

  const RenderCodesTable = (entry, index) => {
    return (
      <tr>
        <td>{entry.Number}</td>
        <td>{entry.ID}</td>
        <td>{entry.Description}</td>
        <td>{entry.Response}</td>
      </tr>
    );
  };

  const RenderExample = (entry, index) => {
    return (
      <tr>
        <td>{entry.ID}</td>
        <td>
          <Highlight className="lsl">{entry.Example}</Highlight>
        </td>
      </tr>
    );
  };
  return (
    <div>
      <Card
        className="mb-2"
        bg={props.dark ? "dark" : "light"}
        text={props.dark ? "white" : "dark"}
      >
        <Card.Header>
          <center>Plugin API Documentation</center>
        </Card.Header>
        <Card.Body>
          <Table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Label</th>
                <th>Description</th>
                <th>Responds With</th>
              </tr>
            </thead>
            <tbody>{Codes.map(RenderCodesTable)}</tbody>
          </Table>
          <br />
          <Table>
            <thead>
              <th>Label</th>
              <th>Example</th>
            </thead>
            <tbody>{Codes.map(RenderExample)}</tbody>
          </Table>
        </Card.Body>
        <Card.Footer>
          Contributors: <br />
          Tashia Redrose - 03/2021 JSX formatted Documentation
          <br />
          Caraway Ohmai - 2020 Markdown formatted Documentation
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PluginAPIDocs;
