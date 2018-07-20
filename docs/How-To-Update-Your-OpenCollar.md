# Current version
We are currently at OpenCollar V7.1 as of 06 March 2018 !

This page covers four ways to update a collar easily: | [From Scratch](#from-scratch-with-collarizer) | [3.X or Older](#From-3.X-or-Older) | [4.0-6.5](#V-4.X-to-6.5) | [6.6 to 6.7](#V-6.6-to-6.7)
The Updater listens on channel -7483213; and on -7483214 when updating older collars (3.X)

# Building from Scratch

## From Scratch with Collarizer

You will need a collar prim and the script named [oc_collarizer](https://github.com/OpenCollarTeam/OpenCollar/blob/1027df9b56903a071c03404725fe0e143c912d73/src/spares/oc_collarizer.lsl) available inworld or upload.

Follow the instructions in the script:
* If you want to use the titler app, add a prim with FloatText in the description field, centered in the collar.
* Rez the updater near the collar prim
* Drop the script named oc_collarizer into your collar prim.  Accept the permissions request.
* The update will begin.

# Update Older Collars

## From 3.X or Older

This is worthwhile if your very old collar is a custom build or sentimental item you want to bring up to date. After the update, you may need to rearrange the added child prims in Edit Linked to center them in the collar and make the Animator and Settings prims easier to locate if needed. In very old collars, the rotations may not function as expected.

* Rez or wear the collar
* Rez the updater.
* In the collar menu go to Help / About or Help / Debug
* Press update. Accept the permissions request. The update will begin. 

## V 4.X to 6.5
This is a very easy update.

* Rez or wear the collar.
* Rez the updater.
* Go to Help / About and Press Udpate
* The update will begin.

## V 6.6 to 6.7 
Some forks of OpenCollar use the Version Six version numbers.  Scripts in these versions from 6.6 and up are designed to prevent users from updating their collars using the OpenCollar update stream, rather than their own fork.  You are completely within your rights as an end user to update your OpenCollar with the current OpenCollar update.  To do so you will need this seeder script: [oc_update_seed](https://github.com/OpenCollarTeam/OpenCollar/commit/e623fb532b21a2ace6d3d812cc536791361811c4).
## "Peanut" fork
The so-called "peanut" collars are not produced by OpenCollar.  They use a fork of OpenCollar scripts and contain no-mod code making it slightly more difficult to update your collar to the original update stream, currently OpenCollar V7.  To update this type of collar you will need scripts provided inworld at either [https://opencollar.cc/OpenCollar-Social-Partner-Locations](Social Partner).  Follow the instructions in the script and in the box.

* Rez or wear the collar.
* Rez the updater
* Examine the contents of the collar's root prim and delete the script named oc_root.
* drop the oc_update_seed script into the root prim of the collar. 
* Update will begin.
