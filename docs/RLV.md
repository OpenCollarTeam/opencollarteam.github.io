See in this page:  [Exceptions](#Exceptions) | [Force Sit](#Force_Sit) | [Restrictions](#Restrictions) | [Folders](#Folders)

To call the RLV menu: 
>[prefix] rlv

**NOTE**: RLV (Restrained Love Viewer) is a set of permissions coded into the viewer, that allows other avatars limited control over some viewer functions.  There are several approved [third party viewers](http://wiki.secondlife.com/wiki/Third_Party_Viewer_Directory) that allow you to enable / disable RLV. Among the most popular for many users are Firestorm, Restrained Love Viewer, and Singularity.

Please remember that one of the most basic safety features about RLV is your ability to turn it off and on in the viewer.  Any RLV restriction can be cleared by turning off RLV and relogging; or logging on in the official SL Viewer.

## On / Off
Toggles RLV on and off in the collar (not in the viewer).  The collar lock is not affected. Turning RLV Off in the collar does disable the collar relay and turns off access to the RLV menu.
>[prefix] rlv on/off

## Clear All
Clears all collar RLV restrictions, including those enforced by the relay.  Available to anyone with collar access but the wearer unless self owned.
>[prefix] clear

## Detach
Gives a list of occupied attachment points with the names of the objects attached to each.  Pressing the button with the corresponding name will detach the item (unless there is a lock on detach or Dress is restricted).
>[prefix] detach (opens the "detach" menu)

# Exceptions

Here you can set Exceptions to RLV restrictions Owners and Trusted.  Most Exceptions are checked by Default.  Exceptions allow owners and trusted to communicate with you and teleport you when these are otherwise restricted.  When the boxes are checked the Exceptions are enforced.

## List of Exceptions:

IM exempts owner/trusted from a block on the wearer's ability to send IMs.  
RcvIM exempts owner/trusted from a block on the wearer's ability to receive IMs.  
RcvChat exempts owner/trusted from a block on the wearer's ability to read local chat.  
RcvEmote exempts owner/trusted from a block on the wearer's ability to read emotes.  
Lure exempts owner/trusted from a block on the wearer's ability to accept a teleport offer.  
refuseTP exempts owner/trusted from the wearer's ability to refuse teleport offers.  When active, the wearer's viewer automatically accepts a tp offer from an owner.  More commonly known as "force TP."  On by default for owners, must be set for trusted.

# Force Sit
Opens a menu of nearby objects on which the wearer can be forced to sit.    

## Strict 
When the "strict" option is checked, the wearer cannot stand when force sat.  If the wearer sits without using a collar force sit, the restriction on stand is not enforced.

## Getup
When Force Sit is enforced, this button will force the wearer to stand again.

>[prefix] sit (forces the wearer to sit)

>[prefix] stand / standnow (forces the wearer to stand)

>[prefix] forbid stand (forbids standing)

>[prefix] allow stand (allows standing)

# Restrictions
Opens a menu of restrictions and named suites of related restrictions.  When the boxes are checked, the restrictions are NOT active.  
>[prefix] restrictions  

List of individual restrictions  
* Send IMS:  Restricts the wearer's ability to send ims.  [prefix] forbid sendim / allow sendim
* Read IMS:   Restricts the wearer's ability to receive ims. [prefix] forbid readim / allow readim
* Hear:  Restricts the wearer's ability to read local chat. [prefix]  forbid hear / allow hear
* Talk: Restricts the wearer's ability to send local chat.  [prefix] forbid talk / allow talk
* Touch:  Restricts the wearer's ability to touch the world. [prefix] forbid touch / allow touch

List of restrictions grouped in suites
* Dress:  Restricts the wearer's ability to add or remove attachments and clothing layers. [prefix] forbid dress / allow dress
* Stray: Restricts the wearer's ability to accept teleport offers, teleport to landmarks and map locations, sit on an object from a distance greater than 1 meter from the object center; and teleport to a  point on the landscape. [prefix] forbid stray / allow stray
* Rummage: This group restricts building abilities including: edit, open the inventory window, rez objects, view scripts and textures. [prefix] forbid rummage / allow rummage
* Dazzle: uses RLV to enforce the debug setting "RenderResolutionDivisor" and create a blurred vision of the environment on the viewer screen. [prefix] forbid dazzle / allow dazzle
* Daze:  This group restricts navigation data.  When active the wearer cannot see names, hovertext (group tags), minimap, world map, or locations at the viewer top menu. [prefix] forbid daze / allow daze

## Terminal
Opens a text popup window where you can input any RLV restriction, the format being @[nameofrestriction]=[y/n].
The list of RLV restrictions can be found [here](http://wiki.secondlife.com/wiki/LSL_Protocol/RestrainedLoveAPI).  
The list of RLVa restrictions may be found [here](http://catznip.com/index.php/RLVa).  They may be slightly different; Consult your viewer to see which one is running.
>[prefix] terminal (chat command only in V7.X)

## Relay
This button in RLV brings up the relay menu.  See [Relay](/docs/Relay) for more.
To call the relay menu:
>[prefix] relay

# Folders
To call this menu:
> [prefix] folders

**Making the #RLV Folder**: The wearer must create a top folder in inventory named #RLV for this menu to work. The name must be exactly these four characters [#RLV] and it *must* be a top folder, *not* a sub folder of any other folder in the inventory. It allows users and scripted objects to force wear the clothing and attachments contained in those folders.  

Once you have your #RLV folder set up, make folders in #RLV for attachments you want to allow other avatars to force you to wear.  These usually include items like cuffs and gags (to force wear complete outfits, see .outfits below). 

>Sample folder arrangement:  #RLV > Gags > Ringgag | Ballgag where the ringgag and the ballgag are each in their own folder, inside the "gags" folder, inside #RLV.

**Note**:  Stripping works differently than force wearing.  An RLV strip command targets the attachment point or layer on the avatar and does not search #RLV folders in inventory.  

Actions to apply to each folder or subfolder include:

* Add all : adds the entire contents of the folder including its subfolders.  
* xLock att. / all:  Prevents the wearer from attaching the contents of this folder.  This toggles to an exception button which allows a folder to be worn if its parent folder is locked; and toggles once more to clear the restriction.

Folders and subfolders may be worn by chat command, for instance:

>[prefix] &ringgag adds the contents of the folder named ringgag to the wearer.  
>[prefix] &&gags adds the contents of the folder named gags and all its subfolders.  
>[prefix] +ringgag wears the contents of the folder named ringgag  
>[prefix] ++gags wears the contents of the folder named gags and all its subfolders  
>[prefix] -ringgag removes the contents of the folder named ringgag.  
>[prefix] --gags removes the contents of the folder named gags and its subfolders  

## Outfits

To call this menu:
> [prefix] outfits

This menu requires the wearer to set up a folder inside #RLV, precisely named .outfits .  **The dot preceding outfits is required**.  Inside this folder make folders for your named outfits which you have set up using the SL Edit Outfit function. Then drag in the links from the outfits folder into the new folder.  The outfit names will appear as menu buttons in RLV > Outfits and can be force worn using the SL Replace function.  Make sure the outfits include all necessary parts of your outfit except possibly required system layers that cannot be removed.  Do not include your **locked** collar in the outfit folder.  Locking the collar ensures that Replace will not remove it and deleting the link to your locked collar prevents accidents like doubling your collar or wearing an outdated version.

* **To "strip" using outfits**: Inside your .outfits folder make a folder and name it something like Naked.  Include in there what you want to be wearing when stripped, including mesh body, hair, mesh eyes, etc.  Users can then strip you by force wearing your "Naked" outfit!

### How to Prevent Accidents:

* **(nostrip)**. You have items that you do not wear all the time but when you are wearing them, they should never be stripped; such as hair.  The best way to prevent this is to append to the end of the folder name or item name: (nostrip) :  
>[foldername] (nostrip)  

Since the RLV strip search does not see your inventory but only sees worn items by folder name, this will only work on the bottom folder the item is immediately in. Appending (nostrip) to the end of a folder name and then inserting subfolders will void the function.   
** You do not necessarily have to place the folders in #RLV for (nostrip) to work. However different viewers may handle this differently so it's a good idea to keep these folders in #RLV.  

* Inside your .outfits folder, make a folder and precisely name it .core. *The dot is required for this to work*.  Inside .core, place only items you always wear and never want to be detached, such as mesh body parts.  You may use subfolders.  Items in this folder will be force worn with every outfit.

## More on RLV

Davros Harkness' RLV folders walkthrough [here](https://davrosharkness.wordpress.com/2018/01/31/rlv-folders/)  

