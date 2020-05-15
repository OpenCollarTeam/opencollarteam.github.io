---
layout: home
title: Outfits
---
# Setting up Outfits
1.  If you don't already have one (see RLV), make a top folder in inventory and name it `#RLV`.  This is your RLV shareable folder, everything in it unless otherwise marked could be accessible to RLV enabled devices.  You control what you put in this folder.  
2.  Inside `#RLV`, make a folder named `.outfits`. This is where you will put Outfits folders containing items you want to be worn and removed together as an organized outfit.   
3.  Inside `.outfits` make a folder named `.core`.  This is where you will place items you do not want removed when changing Outfits.  If you have more than one "base" avatar, for instance different mesh heads, you can place folders in .core that will define different "bases".  See more below. 
**Note: For all three folders, `#RLV`, `.outfits` and `.core`, use the exact characters displayed here.  Case is critical and the dot in front of the name is critical.**  

# Making Outfits
1.  A "defined Outfit folder" is a folder with an outfit in it, inside the folder `.outfits`.  When an Outfit is worn, Outfits will detach/unwear any item that is in a defined Outfit folder other than the one called to be worn.  If an item is not in a defined outfit folder, it will not be removed.  This behavior can be changed in the Configure menu.  
2.  To make an outfit, create a folder inside `.outfits` named anything you like that is short, unique and memorable--to look good on a button.  If you like, you can use subfolders.  If you use subfolders, make sure all items in the Outfit are in one of the subfolders. Link any items that are always worn together (for instance shoe and shoe base) by putting them next to each other in the same folder or subfolder.
# The Outfits Menu

## Lock Core
This button has a check box.  When checked (white), a `@detachallthis=n` RLV command is issued, and nothing in this folder can be detached.  This also safeguards these items from other RLV devices worn or issuing strip commands to your relay.
- When Core is locked, you cannot edit the folder in your inventory.  If you try you will get this message: "[Timestamp] Second Life: Unable to perform the requested inventory action due to an RLV locked folder."
To change the contents of the folder, first Uncheck Lock Core.
- Inside the `.core` folder place any items you never want removed or replaced by an outfit change.  Such items might include anything you consider part of your "base" avatar, such as mesh head and body.
- It is safe to place your collar in Core even if it is not locked.
- Do not place items already in Core in any other defined outfit. It's not necessary.
- It is not necessary to have a (nostrip) tag on items in Core.
- You can use links.
## Configure
**Access** Here you or your owner can check the desired level of access to Outfits. 
- *Owner* is always allowed access.
- *Trusted* when checked, gives Trusted access to Outfits. On by default.
- *Wearer* when checked, gives the wearer access to Outfits. On by default.
- *Group* when checked, gives the set group access to Outfits.  Off by default.
- *Public* when checked, gives public access to Outfits.  Off by default.   
**Jail** when checked, limits the Outfits change to defined Outfits folders.  On by default.  When unchecked, it will allow Outfits to browse the entire `#RLV` folder.   
**Strip All** when checked, allows Outfits to strip any worn items not in your locked core.  When unchecked, Outfits can only strip items that are included in another defined Outfits folder.
## Browse
In this menu collar users can select Outfits to dress the wearer.  
- >Wear< will wear the current outfit.  Be careful ! If you see more than one outfit on the current page, >Wear< will put on all of them!  Select the desired outfit first !
- >RemoveAll< will remove the current outfit.  Again, Be careful ! If you see more than one outfit on the current page, >RemoveAll< will remove all of them!  Select the desired outfit first !
## Browse Core 
Using Browse Core you can wear and remove defined `.core` subfolders, allowing you to change your base avatar. 
- You cannot change the collar issuing the command to a different collar this way.  
## Help
Delivers a short set of instructions to the wearer's local chat.
