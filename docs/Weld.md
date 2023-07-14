---
layout: home
title: Weld and Unweld
---

Weld is a feature that appears in the main menu only when the collar is **locked.**  It is only visible to collar owners.  Wearers can use Weld if they are also owners (either by default or because they have added Wearer to the Owner list).  Weld permanently removes the ability to unlock the collar.  Weld does not reset when the collar is transferred, therefore it is possible to pass a previously welded collar to another avatar.
# Weld   
To enable weld, lock the collar and press Weld in the button that now appears in the main menu.   
- Owners can enable Weld.   
- If the owner enables Weld, the wearer gets a dialog request for consent.
- When Weld is enabled, the **Lock** button disappears from the main menu.  At this point, neither the owner nor the wearer can unlock the collar until the weld is broken.   

# Unweld
Weld is intended for long term captivity.  A welded collar cannot be unlocked because there is no lock on it.  For realism, therefore, select a collar that does not have the lock feature to be your welded collar. It takes both owner and wearer to unweld a collar.

If you must:

## Steps to Unweld

- Owners:  Open the collar menu.  Go to Settings in the collar menu.  In Settings, press AddOn.  Uncheck Addon Limited.  Only an owner can do this.  
- **Note**:  In Settings > AddOn menu there are three buttons.  WearerAdd and Addons must both be checked and *only* AddOns Limit, the middle button, should be unchecked for the Unwelder to connect.  The other two buttons control the wearer's ability to use AddOns, and the ability of anyone to use Addons.  The unwelder is an AddOn.  So if the other two buttons are unchecked you can't use the unwelder.
- Find an OpenCollar Unwelder.  There is one rezzed out at the OpenCollar HQ. Only the wearer can use the unwelder, and only if the above setting is unchecked. You can also create a script from [oc-unwelder.lsl](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/spares/oc_unwelder.lsl) and insert it into any object.  
- Touch the unwelder.  
- Press Unweld Now.

## To Unweld a Collar when the Owner is Not Available
- If your owner is out of the picture completely, you can run away.  At that point you become the collar owner.  The collar will still be welded so perform the sequence in Steps to Unweld.
- If this is not an option:  
  - Turn off RLV in your viewer and relog.
  - Detach the collar and rez it on the ground or floor near you.
  - Edit the collar and select Edit Linked Parts.  Find the leashpoint prim.
  - In the description field of the leashpoint prim, at the end of the line, will be this string: `~weld~[owneruuid].`
  - Delete this string. Then uncheck Edit Linked Parts and in the Contents tab, still in Edit, press Reset Scripts.
  - Take the collar back to inventory.  This will make a new copy of the collar.
  - Turn RLV back on in your viewer and relog.  Make sure to wear the new copy of the collar. 
