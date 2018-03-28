The Animations menu includes all the single and couples animations as menu buttons.  To call this menu:

>[prefix] animations

## Pose

This menu includes single poses.  Several full perm single poses are included in every collar.
>[prefix] pose

You can call each pose directly:
>[prefix] [posename]

You can adjust the height of each pose by pushing the up and down arrows in the menu while the pose is active.

**Building Note**:  You can easily add poses to the collar.  Make sure your animation is copy or trans matching the collar permission. Name your animation something short and unique. DO NOT give the animation the same name as animations likely to be in the updater or your animations will be overwritten on update. Find the Animator prim in Edit Linked. Drag your animations into the contents of the Animator prim. OR drag the animations into the root prim and use the chat command to move them to Animator:

>[prefix] mv anims

## Couples

This menu calls the couples animations.

>[prefix] couples

Couples animations can be directly called using the animation name and the first three letters of the target username

>[prefix] [animation] [user]

For instance Jenny Wren wants to hug JoeZipcode: 

>je hug joe

## Animlock

This locks the wearer in the current collar animation.

## Posture

Check this to force an erect posture.  Note that the posture lock might interfere with other animations.

## Antislide

Check this box and set a pose to allow the sub to walk while a collar pose is active.

To add your own walk to AntiSlide:  Choose a higher priority (such as priority 4 or 5) modifiable walk animation.  Rename it:
> ~walk_[nameofwalk] .  

Load your walk into the Animator prim of the collar.

## AO Menu / AO ON / AO OFF

These buttons sync with the OpenCollar Sub AO.

# Notes

If you are in Firestorm Viewer, there is an option in Preferences to sync the Firestorm AO with OpenCollar animations so it does not override them.  If you are not using the Firestorm AO you will need to uncheck this.

>Preferences | Firestorm | Avatar | uncheck "Allow OpenCollar protocol to enable or disable builtin AO"