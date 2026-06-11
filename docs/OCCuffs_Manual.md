---
layout: home
title: Using OpenCollar Addon Cuffs
---
# Introduction
OpenCollar Addon Cuffs replace older versions of cuffs that loaded all the OpenCollar scripts into the cuffs and also required an extra script to connect the cuffs to your pre-existing collar.   They utilize the OpenCollar Addons feature, which was new in OC version 8.  Addons is a script in your collar that allows builders to create worn or rezzed objects that can connect to your collar menu.  Other Addons distributed and supported by OpenCollar include the AO, the Remote, and the Unwelder.  There are many more being created and distributed by third party creators.  
# How to Connect the Cuffs to the Collar
Wear the cuffs using ADD from the Right Click menu of your inventory.  If your collar contains the script [oc_addons](https://github.com/OpenCollarTeam/OpenCollar/blob/main/src/collar/oc_addons.lsl), your cuffs will connect automatically.  Go to the Collar Addons Menu to reach the cuffs menu.    
# Cuffs Menus   
Clicking the Addons Menu will bring up a menu of your Connected Addons, including the cuffs menus: Arm Chains, Leg Chains, and Body Chains. Each of these menus can act indepentendly of each other.  The Arm Chains menu controls the Wrist and Upper Arm Cuffs, the Leg Chains menu controls the Ankle and Upper Leg Cuffs, and the Body Chains menu that appears if you have a belt cuff controls full body Poses including belt, arms and legs.

Leg, Arm, and Body chains can act independently of each other.  Clicking on the respective cuff for each will also directly access the menu for that cuff.   The left and right wrist cuffs plus the right ankle cuffs each contain a button for the pose menus for arms and legs respectively. All the cuffs menus contain buttons for Cuffs Resize, ClearChains, and Lock (see below for each of these menus).   

## Poses  

* **Pose**: The Pose Menu lists each of the Animations in the cuff.  There can be many Pose Animations in the Cuff, as set up by the designer. Chains appear when poses are set.  Clicking any pose animates your avatar in that pose and rezzes a chain that visually "restrains"  the wearer in the pose.  It is possible to set up Restrictions to the Posed individual, using the Pose Notecard in each cuff. These notecards must use a specific format for the Restrictions.  In general, the pose animations and corresponding note cards will be found in the Right Wrist Cuff for Arms, and Right Ankle Cuff for Leg Poses. There can be RLV restraints also attached to each pose in various notecards. Please consult [How to Build OpenCollar Addon Cuffs](/docs/OpenCollar-Cuffs) for Pose Notecard Format instructions.   
* **Stop**:  To stop the pose and clear the chain, Click the *STOP* button. You will only be allowed to stop a pose that has been set by you. A pose set by a Collar Owner can only be stopped by any Collar Owner.   
* **Resize**:  Clicking Resize in each cuff menu opens a resizer menu for that cuff.   
* **ClearChains**:  Clicking ClearChains will clear the visible particle chains without stopping the pose.   Setting the same pose again in the pose menu will restore the particle chains.
* **Lock**:  The Lock button has a checkbox to indicate the lock status. Click the Lock button to Unlock/Lock the cuffs. The Lock toggle sets and unsets the rlv command @detach, which prevents detaching the entire set of cuffs when RLV is on in the viewer. It does not lock the wearer in a particular pose.  If your cuffset was designed with a visible lock device, you should see the lock closed on a Lock, and open on an Unlock status.  
