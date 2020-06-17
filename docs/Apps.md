---
layout: home
title: The Apps Menu
---

See in this page: [Bell](#bell) | [Bookmarks](#bookmarks) | [Capture](#capture) | [Label](#label) | [Outfits](#outfits) | [Titler](#titler)   

# Apps Main Menu

![](/static/Apps7-4.png) 


This menu is where you will find links to applications and custom plugins.  The above image does not contain all the possible Apps.       
The following apps are included in OpenCollar V 7.4:

# Bell

This App controls the bell visibility and sound.  Only operative with collar designs that include bells.  

**On/Off** -- Toggles the bell on and off.   
**Show/Hide** -- Toggles bell visibility.   
**Next Sound** -- Changes the active bell sound.  
**Vol +/-** -- Increases or decreases the sound volume of the bell.

# Bookmarks
Bookmarks allows anyone with Trusted or Owner access to enter locations around the grid and teleport you to those locations.  Bookmarks makes it unnecessary to add landmarks to the collar for teleportation.  Not available to Public or Group access.

To call the bookmarks menu: `[prefix] bookmarks`  

To send the wearer to a bookmark:  
From the Main menu go to Apps > Bookmarks and press the named bookmark button, or: `[prefix] tp [bookmarkname]`   

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

Capture gives temporary Trusted level access to a Captor.  
- **Enabled** - When checked, it is possible to capture the wearer via chat command or by touching the collar which will deliver a dialogue: "Do you want to capture xx?". If the captor says yes, the wearer gets a dialog.
> `[prefix] capture` Captures the wearer. Not available to the wearer.
>`[prefix] capture`Ends capture.  Not available to the wearer.
- The capture event will end ten minutes after the captor leaves the region.
- **Risky** - When checked, the wearer does not get a dialog asking permission.
- Collar safeword ends the capture event for the wearer.

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

# Titler

Sets a line of text overhead on the wearer's avatar.  Requires the FloatText prim to work.

**Image:** Opens a menu where you can set an image overhead on the wearer's avatar.  There are several preset to choose from.  
**Custom:** Opens a text box; Allows wearer and user to set a custom image by inserting the desired texture uuid into the text box.  
**Set Title:** Opens a dialog where you can input and submit the desired text.  
**Up / Down:** Adjusts the position of the titler text up or down.  
**Show / Hide:** Toggles visibility of the titler text.  
**Color:** Changes the color of the titler text.  
