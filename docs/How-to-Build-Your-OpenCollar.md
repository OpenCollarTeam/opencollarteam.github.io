---
layout: home
title: How to Build Your OpenCollar
---
This page explains how to build an OpenCollar. 

**All the contents of OpenCollar V 7.4 are in the root prim.**   Instructions for child prims will no longer be necessary, except for non-script bearing prims such as Floattext, Bell and Label.

To build a collar yourself you need only basic inworld building skills with standard prims. If you can make a standard prim of any shape, texture prims, do simple tortured prims, link prims, edit linked prims, and load contents, you can do this.  If this is beyond you, consider taking a basic building class--it will pay off down the line in many ways.  

# Scripts

To get the scripts, open the current OpenCollar updater and save the contents to your inventory.  Discard the notecards named BUNDLE and the two scripts named oc_transform_shim and oc_update_shim as these are used to run the updater.  Here is the list of scripts that go in the collar: 

**REQUIRED CORE**

- oc_auth 
- oc_com  
- oc_dialog  
- oc_anim / oc_couples 
- oc_rlvsys 
- oc_settings 
- oc_sys

**INTEGRATED.** These scripts can be removed without breaking the collar but have integrated menu functions:  
> oc_capture, oc_exceptions, oc_folders, oc_leash, oc_particle, oc_relay, oc_resizer, oc_rlvsuite.  

**DESIGN TOOLS.** Use these scripts if your collar design calls for them: 
> oc_label, oc_meshlabel, oc_themes, oc_meshthemes  

**OPTIONAL APPS.**  These are apps provided in the OpenCollar updater you may include. 
> oc_bell, oc_titler, oc_bookmarks, oc_outfits, oc_detach. 

**OTHER RESOURCES.** Also copy from the updater and load, the license and help notecards, the leash holder, the relay objects, and all animations.  

# Materials
You will need:
* Collar Band  

If you don't have an object you want to use as the base for your collar you can make a simple torus.  In the build menu select Torus as the shape, give it any texture you like, and use the approximate dimensions illustrated.

<div style="width: 100%; text-align: center;">
<img src="/static/torus.png" width="400" style="margin: 20px auto;" />
</div>

* Tiny Invisible Sphere as Root Prim, positioned where the leash will emit from. OR use the collar band as root prim and add a prim named leashpoint and described `leashpoint~notexture~nocolor~nohide~noshiny~noglow`.  Position the leashpoint so the center of the prim is on the spot where the leash will emit from.  For instance if you are using a mesh collar with a ring, position the leashpoint prim so the center of the prim intersects the bottom of the ring.   

* FloatText prim.  Create a cylinder with a diameter just smaller than the collar band, align it in the collar. Name it Floattext and in the description field put: `FloatText~notexture~nocolor~nohide~noshiny~noglow`.  If you don't use this prim, the titler app will still work but it will not be positionable.  
* Bell.  If your collar has a bell, name the bell prim Bell and put in the description field: Bell~noshiny.  
* Make sure you link any extra prims to the collar, selecting the root prim last.
* Settings notecard.  If you want to save or hard code settings, make a notecard named .settings and place it in the collar also.

# Compiling your collar
The last step is to load the scripts into the collar.  Do this with moderate speed, letting the asset server catch up to your work as you go along. IN THIS ORDER:  
- Rez the Updater.  
- Rez the collar model.
- Find the script [oc_update_seed](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/spares/oc_update_seed.lsl) and drop it into your collar model.  (you can also use [oc_collarizer](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/spares/oc_collarizer.lsl) if you prefer). 
- The update will start.

 
## Notes
1. The relay script can be deleted without harm to the rest of the collar. If the wearer has an alternate relay, wearing two relays is inadvisable.  
2. Meshthemes and themes are used for different types of collar build and are not compatible.  Use one or the other depending on your build. You don't need to use either unless your collar will have alternate textures.  
3. Meshlabel and label are used for different types of collar build and are not compatible.  Use one or the other depending on your build. You don't need to use either unless you want your collar to have a scripted label.  

