---
layout: home
title: The Settings Menu
---

To call this page:
>[prefix] settings
This menu contains adjustments to the fit and appearance of your collar.

# About Settings

Settings is one of the most useful tools in the collar for those who want to save or customize collar settings. Whenever you change your collar using a menu button, the setting is created by the script. These settings may be erased or overridden by the next change or even by logging off.  You may want to save these settings in a place where they can be reloaded.  To save your settings easily, print the settings to chat, and copy the chat readout to a notecard named .settings.  Place the notecard in the contents of your collar. The .settings notecard must be modifiable or the settings will not load. 

OpenCollar settings use this protocol: `TOKEN=Parameter1~Parameter2` etc. Parameters may be names or values. Most of the Settings tokens correspond to certain scripts; one is GLOBAL because these settings may apply to all the scripts in the collar. In this Guide we will give the appropriate single string for each setting on the corresponding menu function page.  It will look like: `TOKEN=Parameter~Value`. In practice when you add these to the settings notecard, you start a line with the TOKEN which would in most cases be the script that reads this setting, and string several `Parameter~Value` pairs together until you hit the limit of characters in the line; then start a new line and repeat the TOKEN if necessary.  

For instance, a Bookmarks setting saving the Social Partner locations to your bookmarks would look like this, where BOOKMARKS is the token, "Theater" / "Sanctuary" are the parameters, in this case the names saved as bookmarks, and the slurl is the value associated with the name:   
>`BOOKMARKS=Theater~KBar West(23,97,1001)~Sanctuary~Vineyard Isle Valley (199,185,2002)`  

As the documentation builds, you will see various settings added to the relevant pages.

# The Settings Menu

## Print
Save your settings by pressing Print.  Then copy the readout to the .settings notecard in the Settings prim of your collar.  To find the Settings prim, use Edit Linked or type [prefix] Show Storage to highlight the invisible prim.
>[prefix] print settings  

## Load
Loads your settings from the .settings notecard.
>[prefix] load card  

To load your settings from a url:  
>[prefix] load url [url]  

## Fix
Sometimes menus do not load all the way.  If you see buttons missing from your menus, press Fix.

## Position
Allows you to shift the position of the collar up, down, left and right.  The dashes indicate distance increments.

## Rotation
Allows you to adjust the rotation and tilt of the collar up, down, left and right.

## Size
Here you can adjust the scale of the collar.

## Stealth
When checked, Stealth turns the collar transparent.

## Themes

Here you can change the textures and appearance of your collar.  There are two notecards that save texture and color changes to allow customizing your collar by menu.  .Themes is used for traditional multiprim collars and .meshthemes is used for single prim collars with mapped textures.  Here are the parameters for .meshthemes:  face/textureuuid/color(1.1.1 is no tint)/alpha(1 is opaque)/shine(0-3 invoking the shine values in edit)/bump (1-17 invoking bump values in edit)/glow (0.0-1 setting glow value as in edit).

# Global Settings

Global Settings are not linked to any single function but pertain for the entire collar.  Here is the list.  

`INTERN=Highlander~[1/0]` Turns on and off the block on wearing more than one OC scripted item. 

`GLOBAL=prefix~[yourprefix]` Sets the collar prefix.   

`GLOBAL=DeviceName~[yourcollarname]` Sets the collar name that shows in collar menus.  Substitute the desired name for `<value>`.  

`GLOBAL=DeviceType~[name of device type]` Sets the type of device in messages to something other than "collar" for instance "septum ring" or other.  

`GLOBAL=touchNotify~[1/0]` Turns on and off the collar's notification to the wearer if the collar is touched.  

`GLOBAL=WearerName~[yourname]` Sets the wearer's name in the collar menu. 
>For instance:  `GLOBAL=WearerName~Joe~DeviceName~Collar` would set the line that appears at the top of Joe Zipcode's collar menu to "Joe's Collar".  

`GLOBAL=safeword~[yoursafeword]` Sets the preferred safeword.  

`GLOBAL=channel~[yourchannel]` Sets the preferred channel.  

`GLOBAL=channel~1,FALSE/TRUE` Sets the channel number (in this case 1) and will set channel 0 to FALSE: The collar does not listen on channel 0; or TRUE: The collar does listen on channel 0.
