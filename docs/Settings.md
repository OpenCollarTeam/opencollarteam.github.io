To call this page:
>[prefix] settings
This menu contains adjustments to the fit and appearance of your collar.

# About Settings

Settings is one of the most useful tools in the collar for those who want to save or customize collar settings. Whenever you change your collar using a menu button, the setting is created by the script. These settings may be erased or overridden by the next change or even by logging off.  You may want to save these settings in a place where they can be reloaded.  To save your settings easily, print the settings go chat, and copy the chat readout to a notecard named .settings.  Place the notecard in the Settings prim of your collar.  

OpenCollar settings use this protocol: `TOKEN=Parameter1~Parameter2` etc. Parameters may be names or values. Most of the Settings tokens correspond to certain scripts; one is GLOBAL because these settings may apply to all the scripts in the collar.  

For instance, a Bookmarks setting saving the Social Partner locations to your bookmarks would look like this, where BOOKMARKS is the token, "Theater" / "Sanctuary" are the names saved as bookmarks, and the slurl is the value associated with the name:   
>`BOOKMARKS=Theater~KBar West(23,97,1001)~Sanctuary~Vineyard Isle Valley (199,185,2002)`  

As the documentation builds, you will see various settings added to the relevant pages.

# The Settings Menu

## Print
Save your settings by pressing Print.  
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

Here you can change the textures and appearance of your collar.  There are two notecards that save texture and color changes to allow customizing your collar by menu.  .Themes is used for traditional multiprim collars and .meshthemes is used for single prim collars with mapped textures.  Here are the parameters for .meshthemes:  face/texture/color/alpha/shine/bump/glow.
