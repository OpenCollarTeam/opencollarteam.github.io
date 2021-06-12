---
layout: home
title: The Apps Menu
---

See in this page: [Bell](#bell) | [Bookmarks](#bookmarks) | [Capture](#capture) | [Label](#label) | [Outfits](#outfits) | [Titler](#titler)   

# Apps Main Menu

![](/static/Apps.png) 


This menu is where you will find links to applications and custom plugins.  The above image includes all the optional apps in the standard V8 updater.       
The following apps are included in OpenCollar V 8:

# Bell

This App controls the bell visibility and sound.  Only operative with collar designs that include bells.  

**On/Off** -- Toggles the bell on and off.   
**Show/Hide** -- Toggles bell visibility.   
**Next Sound** -- Changes the active bell sound.  
**Vol +/-** -- Increases or decreases the sound volume of the bell.

# Bookmarks
Bookmarks allows anyone with Trusted or Owner access to enter locations around the grid and teleport you to those locations.  Bookmarks makes it unnecessary to add landmarks to the collar for teleportation.  Not available to Public or Group access.

## Using Bookmarks

- To call the bookmarks menu: `[prefix] bookmarks`  

- To send the wearer to a bookmark:  
From the Main menu go to Apps > Bookmarks and press the named bookmark button, or: `[prefix] tp [bookmarkname]`   

## Adding and Removing Bookmarks

- Save   
Opens a dialog window where you can enter a name for the wearer's current location, to create a bookmark for that location. Use a short name that's easy to remember and looks good on a button.  Pressing "submit" adds the name to the bookmarks menu.   
If you want to add a location remotely, that is, using different coordinates from the wearer's current location:  
> Press Save.     
Enter the desired slurl. Press submit.    
You will get a second dialog window where you enter the name for the bookmark.

- Print   
Prints the bookmarks settings to enter into the bookmarks notecard.  New bookmarks may be added to the bookmarks notecard directly following this protocol.  
* You may have to add a notecard to the contents of the root prim named .bookmarks to use this function.
- Remove   
Removes selected bookmarks from the menu.

# Capture

Capture gives temporary Trusted level access to a captor. The wearer can enable Capture by first installing it on the collar, and then selecting "Enabled" in the Capture menu as described below. Capture works in one of two basic ways: If Public access is disabled, a captor can click the wearer's collar or use the chat command `[prefix] capture` to receive the Capture menu. If Public access is enabled, a captor can only use the chat command to access the Capture menu. Touching the collar in this case will get the collar menu directly.  If the wearer clicks the collar, and selects Apps and then Capture, the following check-box options are shown:  
- **Enabled** - When checked, it is possible to capture the wearer via chat command or by touching the collar. This will deliver a dialogue to the captor: "Do you want to capture xx?". If the captor says yes, the wearer gets a dialog (unless "Risky" is checked as detailed below) asking if they will allow the capture.
> `[prefix] capture` Captures the wearer. Not available to the wearer.
>`[prefix] capture release`ends the capture.  Not available to the wearer.
- **Risky** - When checked, the wearer does not get a dialog asking permission.
- **Auto Release** - When checked, the capture event will end ten minutes after the captor leaves the region.
- Using the collar safeword ends the capture event for the wearer.

In addition to Trusted access, the Capture function applies the Refusetp exception.  The wearer's viewer automatically accepts tp offers when he or she is leashed by the captor.

> `[prefix] capture on`  
> `prefix] capture off`  
> `prefix] capture info on/off` -- turns on or off the recurring chat broadcasting the capture mode  
> `[prefix] capture release` -- releases the sub from the current capture.  
> `[prefix] risky on/off` -- turns on and off wearer permission.

# Detach  
Gives a list of occupied attachment points with the names of the objects attached to each. Pressing the button with the corresponding name will detach the item (unless there is a lock on detach or Dress is restricted).

> `[prefix] detach` (opens the "detach" menu)


# Label

In collars built with a label only.  There are two versions of the label app, one for standard prim labels and one for mesh faces.  The label app applies the wearer name using a scripted texture offset.  

**Set Label:** opens a dialog to change the text on the label.  `[prefix] label [newlabel]`   
**Color:** changes the color of the label text. `[prefix] label color`  
**Font:** changes the font of the label text. `[prefix] label font`  

# Outfits
See:  [Outfits](/docs/Outfits)

# Owner Online

This app will notify the wearer in chat when their owner is online.  
- **On** The checkbox turns the app on or off.  When off, the checkbox is empty.
- **Set Interval** sets the number of seconds after which the app will check for an owner online.  
- **NotifChat** allows the owner online notification to appear in the wearer's local chat.   
- **NotifDialog** the owner online notification appears in a dialog popup. 

# Size Presets
This app allows you to save a size, position and rotation. 
- **save** Use this button to save and name the set position, size and rotation.  
- **Restore** Once at least one preset is saved, it will appear by name on this Restore list, to return the collar to that position, size and rotation.
- **Delete** Removes a preset from the list.

# Themes
See: [Themes](/docs/Themes0   
# Titler

Sets a line of text overhead on the wearer's avatar.  Requires the FloatText prim to set the position of the titler.
> `[prefix] titler plain` saves the title input to settings as plain text rather than base64 

**Image:** Opens a menu where you can set an image overhead on the wearer's avatar.  There are several preset to choose from. (Currently not active in OC 7.5)    
**Custom:** Opens a text box; Allows wearer and user to set a custom image by inserting the desired texture uuid into the text box.  (Currently not active in OC 7.5)   
**Set Title:** Opens a dialog where you can input and submit the desired text.  
`[prefix] titler [text string]`   
**Up / Down:** Adjusts the position of the titler text up or down.  
`[prefix] titler up/down`   
**Show / Hide:** Toggles visibility of the titler text.  
`[prefix] titler show/hide`    
**Color:** Changes the color of the titler text.  
`[prefix] titler color [vector RGB]`     

# Undress

Allows those with collar access to remove, lock and unlock system layers.  
System Layers include: 

- alpha
- tattoo 
- universal  
- shoes (shoe base) 
- socks
- underpants 
- undershirt 
- pants 
- shirt
- jacket 
- gloves.   

It will also lock and unlock the **required system layers.** These cannot be removed because they are required for the system avatar, they can only be replaced:  
- skin
- shape
- eyes, 
-  hair (hair base/eyebrow shaper)   

_______________________   
Contributors:  Silkie Sabra, Trinkitx   
 
