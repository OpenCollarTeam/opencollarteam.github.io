---
layout: home
title: Animations
---

The Animations menu includes all the single and couples animations as menu buttons.  To call this menu:

>[prefix] animations

## Pose

This menu includes single poses.  Several full perm single poses are included in every collar.
>[prefix] pose

You can call each pose directly:
>[prefix] [posename]

You can adjust the height of each pose by pushing the up and down arrows in the menu while the pose is active. The height adjustments need RLV to work.

**Building Note**:  You can easily add poses to the collar.  Make sure your animation is copy or trans matching the collar permission. Name your animation something short and unique. DO NOT give the animation the same name as animations likely to be in the updater or your animations will be overwritten on update.   Drag your animations into the contents of the collar. 

## Couples

This menu calls the couples animations.

>`[prefix] couples`

Couples animations can be directly called using the animation name and the first three letters of the target username

>`[prefix] [animation] [user]`

For instance Jenny Wren wants to hug JoeZipcode: 

>`je hug joe`   

**Building Note**:  You can also add couples animations if your animations are optimal for using with the collar. You may have to do some testing, or use couples animations that were made for OpenCollar or made to be paired with each other. The animations have to be named a certain way to keep them from appearing in the Pose menu.  Name each animation something short and descriptive, beginning with `~`, for instance `~hug`. Drag them into the contents of the collar. Open the notecard named .couples.  There you will see lines or "strings" configuring the animations, like this one:

>`catch|~leap|~catch|0.6|_SELF_ leaps into _PARTNER_'s arms`.

Each element is separated by a pipe `(|)` with no space.  The first element ("catch") is the name of the animation on the menu.  The second element (~leap) is the wearer's animation.  The third element (~catch) is the handler's animation. The fourth element (0.6) sets the distance between the two avatars.  Note that rotation is not configurable.  The last element is the text that is displayed when the animation is run.  Configure your strings in the notecard to include the animations you've added, each on its own line. Save the notecard into the Animator prim.
## Park
Triggers a groundsit using the active groundsit in the wearer's AO.  Locks the wearer in place until someone with equal or higher access unchecks Park or presses Unsit in the RLV > Force Sit Menu.  
>[prefix] park on/off

## Animlock
This locks the wearer in the current collar animation.

## Posture
Check this to force an erect posture.  Note that the posture lock might interfere with other animations.

## AO Menu 
The AO Menu can be opened from the Apps menu.

# Notes

If you are in Firestorm Viewer, there is an option in Preferences to sync the Firestorm AO with OpenCollar animations so it does not override them.  If you are not using the Firestorm AO you will need to uncheck this.

>Preferences | Firestorm | Avatar | uncheck "Allow OpenCollar protocol to enable or disable builtin AO"
