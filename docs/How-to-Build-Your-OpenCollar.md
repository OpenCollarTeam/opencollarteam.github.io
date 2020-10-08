---
layout: home
title: How to Build Your OpenCollar
---
This page explains how to build an OpenCollar. 

**All the contents of OpenCollar V 7.4 are in the root prim.**   Instructions for child prims will no longer be necessary, except for non-script bearing prims such as Floattext, Bell and Label.

To build a collar yourself you need only basic inworld building skills with standard prims. If you can make a standard prim of any shape, texture prims, do simple tortured prims, link prims, edit linked prims, and load contents, you can do this.  If this is beyond you, consider taking a basic building class--it will pay off down the line in many ways.  

# Scripts

To get the scripts, open the current OpenCollar updater and save the contents to your inventory.  Discard the notecards named BUNDLE and the two scripts named oc_transform_shim and oc_update_shim as these are used to run the updater.  
**Notes on Scripts:** The links on this page will take you to the OpenCollar script repository on Github.  
- The scripts in the repository are a running update and may be more advanced than the current inworld release.  Use them at your own risk. 
- Keep note of the most recent updates here as well.
- If you modify a script that came from an updater or another collar, it might have the OpenCollar Experience checked.  This is just a signature telling inworld help whether the script has been modified.  To modify the script, uncheck the **Use Experience** box at the bottom left of the script window when the script is open.
Here is the list of scripts that go in the collar: 

**REQUIRED CORE**

- [oc_auth](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_auth.lsl) 
- [oc_com](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_com.lsl)  
- [oc_dialog](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_dialog.lsl)  
- [oc_settings](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_settings.lsl)    
- [oc_sys](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_sys.lsl)   

**INTEGRATED.** These scripts can be removed without breaking the collar but have integrated menu functions:  
- [oc_anim](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_anim.lsl) / [oc_couples](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_couples.lsl) (required to use collar animations and sync to OC AO).
- [oc_rlvsys](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_rlvsys.lsl), [oc_rlvsuite](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_rlvsuite.lsl) (required to use collar rlv restrictions and reach the relay menu), [oc_rlvextension](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_rlvextension.lsl) (required for Restrictions)  
- [oc_folders](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_folders.lsl) (required to access wearer's #RLV folders for force wear).
- [oc_leash](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_leash.lsl), [oc_particle](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_particle.lsl) (required to operate the leash).
- [oc_relay](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_relay.md) (required only if you want to allow restrictions by objects you do not own) **Note** The github version of oc_relay is an experimental, fast On/Off internal relay.  It will not drive the Turbo Safety HUD Relay issued with OpenCollar V 7.5.
- [oc_resizer](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_resizer.lsl) (required to use menu driven resizing and positioning)

**DESIGN TOOLS.** Use these scripts if your collar design calls for them: 
> [oc_label](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_label.lsl), [oc_meshlabel](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_meshlabel.lsl), [oc_themes](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_themes.lsl), [oc_meshthemes](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_meshthemes.lsl)     

**OPTIONAL APPS.**  These are apps provided in the OpenCollar updater you may include. 
> [oc_bell](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_bell.lsl), [oc_bookmarks](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_bookmarks.lsl), [oc_capture](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/Apps/oc_capture.lsl), [oc_detach](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/Apps/oc_detach.lsl), [oc_outfits](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/Apps/oc_outfits.lsl), [oc_titler](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_titler.lsl).  
- Due to a difference in how hidden folders are handled, the Outfits App works with RLVa (Firestorm and most other RLV active viewers) but not RLV (Marine Kelley's RLV Viewer). To use this App with the RLV Viewer, use this script: [oc_outfits(RLV)](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/Apps/oc_outfits%20(RLV).lsl).  See [Outfits](https://opencollar.cc/docs/Outfits) for more.   

**OTHER RESOURCES.** Also copy from the updater and load, the license and help notecards, the leash holder, the relay objects, and all animations.  

# Materials
You will need:
* Collar Band  

If you don't have an object you want to use as the base for your collar you can make a simple torus.  In the build menu select Torus as the shape, give it any texture you like, and use the approximate dimensions illustrated.

<div style="width: 100%; text-align: center;">
<img src="/static/torus.png" width="400" style="margin: 20px auto;" />
</div>

- Tiny Invisible Sphere as Root Prim, positioned where the leash will emit from. OR use the collar band as root prim and add a prim named leashpoint and described `leashpoint~notexture~nocolor~nohide~noshiny~noglow`.  Position the leashpoint so the center of the prim is on the spot where the leash will emit from.  For instance if you are using a mesh collar with a ring, position the leashpoint prim so the center of the prim intersects the bottom of the ring.   

## Optional Parts

- **FloatText prim.**  Create a cylinder with a diameter just smaller than the collar band, align it in the collar. Name it Floattext and in the description field put: `FloatText~notexture~nocolor~nohide~noshiny~noglow`.  If you don't use this prim, the titler app will still work but it will not be positionable.  
- **Bell.**  If your collar has a bell, name the bell prim Bell and put in the description field: Bell~noshiny. Recquires [oc_bell](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_bell.lsl).
- **Label or Meshlabel**.  If using a traditional prim **label**, you will need the script oc_label in the collar.  Make label prims and align them on the collar band.  Number each prim as follows: `Label~00 Label~01 Label~03`, etc and in the Description field of each place the string `Label~notexture`.  If using a **meshlabel**, these instructions assume you know how to make a label prim with up to 8 faces in a 3D graphics program and upload that to SL.  Name your prim MeshLabel and align and link it to the collar.  Requires  [oc_label](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_label.lsl) *or* [oc_meshlabel](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_meshlabel.lsl).
- **Indicator Lights.**  If you want certain prims to flash when certain scripts are called, place in the description field of that prim:  `indicator_<scriptname` : for instance:  `indicator_auth, indicator_rlvsys, indicator_settings, indicator_dialog`.
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

