---
layout: home
title: How To Update Your OpenCollar
---

This page covers four ways to update a collar easily: | [From Scratch](#from-scratch-with-collarizer) | [3.X or Older](#from-3x-or-older) | [4-6.5](#from-v4x-to-6x) | [6.6 to 6.7](#from-v6x)  
The Updater listens on channel -7483213; and on -7483214 when updating older collars (3.X)  

# Current version
We are currently at OpenCollar V8.0.5 as of 12 June 2021 !  

## Update to current version from V 7.0 and up; and from V 4.X through 6.5.2.

These are very easy updates.  
* Rez or wear the collar.
* Rez the updater.
* Go to Help / About and Press Update
* The update will begin.

**NOTE**: Version 7.4 moved all scripts and contents to the root prim.  You will not be able to easily roll back this and later versions with an older updater.  If you think you might want your old version back, save a copy. 

# Building from Scratch

## From Scratch with Collarizer

You will need a collar prim and the script named [oc_collarizer](https://github.com/OpenCollarTeam/OpenCollar/blob/1027df9b56903a071c03404725fe0e143c912d73/src/spares/oc_collarizer.lsl) available inworld or upload.

Follow the instructions in the script:
* If you want to use the titler app, add a prim with FloatText in the description field, centered in the collar.
* Rez the updater near the collar prim
* Drop the script named oc_collarizer into your collar prim.  
* The update will begin.

# Update Older Collars

## From 3X or Older

This is worthwhile if your very old collar is a custom build or sentimental item you want to bring up to date. After the update, you may need to rearrange the added child prims in Edit Linked to center them in the collar and make the Animator and Settings prims easier to locate if needed. In very old collars, the rotations may not function as expected.

* Rez or wear the collar unlocked
* Rez the updater.
* In the collar menu go to Help / About or Help / Debug
* Press update. Accept the permissions request to add prims. The update will begin. 

## From V4X to 6X

From V4 to V6.5, treat as from 3X.
- Rez or wear the collar.
- Rez the updater.
- In the collar menu go to Help/About.
- Press Update.  The update will begin.

## From V6X 
Beginning with OpenCollar V6.6, and for a short time until V 7.0 was produced (less than six months in 2017), OpenCollars were prevented from being updated unless it was to a particular private fork. To update these versions you will need this seeder script: [oc_update_seed](https://github.com/OpenCollarTeam/OpenCollar/commit/e623fb532b21a2ace6d3d812cc536791361811c4).  
* Rez or wear the collar.
* Rez the updater
* Examine the contents of the collar's root prim and delete the script named oc_root.
* Drop the oc_update_seed script into the root prim of the collar. 
* Update will begin.

## Why can't my collar be updated?
Some third party collars block the use of an OpenCollar updater even though some or all of the collar scripts may be derived from OpenCollar.  To update these collars it is first necessary to delete the scripts, then use the collarizer method.
1. Rez the collar. 
2. Right click and edit the collar. 
3. In the Build Menu of your viewer (this instruction based on Firestorm viewer) Go to > Scripts > Select "remove scripts from selection." 
4. Wait until the window that pops up showing deletion process says "done". You can confirm there are now no scripts in the collar with Build Menu > Scripts > Show Script Info. It should show [0/0] Running Scripts. Repeat step 3 if necessary.  
5. Rez the OpenCollar updater for the current version next to the collar. 
7. Edit the collar again, and add the collarizer script to contents. The updater will run.  

Consult [How To Build your OpenCollar](/docs/How-to-Build-Your-OpenCollar) for more details and illustrations.
