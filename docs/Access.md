---
layout: home
title: The Access Menu
---

[Trusted](#trusted) | [Group](#group) | [Public](#public)  

Access is the OpenCollar ownership tool. **Associated Script:** [oc_core](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_core.lsl), [oc_api](https://github.com/OpenCollarTeam/OpenCollar/blob/master/src/collar/oc_api.lsl)    
There is a cap of 28 avatars across all named Access levels: Owner, Trusted, Blocked, and Temp Owner.

# Owner
Owners have the highest rank of access on the collar.  The collar access, exceptions, lock, leash and some RLV functions are sensitive to rank.  **Be very sure** you know how much control you are conceding when you add an owner.

## +/- Owner
Adds and removes Owners.  
* Only owners can add and remove owners.  
* The collar wearer is owner by default until an owner is set.  
* Once an owner is set, the wearer loses owner access and drops to the lowest level of access.
* In this guide, "wearer" refers to this lowest level of access:  "wearer" access is what you have when you have set an owner other than yourself.

### To Add the Wearer to Owner Access 
Go to + Owner and press `>WEARER<` .  This can only be done by an owner.  Therefore if the wearer wants to retain owner access, do this step **before** adding an owner.  Setting to disable Wearer as owner (aka "Vanilla" in previous versions):  `auth=vanilla~0`

### To Add Owners Remotely  
The UUID is the "key"--string of characters at the top of the inworld user profile.  Enter the UUID to add an owner remotely.  Owners can be removed through the menu whether of not they are nearby.

>`[prefix] add owner [UUID]`    
### Owner Setting
To add owners to the .settings notecard (also see [Settings](https://github.com/OpenCollarTeam/opencollarteam.github.io/blob/master/docs/Settings))
>`auth=owner~[UUID,UUID]` for one or more owners up to 255 characters.  If the line reaches more than 255 characters, start a new line:  
>`auth+owner~[UUID]` for additional owners.

   
# Trusted
Trusted gives named individuals the same level of access as Public and Group.  Trusted cannot change the Access menu but do outrank the wearer on the leash. This is the function formerly known as "secondary owner" or "secowner".  
**Advisory**  It is currently possible to add the wearer to Trusted by using this menu:  `+ Trust > Select <WEARER>`.  However when this is done the collar will see the Wearer as Trusted, not both Wearer and Trusted.  The Wearer will therefore lose access to certain options that are currently wearer owner or wearer only.  Among these is [Runaway](#runaway) and Access List. 

>`[prefix] add trust [UUID]`    
>`auth=trust~[UUID]`  

## Trusted Permissions -- List  **needs testing**

This list states the permissions Trusted has, not what they do not have--for clarity and brevity.  
> **Leash** -- can be set and unset by Trusted unless currently set by Owner.   
>> Leash / Unleash = YES unless leash is set by an owner.    
>> Leash Override if set by Public, Group or Wearer.   
>> Follow, Anchor, Configure  
>> Set length   

> **Animations**    
>> Call Pose  
>> Call Couples Animations  
 
> **RLV**  
>> Force Sit  
>> Unsit        
>> Restrictions (Individual)
>> Folders    

> **Dress / Undress**   
>> Outfits 
>> Detach 
>> Undress 

# Wearer Trust (WEARER TRU)   
An owner can allow the wearer to set and unset Trusted even if they are not also an owner.   **Note** this is preferable to adding the Wearer to the Trusted list in + Trust, if the desire is to give the Wearer some additional control, since it actually removes more abilities than it adds.

# Public
Checking Public gives anyone limited access to your collar, including the leash, animations, bookmarks and force sit.  
>`[prefix] public on`  
>`[prefix] public off`  
>`[prefix] limit range on/off` : limits range for public access.  
`auth=public~1/0`

# Group  
To set Group, first activate the desired group, then check Group in the Access menu.  Group members with the group active will then have public / trusted level access.  NOTE the collar restricts activating a different group if the wearer has group access checked.  To change groups, first uncheck group access. Then activate a different group.  
> `[prefix] group on`  
>`[prefix] group off`  
>`auth=group~[groupuuid]~groupname~[groupname]`

# Runaway
When you press Runaway menu opens with three options:  
- **Yes** will execute a factory reset and completely clear the Access list.
- **No** will close the menu
- **Disable** will block the wearer's ability to run away on this collar.  This action can be initiated by the wearer by cannot be reversed by the wearer.  Only an owner can reverse it.  If the owner presses Disable in the Runaway menu, the wearer gets a dialog box to accept or decline.  
>`auth=runaway~1/0`  

# Access List 
Sends a readout of the list of owners and other access settings to chat.  Available to owner and wearer only.  
> `[prefix] list`  


# Block    
This allows the collar only to block named avatars from using the collar.  Use sparingly since this also adds to the memory consumption of the script.  

>Add to the Blocklist: `[prefix] add block [UUID]`  
>Remove from the Blocklist: `[prefix] rm block [UUID]`
>Add to Settings: `auth=block~<UUID>`
