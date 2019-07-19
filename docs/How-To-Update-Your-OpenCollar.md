---
layout: home
title: How To Update Your OpenCollar
---


This page covers four ways to update a collar easily: | [From Scratch](#from-scratch-with-collarizer) | [3.X or Older](#from-3x-or-older) | [4-6.5](#from-v4x-to-6x) | [6.6 to 6.7](#from-v6x)  
The Updater listens on channel -7483213; and on -7483214 when updating older collars (3.X)  

# Current version
We are currently at OpenCollar V7.1 as of 06 March 2018 !  

## Update to current version from V 7.0 and up; and from V 4.X through 6.5.2.

These are very easy updates.  
* Rez or wear the collar.
* Rez the updater.
* Go to Help / About and Press Update
* The update will begin.

# Building from Scratch

## From Scratch with Collarizer

You will need a collar prim and the script named [oc_collarizer](https://github.com/OpenCollarTeam/OpenCollar/blob/1027df9b56903a071c03404725fe0e143c912d73/src/spares/oc_collarizer.lsl) available inworld or upload.

Follow the instructions in the script:
* If you want to use the titler app, add a prim with FloatText in the description field, centered in the collar.
* Rez the updater near the collar prim
* Drop the script named oc_collarizer into your collar prim.  Accept the permissions request.
* The update will begin.

# Update Older Collars

## From 3X or Older

This is worthwhile if your very old collar is a custom build or sentimental item you want to bring up to date. After the update, you may need to rearrange the added child prims in Edit Linked to center them in the collar and make the Animator and Settings prims easier to locate if needed. In very old collars, the rotations may not function as expected.

* Rez or wear the collar unlocked
* Rez the updater.
* In the collar menu go to Help / About or Help / Debug
* Press update. Accept the permissions request to add prims. The update will begin. 

## From V4X to 6X

From V4 to V6.5, treat as from 3X, except there will be no permission request to add prims.
- Rez or wear the collar.
- Rez the updater.
- In the collar menu go to Help/About.
- Press Update.  The update will begin.

## From V6X 
Some forks of OpenCollar use the Version Six version numbers.  Scripts in these versions from 6.6 and up are designed to prevent users from updating their collars using the OpenCollar update stream, rather than their own fork.  You are completely within your rights as an end user to update your OpenCollar with the current OpenCollar update.  To do so you will need this seeder script: [oc_update_seed](https://github.com/OpenCollarTeam/OpenCollar/commit/e623fb532b21a2ace6d3d812cc536791361811c4).  
* Rez or wear the collar.
* Rez the updater
* Examine the contents of the collar's root prim and delete the script named oc_root.
* drop the oc_update_seed script into the root prim of the collar. 
* Update will begin.

## Why can't my collar be updated?
Some third party collars block the use of an OpenCollar V7 updater even though some or all of the collar scripts may be derived from OpenCollar.  To update these collars it is first necessary to delete the scripts, then use the collarizer method.
1. Rez the collar. 
2. Right click and edit the collar. 
3. In the Build Menu > Scripts > Select "remove scripts from selection." 
4. Wait until the window that pops up showing deletion process says "done". (You can confirm there are now no scripts in the collar with Build Menu > Scripts > Show Script Info. It should show [0/0] Running Scripts. Repeat step 3 if necessary.  
5. Rez OpenCollar updater 7.1 next to the collar. 
7. Edit the collar again, and add the collarizer script to contents. The updater will run.  

## Manual Update
To update your collar manually: 
* Open the updater like a box and copy the contents to your inventory.  You now have copies of all the scripts and other resources you need. You don't need the scripts and BUNDLE notecards that are used for the installer/updater itself.   
List of scripts that go in your collar:  
** Root prim: oc_bell (if your collar has a bell), oc_bookmarks, oc_capture, oc_com, oc_exceptions, oc_folders, oc_label or oc_meshlabel (if your collar uses an opencollar scripted label), oc_leash, oc_meshthemes OR oc_themes (if your collar has themes for mesh or standard prims), oc_particle, oc_relay, oc_resizer, oc_rlvsuite, oc_sys, oc_titler (if your collar has a floattext prim for a titler/hovertext).  
** Animator prim:  oc_anim, oc_couples.   
** Authorizer prim:  oc_auth.   
** Dialog prim (this one is named the same as your collar): oc_dialog.   
** RLV prim:  oc_rlvsys  
** Settings prim: oc_settings.   
* Unlock your collar or rez a copy of your collar on the ground.
* Locate the scripted child prims in your collar,  
* Delete the scripts you find in there but not the other resources such as notecards and animations.
* Replace the scripts in each prim with the corresponding OpenCollar scripts.  
Consult [How To Build your OpenCollar](https://opencollar.cc/docs/How-to-Build-Your-OpenCollar) for more details and illustrations.
