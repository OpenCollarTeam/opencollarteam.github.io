---
layout: home
title: Outfits
---
**Associated Script** [oc_outfits](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/Apps/oc_outfits.lsl)   
**Note for Users of Restrained Love Viewer** RLVa is used by [Firestorm Viewer](https://www.firestormviewer.org/) and several other third party viewers.  RLV is used by Marine Kelley's [Restrained Love Viewer](http://www.erestraints.com/realrestraint/).  To use Outfits with Restrained Love Viewer, follow the instructions below, except when spelling the Outfits and Core folders in your inventory, eliminate the period in front of the name:  `outfts` and `core` in place of `.outfits` and `.core`.  Unfortunately this means your Outfits folders will also appear in the Folders menu.
# Setting up Outfits
1.  If you don't already have one (see RLV), make a top folder in inventory and name it `#RLV`.  This is your RLV shareable folder, everything in it unless otherwise marked could be accessible to RLV enabled devices.  You control what you put in this folder.  
2.  Inside `#RLV`, make a folder named `.outfits`. This is where you will put Outfits folders containing links to items you want to be worn and removed together as an organized outfit.   
3.  Inside `.outfits` make a folder named `.core`.  This is where you will place items you do not want removed when changing Outfits.  If you have more than one "base" avatar, for instance different mesh heads, you can create subfolders in .core that will define different "bases".  See "Browse Core" below.     
### Troubleshooting Notes   
1. For all three folders, `#RLV`, `.outfits` and `.core`, use the exact characters displayed here.  Case is critical and the dot in front of the name is critical.   
2.  For Outfits to be visible in the Apps menu you must have at least one folder in #RLV that is *not* in .outfits. Otherwise it will behave like any other hidden folder and not be visible from the menu.  
3.  To avoid errors always use links and make sure they connect to a single original copy.
4.  Only put in your outfit links to items that you will want changed when you change outfits. 
5.  Do *not* put anything in an outfit folder that is already in core.  

# Making Outfits
1.  A "defined Outfit folder" is a folder with an outfit in it, inside the folder `.outfits`.  When an Outfit is worn, Outfits will detach/unwear any item that is in a defined Outfit folder other than the one called to be worn.  If an item is not in a defined outfit folder, it will not be removed.  This behavior can be changed in the Configure menu.  
2.  To make an outfit, create a folder inside `.outfits` named anything you like that is short, unique and memorable--to look good on a button.  If you like, you can use subfolders.  If you use subfolders, make sure all items in the Outfit are in one of the subfolders. Link any items that are always worn together (for instance shoe and shoe base) by putting them next to each other in the same folder or subfolder.

# Using The Outfits Menu

## Lock Core
This button has a check box.  
- When changing outfits using the Outfits menu, a temp lock on detach will be issued for every worn item in .core.  This will happen whether or not the .core folder is locked.
- When checked (white), a `@detachallthis=n` RLV command is issued, and nothing in this folder can be detached.  This will prevent these items from being detached by RLV devices other than the collar, whether worn or issuing strip commands to your relay.
- When Lock Core is checked, you cannot edit the folder in your inventory.  If you try you will get this message: "[Timestamp] Second Life: Unable to perform the requested inventory action due to an RLV locked folder."
To change the contents of the folder, first Uncheck Lock Core.
- It is safe to place your collar in Core even if it is not locked.
- Do not place items already in Core in any other defined outfit. It's not necessary.
- It is not necessary to have a (nostrip) tag on items in Core.
- You can use links from items anywhere in your inventory.
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
### Chat Commands for Using Outfits
- `[prefix] wear [outfitname]`
- `[prefix] wear naked` will remove the current Outfit and leave the avatar stripped to just the worn items that are in the .core folder.
- For subfolders: `[prefix] wear [outfitname1/outfitname2]`.   
## Browse Core 
Using Browse Core you can create, wear and remove defined `.core` subfolders, allowing you to change your base avatar. 
- **Troubleshootin Tip**.  If you place multiple copies of your collar in different .core subfolders, then use Browse Core and Wear, the collar issuing the command may be detached and this will break the change of core outfits at the point the collar issuing the command is detached.  
## Help
Delivers a short set of instructions to the wearer's local chat.

# Tips on Using Outfits
Here are a few tips for using Outfits well.  
- Make sure you have at least one item in #RLV that is **not** in .outfits, otherwise the Outfits won't show in the menu.
- Keep a small number of your favorite Outfits in this folder, ones that you wear a lot or that your owners like to see you in.
- Use links.  The originals do *not* have to be in a #RLV folder.
- If your core folder is well thought out, you only need the items that are unique to that outfit in each Outfit folder. 
- Lock the core folder when in an area with traps that strip clothing.
- Keep your collar locked or keep a link to it in .core.
