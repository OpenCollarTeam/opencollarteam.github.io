---
layout: home
title: The Settings Menu
---

To call this page:
>[prefix] settings
This menu contains adjustments to the fit and appearance of your collar.

# About Settings

Settings is one of the most useful tools in the collar for those who want to save or customize collar settings. Whenever you change your collar using a menu button, the setting is created by the script. These settings may be erased or overridden by the next change or even by logging off.  You may want to save these settings in a place where they can be reloaded.  
- To save your settings easily, print the settings to chat, and copy the chat readout to a notecard named .settings.  
- Place the notecard in the contents of your collar. The .settings notecard must be modifiable or the settings will not load. 

OpenCollar settings use this protocol: `TOKEN=Parameter1~Parameter2` etc. Parameters may be names or values. Most of the Settings tokens correspond to certain scripts; one is GLOBAL because these settings may apply to all the scripts in the collar. In this Guide we will give the appropriate single string for each setting on the corresponding menu function page.  It will look like: `TOKEN=Parameter~Value`. In practice when you add these to the settings notecard, you start a line with the TOKEN which would in most cases be the script that reads this setting, and string several `Parameter~Value` pairs together until you hit the limit of characters in the line; then start a new line and repeat the TOKEN if necessary.  

For instance, a Bookmarks setting saving the Social Partner locations to your bookmarks would look like this, where BOOKMARKS is the token, "Theater" / "Sanctuary" are the parameters, in this case the names saved as bookmarks, and the slurl is the value associated with the name:   
>`BOOKMARKS=Theater~KBar West(23,97,1001)~Sanctuary~Vineyard Isle Valley (199,185,2002)`  

As the documentation builds, you will see various settings added to the relevant pages.

# The Settings Menu

## Print
Save your settings by pressing Print.  Then copy the readout to the .settings notecard in your collar contents .  
>[prefix] print settings  

## Load
Loads your settings from the .settings notecard.
>[prefix] load card  

To load your settings from a url:  
>[prefix] load url [url]  

## Editor
Allows you to save settings to the collar directly by dialog menu, useful for Settings that have no corresponding collar command.

## Fix Menus
Sometimes menus do not load all the way.  If you see buttons missing from your menus, press Fix.

## Resize
This menu allows you to alter the position, Rotation and Size of your collar.

- **Position**   
Allows you to shift the position of the collar up, down, left and right.  The dashes indicate distance increments.

- **Rotation**  
Allows you to adjust the rotation and tilt of the collar up, down, left and right.

- **Size**
Here you can adjust the scale of the collar.

## Hide
When checked, turns the collar transparent.

## AllowHiding
When checked, allows the wearer to Hide the collar.  Checked by default.   

## AddOns  
- **WearerAdd**   
Checked by default.  When unchecked, disallows use of wearer owned AddOns.   
- **AddOns**   
Checked by default.  When unchecked, disallows use of all Addons.
- **AddOns Limits**
Checked by default.  Limits use of AddOns to the wearer that affect collar access or collar weld state.  Must be unchecked to allow the wearer to unweld a collar. Owner access only. See [Weld](/docs/Weld).

# Global Settings

Global Settings are not linked to any single function but pertain for the entire collar.  Here is a list.  

`global=prefix~[yourprefix]` Sets the collar prefix.   

`global=DeviceName~[yourcollarname]` Sets the collar name that shows in collar menus.  Substitute the desired name for `<value>`.  

`global=DeviceType~[name of device type]` Sets the type of device in messages to something other than "collar" for instance "septum ring" or other.  

`global=touchNotify~[1/0]` Turns on and off the collar's notification to the wearer if the collar is touched.  

`global=WearerName~[yourname]` Sets the wearer's name in the collar menu. 
>For instance:  `global=WearerName~Joe~DeviceName~Collar` would set the line that appears at the top of Joe Zipcode's collar menu to "Joe's Collar".  

`global=safeword~[yoursafeword]` Sets the preferred safeword.  

`global=safeworddisable~1` Disables the collar safeword.

`global=channel~[yourchannel]` Sets the preferred channel.  

`global=channel~1,FALSE/TRUE` Sets the channel number (in this case 1) and will set channel 0 to FALSE: The collar does not listen on channel 0; or TRUE: The collar does listen on channel 0.

`GLOBAL=checkboxes~[ ],[X]` Changes the menu buttons to [X] and [ ] instead of white boxes, for machines that can't read the white box.
