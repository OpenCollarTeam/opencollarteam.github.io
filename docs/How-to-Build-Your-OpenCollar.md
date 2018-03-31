This page explains how to build an OpenCollar using your own prims, without help from the "Collarizer" script. [Illustrations coming soon]  

To build a collar yourself you need only basic inworld building skills with standard prims. If you can make a standard prim of any shape, texture prims, do simple tortured prims, link prims, edit linked prims, and load contents, you can do this.  If this is beyond you, consider taking a basic building class--it will pay off down the line in many ways.  

## Materials
You will need:
1. Collar Band  
2. Tiny Invisible Sphere as Root Prim or named leashpoint
3. Three Stacked Cylinders about the same diameter as the collar band or very slightly smaller
4. Three prims any shape

## Name your prims
1. Root Prim: Same name as collar.  If you are using a sparate named leash point this can be the collar band. Otherwise position the root prim where you want the leash particles to emit from.
2. Cylinder Prims:  Stack them vertically inside the collar, name the top prim Animator, the middle prim FloatText, and the bottom prim Settings. The top and bottom cylinder prims should be just visible above and below the collar. This is for ease in accessing these prims while the collar is worn on the neck.
3. Remaining prims: One has same name as collar or just leave it as "Object"; another is named Authorizer, the third is named RLV.
4. If using a separate leashpoint, name it Leashpoint and position it where you want the leash particles to emit from.
5. Link the prims, linking all the other prims to the root prim last.

## Compiling your collar
The last step is to load the scripts into the collar.  Do this with moderate speed, letting the asset server catch up to your work as you go along. Here is the list of what scripts go in what prims.

### Animations and Notecards

Load the nonscripted contents first.  
Your collar animations and the .couples notecard go in the Animator prim.  
A blank notecard named .settings goes in the Settings prim.  
Into the root prim go the .help and .license notecards.  A copy of the OpenCollar license must go in any object you create using OpenCollar scripts.  Also in the root prim place a notecard named .bookmarks to save your bookmarks.

### Scripts  
Here is the list of scripts with their respective prims:  

oc_auth :  Authorizer  
oc_dialog : the prim named the same as the collar    
oc_anim / oc_couples : Animator  
oc_rlvsys : RLV  
oc_settings : Settings.

**Everything else** goes in the root prim.  
REQUIRED CORE.  These scripts are necessary for the collar to work.  
> oc_sys, oc_com  

INTEGRATED. These scripts can be removed without breaking the collar but have integrated menu functions:  
> oc_capture, oc_exceptions, oc_folders, oc_leash, oc_particle, oc_relay, oc_resizer, oc_rlvsuite.  

DESIGN TOOLS. Use these scripts if your collar design calls for them: 
> oc_label, oc_meshlabel, oc_themes, oc_meshthemes  

OPTIONAL APPS.  These are apps provided by OpenCollar you may include. 
> oc_bell, oc_titler, oc_bookmarks.  

### Notes
1. The relay script can be deleted without harm to the rest of the collar. If the wearer has an alternate relay, perhaps an HUD, wearing two relays is inadvisable.  
2. Meshthemes and themes are used for different types of collar build and are not compatible.  Use one or the other depending on your build. You don't need to use either unless your collar will have alternate textures.  
3. Meshlabel and label are used for different types of collar build and are not compatible.  Use one or the other depending on your build. You don't need to use either unless you want your collar to have a scripted label.  
4. Bell and titler are only used if the collar has a bell and a floattext prim and will delete themselves unless they find a prim named Bell or a prim named FloatText in the collar when loaded.
